module.exports = {
  type: 'multiselect',
  name: 'pacotes',
  message:
    'Escolha os pacotes a instalar (setas para navegar, espaço para selecionar):',
  choices: [
    {
      name: 'chakra',
      message: '🗳  Chakra-Ui',
      hint: 'Biblioteca de componentes',
    },
    {
      name: 'prime',
      message: '🗳  Primereact',
      hint: 'Componentes customizados',
    },
    {
      name: 'mui',
      message: '🗳  Material UI',
      hint: 'Componentes com UX do Material Design',
    },
    { name: 'dls', message: '🈳  BB Fonts', hint: 'Fontes tipográficas do BB' },
    { name: 'sa', message: '📧  Superagent', hint: 'Requisições HTTP' },
  ],
}
