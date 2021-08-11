(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20efb8"],{b24f:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Enable Loading")]),t("Explain"),t("basic")],1)},o=[],i=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("It's very simple for the table component to start loading. You can start loading when you request data"),t("br")])])])}],s=t("2877"),c={},d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Usage",fileName:"basic.md"}}),e._m(0),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <button class="button-demo" @click="show()">Open</button>\n    <button class="button-demo" @click="close()">Close</button><br /><br />\n    <ve-table id="loading-container" :columns="columns" :table-data="tableData" />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        loadingInstance: null,\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n    methods: {\n      show() {\n        this.loadingInstance.show();\n      },\n      close() {\n        this.loadingInstance.close();\n      },\n    },\n    mounted() {\n      this.loadingInstance = this.$veLoading({\n        target: document.querySelector("#loading-container"),\n        // 等同于\n        // target:"#loading-container"\n        name: "wave",\n      });\n      this.show();\n    },\n    destroyed() {\n      this.loadingInstance.destroy();\n    },\n  };\n<\/script>\n')])])])],2)],1)},b=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("More about Loading, Please refer to "),t("a",{attrs:{href:"#/en/doc/base/loading"}},[e._v("Loading component")])])}];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(n){return e.show()}}},[e._v("Open")]),e._v(" "),t("button",{staticClass:"button-demo",on:{click:function(n){return e.close()}}},[e._v("Close")]),t("br"),t("br"),e._v(" "),t("ve-table",{attrs:{id:"loading-container",columns:e.columns,"table-data":e.tableData}})],1)]],2)},n=[],t={data:function(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{show:function(){this.loadingInstance.show()},close:function(){this.loadingInstance.close()}},mounted:function(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},destroyed:function(){this.loadingInstance.destroy()}};return m({render:e,staticRenderFns:n},t)}()}},f=p,y=Object(s["a"])(f,u,b,!1,null,null,null),v=y.exports,w={name:"basic-main",components:{Explain:l,Basic:v}},O=w,_=Object(s["a"])(O,a,o,!1,null,null,null);n["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d20efb8.9a392203.js.map