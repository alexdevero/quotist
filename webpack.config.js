const { join } = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'quotist.umd.min.js',
    library: 'quotist',
    libraryTarget: 'umd',
    path: join(__dirname, 'dist')
  }
}
