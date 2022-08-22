const { print } = require('gluegun')

module.exports = (prefixText, spinner = 'clock') =>
  print.spin({ prefixText, spinner })
