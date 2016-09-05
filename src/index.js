const path = require('path')
const bulbo = require('bulbo')
const matter = require('gulp-front-matter')
const marked = require('gulp-marked')
const wrapper = require('layout-wrapper')

exports.setLogger = bulbo.setLogger
exports.dest = bulbo.dest
exports.build = bulbo.build
exports.serve = bulbo.serve
exports.port = bulbo.port

/**
 * Sets the source directory.
 * @param {string} dir The directory of the source
 */
exports.source = dir => exports.sourceDir = dir
exports.sourceDir = 'source'


/**
 * Sets up the assets.
 * @return {bulbo}
 */
exports.setUp = () => {
  bulbo
  .asset(path.join(exports.sourceDir, '**/*.md'))
  .pipe(matter())
  .pipe(marked())
  .pipe(wrapper.nunjucks({layout: __dirname}))

  return exports
}
