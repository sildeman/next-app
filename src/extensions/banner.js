module.exports = (toolbox) => {
  const figlet = require('figlet')
  const { print } = toolbox

  toolbox.banner = (text, font = 'Slant') => {
    print.newline()
    print.highlight(figlet.textSync(text, { font }))
    print.divider()
    print.highlight('CLI para criação de projetos Next.js customizados')
    print.divider()
  }
}
