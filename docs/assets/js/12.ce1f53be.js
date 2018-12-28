(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{177:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("NoSmoke 是一款基于source-XML-tree/OCR 为基础的多端UI自动化测试框架，服务于持续集成环境中的冒烟测试 并尊从"),a("a",{attrs:{href:"https://www.w3.org/TR/webdriver/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WDA 规范"),a("OutboundLink")],1),t._v(". 本文档介绍NoSmoke 2.0 的使用方式.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("NoSmoke 提供一下能力:")]),t._v(" "),a("ul",[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("li",[a("p",[t._v("[x] "),a("strong",[t._v("测试结果可视化")]),t._v(" "),a("a",{attrs:{href:"https://github.com/macacajs/macaca-reporter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Macaca-Reporter"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("从 NoSmoke 1.0 起， 爬虫程序通过客户端本地SDK驱动，获取UI source tree 信息，并识别操作点.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("从 NoSmoke 2.0 起， 爬虫程序通过OCR 扫描客户端App 窗口图片对可操作点进行分析，规避了大量的xml 计算成本，从而提升效率.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("NoSmoke 支持多端UI测试： "),a("strong",[t._v("iOS")]),t._v(", "),a("strong",[t._v("Android")]),t._v(", 爬行记录通过"),a("a",{attrs:{href:"https://github.com/macacajs/macaca-reporter",target:"_blank",rel:"noopener noreferrer"}},[t._v("macaca-reporter"),a("OutboundLink")],1),t._v(" 进行展示.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("参考以下配置文件. 可选择对应的iOS/android OS 类型，安装包/packageId/bundleId 以及该次执行时的其他配置信息.")]),t._v(" "),t._m(15),a("p",[t._v("And the corresponding configuration for crawling the app:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("NoSmoke 2.0 减少了钩子的数量，从而进一步降低了接入以及理解成本. 在每一次动作执行后，以下钩子接口会触发，用户可检查当前执行的动作信息，并决定是否进行干预.")]),t._v(" "),t._m(18),a("p",[t._v("阅读后续篇章以便了解 "),a("router-link",{attrs:{to:"/zh/guide/quick-start.html"}},[t._v("如何快速开始")]),t._v(" 以及"),a("router-link",{attrs:{to:"/zh/guide/cross-platform.html"}},[t._v("各个平台的配置方法")]),t._v(" 并且懂得"),a("router-link",{attrs:{to:"/zh/guide/hooks.html"}},[t._v("如何进一步通过勾子进行定制")]),t._v(".")],1),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("TBD")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("The MIT License (MIT)")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"nosmoke-2-0-cookbook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nosmoke-2-0-cookbook","aria-hidden":"true"}},[this._v("#")]),this._v(" NoSmoke 2.0 Cookbook")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-nosmoke-的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-nosmoke-的优势","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. NoSmoke 的优势:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("[x] 以"),s("strong",[this._v("最轻便的配置能力")]),this._v("以及"),s("strong",[this._v("最简化的脚本")]),this._v("执行"),s("strong",[this._v("自动化UI测试")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("[x] "),s("strong",[this._v("基于深度遍历算法")]),this._v("精确定位测试UI元素， 提供"),s("strong",[this._v("高于猴子测试的测试精度")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("[x] 支持多端运行: "),s("strong",[this._v("iOS, Android")]),this._v("!! :]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-工作原理介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作原理介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 工作原理介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自-nosmoke-1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自-nosmoke-1-0","aria-hidden":"true"}},[this._v("#")]),this._v(" 自 NoSmoke 1.0")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自-nosmoke-2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自-nosmoke-2-0","aria-hidden":"true"}},[this._v("#")]),this._v(" 自 NoSmoke 2.0")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/NoSmoke/assets/macaca-architecture-2.0.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"版本差异一览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本差异一览","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本差异一览:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("指标")]),t._v(" "),a("th",[t._v("版本 1.0")]),t._v(" "),a("th",[t._v("版本 2.0")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("支持平台")]),t._v(" "),a("td",[t._v("Android iOS Web")]),t._v(" "),a("td",[t._v("Android iOS")])]),t._v(" "),a("tr",[a("td",[t._v("可配置项")]),t._v(" "),a("td",[t._v("14 配置")]),t._v(" "),a("td",[t._v("4 项简化配置")])]),t._v(" "),a("tr",[a("td",[t._v("拦截钩子")]),t._v(" "),a("td",[t._v("5 个")]),t._v(" "),a("td",[t._v("1 个并简化")])]),t._v(" "),a("tr",[a("td",[t._v("钩子实现")]),t._v(" "),a("td",[t._v("无API，需要用户实现restful 指令")]),t._v(" "),a("td",[t._v("封装API 提供点击/输入/拖拽能力")])]),t._v(" "),a("tr",[a("td",[t._v("迭代长度")]),t._v(" "),a("td",[t._v("12 秒/轮")]),t._v(" "),a("td",[t._v("5 秒/轮")])]),t._v(" "),a("tr",[a("td",[t._v("稳定评分")]),t._v(" "),a("td",[t._v("0.6")]),t._v(" "),a("td",[t._v("0.95")])]),t._v(" "),a("tr",[a("td",[t._v("模块依赖")]),t._v(" "),a("td",[t._v("Macaca Drivers")]),t._v(" "),a("td",[t._v("Macaca/Appium Drivers (基础层可选)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-功能表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-功能表","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 功能表")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"a-多端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-多端","aria-hidden":"true"}},[this._v("#")]),this._v(" a. 多端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/NoSmoke/assets/new_report_layout.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"b-可配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-可配置","aria-hidden":"true"}},[this._v("#")]),this._v(" b. 可配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("desiredCapabilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    platformName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iOS/Android'")]),t._v("\n    deviceName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${name-of-the-device}'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" android run `adb devices`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" iOS simulator run `xcrun simctl list`\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${downloadable address of .ipa/.apk file}'")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("crawlingConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  strategy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ocr'")]),t._v("\n  platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${platform: android/ios}'")]),t._v("\n  triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${prioritised trigger point}'")]),t._v("\n  exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${exclude text patten}'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"c-钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-钩子","aria-hidden":"true"}},[this._v("#")]),this._v(" c. 钩子")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Method to perform action for the current platform, invoked when the action is going to perform\n * @Params: action the action which belongs to current active node, user can determine the priority of action execution\n * @Params: crawler the crawler instance which contains the context information as well as crawler config\n * */")]),t._v("\nHooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onActionPerformed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" crawler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// password input")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enter your MPIN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here hook provides API for click/type/drag.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'method'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xpath'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xpath'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${xpath of element}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'method'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xpath'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xpath'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${xpath of element}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2580'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"案例展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例展示","aria-hidden":"true"}},[this._v("#")]),this._v(" 案例展示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);