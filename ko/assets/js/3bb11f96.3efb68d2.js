"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[6731],{1226:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var r=n(908),o=n(4848),s=n(8453);const t={layout:"post",title:"Rio 0.0.9",date:"2023-07-17 12:34",description:"Multi window support, FreeBSD support, possibility of choose between Spawn and Fork, inverse instruction, multi byte rendering fixes, support to older MacOS versions, select shell and working-dir in configuration file.",categories:"release windows macos linux"},l="v0.0.9: Highlights",a={authorsImageUrls:[]},d=[{value:"Multi window support",id:"multi-window-support",level:2},{value:"Support to older MacOS versions (older or equal to Big Sur).",id:"support-to-older-macos-versions-older-or-equal-to-big-sur",level:2},{value:"Choose between fork or spawn",id:"choose-between-fork-or-spawn",level:2},{value:"Inverse instructions",id:"inverse-instructions",level:2},{value:"Introduced &quot;rio&quot; terminfo",id:"introduced-rio-terminfo",level:2},{value:"Fixes for multi-byte rendering",id:"fixes-for-multi-byte-rendering",level:2},{value:"Configuration file addition: shell",id:"configuration-file-addition-shell",level:2},{value:"Configuration file addition: working_dir",id:"configuration-file-addition-working_dir",level:2},{value:"Configuration file removal: Advanced",id:"configuration-file-removal-advanced",level:2},{value:"Changelog of v0.0.9",id:"changelog-of-v009",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Multi window support."}),"\n",(0,o.jsx)(i.li,{children:"Support to older MacOS versions (older or equal to Big Sur)."}),"\n",(0,o.jsx)(i.li,{children:"Possibility of choose between Spawn and Fork."}),"\n",(0,o.jsx)(i.li,{children:"Inverse instruction."}),"\n",(0,o.jsx)(i.li,{children:'Introduced "rio" terminfo.'}),"\n",(0,o.jsx)(i.li,{children:"Multi byte rendering fixes."}),"\n",(0,o.jsx)(i.li,{children:"Select shell and working-dir in configuration file."}),"\n",(0,o.jsxs)(i.li,{children:["FreeBSD support and ",(0,o.jsx)(i.a,{href:"https://github.com/freebsd/freebsd-ports/commit/8582b8c59459a7dc5112a94a39de45f6cc124c3e",children:"added to FreeBSD ports"}),"."]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(i.p,{children:"Rio release 0.0.9 is finally here, there's a lot of updates to cover so let's get started. I also would like to remind you that Rio is still unstable. This release adds a lot of bug fixes and feature additions in order to make Rio terminal stable."}),"\n",(0,o.jsx)(i.h2,{id:"multi-window-support",children:"Multi window support"}),"\n",(0,o.jsx)(i.p,{children:"Rio terminal has added the support to multi window feature."}),"\n",(0,o.jsx)("img",{src:"https://miro.medium.com/v2/resize:fit:2914/format:webp/1*KyVD4EJ-wQU8pTmOFTwaQg.png",width:"100%"}),"\n",(0,o.jsx)(i.p,{children:"Shortcuts:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"MacOS: Command + N"}),"\n",(0,o.jsx)(i.li,{children:"Windows: Alt + N"}),"\n",(0,o.jsx)(i.li,{children:"Linux: Control + N"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"support-to-older-macos-versions-older-or-equal-to-big-sur",children:"Support to older MacOS versions (older or equal to Big Sur)."}),"\n",(0,o.jsx)(i.p,{children:"Now it is available for versions below Ventura (Rome)."}),"\n",(0,o.jsx)(i.h2,{id:"choose-between-fork-or-spawn",children:"Choose between fork or spawn"}),"\n",(0,o.jsx)(i.p,{children:'Decide which one to use in the configuration file by the usage of property "use-fork":'}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:"use-fork = false\n"})}),"\n",(0,o.jsx)(i.p,{children:"Defaults for POSIX-based systems:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"MacOS: spawn processes"}),"\n",(0,o.jsx)(i.li,{children:"Linux/BSD: fork processes"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"inverse-instructions",children:"Inverse instructions"}),"\n",(0,o.jsx)(i.p,{children:"Before the v0.0.9, programs were not correctly rendered in the terminal due to the lack of inverse instruction in Rio."}),"\n",(0,o.jsx)(i.p,{children:"For example, ranger uses inverse to show the active path."}),"\n",(0,o.jsx)(i.p,{children:"Before:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://user-images.githubusercontent.com/3630346/245280487-12af56a1-d9ad-4310-bd4e-3d96d42e8a42.png",alt:"Rio before 0.0.9"})}),"\n",(0,o.jsx)(i.p,{children:"Now:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://user-images.githubusercontent.com/3630346/251224085-39531c88-8e04-48ad-b09a-8fd12a0e011b.png",alt:"Rio now"})}),"\n",(0,o.jsx)(i.h2,{id:"introduced-rio-terminfo",children:'Introduced "rio" terminfo'}),"\n",(0,o.jsx)(i.p,{children:"Terminfo (formerly Termcap) is a database of terminal capabilities and more. For every (well almost) model of terminal it tells application programs what the terminal is capable of doing."}),"\n",(0,o.jsx)(i.p,{children:"It tells what escape sequences (or control characters) to send to the terminal in order to do things such as move the cursor to a new location, erase part of the screen, scroll the screen, change modes, change appearance (colors, brightness, blinking, underlining, reverse video etc.)."}),"\n",(0,o.jsx)(i.p,{children:"After about 1980, many terminals supported over a hundred different commands (some of which take numeric parameters)."}),"\n",(0,o.jsx)(i.p,{children:"Rio terminal has now it's own terminfo:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sh",children:"$ echo $TERM\nrio\n"})}),"\n",(0,o.jsxs)(i.p,{children:["More info ",(0,o.jsx)(i.a,{href:"/docs/install#terminfo",children:"here"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"fixes-for-multi-byte-rendering",children:"Fixes for multi-byte rendering"}),"\n",(0,o.jsx)(i.p,{children:"Before the v0.0.9, multi-byte characters were not correctly rendered in the terminal."}),"\n",(0,o.jsxs)(i.p,{children:["Before: As reported in the issue ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/127",children:"#127"})]}),"\n",(0,o.jsx)(i.p,{children:"Now:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://user-images.githubusercontent.com/3630346/252940293-da345089-3d4c-4d05-8b0f-d0665f1e1347.png",alt:"Now"})}),"\n",(0,o.jsx)(i.h2,{id:"configuration-file-addition-shell",children:"Configuration file addition: shell"}),"\n",(0,o.jsx)(i.p,{children:'Now you can set "shell.program" to the path of your favorite shell, e.g. "/bin/fish".'}),"\n",(0,o.jsx)(i.p,{children:'Entries in "shell.args" are passed unmodified as arguments to the shell.'}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:'shell = { program = "/bin/zsh", args = ["--login"] }\n'})}),"\n",(0,o.jsx)(i.p,{children:"Defaults:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"MacOS: /bin/zsh --login"}),"\n",(0,o.jsx)(i.li,{children:"Linux/BSD: user login shell"}),"\n",(0,o.jsx)(i.li,{children:"Windows: powershell"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"configuration-file-addition-working_dir",children:"Configuration file addition: working_dir"}),"\n",(0,o.jsx)(i.p,{children:"Directory the shell is started in. If this is unset the working\ndirectory of the parent process will be used."}),"\n",(0,o.jsx)(i.p,{children:"This configuration only has effect if use-fork is disabled"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:'working_dir = "/Users/raphael/Documents/"\n'})}),"\n",(0,o.jsx)(i.h2,{id:"configuration-file-removal-advanced",children:"Configuration file removal: Advanced"}),"\n",(0,o.jsx)(i.p,{children:'Breaking changes for configuration file regarding "Advanced". The configuration "Advanced" has moved to root level and "disable-render-when-unfocused" renamed to "disable-unfocused-render".'}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:'theme = "dracula"\n\n[advanced]\ndisable-render-when-unfocused = true\n'})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"now"})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:'theme = "dracula"\ndisable-unfocused-render = true\n'})}),"\n",(0,o.jsx)(i.h2,{id:"changelog-of-v009",children:"Changelog of v0.0.9"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:'The configuration "Advanced" has moved to root level and "disable-render-when-unfocused" renamed to "disable-unfocused-render".'}),"\n",(0,o.jsxs)(i.li,{children:["Support to ",(0,o.jsx)(i.strong,{children:"spawn and fork processes"}),', spawn has became default. Spawn increases Rio compatibility in a broad range, like old MacOS versions (older or equal to Big Sur). However, If you want to use Rio terminal to fork processes instead of spawning processes, enable "use-fork" in the configuration file.']}),"\n",(0,o.jsx)(i.li,{children:'Introduced "RIO_LOG_LEVEL" variable usage.'}),"\n",(0,o.jsx)(i.li,{children:"Increased max tabs from 6 to 9."}),"\n",(0,o.jsxs)(i.li,{children:["Fix Incorrect cursor position when using multi-byte characters (Ref: ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/127",children:"#127"}),")"]}),"\n",(0,o.jsxs)(i.li,{children:["Fix bug ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/112",children:'"black screen with nearly zero interactivity"'})," and new tab hanging."]}),"\n",(0,o.jsx)(i.li,{children:"Fix cursor disappearing after resize."}),"\n",(0,o.jsx)(i.li,{children:'Introduction of "shell" and "working_dir" in configuration file.'}),"\n",(0,o.jsxs)(i.li,{children:["Multi window support ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/97",children:"#97"}),"."]}),"\n",(0,o.jsx)(i.li,{children:"Corrections on select and scroll experience (it was using wrongly font-bound for line calculation)."}),"\n",(0,o.jsxs)(i.li,{children:["Add selection color to the theme config (closed ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/125",children:"#125"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["Implemented Inverse (fix ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/92",children:"#92"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["Proper choose formats that matches Rio requirements (related ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/122",children:"#122"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["Corcovado: Filter windows crate dependency to only Windows targets (related: ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/119",children:"#119"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["Teletypewriter: Fixes for musl as target_env (related: ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/119",children:"#119"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["FreeBSD support, implementation by ",(0,o.jsx)(i.a,{href:"https://github.com/yurivict",children:"yurivict"})," (",(0,o.jsx)(i.a,{href:"https://github.com/freebsd/freebsd-ports/commit/8582b8c59459a7dc5112a94a39de45f6cc124c3e",children:"Commit"}),", Ref: ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/115",children:"#115"}),")"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>l});var r=n(6540);const o={},s=r.createContext(o);function t(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:i},e.children)}},908:e=>{e.exports=JSON.parse('{"permalink":"/rio/ko/blog/2023/07/17/release-0.0.9","editUrl":"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-07-17-release-0.0.9.md","source":"@site/blog/2023-07-17-release-0.0.9.md","title":"Rio 0.0.9","description":"Multi window support, FreeBSD support, possibility of choose between Spawn and Fork, inverse instruction, multi byte rendering fixes, support to older MacOS versions, select shell and working-dir in configuration file.","date":"2023-07-17T12:34:00.000Z","tags":[],"readingTime":3.525,"hasTruncateMarker":false,"authors":[],"frontMatter":{"layout":"post","title":"Rio 0.0.9","date":"2023-07-17 12:34","description":"Multi window support, FreeBSD support, possibility of choose between Spawn and Fork, inverse instruction, multi byte rendering fixes, support to older MacOS versions, select shell and working-dir in configuration file.","categories":"release windows macos linux"},"unlisted":false,"prevItem":{"title":"Rio 0.0.11","permalink":"/rio/ko/blog/2023/07/19/release-0.0.11"},"nextItem":{"title":"Rio 0.0.7","permalink":"/rio/ko/blog/2023/07/07/release-0.0.7"}}')}}]);