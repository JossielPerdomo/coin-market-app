(this["webpackJsonpreact-coingecko-api"]=this["webpackJsonpreact-coingecko-api"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(5),s=c.n(r),a=c(3),i=c.n(a),o=c(6),j=c(4),d=(c(12),c(0)),h=function(e){var t=e.coin,c=e.index,n=t.price_change_percentage_24h;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c}),Object(d.jsxs)("td",{children:[Object(d.jsx)("img",{src:t.image,alt:t.name,style:{width:"15px"},className:"me-2"}),Object(d.jsx)("span",{children:t.name}),Object(d.jsx)("span",{className:"ms-3 text-muted text-uppercase",children:t.symbol})]}),Object(d.jsxs)("td",{children:["$",t.current_price]}),Object(d.jsxs)("td",{className:n>0?"text-success":"text-danger",children:[n.toFixed(2),"%"]}),Object(d.jsx)("td",{children:t.total_volume})]})},u=function(e){var t=e.coins,c=e.search,n=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(d.jsxs)("table",{className:"table table-dark table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Coin"}),Object(d.jsx)("th",{children:"Price $US"}),Object(d.jsx)("th",{children:"Price Change"}),Object(d.jsx)("th",{children:"24h Volume"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsx)(h,{coin:e,index:t+1},e.id)}))})]})};var l=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),h=a[0],l=a[1],b=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1").then((function(e){return e.json()})).then((function(e){return r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsxs)("h1",{children:["Coin Market ",Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fab fa-bitcoin"})})]}),Object(d.jsx)("input",{type:"text",placeholder:"Search a coin",className:"form-control bg-dark text-light border-0 mt-4 mb-4 text-center",onChange:function(e){return l(e.target.value)}}),Object(d.jsx)(u,{coins:c,search:h})]})};c(14);s.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eec62cdc.chunk.js.map