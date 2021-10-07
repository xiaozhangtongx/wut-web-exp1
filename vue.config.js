/*
 * @Description:定制主题色
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 11:43:54
 */
// less-loader < 6.0.0 (例如 less-loader@5.0.0)
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // If you are using less-loader@5 please spread the lessOptions to options directly
        modifyVars: {
          // 这里就是样式变量的名称以及对应的值，可以按照上面提供的官方文档进行配置
          // 'primary-color': '#41B883',
          // 'link-color': '#41B883',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
}
