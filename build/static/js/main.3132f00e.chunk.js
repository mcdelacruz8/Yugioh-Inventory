(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,c,t){},35:function(e,c,t){},60:function(e,c,t){"use strict";t.r(c);var s=t(1),r=t.n(s),i=t(27),j=t.n(i),a=(t(34),t(35),t(3)),d=t(2),n=t(0),l=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsx)("h1",{children:"It's time to... B-B-B-B-B-B-Buy some cards!!!"}),Object(n.jsxs)("div",{className:"menuCards",children:[Object(n.jsxs)("div",{id:"monsterCards",children:[Object(n.jsx)(d.b,{to:"/cards/monsters",children:Object(n.jsx)("img",{id:"card",src:"/images/backOfCard.png",alt:"backcard icon"})}),Object(n.jsx)(d.b,{to:"/cards/monsters",children:Object(n.jsx)("p",{children:"Monsters"})})]}),Object(n.jsxs)("div",{id:"spellCards",children:[Object(n.jsx)(d.b,{to:"/cards/spells",children:Object(n.jsx)("img",{id:"card",src:"/images/backOfCard.png",alt:"backcard icon"})}),Object(n.jsx)(d.b,{to:"/cards/spells",children:Object(n.jsx)("p",{children:"Spells"})})]}),Object(n.jsxs)("div",{id:"trapCards",children:[Object(n.jsx)(d.b,{to:"/cards/traps",children:Object(n.jsx)("img",{id:"card",src:"/images/backOfCard.png",alt:"backcard icon"})}),Object(n.jsx)(d.b,{to:"/cards/traps",children:Object(n.jsx)("p",{children:"Traps"})})]}),Object(n.jsxs)("div",{id:"shopNow",children:[Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("img",{id:"card",src:"/images/backOfCard.png",alt:"backcard icon"})}),Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})]})]})]})},h=t(9),b=t(10),O=t.n(b),o=function(){var e=Object(s.useState)({}),c=Object(h.a)(e,2),t=c[0],r=c[1],i=Object(a.f)().monsterId;return Object(s.useEffect)((function(){O.a.get("https://swapi.dev/api/people/"+i).then((function(e){r(e.data)})).catch((function(e){r({error:"These are not the droids you are looking for"})}))}),[i]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{class:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{class:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsx)("h1",{children:"MONSTERS"}),Object(n.jsxs)("p",{children:[" ",t.name," "]})]})},x=function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),t=c[0],r=c[1];return Object(s.useEffect)((function(){O.a.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card").then((function(e){r(e.data.data),console.log(e.data.data)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsx)("h1",{children:"SPELLS"}),t.map((function(e,c){return Object(n.jsx)(d.b,{to:"/cards/spells/"+c,children:Object(n.jsxs)("p",{children:["Card Name: ",e.name]})},c)}))]})},p=function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),t=c[0],r=c[1];return Object(s.useEffect)((function(){O.a.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=trap%20card").then((function(e){r(e.data.data),console.log(e.data.data)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsx)("h1",{children:"TRAPS"}),t.map((function(e,c){return Object(n.jsx)(d.b,{to:"/cards/traps/"+c,children:Object(n.jsxs)("p",{children:["Card Name: ",e.name]})},c)}))]})},m=function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),t=(c[0],c[1],Object(s.useState)({})),r=Object(h.a)(t,2),i=r[0],j=r[1],l=Object(a.f)().id;return Object(s.useEffect)((function(){O.a.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card/").then((function(e){j(e.data.data[l])})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)("div",{className:"background",children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsxs)("h1",{children:["Card Name: ",i.name]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{id:"cardimg",children:i.card_images?Object(n.jsx)("img",{src:i.card_images[0].image_url,height:"500px",width:"350px"}):"loading"}),Object(n.jsxs)("div",{id:"rightside",children:[Object(n.jsx)("h2",{children:"Card Description:"}),Object(n.jsx)("div",{id:"description",children:i.desc}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"price",children:["Card Price:",i.card_prices?Object(n.jsxs)("p",{children:["$",i.card_prices[0].tcgplayer_price]}):"loading"]}),Object(n.jsx)("input",{type:"number"}),Object(n.jsx)("button",{children:"Add to Cart"})]})]})]})]})},u=function(){var e=Object(s.useState)({}),c=Object(h.a)(e,2),t=c[0],r=c[1],i=Object(a.f)().id;return Object(s.useEffect)((function(){O.a.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=trap%20card/").then((function(e){r(e.data.data[i])})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)("div",{className:"background",children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsxs)("h1",{children:["Card Name: ",t.name]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{id:"cardimg",children:t.card_images?Object(n.jsx)("img",{src:t.card_images[0].image_url,height:"500px",width:"350px"}):"loading"}),Object(n.jsxs)("div",{id:"rightside",children:[Object(n.jsx)("h2",{children:"Card Description:"}),Object(n.jsx)("div",{id:"description",children:t.desc}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"price",children:["Card Price:",t.card_prices?Object(n.jsxs)("p",{children:["$",t.card_prices[0].tcgplayer_price]}):"loading"]}),Object(n.jsx)("input",{type:"number"}),Object(n.jsx)("button",{children:"Add to Cart"})]})]})]})]})},g=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("input",{id:"search_for_anything",type:"text",placeholder:"   Search for cards..."}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"active",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/cards/shop",children:Object(n.jsx)("p",{children:"Shop"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Help"})})]}),Object(n.jsx)("img",{id:"cart",src:"/images/cart-dark.png",alt:"cart icon"})]}),Object(n.jsx)("h1",{children:"Pretend this is a Shop pls :)"}),Object(n.jsx)("div",{id:"meme",children:Object(n.jsx)("img",{src:"/images/trapcardmeme.jpeg"})})]})};var f=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{path:"/cards/spells/:id",children:Object(n.jsx)(m,{})}),Object(n.jsx)(a.a,{path:"/cards/traps/:id",children:Object(n.jsx)(u,{})}),Object(n.jsx)(a.a,{path:"/cards/monsters",children:Object(n.jsx)(o,{})}),Object(n.jsx)(a.a,{path:"/cards/spells",children:Object(n.jsx)(x,{})}),Object(n.jsx)(a.a,{path:"/cards/traps",children:Object(n.jsx)(p,{})}),Object(n.jsx)(a.a,{path:"/cards/shop",children:Object(n.jsx)(g,{})}),Object(n.jsx)(a.a,{path:"/",children:Object(n.jsx)(l,{})})]})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(c){var t=c.getCLS,s=c.getFID,r=c.getFCP,i=c.getLCP,j=c.getTTFB;t(e),s(e),r(e),i(e),j(e)}))};j.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d.a,{children:Object(n.jsx)(f,{})})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.3132f00e.chunk.js.map