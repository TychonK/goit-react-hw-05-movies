(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[8],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var c=n(33),i=n(0),o=n(2),r=n(32),s=n.n(r),a=n(1);function h(){var e,t=Object(o.g)().movieId,n=Object(i.useState)([]),r=Object(c.a)(n,2),h=r[0],u=r[1];return Object(i.useEffect)((function(){s.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=42eba2050345b62282020883d06ba519&language=en-US&page=1")).then((function(e){return e.data.results})).then((function(e){u(e),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}),[]),e=0===h.length?Object(a.jsx)("p",{children:"There is no reviews for this film yet"}):h.map((function(e,t){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("h3",{children:["Author: ",e.author]}),Object(a.jsx)("p",{children:e.content})]},t)})),Object(a.jsx)("ul",{children:e})}}}]);
//# sourceMappingURL=8.2bc94f99.chunk.js.map