"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[564],{7611:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"config/renderer","title":"renderer","description":"Performance","source":"@site/docs/config/renderer.md","sourceDirName":"config","slug":"/config/renderer","permalink":"/rio/pt-br/docs/config/renderer","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/config/renderer.md","tags":[],"version":"current","frontMatter":{"title":"renderer","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"padding","permalink":"/rio/pt-br/docs/config/padding"},"next":{"title":"scroll","permalink":"/rio/pt-br/docs/config/scroll"}}');var i=r(4848),d=r(8453);const t={title:"renderer",language:"en"},l=void 0,c={},o=[{value:"Performance",id:"performance",level:2},{value:"Backend",id:"backend",level:2},{value:"Disable unfocused render",id:"disable-unfocused-render",level:2},{value:"Target FPS",id:"target-fps",level:2},{value:"Filter",id:"filter",level:2},{value:"Strategy",id:"strategy",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Performance"})," - Set WGPU rendering performance"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"High"}),": Adapter that has the highest performance. This is often a discrete GPU."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Low"}),": Adapter that uses the least possible power. This is often an integrated GPU."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[renderer]\nperformance = "High"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"backend",children:"Backend"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Backend"})," - Set WGPU rendering backend"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Automatic"}),": Leave Sugarloaf/WGPU to decide"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GL"}),": Supported on Linux/Android, and Windows and macOS/iOS via ANGLE"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Vulkan"}),": Supported on Windows, Linux/Android"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DX12"}),": Supported on Windows 10"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Metal"}),": Supported on macOS/iOS"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[renderer]\nbackend = "Automatic"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"disable-unfocused-render",children:"Disable unfocused render"}),"\n",(0,i.jsx)(n.p,{children:"This property disable renderer processes while Rio is unfocused."}),"\n",(0,i.jsx)(n.p,{children:"Default is false."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[renderer]\ndisable-unfocused-render = false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"target-fps",children:"Target FPS"}),"\n",(0,i.jsx)(n.p,{children:"This configuration is disabled by default but if isLimits the maximum number of frames per second that rio terminal will attempt to draw on a specific frame per second interval."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[renderer]\ntarget-fps = 120\n"})}),"\n",(0,i.jsx)(n.h2,{id:"filter",children:"Filter"}),"\n",(0,i.jsxs)(n.p,{children:["Rio allow to configure filters based on RetroArch shaders: ",(0,i.jsx)(n.a,{href:"https://github.com/libretro/slang-shaders",children:"github.com/libretro/slang-shaders"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: Filters does not work with ",(0,i.jsx)(n.code,{children:"GL"})," backend."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[renderer]\nfilters = [\n  "/Users/raphael/Downloads/slang-shaders-master/crt/newpixie-crt.slangp"\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Demo shaders 2",src:r(9970).A+"",width:"2562",height:"1992"})}),"\n",(0,i.jsx)(n.h2,{id:"strategy",children:"Strategy"}),"\n",(0,i.jsxs)(n.p,{children:["Strategy property defines how Rio will render, by default it follows Event driven (",(0,i.jsx)(n.code,{children:"Events"}),"), but you can change it to a continuous loop (that will consume more CPU) by changing to ",(0,i.jsx)(n.code,{children:"Continuous"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[renderer]\nstrategy = "events"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9970:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/demo-retroarch-2-6d2eaa7ce0abb86ca64a7debd4b34963.png"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);