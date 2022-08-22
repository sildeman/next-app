module.exports = (app) => ({
  type: 'form',
  name: 'app',
  message: 'Informe os dados do app (setas para navegar, tab para aceitar):',
  choices: [
    { name: 'name', message: 'Nome', initial: app },
    { name: 'version', message: 'Versão', initial: '1.0.0-rc.1' },
    {
      name: 'description',
      message: 'Descrição',
      initial: `App ${app} para...`,
    },
    {
      name: 'author',
      message: 'Autor',
      initial: 'F9152938 Sildeman Dourado Araujo',
    },
    {
      name: 'type',
      message: 'Repositório (tipo)',
      initial: 'git',
    },
    {
      name: 'url',
      message: 'Repositório (url)',
      initial: `https://fontes.intranet.bb.com.br/amb/amb-planner/${app}.git`,
    },
  ],
})
