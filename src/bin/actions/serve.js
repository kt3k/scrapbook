const bulbo = require('bulbo')

/**
 * Serve action.
 */
module.exports = () => {
  bulbo.cli.liftoff('scrapbook', {configIsOptional: true}).then(sb => {
    sb.setUp().serve()
  })
}
