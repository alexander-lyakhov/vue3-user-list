module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/index.scss";',
      }
    }
  },

  lintOnSave: false,
};