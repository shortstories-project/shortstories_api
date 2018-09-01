module.exports = {
  plugins: [
    '@babel/plugin-syntax-typescript',
    ['@babel/plugin-syntax-decorators', { legacy: true }],
    '@babel/plugin-syntax-jsx',
    'react-hot-loader/babel',
  ],
}
