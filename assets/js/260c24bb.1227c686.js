"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9196],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63792:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={},s="Vault",c={unversionedId:"api/classes/Vault",id:"api/classes/Vault",isDocsHomePage:!1,title:"Vault",description:"Extends Events",source:"@site/docs/api/classes/Vault.md",sourceDirName:"api/classes",slug:"/api/classes/Vault",permalink:"/obsidian-plugin-docs/api/classes/Vault",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Vault.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ValueComponent",permalink:"/obsidian-plugin-docs/api/classes/ValueComponent"},next:{title:"View",permalink:"/obsidian-plugin-docs/api/classes/View"}},d=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"adapter",id:"adapter",children:[]},{value:"configDir",id:"configdir",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getName",id:"getname",children:[]},{value:"getAbstractFileByPath",id:"getabstractfilebypath",children:[]},{value:"getRoot",id:"getroot",children:[]},{value:"create",id:"create",children:[]},{value:"createBinary",id:"createbinary",children:[]},{value:"createFolder",id:"createfolder",children:[]},{value:"read",id:"read",children:[]},{value:"cachedRead",id:"cachedread",children:[]},{value:"readBinary",id:"readbinary",children:[]},{value:"getResourcePath",id:"getresourcepath",children:[]},{value:"delete",id:"delete",children:[]},{value:"trash",id:"trash",children:[]},{value:"rename",id:"rename",children:[]},{value:"modify",id:"modify",children:[]},{value:"modifyBinary",id:"modifybinary",children:[]},{value:"copy",id:"copy",children:[]},{value:"getAllLoadedFiles",id:"getallloadedfiles",children:[]},{value:"recurseChildren",id:"recursechildren",children:[]},{value:"getMarkdownFiles",id:"getmarkdownfiles",children:[]},{value:"getFiles",id:"getfiles",children:[]},{value:"on",id:"on",children:[]},{value:"on",id:"on-1",children:[]},{value:"on",id:"on-2",children:[]},{value:"on",id:"on-3",children:[]},{value:"on",id:"on-4",children:[]}]}],u={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vault"},"Vault"),(0,l.kt)("p",null,"Extends ",(0,l.kt)("inlineCode",{parentName:"p"},"Events")),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"adapter"},"adapter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"adapter: DataAdapter\n")),(0,l.kt)("h3",{id:"configdir"},"configDir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"configDir: string\n")),(0,l.kt)("p",null,"Gets the path to the config folder.\nThis value is typically ",(0,l.kt)("inlineCode",{parentName:"p"},".obsidian")," but it could be different."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getname"},"getName"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getName(): string;\n")),(0,l.kt)("p",null,"Gets the name of the vault"),(0,l.kt)("h3",{id:"getabstractfilebypath"},"getAbstractFileByPath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getAbstractFileByPath(path: string): TAbstractFile | null;\n")),(0,l.kt)("h3",{id:"getroot"},"getRoot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getRoot(): TFolder;\n")),(0,l.kt)("h3",{id:"create"},"create"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>;\n")),(0,l.kt)("h3",{id:"createbinary"},"createBinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"createBinary(path: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<TFile>;\n")),(0,l.kt)("h3",{id:"createfolder"},"createFolder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"createFolder(path: string): Promise<void>;\n")),(0,l.kt)("h3",{id:"read"},"read"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"read(file: TFile): Promise<string>;\n")),(0,l.kt)("h3",{id:"cachedread"},"cachedRead"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"cachedRead(file: TFile): Promise<string>;\n")),(0,l.kt)("h3",{id:"readbinary"},"readBinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"readBinary(file: TFile): Promise<ArrayBuffer>;\n")),(0,l.kt)("h3",{id:"getresourcepath"},"getResourcePath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getResourcePath(file: TFile): string;\n")),(0,l.kt)("h3",{id:"delete"},"delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"delete(file: TAbstractFile, force?: boolean): Promise<void>;\n")),(0,l.kt)("h3",{id:"trash"},"trash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"trash(file: TAbstractFile, system: boolean): Promise<void>;\n")),(0,l.kt)("p",null,"Tries to move to system trash. If that isn't successful/allowed, use local trash"),(0,l.kt)("h3",{id:"rename"},"rename"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"rename(file: TAbstractFile, newPath: string): Promise<void>;\n")),(0,l.kt)("h3",{id:"modify"},"modify"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"modify(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;\n")),(0,l.kt)("h3",{id:"modifybinary"},"modifyBinary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"modifyBinary(file: TFile, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>;\n")),(0,l.kt)("h3",{id:"copy"},"copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"copy(file: TFile, newPath: string): Promise<TFile>;\n")),(0,l.kt)("h3",{id:"getallloadedfiles"},"getAllLoadedFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getAllLoadedFiles(): TAbstractFile[];\n")),(0,l.kt)("h3",{id:"recursechildren"},"recurseChildren"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"static recurseChildren(root: TFolder, cb: (file: TAbstractFile) => any): void;\n")),(0,l.kt)("h3",{id:"getmarkdownfiles"},"getMarkdownFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getMarkdownFiles(): TFile[];\n")),(0,l.kt)("h3",{id:"getfiles"},"getFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getFiles(): TFile[];\n")),(0,l.kt)("h3",{id:"on"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'on(name: "create", callback: (file: TAbstractFile) => any, ctx?: any): EventRef;\n')),(0,l.kt)("h3",{id:"on-1"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'on(name: "modify", callback: (file: TAbstractFile) => any, ctx?: any): EventRef;\n')),(0,l.kt)("h3",{id:"on-2"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'on(name: "delete", callback: (file: TAbstractFile) => any, ctx?: any): EventRef;\n')),(0,l.kt)("h3",{id:"on-3"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'on(name: "rename", callback: (file: TAbstractFile, oldPath: string) => any, ctx?: any): EventRef;\n')),(0,l.kt)("h3",{id:"on-4"},"on"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'on(name: "closed", callback: () => any, ctx?: any): EventRef;\n')))}p.isMDXComponent=!0}}]);