(this["webpackJsonpreact-testing"]=this["webpackJsonpreact-testing"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(16),a=c.n(s),r=(c(22),c(17)),l=c(3),o=(c(23),c(24),c(6)),d=c.n(o),j=c(0),u=function(e){var t=e.searchTerm,c=e.setSearchTerm;return Object(j.jsx)("div",{className:"field-group",children:Object(j.jsx)("label",{className:"d-block",children:Object(j.jsx)("input",{className:"form-control",type:"text",value:t,name:"term",placeholder:"Search term",onChange:function(e){c(e.target.value)}})})})},b=function(e){var t=e.genre;return Object(j.jsx)("option",{name:t.name,value:t.id,children:t.name},t.id)},m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b3a999b7703140535e95baeff2e338fa&language=en-US").then((function(e){return e.data.genres})).then((function(e){i(e)}))}),[]),Object(j.jsx)("div",{className:"field-group mb-2",children:Object(j.jsxs)("select",{defaultValue:"all",className:"form-control",children:[Object(j.jsx)("option",{name:"all",value:"all",children:"All"},0),c.map((function(e){return Object(j.jsx)(b,{genre:e},e.id)}))]})})},v=function(e){var t=e.setMovies,c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],a=i[1],r=Object(n.useState)(!0),o=Object(l.a)(r,2),b=o[0],v=o[1];Object(n.useEffect)((function(){v(!s)}),[s]);return Object(j.jsxs)("form",{className:"movie-search-form",onSubmit:function(e){var c=e.target[0];(function(e){return d.a.get("https://api.themoviedb.org/3/search/movie?api_key=b3a999b7703140535e95baeff2e338fa&query=".concat(e,"&sort")).then((function(e){return e.data.results}))})(e.target[1].value).then((function(e){var n=e;"all"!==c.value&&(n=function(e,t){var c=parseInt(t);return e.filter((function(e){return e.genre_ids.indexOf(c)>-1}))}(e,c.value)),t(n)})),e.preventDefault()},children:[Object(j.jsx)(m,{}),Object(j.jsx)(u,{searchTerm:s,setSearchTerm:a}),Object(j.jsx)("div",{className:"field-group",children:Object(j.jsx)("button",{disabled:b,className:"btn btn-primary",type:"submit",children:"Search"})})]})},h=function(e){var t=e.detailsExpanded,c=e.movie,n="movie-list-entry-details";return t||(n+=" collapse"),Object(j.jsxs)("div",{id:"MovieListEntry"+c.id,className:n,children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+c.poster_path}),Object(j.jsx)("p",{children:c.overview})]})},O=function(e){var t=e.movie,c=e.addMovieToWatchlist,i=Object(n.useState)(!1),s=Object(l.a)(i,2),a=s[0],r=s[1],o=new Date(t.release_date);o=o.getFullYear();return Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("button",{className:"btn btn-link mb-0",onClick:function(e){r(!a)},children:t.title+" ("+o+")"}),Object(j.jsx)("button",{className:"add-to-watchlist btn btn-link",onClick:function(){c(t)},children:"+ Watchlist"})]}),Object(j.jsx)(h,{detailsExpanded:a,movie:t,addMovieToWatchlist:c})]},t.id)},f=function(e){var t=e.movies,c=e.addMovieToWatchlist;return Object(j.jsx)("div",{className:"mt-3",children:t.length?Object(j.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(j.jsx)(O,{movie:e,addMovieToWatchlist:c},e.id)}))}):Object(j.jsx)("p",{children:"No results"})})},x=function(e){var t=e.addMovieToWatchlist,c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],a=i[1];return Object(j.jsxs)("div",{className:"movie-search p-4 rounded",children:[Object(j.jsx)("h2",{className:"mb-3",children:"Movie Search"}),Object(j.jsx)(v,{setMovies:a}),Object(j.jsx)(f,{movies:s,addMovieToWatchlist:t})]})},p=function(e){var t=e.detailsExpanded,c=e.movie,n="movie-list-entry-details";return t||(n+=" collapse"),Object(j.jsxs)("div",{id:"MovieListEntry"+c.id,className:n,children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+c.poster_path}),Object(j.jsx)("p",{children:c.overview})]})},g=function(e){var t=e.movie,c=e.removeMovieFromWatchlist,i=Object(n.useState)(!1),s=Object(l.a)(i,2),a=s[0],r=s[1],o=new Date(t.release_date);o=o.getFullYear();return Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("button",{className:"d-inline btn btn-link mb-0",onClick:function(e){r(!a)},children:t.title+" ("+o+")"}),Object(j.jsx)("button",{className:"remove-from-watchlist d-inline btn btn-link",onClick:function(){return c(t)},children:"Remove"})]}),Object(j.jsx)(p,{detailsExpanded:a,movie:t})]},t.id)},N=function(e){var t=e.movies,c=e.removeMovieFromWatchlist;return Object(j.jsx)("div",{className:"mt-3",children:t.length?Object(j.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(j.jsx)(g,{movie:e,removeMovieFromWatchlist:c},e.id)}))}):Object(j.jsx)("p",{children:"No results"})})},M=function(e){var t=e.movies,c=e.removeMovieFromWatchlist;return Object(j.jsxs)("div",{className:"watchlist p-4 rounded",children:[Object(j.jsx)("h2",{className:"mb-3",children:"Watchlist"}),Object(j.jsx)(N,{movies:t,removeMovieFromWatchlist:c})]})};var S=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"main-header",children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("strong",{children:"cherryCordial: "}),"Movie db"]})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-7",children:Object(j.jsx)(x,{addMovieToWatchlist:function(e){c.includes(e)||i((function(t){return[].concat(Object(r.a)(t),[e])}))}})}),Object(j.jsx)("div",{className:"col-5",children:Object(j.jsx)(M,{movies:c,removeMovieFromWatchlist:function(e){i(c.filter((function(t){return t.id!==e.id})))}})})]})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),W()}},[[44,1,2]]]);
//# sourceMappingURL=main.ad423b9f.chunk.js.map