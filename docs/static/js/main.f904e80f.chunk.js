(this["webpackJsonpgift-app"]=this["webpackJsonpgift-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(8),r=n.n(a),s=n(2),i=n(7),d=n(6),o=n.n(d),l=n(9),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.pokemontcg.io/v2/cards?q=name:".concat(encodeURI(t),"&&pageSize=12"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,r=a.data,s=r.map((function(e){return{id:e.id,name:e.name,supertype:e.types,flavorText:e.flavorText,hp:e.hp,images:e.images.small,nationalPokedexNumbers:e.nationalPokedexNumbers}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=n(0),x=function(e){var t=e.images,n=e.name,c=e.id,a=(e.loading,e.supertype),r=e.hp,s=e.flavorText,i=e.nationalPokedexNumbers;return Object(u.jsx)("div",{className:"mx-auto max-w-md  rounded-xl max-h-160 lg:mx-5 my-5 shadow-md overflow-hidden md:max-w-2xl border-4 border-red-400 border-opacity-100",children:Object(u.jsxs)("div",{className:"md:flex",children:[Object(u.jsx)("div",{className:"md:flex-shrink-0 sm:mx-auto",children:Object(u.jsx)("img",{className:"md:h-160 sm:h-96 md:w-full object-cover sm:w-64 md:w-150 sm:mx-auto",src:t,alt:n},c)}),Object(u.jsxs)("div",{className:"p-8 sm:hidden md:block",children:[Object(u.jsxs)("div",{className:"uppercase tracking-wide text-lg text-black-700 font-semibold md:py-4 text-center",children:[n," #",i]}),Object(u.jsx)("a",{href:"/",className:"block mt-1 text-lg leading-tight font-medium text-black hover:underline md:py-2",children:"Type"}),Object(u.jsx)("p",{className:"bg-yellow-600 w-32 text-center font-bold text-white rounded ",children:a}),Object(u.jsx)("a",{href:"/",className:"block mt-1 text-md leading-tight font-medium text-black hover:underline md:py-2",children:"HP"}),Object(u.jsx)("p",{className:"bg-green-400 w-32 text-center font-bold text-white rounded ",children:r}),Object(u.jsx)("a",{href:"/",className:"block mt-1 text-md leading-tight font-medium text-black hover:underline md:pt-3",children:"Description"}),Object(u.jsx)("p",{className:"mt-2 text-gray-800",children:s||"We have no words to describe such a great Pokemon."})]})]},c)})};var j=function(e){var t=e.poke,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){m(e).then((function(e){return r({data:e,loading:!1})}))}),[e]),a}(t),a=n.loading,r=n.data;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"uppercase text-center text-2xl text-bold py-5",children:t}),a&&Object(u.jsx)("p",{className:"text-center",children:"Loading"}),Object(u.jsx)("div",{className:"grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto",children:r.map((function(e){return Object(c.createElement)(x,Object(i.a)(Object(i.a)({},e),{},{key:e.id,loading:a}))}))})]})},b=n(10),h=function(e){var t=e.setPokeDex,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],d=Object(c.useRef)();return Object(c.useEffect)((function(){d.current.focus()}),[]),Object(u.jsx)("div",{className:"text-center mt-4",children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r&&r.trim().length>2&&(t((function(e){return[r].concat(Object(b.a)(e))})),i(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)},ref:d,className:"my-3 py-2 rounded text-center text-black placeholder-gray-600 focus:placeholder-gray-400",placeholder:"Choose your pokemon and press enter..."})})})};var p=function(){var e=Object(c.useState)(["charizard"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{class:"flex flex-wrap justify-center space-x-4 flex-shrink-0 py-5 bg-red-600 text-white",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"h-10 md:w-10",src:"/logo.png",alt:"Man looking at item at a store"})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"PokeCards"})})]}),Object(u.jsx)(h,{setPokeDex:a}),n.map((function(e){return Object(u.jsx)(j,{poke:e},e)}))]})};n(17);r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f904e80f.chunk.js.map