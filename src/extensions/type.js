module.exports = (toolbox) => {
  const {
    prompt: { ask },
  } = toolbox
  toolbox.type = () =>
    ask({
      type: 'select',
      name: 'type',
      message: 'Tipo de projeto',
      choices: [
        {
          name: 'standard',
          message: 'Padrão',
          hint: 'Instala Next.js com a configuração padrão',
        },
        {
          name: 'base',
          message: 'Base',
          hint: 'Instala Next.js e configura pasta /src',
        },
        {
          name: 'pipeline',
          message: 'Pipeline ARQ3.0',
          hint: 'Instala Next.js com a configuração do ARQ3.0',
        },
        {
          name: 'custom',
          message: 'Pipeline Customizada ARQ3.0',
          hint: 'Pipeline ARQ3.0 + pacotes adicionais',
        },
        {
          name: 'cancelar',
          message: 'Cancelar',
          hint: 'Encerrar aplicativo',
        },
      ],
    })
}
