
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/nosotros"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10984, hash: 'c9a9dc1b511c68cffa764bda783274e9ba5fd625bd3638131ad83725a5093df0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 949, hash: 'ea0382abcfe1b821fa6965276d296f1682abad737368024d01ebdb6d5b485736', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 36632, hash: '6cc5cb4b12c5cc0c3b24a83fbe0ae96a81e54c795b8463830313b775161fe123', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 54390, hash: '87131061b2e4ffe15dfbfcd359043a0fb440fd9b8946c93270b43f5e8fba4892', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTHUSUJR.css': {size: 22436, hash: '7i1KgJRkUYY', text: () => import('./assets-chunks/styles-DTHUSUJR_css.mjs').then(m => m.default)}
  },
};
