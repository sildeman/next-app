const continuar = require('../helpers/custom/continuar.js')
const spinner = require('../helpers/custom/spin.js')
const vscode = require('../helpers/custom/vscode.js')

module.exports = (toolbox) => {
  const {
    prompt: { ask },
    print,
    parameters: { first },
    system: { run },
    filesystem,
  } = toolbox
  toolbox.base = async () => {
    print.warning(`❗ Criar projeto ${first} e configurar pasta /src?`)

    const seguir = await ask(continuar)

    if (seguir.cont) {
      const spin = spinner('⏳ Instalando Next.js')

      await run(`echo "-y" | npx create-next-app@latest ${first}`)

      spin.stop()

      print.success(`✅ Next.js instalado na pasta ${first}`)

      const dirConfig = spinner('📁 Configurando diretórios')

      const workDir = filesystem.cwd(first)

      const src = workDir.dir('src')

      workDir.move('./pages', src.path('./pages'))
      workDir.move('./styles', src.path('./styles'))

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
