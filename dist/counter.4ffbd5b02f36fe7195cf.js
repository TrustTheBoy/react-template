webpackJsonp([3],{"0WGl":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("GiK3"),u=function(e){return e&&e.__esModule?e:{default:e}}(o),c=r("oTjF"),s=r("RH2O"),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){var e=this;return u.default.createElement("div",null,u.default.createElement("div",null,"当前计数为",this.props.counter.count),u.default.createElement("button",{onClick:function(){return e.props.increment()}},"自增"),u.default.createElement("button",{onClick:function(){return e.props.decrement()}},"自减"),u.default.createElement("button",{onClick:function(){return e.props.reset()}},"重置"))}}]),t}(),a=function(e){return{counter:e.counter}},f=function(e){return{increment:function(){e((0,c.increment)())},decrement:function(){e((0,c.decrement)())},reset:function(){e((0,c.reset)())}}},l=(0,s.connect)(a,f)(i);t.default=l;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Counter","/Users/trust/Project/react-mc/src/pages/Counter/Counter.js"),__REACT_HOT_LOADER__.register(a,"mapStateToProps","/Users/trust/Project/react-mc/src/pages/Counter/Counter.js"),__REACT_HOT_LOADER__.register(f,"mapDispatchToProps","/Users/trust/Project/react-mc/src/pages/Counter/Counter.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/trust/Project/react-mc/src/pages/Counter/Counter.js"))}});