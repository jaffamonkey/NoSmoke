(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{175:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"持续集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续集成","aria-hidden":"true"}},[a._v("#")]),a._v(" 持续集成")]),a._v(" "),t("p",[a._v("本文在快速启动，以及配置项，钩子等内容基础上，介绍在CI 环境中完成相关配置部署的一些tips.")]),a._v(" "),t("h3",{attrs:{id:"_1-脚本模版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-脚本模版","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 脚本模版:")]),a._v(" "),t("p",[a._v("在运行前，可检查macaca 以及 nosmoke 将要执行的端口上是否已有相关程序，可执行以下指令将对应程序进行清理")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lsof")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${process-port-which-you-need-to-close}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("}'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" -9\n")])])]),t("p",[t("strong",[a._v("运行安卓:")]),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("在运行安卓前，先唤起macaca 服务.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\nmacaca server --verbose -p 3554 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n\n")])])]),t("p",[a._v("接着执行对应的nosmoke 指令开始nosmoke 运行.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("nosmoke -s -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${path-of-file}")]),a._v("/crawler.config-android.yml \\\n        -h "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${path-of-file}")]),a._v("/hooks-android.js \\\n        --server http://localhost:3554 \\\n        -p 3564\n\n")])])]),t("p",[t("strong",[a._v("运行iOS")]),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("在运行iOS前，先唤起macaca 服务.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("macaca server --verbose -p 3684 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),t("p",[a._v("接着执行对应的nosmoke 指令开始nosmoke 运行.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("xcrun simctl launch booted com.apple.springboard\nxcrun simctl terminate booted com.apple.test.XCTestWDUITests-Runner\nxcrun simctl terminate booted "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${your-bundle-id}")]),a._v(".-   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# bundle id of your current app.")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" 2\n\nnosmoke   -s --server http://localhost:3684  \\\n          -h "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${path-of-file}")]),a._v("/hooks-ios.js \\\n          -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${path-of-file}")]),a._v("/crawler.config-ios.yml \\\n          -p 3694\n\n")])])]),t("p",[a._v("在以上指令执行后，该执行路径下会生成对应的reports 路径，可点击并查看运行报告.")]),a._v(" "),t("p",[t("img",{attrs:{src:"/NoSmoke/assets/generated_output.png",alt:""}})])])}],!1,null,null,null);r.options.__file="continious-integration.md";s.default=r.exports}}]);