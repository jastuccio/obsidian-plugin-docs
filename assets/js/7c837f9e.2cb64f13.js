"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[505],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(t),d=o,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3640:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return b}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:30},c="Ribbon",l={unversionedId:"ribbon",id:"ribbon",isDocsHomePage:!1,title:"Ribbon",description:"The sidebar on the left side of the Obsidian interface is mainly known as the ribbon. In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins.",source:"@site/docs/ribbon.md",sourceDirName:".",slug:"/ribbon",permalink:"/obsidian-plugin-docs/ribbon",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/ribbon.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a plugin",permalink:"/obsidian-plugin-docs/plugin-anatomy"},next:{title:"Commands",permalink:"/obsidian-plugin-docs/commands"}},u=[],p={toc:u};function b(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ribbon"},"Ribbon"),(0,i.kt)("p",null,"The sidebar on the left side of the Obsidian interface is mainly known as the ",(0,i.kt)("em",{parentName:"p"},"ribbon"),". In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins."),(0,i.kt)("p",null,"To add a action to the ribbon, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"addRibbonIcon()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {5-7}',title:'"main.ts"',"{5-7}":!0},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addRibbonIcon("dice", "Print to console", () => {\n      console.log("Hello, you!");\n    });\n  }\n}\n')))}b.isMDXComponent=!0}}]);