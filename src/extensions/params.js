const appData = require('../helpers/params/app-data.js')
const packs = require('../helpers/params/packages.js')
module.exports = (toolbox) => {
  const {
    prompt: { ask },
  } = toolbox
  toolbox.params = (app) => ask([appData(app), packs])
}
