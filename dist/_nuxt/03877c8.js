(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(t,e,n){"use strict";var r=n(2),o=n(221),c=n.n(o);n(344),n(346);r.default.component("VueSlickCarousel",c.a)},161:function(t,e,n){"use strict";var r=n(2),o=n(81);r.default.mixin({data:function(){return{mdiAccount:o.a,mdiChevronRight:o.b,mdiFacebook:o.c,mdiGithub:o.d,mdiGmail:o.e,mdiLinkedin:o.f,mdiMenu:o.g}}})},162:function(t,e,n){"use strict";e.a=function(t,e){e("utils",{abbreviateNumber:function(t){return new Intl.NumberFormat("en-US",{maximumFractionDigits:2,notation:"compact",compactDisplay:"short"}).format(t)},copyToClipboard:function(text){var t=document.createElement("textarea");t.addEventListener("focusin",(function(t){return t.stopPropagation()})),t.value=text,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},currencyFormat:function(t){return t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}})}},163:function(t,e,n){"use strict";var r=n(66);e.a=function(t,e){var n,o,c,l,d,f,h,v;e("web3",{getWeb3Provider:function(){return h},getJsonRPCProvider:function(){return v},getBaconContract:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?l:n},getGreaseContract:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?d:o},getTheFryingPanContract:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?f:c},initWeb3Provider:function(t){h=new r.a.providers.Web3Provider(t)},initJsonRPCProvider:function(t){v=new r.a.providers.JsonRpcProvider(t)},initBaconContract:function(address,t,e,o){n=new r.a.Contract(address,t,e),void 0!==o&&(l=new r.a.Contract(address,t,o))},initGreaseContract:function(address,t,e,n){o=new r.a.Contract(address,t,e),void 0!==n&&(d=new r.a.Contract(address,t,n))},initTheFryingPanContract:function(address,t,e,n){c=new r.a.Contract(address,t,e),void 0!==n&&(f=new r.a.Contract(address,t,n))}})}},165:function(t,e,n){"use strict";e.a=function(t,e){var n;e("nftRepository",(n=t.$axios,{GetStakedTokens:function(t){return n.get("".concat("/v1","/nft/staked-tokens/").concat(t)).then((function(t){return t.data})).catch((function(t){var e=t.response;throw void 0!==(null==e?void 0:e.data)?e.data:{}}))},GetGameStatus:function(){return n.get("".concat("/v1","/nft/game/status")).then((function(t){return t.data})).catch((function(t){var e=t.response;throw void 0!==(null==e?void 0:e.data)?e.data:{}}))}}))}},189:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("63db957c",content,!0,{sourceMap:!1})},194:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0c2ce9ca",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2180a1d5",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));n(41);var r=n(10),o=n(21),c=n(16),l=n(8),d=n(7),f=(n(14),n(11));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).socialMedia=[{title:"Open Sea",link:"/",icon:"/icon/open-sea.svg"},{title:"Twitter",link:"https://twitter.com/stonedapesnft",icon:"/icon/twitter.svg"},{title:"Instagram",link:"https://www.instagram.com/stonedapeclubNFT",icon:"/icon/instagram.svg"},{title:"Discord",link:"https://discord.gg/stonedapeclub",icon:"/icon/Discord.svg"}],t}return n}(f.Vue),y=m=v([f.Component],m),w=n(40),_=n(47),k=n.n(_),x=n(368),O=n(369),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("h1",{staticClass:"body-2 lite_gray--text"},[t._v("Terms of Service")])]),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.smAndDown?"my-5":"",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("h1",{staticClass:"body-2 primary--text text-center font-weight-bold"},[t._v("\n        © 2022 Stoned Ape Club. All rights reserved.\n      ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("div",{staticClass:"d-flex",class:t.$vuetify.breakpoint.smAndDown?"justify-center":"justify-end"},t._l(t.socialMedia,(function(t,i){return n("div",{key:i},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{staticClass:"ml-5",attrs:{src:t.icon}})])])})),0)])],1)],1)}),[],!1,null,null,null),j=component.exports;k()(component,{VCol:x.a,VRow:O.a})},227:function(t,e,n){"use strict";n(41);var r=n(10),o=n(21),c=n(16),l=n(8),d=n(7),f=(n(14),n(11)),footer=n(214),h=n(29),v=(n(31),n(13)),m=n(25);n(70),n(56),n(38);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=Object(f.namespace)("web3"),k=function(t){Object(o.a)(l,t);var e,n,c=y(l);function l(){var t;return Object(r.a)(this,l),(t=c.apply(this,arguments)).walletDialog=!1,t.smartChainBSChainId=56,t.wallets=[{name:"MetaMask",logo:"/logo/wallets/meta-mask.svg",provider:"metamask",css:"metamask--container"}],t}return Object(h.a)(l,[{key:"walletAddress",get:function(){return"".concat(this.web3_wallet_address.substring(0,5),"...").concat(this.web3_wallet_address.substring(this.web3_wallet_address.length-4))}},{key:"connectToWallet",value:(n=Object(m.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,d,f=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.provider,t.next="metamask"===t.t0?3:27;break;case 3:return t.prev=3,t.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:n=t.sent,this.$web3.initWeb3Provider(window.ethereum),this.$web3.initJsonRPCProvider(this.$config.web3JsonRPC),this.switchMetamaskNetwork(),r=Object(v.a)(n,1),o=r[0],this.web3_set_wallet_address(o),this.saveWeb3TrackingFlags(e.provider),this.walletDialog=!1,t.next=22;break;case 16:return t.prev=16,t.t1=t.catch(3),(c=t.t1.message).includes("denied")||c.includes("User rejected the request")?this.$toast.error("You cancelled the transaction"):this.$toast.error(c),this.clearWeb3TrackingFlags(),t.abrupt("return");case 22:return window.ethereum.on("accountsChanged",(function(t){if(0===t.length)return f.clearWeb3TrackingFlags(),void alert("Wallet successfully disconnected");f.clearWeb3TrackingFlags(),alert("Please connect your wallet again."),location.reload()})),window.ethereum.on("chainChanged",(function(t){console.log("chainId",t),location.reload()})),window.ethereum.on("disconnect",(function(code,t){console.log("disconnect",code,t)})),t.abrupt("break",28);case 27:this.$toast.error("Cannot connect to wallet");case 28:l=this.$web3.getWeb3Provider().getSigner(),d=this.$web3.getJsonRPCProvider().getSigner(this.web3_wallet_address),this.$web3.initBaconContract(this.$config.baconContractAddress,this.$config.baconContractABI,l,d),this.$web3.initGreaseContract(this.$config.greaseContractAddress,this.$config.greaseContractABI,l,d),this.$web3.initTheFryingPanContract(this.$config.theFryingPanContractAddress,this.$config.theFryingPanContractABI,l,d);case 33:case"end":return t.stop()}}),t,this,[[3,16]])}))),function(t){return n.apply(this,arguments)})},{key:"clearWeb3TrackingFlags",value:function(){localStorage.removeItem("web3_connect_cached_provider"),localStorage.removeItem("wallet_provider"),this.web3_set_wallet_address("")}},{key:"disconnectWallet",value:function(){confirm("Are you sure you want to disconnect this wallet?")?(this.clearWeb3TrackingFlags(),this.walletDialog=!0):this.walletDialog=!1}},{key:"saveWeb3TrackingFlags",value:function(t){localStorage.setItem("web3_connect_cached_provider","injected"),localStorage.setItem("wallet_provider",t)}},{key:"switchMetamaskNetwork",value:(e=Object(m.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$config.debug){t.next=10;break}return t.prev=1,t.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x4"}]});case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:t.next=20;break;case 10:return t.prev=10,t.next=13,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x4"}]});case 13:t.next=20;break;case 15:t.prev=15,t.t1=t.catch(10),(e=t.t1.message).includes("denied")||e.includes("User rejected the request")?this.$toast.error("You cancelled the transaction"):this.$toast.error(e),this.clearWeb3TrackingFlags();case 20:case"end":return t.stop()}}),t,this,[[1,6],[10,15]])}))),function(){return e.apply(this,arguments)})},{key:"mounted",value:function(){var t=localStorage.getItem("web3_connect_cached_provider"),e=localStorage.getItem("wallet_provider");"header"!==this.component&&"drawer"!==this.component||null===t||"injected"!==t||null===e||"metamask"===e&&this.connectToWallet({provider:e,css:"metamask--container"})}}]),l}(f.Vue);w([_.State("authToken")],k.prototype,"web3_auth_token",void 0),w([_.State("walletAddress")],k.prototype,"web3_wallet_address",void 0),w([_.Action("setAuthToken")],k.prototype,"web3_set_auth_token",void 0),w([_.Action("setWalletAddress")],k.prototype,"web3_set_wallet_address",void 0),w([_.Action("setProvider")],k.prototype,"web3_set_provider",void 0),w([Object(f.Prop)({default:""})],k.prototype,"component",void 0),w([Object(f.Prop)({default:""})],k.prototype,"height",void 0),w([Object(f.Prop)({default:""})],k.prototype,"width",void 0),w([Object(f.Prop)({default:""})],k.prototype,"color",void 0),w([Object(f.Prop)({default:""})],k.prototype,"css",void 0),w([Object(f.Prop)({default:!1})],k.prototype,"outlined",void 0),w([Object(f.Prop)({default:!1})],k.prototype,"tile",void 0),w([Object(f.Prop)({default:!1})],k.prototype,"text",void 0),w([Object(f.Prop)({default:!1})],k.prototype,"block",void 0),w([Object(f.Prop)({default:!1})],k.prototype,"ripple",void 0);var x=k=w([f.Component],k),O=(n(281),n(40)),j=n(47),C=n.n(j),R=n(374),T=n(376),A=n(372),P=n(228),S=n(370),component=Object(O.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"450"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.web3_wallet_address?n("v-btn",t._b({class:t.css,attrs:{dark:"",outlined:t.outlined,text:t.text,tile:t.tile,block:t.block,ripple:t.ripple,color:t.color,height:t.height,width:t.width},on:{click:t.disconnectWallet}},"v-btn",o,!1),[t._v("\n      "+t._s(t.walletAddress)+"\n    ")]):n("v-btn",t._g(t._b({class:t.css,attrs:{dark:"",outlined:t.outlined,text:t.text,tile:t.tile,block:t.block,ripple:t.ripple,color:t.color,height:t.height,width:t.width},on:{change:function(e){t.walletDialog=!0}}},"v-btn",o,!1),r),[t._v("Connect Wallet\n    ")])]}}]),model:{value:t.walletDialog,callback:function(e){t.walletDialog=e},expression:"walletDialog"}},[t._v(" "),n("v-card",{staticClass:"text-center px-10 py-5",attrs:{tile:"",color:"dark_gray"}},[n("div",{},[n("h1",{staticClass:"montserrat--font headline white--text font-weight-bold text-center pt-5"},[t._v("\n        CONNECT YOUR WALLET.\n      ")]),t._v(" "),n("h4",{staticClass:"body-2 width-70 mx-auto lite_gray--text mb-5 text-center pt-1 pb-5 px-2"},[t._v("\n        Connect with one of available wallet providers or create a new wallet\n      ")]),t._v(" "),t._l(t.wallets,(function(e,i){return n("div",{key:i,staticClass:"my-3 mx-3"},[n("v-card",{staticClass:"mx-auto d-flex align-center px-4 white--text",class:e.css,attrs:{link:"","max-width":"351",height:"50"},on:{click:function(n){return t.connectToWallet(e)}}},[n("h4",{staticClass:"body-2 font-weight-regular"},[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-img",{attrs:{src:e.logo,"max-width":"38px"}})],1)],1)}))],2)])],1)}),[],!1,null,null,null),E=component.exports;C()(component,{VBtn:R.a,VCard:T.a,VDialog:A.a,VImg:P.a,VSpacer:S.a});function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var $=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},M=function(t){Object(o.a)(n,t);var e=D(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).isMinting=!1,t.isMintingAndStaking=!1,t}return Object(h.a)(n,[{key:"dialog",get:function(){return this.mintAndStakeDialog},set:function(t){this.$emit("close",t)}},{key:"ifMinting",get:function(){return!!this.isMinting||!!this.isMintingAndStaking}},{key:"clickOutsideDialog",value:function(){this.isMinting||this.isMintingAndStaking||(this.dialog=!1)}}]),n}(f.Vue);$([Object(f.Prop)({default:!1})],M.prototype,"mintAndStakeDialog",void 0),$([Object(f.Prop)({default:!1})],M.prototype,"close",void 0);var I=M=$([f.Component],M),L=n(153),N=Object(O.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{staticClass:"rounded-0",attrs:{width:"513",persistent:t.ifMinting},on:{"click:outside":function(e){return t.clickOutsideDialog()}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"text-center pa-12",attrs:{tile:"",color:"dark_gray"}},[t.isMinting?n("div",{staticClass:"my-5"},[n("v-progress-circular",{attrs:{size:100,color:"primary",indeterminate:""}}),t._v(" "),n("h1",{staticClass:"headline mt-5"},[t._v("MINTING...")])],1):t.isMintingAndStaking?n("div",{staticClass:"my-5"},[n("v-progress-circular",{attrs:{size:100,color:"primary",indeterminate:""}}),t._v(" "),n("h1",{staticClass:"headline mt-5"},[t._v("MINTING AND STAKING...")])],1):n("div",[n("h1",{staticClass:"headline primary--text"},[t._v("REMINDER")]),t._v(" "),n("h2",{staticClass:"body-2 lite_gray--text"},[t._v("\n          You can claim the $GREASE on staked BACON at anytime\n        ")]),t._v(" "),n("h2",{staticClass:"body-2 lite_gray--text my-5 mx-6"},[n("span",{staticClass:"primary--text font-weight-bold"},[t._v("However")]),t._v(" you\n          cannot remove a BACON from the PAN for 2 days after staking it.\n        ")]),t._v(" "),n("v-btn",{staticClass:"white--text text-none",attrs:{tile:"",depressed:"",block:"",height:"40",ripple:!1,color:"primary"}},[t._v("\n          MINT AND STAKE\n        ")])],1)])],1)],1)}),[],!1,null,null,null);N.exports;function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}C()(N,{VBtn:R.a,VCard:T.a,VDialog:A.a,VProgressCircular:L.a});var B=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},F=function(t){Object(o.a)(n,t);var e=W(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).pages=[{name:"index",title:"Home",to:"/"},{name:"users",title:"Users",to:"/users"},{name:"about",title:"About",to:"/about"}],t}return Object(h.a)(n,[{key:"activePage",get:function(){var t,e,n,r;return void 0===(null===(t=this.$route)||void 0===t?void 0:t.name)||null===(null===(e=this.$route)||void 0===e?void 0:e.name)?"":"users-id"===(null===(n=this.$route)||void 0===n?void 0:n.name)?"users":null===(r=this.$route)||void 0===r?void 0:r.name}},{key:"onPageClick",value:function(t){this.$router.push({name:t.name})}}]),n}(f.Vue),V=F=B([Object(f.Component)({components:{ConnectWallet:E}})],F),G=(n(310),n(373)),z=n(375),U=Object(O.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"header__container text-center",class:t.$vuetify.breakpoint.xsOnly?"px-0":"py-1 ",attrs:{fluid:""}},[n("v-app-bar",{staticClass:"my-0",class:t.$vuetify.breakpoint.xsOnly?"":"px-10",attrs:{height:"76",flat:"",color:"transparent"}},[n("a",{staticClass:"pt-2",attrs:{href:"https://www.stonedapeclub.com"}},[n("img",{attrs:{src:"/logo/grand-theft-bacon-logo.png","lazy-src":"/logo/grand-theft-bacon-logo.png",alt:"Grand Theft Bacon Logo",width:"250",height:"62"}})]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("div",{staticClass:"ml-5"},[n("v-btn",{staticClass:"text-capitalized",attrs:{"x-large":"",text:"",href:"https://www.stonedapeclub.com",target:"_blank"}},[t._v("\n          Whitepaper\n        ")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"ml-10"},[n("ConnectWallet",{attrs:{component:"header",height:"44",width:"159",tile:!0,css:"body-2 text-none primary"}})],1)],1)],1)],1)}),[],!1,null,"4983a16a",null),J=U.exports;function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}C()(U,{VAppBar:G.a,VBtn:R.a,VContainer:z.a,VSpacer:S.a});var H=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Y=function(t){Object(o.a)(n,t);var e=K(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(f.Vue),Q=Y=H([Object(f.Component)({components:{Header:J,Footer:footer.a}})],Y),X=n(367),Z=Object(O.a)(Q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("Header"),t._v(" "),n("nuxt")],1)}),[],!1,null,null,null);e.a=Z.exports;C()(Z,{VApp:X.a})},235:function(t,e,n){t.exports=n(236)},264:function(t,e,n){"use strict";n(189)},265:function(t,e,n){var r=n(22)(!1);r.push([t.i,"h1[data-v-44d72329]{font-size:20px}",""]),t.exports=r},270:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("43dee4e4",content,!0,{sourceMap:!1})},271:function(t,e,n){var r=n(22)(!1);r.push([t.i,'#app,#app a,#app div,#app span,#app table,#app tbody,#app td,#app thead,#app tr{font-family:"Montserrat",sans-serif!important}body,html{overflow-x:hidden}#app{background-color:#000}#app .montserrat--font{font-family:"FreeSans",sans-serif!important;font-display:swap}#app .p-relative{position:relative}#app .p-absolute{position:absolute}#app .header-padding{padding:0 70px}#app .padding-width{padding:0 60px}#app .background-gray{background-color:#151515}#app .font-size--8{font-size:8px}#app .font-size--9{font-size:9px}#app .font-size--18{font-size:18px}#app .outlined--container{border:1px solid #999;background-color:transparent}',""]),t.exports=r},281:function(t,e,n){"use strict";n(194)},282:function(t,e,n){var r=n(22)(!1);r.push([t.i,".metamask--container{background:linear-gradient(90deg,#f5841f,#ff5c00 .01%,#ffdc24)!important}.connectwallet--container{background:linear-gradient(90deg,#8d00ff,#392ef7)!important}",""]),t.exports=r},310:function(t,e,n){"use strict";n(201)},311:function(t,e,n){var r=n(22)(!1);r.push([t.i,".header__container[data-v-4983a16a]{max-width:1440px}",""]),t.exports=r},316:function(t,e,n){"use strict";n.r(e);e.default={setStakedListLastTimestamp:function(t,e){t.commit("SET_STAKED_LIST_LAST_TIMESTAMP",e)},setUnstakedListLastTimestamp:function(t,e){t.commit("SET_UNSTAKED_LIST_LAST_TIMESTAMP",e)}}},317:function(t,e,n){"use strict";n.r(e);e.default={}},318:function(t,e,n){"use strict";n.r(e);e.default={SET_STAKED_LIST_LAST_TIMESTAMP:function(t,data){t.stakedListLastTimestamp=data},SET_UNSTAKED_LIST_LAST_TIMESTAMP:function(t,data){t.unstakedListLastTimestamp=data}}},319:function(t,e,n){"use strict";n.r(e);var r={stakedListLastTimestamp:0,unstakedListLastTimestamp:0};e.default=function(){return r}},320:function(t,e,n){"use strict";n.r(e)},321:function(t,e,n){"use strict";n.r(e);e.default={setAuthToken:function(t,e){t.commit("SET_AUTH_TOKEN",e)},setWalletAddress:function(t,e){t.commit("SET_WALLET_ADDRESS",e)}}},322:function(t,e,n){"use strict";n.r(e);e.default={}},323:function(t,e,n){"use strict";n.r(e);e.default={SET_AUTH_TOKEN:function(t,data){t.authToken=data},SET_WALLET_ADDRESS:function(t,data){t.walletAddress=data}}},324:function(t,e,n){"use strict";n.r(e);var r={authToken:"",walletAddress:""};e.default=function(){return r}},325:function(t,e,n){"use strict";n.r(e)},348:function(t,e){},357:function(t,e){},79:function(t,e,n){"use strict";n(41);var r=n(10),o=n(21),c=n(16),l=n(8),d=n(7),f=(n(14),n(11));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).pageNotFound="404 Not Found",t.otherError="An error occurred",t}return n}(f.Vue);v([Object(f.Prop)({default:null})],m.prototype,"error",void 0);var y=m=v([Object(f.Component)({layout:"empty",head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}})],m),w=(n(264),n(40)),_=n(47),k=n.n(_),x=n(367),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"44d72329",null);e.a=component.exports;k()(component,{VApp:x.a})}},[[235,3,1,4]]]);