webpackJsonp([2],{"+e9Q":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("GiK3"),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"_handleClick",value:function(){this.setState({count:++this.state.count})}},{key:"render",value:function(){var e=this;return u.default.createElement("div",null,"this is home~sss",u.default.createElement("br",null),"当前计数：",this.state.count,u.default.createElement("br",null),u.default.createElement("button",{onClick:function(){return e._handleClick()}},"自增"))}}]),t}(),a=c;t.default=a;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"Home","/Users/trust/Project/react-mc/src/pages/Home/Home.js"),__REACT_HOT_LOADER__.register(a,"default","/Users/trust/Project/react-mc/src/pages/Home/Home.js"))}});