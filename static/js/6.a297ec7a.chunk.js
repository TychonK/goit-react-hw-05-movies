(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{69:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var r=n(36);var i=n(37);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(33),c=n(5),u=n(0),s=n(32),b=n.n(s),d=n(1);function f(){var t,e=Object(u.useState)([]),n=Object(o.a)(e,2),r=n[0],i=n[1];return Object(u.useEffect)((function(){b.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=42eba2050345b62282020883d06ba519").then((function(t){return t.data.results})).then((function(t){i(a(t))}))}),[]),t=r.map((function(t,e){return Object(d.jsx)("li",{id:t.id,children:Object(d.jsx)(c.b,{to:"/movies/".concat(t.id),children:t.original_title})},e)})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Trending Today:"}),Object(d.jsx)("ul",{children:t})]})}}}]);
//# sourceMappingURL=6.a297ec7a.chunk.js.map