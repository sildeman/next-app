module.exports = {
  name: 'info',
  alias: ['i'],
  run: async (toolbox) => {
    const { banner, print } = toolbox

    const info = `
    Criação de aplicações customizadas Next.js (React).
    
    Opções da CLI:
      1. Criação de projetos padrão Next.js.
      2. Criação de projetos Next.js configurado com a pasta src.
      3. Criação de projetos no padrão da pipeline JavaScript do ARQ3.0.
      4. Item 3 + instalação de pacotes adicionais.

    © F9152938 Sildeman Dourado Araujo
    `
    banner('Next-App', 'ANSI Shadow')
    print.warning(info)
    print.divider()
  },
}
