(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{35:function(e,a,c){},62:function(e,a,c){"use strict";c.r(a);var s=c(0),i=c(1),t=c(27),n=c.n(t),m=(c(35),c(2)),o=c(5);var l=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"nav-con",children:[Object(s.jsx)(o.c,{className:"home-con",exact:!0,activeClassName:"active",to:"/",children:" \u0413\u043b\u0430\u0432\u043d\u0430\u044f  "}),Object(s.jsx)(o.c,{className:"all-con",activeClassName:"active",to:"/all",children:" \u0412\u0441\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u044b "})]})})})};var r=function(e){var a=e.name,c=e.num;return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)(o.b,{to:"name/"+a,children:Object(s.jsxs)("div",{className:"front",children:[Object(s.jsx)("img",{className:"card-img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+c+".png"}),Object(s.jsx)("div",{className:"name-con",children:Object(s.jsx)("div",{className:"name",children:a})})]})})})},j=[{name:"pikachu",num:25},{name:"bulbasaur",num:1},{name:"charmander",num:6},{name:"tyranitar",num:248},{name:"gardevoir",num:282},{name:"rayquaza",num:384},{name:"garchomp",num:445},{name:"sylveon",num:700},{name:"umbreon",num:197},{name:"lugia",num:249},{name:"lucario",num:448},{name:"pidgey",num:16}];var d=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"main-title",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(s.jsx)("hr",{className:"divider"}),Object(s.jsx)("div",{className:"container",children:j.map((function(e){return Object(s.jsx)(r,{name:e.name,num:e.num},e.name)}))})]})},h=c(18),b=c.n(h),p=c(11),O=c(29),x=c(10),v=c(13),u=c.n(v);var N=function(e){var a=e.pokemons;return Object(s.jsx)("ul",{className:"pokemon-list",children:a?a.map((function(e){return Object(s.jsx)(o.b,{className:"pokemon-list-item-container",to:"/name/"+e.name,children:Object(s.jsx)("div",{className:"pokemon-list-item",children:e.name})},e.name)})):Object(s.jsx)("h2",{children:"\u0423\u043f\u0441! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})})};var f=function(e){for(var a=e.postsPerPage,c=e.allPosts,i=e.paginate,t=[],n=1;n<=Math.ceil(c/a);n++)t.push(n);return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"pagination",children:t.map((function(e){return Object(s.jsx)("li",{className:"page-item",children:Object(s.jsx)("div",{onClick:function(){return i(e)},className:"page-link",children:e})},e)}))})})};var k=function(){var e=Object(i.useState)(1),a=Object(x.a)(e,2),c=a[0],t=a[1],n=Object(i.useState)(180),m=Object(x.a)(n,2),o=m[0],l=(m[1],Object(i.useState)({data:[],loading:!0})),r=Object(x.a)(l,2),j=r[0],d=r[1];Object(i.useEffect)((function(){(function(){var e=Object(O.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://pokeapi.co/api/v2/pokemon?limit=9999");case 2:a=e.sent,d(Object(p.a)(Object(p.a)({},j),{},{data:a.data.results.sort((function(e,a){return e.name<a.name?-1:e.name>a.nmae?1:0})),loading:!1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h,v=c*o,k=v-o;return 0!=j.data.length&&(h=j.data.slice(k,v)),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"main-title",children:"\u0412\u0441\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u044b"}),Object(s.jsx)("hr",{className:"divider"}),j.loading?Object(s.jsx)("h1",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(N,{pokemons:h}),Object(s.jsx)(f,{postsPerPage:o,allPosts:j.data.length,paginate:function(e){t(e),window.scrollTo(0,0)}})]})]})};var g=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"card card-no-hover",children:Object(s.jsxs)("div",{className:"front",children:[Object(s.jsx)("img",{className:"card-img",alt:"Pokemon",src:e.link}),Object(s.jsx)("div",{className:"name-con",children:Object(s.jsx)("div",{className:"name",children:e.name})})]})})})},w=c.p+"static/media/no-pokemon.3a5b1bd5.png";var y=function(){var e=Object(m.f)().name,a=Object(i.useState)({data:{},loading:!0}),c=Object(x.a)(a,2),t=c[0],n=c[1];return Object(i.useEffect)((function(){var a="https://pokeapi.co/api/v2/pokemon/"+e;u.a.get(a).then((function(e){var a=[];e.data.types.forEach((function(e,c){0!==a.length&&a.push(", "),a.push(e.type.name)}));var c=[];e.data.stats.forEach((function(e,a){c.push(e.base_stat)}));var s=[];e.data.held_items.forEach((function(e,a){s.push(e.item.name)}));var i=[];e.data.abilities.forEach((function(e,a){i.push(e.ability.name)})),n(Object(p.a)(Object(p.a)({},t),{},{data:{img:e.data.sprites.other["official-artwork"].front_default,height:e.data.height,weight:e.data.weight,type:a,stats:{hp:c[0],attack:c[1],defense:c[2],sp_attack:c[3],sp_defense:c[4],speed:c[5]},items:s,abilities:i},loading:!1}))}))}),[]),Object(s.jsxs)("div",{id:"loading-container",children:[Object(s.jsx)("h2",{className:"main-title",children:e}),Object(s.jsx)("hr",{className:"divider"}),t.loading?Object(s.jsx)("h1",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"single-container",children:[Object(s.jsxs)("div",{className:"card-items-container",children:[Object(s.jsx)(g,{name:e,link:null!=t.data.img?t.data.img:w}),Object(s.jsxs)("div",{className:"pokemon-ico",children:[Object(s.jsxs)("div",{className:"height pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",id:"one",children:[Object(s.jsx)("i",{className:"fas fa-arrows-alt-v pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",id:"two",children:"\u0412\u044b\u0441\u043e\u0442\u0430"})]}),Object(s.jsxs)("div",{className:"pokemon-ico-item-value",children:[t.data.height,"ft"]})]}),Object(s.jsxs)("div",{className:"weight pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-weight-hanging pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",children:"\u0412\u0435\u0441"})]}),Object(s.jsxs)("div",{className:"pokemon-ico-item-value",children:[t.data.weight,"lb"]})]}),Object(s.jsxs)("div",{className:"type pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-paw pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",children:"\u0422\u0438\u043f"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.type.map((function(e){return e}))})]}),Object(s.jsxs)("div",{className:"hp pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-heart pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",children:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.stats.hp})]}),Object(s.jsxs)("div",{className:"attack pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-fist-raised pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign att",children:"\u0410\u0442\u0430\u043a\u0430"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.stats.attack})]}),Object(s.jsxs)("div",{className:"defense pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-shield-alt pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",children:"\u0417\u0430\u0449\u0438\u0442\u0430"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.stats.defense})]}),Object(s.jsxs)("div",{className:"sp-attack pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-hand-sparkles pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",id:"sp-att",children:"\u0421\u043f\u0435\u0446. \u0430\u0442\u0430\u043a\u0430"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.stats.sp_attack})]}),Object(s.jsxs)("div",{className:"sp-defense pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-hamsa pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",children:"\u0421\u043f\u0435\u0446. \u0437\u0430\u0449\u0438\u0442\u0430"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.stats.sp_defense})]}),Object(s.jsxs)("div",{className:"speed pokemon-ico-item",children:[Object(s.jsxs)("div",{className:"pokemon-ico-item-con",children:[Object(s.jsx)("i",{className:"fas fa-running pokemon-ico-item-icon"}),Object(s.jsx)("div",{className:"pokemon-ico-item-sign",children:"C\u043a\u043e\u0440\u043e\u0441\u0442\u044c"})]}),Object(s.jsx)("div",{className:"pokemon-ico-item-value",children:t.data.stats.speed})]})]})]}),Object(s.jsxs)("div",{className:"item-abilities-container",children:[t.data.items.length>0&&Object(s.jsxs)("div",{className:"items-con",children:[Object(s.jsx)("div",{className:"items-title",children:"\u0414\u0435\u0440\u0436\u0438\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"}),t.data.items.map((function(e){return Object(s.jsx)("div",{className:"item",children:e},e)}))]}),t.data.abilities.length>0&&Object(s.jsxs)("div",{className:"abilities-con",children:[Object(s.jsx)("div",{className:"abilities-title",children:"\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"}),t.data.abilities.map((function(e){return Object(s.jsx)("div",{className:"item",children:e},e)}))]})]})]})})]})};var P=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"/all",children:Object(s.jsx)(k,{})}),Object(s.jsx)(m.a,{path:"/name/:name",children:Object(s.jsx)(y,{})}),Object(s.jsx)(m.a,{path:"/",children:Object(s.jsx)(d,{})})]})]})};n.a.render(Object(s.jsxs)(o.a,{basename:"/",children:[" ",Object(s.jsx)(P,{})," "]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c3311ab3.chunk.js.map