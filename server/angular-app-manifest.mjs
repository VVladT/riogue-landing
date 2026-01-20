
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/riogue-landing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/riogue-landing"
  },
  {
    "renderMode": 2,
    "route": "/riogue-landing/nosotros"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10999, hash: 'bfade26b27ec8b1c570d496d929b4bb8ad5d9ea4a739675cb95f2ea266254ae1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '1586c736e9044792b3125033ae27142588ed7ff18d22f4f5206797070f0ad36a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 54607, hash: 'b0a43ead212739f90ab9e69ed9c74be81aac406216239917933834bbd3179361', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 36901, hash: 'ba1e54643ccac70033440795e166537341a6f3fffc8c621db3fcb69504a00fff', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'styles-DTHUSUJR.css': {size: 22436, hash: '7i1KgJRkUYY', text: () => import('./assets-chunks/styles-DTHUSUJR_css.mjs').then(m => m.default)}
  },
};
