const minirocket = require('minirocket')

/**
 * @param {object} argv The parsed command line options
 */
module.exports = argv => {
  const {v, version, h, help, _: [action]} = argv

  minirocket({
    version: v || version,
    help: h || help,
    serve: !action,
    [action]: true
  }, argv).on('no-action', action => {
    console.log(`No such action: ${action}`)
    process.exit(1)
  })
}
