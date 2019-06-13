const port = 8080;
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {  
  devServer: {
    proxy: 'http://localhost:8080'
  }
};
