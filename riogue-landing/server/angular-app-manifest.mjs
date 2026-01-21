
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
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
    'index.csr.html': {size: 10985, hash: '777d498e19fc213efc65b697b05b9c85baa7a20876b439a586644adafaaf2173', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '4647daef329aff90bfeaf85824f2c46888e28b585ed50e284c25a10b06416eda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 36647, hash: 'b69e3a47c29ad8a7dc8848b10bbee8983620acef7b4f32cc68df3e36cd54f8a6', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 54405, hash: '653a4fc5ec631cbb34bf5b5a30b287c190a19527db51b424a320192563080160', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTHUSUJR.css': {size: 22436, hash: '7i1KgJRkUYY', text: () => import('./assets-chunks/styles-DTHUSUJR_css.mjs').then(m => m.default)}
  },
};
