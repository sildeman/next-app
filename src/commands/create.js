module.exports = {
  name: 'create',
  alias: ['c', 'new'],
  run: async (toolbox) => {
    const { banner, type, print, standard, base, pipeline, custom } = toolbox

    const projects = [
      { type: 'standard', fn: standard },
      { type: 'base', fn: base },
      { type: 'pipeline', fn: pipeline },
      { type: 'custom', fn: custom },
      {
        type: 'cancelar',
        fn: () => {
          print.warning('❌  Operação cancelada pelo usuário')
          process.exit()
        },
      },
    ]

    banner('Next-App', 'ANSI Shadow')
    print.highlight('© F9152938 Sildeman Dourado Araujo')
    print.newline()

    const appType = await type()

    const fn = projects.find((tipo) => tipo.type === appType.type).fn

    fn()
  },
}
