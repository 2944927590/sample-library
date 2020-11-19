(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){var o=n(296),r=n(297);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},i=(o(r,s),r.locals?r.locals:{});e.exports=i},295:function(e,t,n){"use strict";var o=n(117);n.n(o).a},297:function(e,t,n){(t=n(298)(!1)).push([e.i,".editor-online{background:#fff;padding:20px}.editor-online .title{font-size:14px}\n",""]),e.exports=t},303:function(e,t,n){"use strict";n.r(t);var o=n(50),r=n(118),s=n.n(r),i=(n(170),n(175)),a=n.n(i);n(291),n(173),n(174),n(292);const l='<template>\n  <div>\n    <el-button type="primary" @click="handleClick">点我+1</el-button>\n    <span class="count">{{ count }}</span>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'count\',\n    data() {\n      return {\n        count: 0\n      };\n    },\n    components: {\n\n    },\n    methods: {\n      handleClick() {\n        this.count ++;\n      }\n    }\n  }\n<\/script>\n\n<style scoped>\n  .count {\n    padding: 0 10px;\n    color: red;\n  }\n</style>\n',c=["typescript","javascript","html","css","bat","c","coffeescript","cpp","csharp","csp","dockerfile","fsharp","go","handlebars","ini","java","json","less","lua","markdown","msdax","mysql","objective-c","pgsql","php","plaintext","postiats","powershell","pug","python","r","razor","redis","redshift","ruby","rust","sb","scss","sol","sql","swift","vb","xml","yaml"];const d=n(294);var p={name:"editor-online",props:{sourceCode:{type:String,default:""}},components:{MonacoEditor:a.a},data:()=>({codeStr:"",language:"html",languageOptions:c,highlightLines:[{number:0,class:"red"}],curTheme:"vs",themeOptions:["vs","hc-black","vs-dark"],options:{foldingStrategy:"indentation",autoClosingBrackets:!0,selectOnLineNumbers:!1,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,glyphMargin:!0,useTabStops:!1,fontSize:12,quickSuggestionsDelay:500}}),watch:{sourceCode:{handler(){this.codeStr=this.sourceCode,this.runCode()},immediate:!0}},methods:{iframeLoad(){this.runCode()},elementUIDoc(){window.open("https://element.eleme.io/#/zh-CN/component/button")},onMounted(){this.init()},onCodeChange(e){this.codeStr=e,this.runCode()},init(){this.codeStr=this.sourceCode||l,this.runCode()},runCode(){const e=function(e){const t=document.createElement("div"),n=t.innerHTML=e.trim();try{const e=t.querySelector("template"),o=t.querySelector("script"),r=[...t.querySelectorAll("style")].map(e=>e.innerHTML);return e||o||r.length?{content:/<\/script>$/g.test(n)?n:n+"\n<\/script>",template:e?e.innerHTML:"",script:o?o.innerHTML:"",styles:r}:{content:n,script:n}}catch(e){return{error:e}}}(this.codeStr);e.script=e.script.replace(/import[^\;]*\;/gim,""),e.script=e.script.replace(/components[^\}]*\}\,/gim,""),e.script=d.transform(e.script,{presets:["es2015"]}).code;const t={type:"refreshFrame",data:{template:e.template,script:e.script,styles:e.styles.join("")}};this.$refs.previewPage&&this.$refs.previewPage.contentWindow.postMessage(t,location.origin)}}},u=(n(295),n(125)),h={name:"editor",components:{EditorOnline:Object(u.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor-online"},[n("div",{staticClass:"main-content"},[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("span",{staticClass:"title"},[e._v("主题切换：")]),e._v(" "),n("el-radio-group",{model:{value:e.curTheme,callback:function(t){e.curTheme=t},expression:"curTheme"}},e._l(e.themeOptions,(function(t){return n("el-radio",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",[n("el-button",{attrs:{type:"text"},on:{click:e.runCode}},[e._v("刷新")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.elementUIDoc}},[e._v("element-ui 文档")])],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("monaco-editor",{ref:"vscode",attrs:{width:"100%",height:"1000",language:e.language,value:e.codeStr,options:e.options,highlighted:e.highlightLines,changeThrottle:500,theme:e.curTheme},on:{mounted:e.onMounted,change:e.onCodeChange}})],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("iframe",{ref:"previewPage",staticClass:"result-wrapper",staticStyle:{width:"100%",height:"1000px"},attrs:{frameborder:"0",src:"./preview.html"},on:{load:e.iframeLoad}})])],1)],1)])}),[],!1,null,null,null).exports},data:()=>({sourceCode:l})},m=Object(u.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("editor-online",{attrs:{"source-code":this.sourceCode}})],1)}),[],!1,null,null,null).exports;o.default.use(s.a),new o.default({render:e=>e(m)}).$mount("#app")},304:function(e,t,n){"use strict";n.r(t);var o=n(50),r=n(118),s=n.n(r);n(170);const i={};function a(e,t){const n=document.getElementById(e),o=t||(()=>{});if(!n){i[e]=[];const t=document.createElement("script");t.src=e,t.id=e,t.async=1,document.body.appendChild(t),("onload"in t?function(t){t.onload=()=>{this.onerror=this.onload=null,i[e].forEach(e=>{e(null,t)}),delete i[e]},t.onerror=()=>{this.onerror=this.onload=null,o(new Error(`Failed to load ${e}`),t)}}.bind(t):function(t){t.onreadystatechange=()=>{"complete"!==this.readyState&&"loaded"!==this.readyState||(this.onreadystatechange=null,i[e].forEach(e=>{e(null,t)}),delete i[e])}}.bind(t))(t)}i[e].push(o)}o.default.use(s.a);const l=document.getElementById("app");function c(e,t){(e=new Function(`\n    try {\n      var exports = {};\n      ${e};\n      return exports.default;\n    } catch(err) {\n      console.log(err);\n    }\n  `)()).template=`<div>${t}</div>`,new o.default({...e}).$mount("#preview")}window.addEventListener("message",(function(e){if("refreshFrame"===e.data.type){const t=e.data.data;let n="";Array.isArray(t.links)&&t.links.length>0&&(n=function(e){let t="";return e.forEach(e=>{t+=`<link href="${e}" rel="stylesheet">`}),t}(t.links)),l.innerHTML=`${n}<style>${t.styles}</style><div id="preview"></div>`,Array.isArray(t.scripts)&&t.scripts.length>0?function e(t,n){const o=t.shift();t.length?a(o,()=>e(t,n)):a(o,n)}(t.scripts,()=>{c(t.script,t.template)}):c(t.script,t.template)}}),!1)}}]);