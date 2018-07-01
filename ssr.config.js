module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000,
  config: {
    basePath: './',
    alias: {
      // '/de-de/changelog': '/changelog',
      // '/zh-cn/changelog': '/changelog',
      // '/changelog': 'https://raw.githubusercontent.com/QingWei-Li/docsify/master/CHANGELOG'
    },
    auto2top: true,
    coverpage: true,
    executeScript: true,
    loadSidebar: true,
    loadNavbar: true,
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    name: 'docsify',
    search: {
      noData: {

        '/': 'No results!'
      },
      paths: 'auto',
      placeholder: {

        '/': 'Search'
      }
    }
  }
}
