"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[7034],{5879:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"config/theme","title":"theme","description":"The configuration property theme is used for specifying the theme. Rio will look in the themes folder for the theme.","source":"@site/docs/config/theme.md","sourceDirName":"config","slug":"/config/theme","permalink":"/rio/pt-br/docs/config/theme","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/theme.md","tags":[],"version":"current","frontMatter":{"title":"theme","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"startup-directory","permalink":"/rio/pt-br/docs/config/startup-directory"},"next":{"title":"use-fork","permalink":"/rio/pt-br/docs/config/use-fork"}}');var t=o(4848),i=o(8453);const c={title:"theme",language:"en"},s=void 0,l={},h=[{value:"Building your own theme",id:"building-your-own-theme",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The configuration property ",(0,t.jsx)(n.code,{children:"theme"})," is used for specifying the theme. Rio will look in the ",(0,t.jsx)(n.code,{children:"themes"})," folder for the theme."]}),"\n",(0,t.jsxs)(n.p,{children:["You can see common paths for the ",(0,t.jsx)(n.code,{children:"themes"})," directory here:"]}),"\n",(0,t.jsx)(n.p,{children:'Note: Remember to replace "YOUR_USERNAME" with your actual user name.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Platform"}),(0,t.jsx)(n.th,{children:"Path"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mac"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/Users/YOUR_USERNAME/.config/rio/themes"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Linux"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/home/YOUR_USERNAME/.config/rio/themes"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Windows"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"C:\\Users\\YOUR_USERNAME\\AppData\\Local\\rio\\themes"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In the example below, we will setup the Dracula theme for Rio. The theme can be downloaded from ",(0,t.jsx)(n.a,{href:"https://github.com/dracula/rio-terminal",children:"github.com/dracula/rio-terminal"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After downloading the ",(0,t.jsx)(n.code,{children:"dracula.toml"})," file, move it inside the folder ",(0,t.jsx)(n.code,{children:"themes"})," in the configuration folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'#  ~/.config/rio/config.toml\ntheme = "dracula"\n'})}),"\n",(0,t.jsx)(n.p,{children:"It should look like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Dracula theme example",src:o(5212).A+"",width:"1824",height:"1424"})}),"\n",(0,t.jsxs)(n.p,{children:["Another option would be to install the ",(0,t.jsx)(n.a,{href:"https://github.com/raphamorim/lucario/#rio-terminal",children:"Lucario color scheme for Rio terminal"}),", by moving the downloaded file to ",(0,t.jsx)(n.code,{children:"~/.config/rio/themes/lucario.toml"})," and setting the ",(0,t.jsx)(n.code,{children:"theme"})," property:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'#  ~/.config/rio/config.toml\ntheme = "lucario"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/raphamorim/lucario/raw/main/images/rio.png",alt:"Lucario theme example"})}),"\n",(0,t.jsxs)(n.p,{children:["You can find more than 250 themes for Rio terminal in this repository: ",(0,t.jsx)(n.a,{href:"https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/rio",children:"mbadolato/iTerm2-Color-Schemes/tree/master/rio"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"building-your-own-theme",children:"Building your own theme"}),"\n",(0,t.jsx)(n.p,{children:"Building your own theme for Rio is very straightforward."}),"\n",(0,t.jsxs)(n.p,{children:["Simply create a new theme file in your configuration themes folder (E.g. ",(0,t.jsx)(n.code,{children:"~/.config/rio/themes/foobar.toml"}),") and choose your preferred colors:"]}),"\n",(0,t.jsx)(n.p,{children:"Note: Missing fields will use the default for Rio."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# ~/.config/rio/themes/foobar.toml\n\n[colors]\nbackground = ""\nforeground = ""\n\n# Selection\nselection-background = ""\nselection-foreground = ""\n\n# Navigation\ntabs-active = ""\ntabs-active-foreground = ""\ntabs-active-highlight = ""\nbar = ""\ncursor = ""\nvi-cursor = ""\n\n# Search\nsearch-match-background = ""\nsearch-match-foreground = ""\nsearch-focused-match-background = ""\nsearch-focused-match-foreground = ""\n\n# Regular colors\nblack = ""\nblue = ""\ncyan = ""\ngreen = ""\nmagenta = ""\nred = ""\ntabs = ""\nwhite = ""\nyellow = ""\n\n# Dim colors\ndim-black = ""\ndim-blue = ""\ndim-cyan = ""\ndim-foreground = ""\ndim-green = ""\ndim-magenta = ""\ndim-red = ""\ndim-white = ""\ndim-yellow = ""\n\n# Light colors\nlight-black = ""\nlight-blue = ""\nlight-cyan = ""\nlight-foreground = ""\nlight-green = ""\nlight-magenta = ""\nlight-red = ""\nlight-white = ""\nlight-yellow = ""\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After that all you have to do is set the ",(0,t.jsx)(n.code,{children:"theme"})," property in your configuration file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# ~/.config/rio/config.toml\ntheme = "foobar"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Proud of your new theme? Why not share it on the ",(0,t.jsx)(n.a,{href:"https://discord.gg/zRvJjmKGwS",children:"Rio Discord"}),"!"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5212:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/dracula-nvim-a1d1457e2aa3780989b7e3378e473316.png"},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var r=o(6540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);