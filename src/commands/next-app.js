const command = {
  name: 'next-app',
  run: async (toolbox) => {
    const { print } = toolbox

    print.highlight('CLI para criação de projetos Next.js customizados')
  },
}

module.exports = command
