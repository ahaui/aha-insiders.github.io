(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0yPi":function(e,t,a){e.exports=a.p+"static/stb_bubble-chat-structure-d6db90d589ff2fa21083a62f07fd7e48.jpg"},"CoC+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return w})),a.d(t,"default",(function(){return N}));var n=a("hkJn"),d=(a("ERkP"),a("ZVZ0")),m=a("Snbm"),s=a("vXRK"),i=a("+6pB"),r=a("rRxT"),c=a.n(r),o=a("Xsfy"),x=a.n(o),b=a("QM/t"),l=a.n(b),u=a("W9fX"),p=a.n(u),y=a("Wy3C"),g=a.n(y),h=a("2ZRR"),j=a.n(h),O=a("w+ir"),T=a.n(O),v=a("IToh"),f=a.n(v),C=["components"],w={},P={query:"2246857346",_frontmatter:w},k=m.a;function N(e){var t=e.components,m=Object(n.a)(e,C);return Object(d.mdx)(k,Object.assign({},P,m,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"bubble-chat"},"Bubble Chat"),Object(d.mdx)("h2",{id:"introduction"},"Introduction"),Object(d.mdx)("p",null,"The component is used to represent the real-time and archived messages of three main objects: users, experts and system."),Object(d.mdx)("img",{src:a("0yPi"),srcSet:a("JY4q")+" 2x",alt:"Bubble Chat"}),Object(d.mdx)("ol",{className:"u-textGray u-marginTopTiny"},Object(d.mdx)("li",null,"Message background"),Object(d.mdx)("li",null,"Message content"),Object(d.mdx)("li",null,"Avatar"),Object(d.mdx)("li",null,"Time stamp")),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)("h3",{id:"text-message"},"Text Message"),Object(d.mdx)(i.a,{codeText:c.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"file-message"},"File Message"),Object(d.mdx)(i.a,{codeText:x.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"image-message"},"Image Message"),Object(d.mdx)(i.a,{codeText:T.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"speech-message"},"Speech Message"),Object(d.mdx)(i.a,{codeText:f.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"typing-message"},"Typing Message"),Object(d.mdx)(i.a,{codeText:l.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"outbound-message"},"Outbound Message"),Object(d.mdx)("p",null,"Normally this style is applied for users. Outbound messages use the system’s primary color and right-aligned."),Object(d.mdx)(i.a,{codeText:p.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"inbound-message"},"Inbound Message"),Object(d.mdx)("p",null,"Normally this style is applied for experts. Inbound messages use the system’s secondary color, left-aligned and have an avatar on the left."),Object(d.mdx)(i.a,{codeText:g.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"system-message"},"System Message"),Object(d.mdx)("p",null,"System messages use the system’s primary-light color, left-aligned and have products’ avatars on the left."),Object(d.mdx)(i.a,{codeText:j.a,mdxType:"CodeView"}),Object(d.mdx)("h3",{id:"variants"},"Variants"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Light")),Object(d.mdx)(i.a,{codeText:'<div style={{ maxWidth: 360 }}>\n  <BubbleChat\n    variant="light"\n    type="outbound"\n    avatar={(() => <Avatar size="small" className="u-backgroundPrimaryLighter u-textPrimary u-text100" text="KT" />)}\n    text="Welcome to Aha Design System"\n    time="16:23"\n  />\n</div>',mdxType:"CodeView"}),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Primary")),Object(d.mdx)(i.a,{codeText:'<div style={{ maxWidth: 360 }}>\n  <BubbleChat\n    variant="primary"\n    type="outbound"\n    avatar={(() => <Avatar size="small" className="u-backgroundPrimaryLighter u-textPrimary u-text100" text="KT" />)}\n    text="Welcome to Aha Design System"\n    time="16:23"\n  />\n</div>',mdxType:"CodeView"}),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"PrimaryLight")),Object(d.mdx)(i.a,{codeText:'<div style={{ maxWidth: 360 }}>\n  <BubbleChat\n    variant="primaryLight"\n    type="outbound"\n    avatar={(() => <Avatar size="small" className="u-backgroundPrimaryLighter u-textPrimary u-text100" text="KT" />)}\n    text="Welcome to Aha Design System"\n    time="16:23"\n  />\n</div>',mdxType:"CodeView"}),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Dark")),Object(d.mdx)(i.a,{codeText:'<div style={{ maxWidth: 360 }}>\n  <BubbleChat\n    variant="dark"\n    type="outbound"\n    avatar={(() => <Avatar size="small" className="u-backgroundPrimaryLighter u-textPrimary u-text100" text="KT" />)}\n    text="Welcome to Aha Design System"\n    time="16:23"\n  />\n</div>',mdxType:"CodeView"}),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"TransparentDark")),Object(d.mdx)(i.a,{exampleClassName:"u-backgroundDark",codeText:'<div style={{ maxWidth: 360 }}>\n  <BubbleChat\n    variant="transparentDark"\n    type="outbound"\n    avatar={(() => <Avatar size="small" className="u-backgroundPrimaryLighter u-textPrimary u-text100" text="KT" />)}\n    text="Welcome to Aha Design System"\n    time="16:23"\n  />\n</div>',mdxType:"CodeView"}),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"TransparentLight")),Object(d.mdx)(i.a,{codeText:'<div style={{ maxWidth: 360 }}>\n  <BubbleChat\n    variant="transparentLight"\n    type="outbound"\n    avatar={(() => <Avatar size="small" className="u-backgroundPrimaryLighter u-textPrimary u-text100" text="KT" />)}\n    text="Welcome to Aha Design System"\n    time="16:23"\n  />\n</div>',mdxType:"CodeView"}),Object(d.mdx)("h2",{id:"design-reference"},"Design Reference"),Object(d.mdx)("p",null,"N/A"),Object(d.mdx)("h2",{id:"api"},"API"),Object(d.mdx)(s.a,{metadata:m.data.metadata,mdxType:"ComponentApi"}))}N.isMDXComponent=!0},JY4q:function(e,t,a){e.exports=a.p+"static/stb_bubble-chat-structure@2x-5d5aa3ad2402bd52f6c4e28059fdfae8.jpg"}}]);
//# sourceMappingURL=component---src-pages-components-bubble-chat-mdx-8d443833da6a56e46d84.js.map