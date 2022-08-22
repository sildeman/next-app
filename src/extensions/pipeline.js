const spinner = require('../helpers/custom/spin.js')
const continuar = require('../helpers/custom/continuar.js')
const vscode = require('../helpers/custom/vscode.js')
const path = require('path')

module.exports = (toolbox) => {
  const {
    prompt: { ask },
    print,
    parameters: { first },
    system: { run },
    filesystem,
    template,
  } = toolbox

  toolbox.pipeline = async () => {
    print.warning(`❗ Criar projeto ${first} com a configuração do ARQ3.0?`)

    const seguir = await ask(continuar)

    if (seguir.cont) {
      const folders = [
        'components',
        'contexts',
        'controllers',
        'db',
        'services',
        'utils',
      ]

      const spin = spinner('⏳ Instalando Next.js')

      await run(`echo "-y" | npx create-next-app@latest ${first}`)

      spin.stop()

      print.success(`✅ Next.js instalado na pasta ${first}`)

      const dirConfig = spinner('📁 Configurando o projeto')

      const workDir = filesystem.cwd(first)

      const src = workDir.dir('src')

      await run(`rm ${first}/styles/*`)
      await run(`rm ${first}/pages/*.js`)
      workDir.move('./pages', src.path('./pages'))
      workDir.move('./styles', src.path('./styles'))

      folders.forEach((folder) => src.dir(folder))

      src.dir('components/Layout')

      const templateFolder = path.join(__dirname, '..', 'templates')

      await template.generate({
        template: 'CHANGELOG.ejs',
        target: `${first}/CHANGELOG.md`,
        directory: templateFolder,
        props: { first },
      })

      await template.generate({
        template: 'jest.config.ejs',
        target: `${first}/jest.config.js`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'npmignore.ejs',
        target: `${first}/.npmignore`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'jsconfig.ejs',
        target: `${first}/jsconfig.json`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'Jenkinsfile.ejs',
        target: `${first}/Jenkinsfile`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'Dockerfile.ejs',
        target: `${first}/Dockerfile`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'theme.ejs',
        target: `${first}/src/utils/theme.js`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'Core.ejs',
        target: `${first}/src/components/Layout/Core.jsx`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'layout.ejs',
        target: `${first}/src/components/Layout/index.js`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'app.ejs',
        target: `${first}/src/pages/_app.jsx`,
        directory: templateFolder,
      })

      await template.generate({
        template: 'index.ejs',
        target: `${first}/src/pages/index.jsx`,
        directory: templateFolder,
        props: { first },
      })

      dirConfig.stop()

      print.success(`✅ Projeto ${first} configurado com sucesso!`)

      const abrirVscode = await ask(vscode)

      if (abrirVscode.vscode) {
        await run(`code ${first}`)
        process.exit()
      }

      process.exit()
    }
    print.error('❌ Operação cancelada pelo usuário')
  }
}
