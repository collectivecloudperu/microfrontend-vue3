import { __vitePreload, importShared } from './_virtual___federation_fn_import-cbc95a10.js';

true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const remotesMap = {
'home':{url:()=>Promise.resolve('http://localhost:5001/assets/remoteEntry.js'),format:'esm',from:'vite'},
  'microfrontend-2-analytica':{url:()=>new Promise(resolve=>resolve('http://localhost:5002/assets/remoteEntry.js')),format:'esm',from:'vite'},
  'microfrontend-3-tabla':{url:'http://localhost:5003/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }

                const wrapShareModule = remoteFrom => {
                    return {
                        'vue':{'3.3.4':{get:()=>get('./__federation_shared_vue.js', remoteFrom), loaded:1}},'pinia':{'2.1.6':{get:()=>get('./__federation_shared_pinia.js', remoteFrom), loaded:1}}
                    }
                };

                async function __federation_import(name) {
                    return __vitePreload(() => import(name),true?[]:void 0);
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    __vitePreload(() => import(/* @vite-ignore */ url),true?[]:void 0).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const Layout_vue_vue_type_style_index_0_scoped_8d559459_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/* */ 

const _sfc_main = {};
const {createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,createVNode:_createVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,pushScopeId:_pushScopeId,popScopeId:_popScopeId} = await importShared('vue');


const _withScopeId = n => (_pushScopeId("data-v-8d559459"),n=n(),_popScopeId(),n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode("h1", { class: "mt-5 text-center" }, "Como Crear un Micro Frontend con Vue 3", -1));
const _hoisted_2 = { class: "row mrgt" };
const _hoisted_3 = {
  class: "col-md-8 p-3",
  style: {"background-color":"rgb(248, 248, 248)"}
};
const _hoisted_4 = {
  class: "col-md-4 p-3",
  style: {"background-color":"rgb(235, 216, 254)"}
};
const _hoisted_5 = { class: "row" };
const _hoisted_6 = {
  class: "col-md-8 p-3",
  style: {"background-color":"rgb(255, 233, 211)"}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_analytica = _resolveComponent("analytica");
  const _component_formulario = _resolveComponent("formulario");
  const _component_tabla = _resolveComponent("tabla");

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_analytica)
      ]),
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_formulario)
      ])
    ]),
    _createElementVNode("div", _hoisted_5, [
      _createElementVNode("div", _hoisted_6, [
        _createVNode(_component_tabla)
      ])
    ])
  ], 64))
}
const Layout = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-8d559459"]]);

const {createApp} = await importShared('vue');

const {createPinia} = await importShared('pinia');

const __federation_var_homeFormulario = await __federation_method_getRemote("home" , "./Formulario");
 let Formulario = __federation_method_unwrapDefault(__federation_var_homeFormulario); 
const __federation_var_microfrontend3tablaTabla = await __federation_method_getRemote("microfrontend-3-tabla" , "./Tabla");
 let Tabla = __federation_method_unwrapDefault(__federation_var_microfrontend3tablaTabla); 
const __federation_var_microfrontend2analyticaAnalytica = await __federation_method_getRemote("microfrontend-2-analytica" , "./Analytica");
 let Analytica = __federation_method_unwrapDefault(__federation_var_microfrontend2analyticaAnalytica); 

const app = createApp(Layout);

app.component("formulario", Formulario);
app.component("tabla", Tabla);
app.component("analytica", Analytica);

app.use(createPinia());
app.mount("#root");
