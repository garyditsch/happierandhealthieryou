webpackJsonp([0x7c54adfd08ad],{74:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(3),u=l(n),r=a(14),s=l(r),c=function(e){var t=e.data.allContentfulLesson.edges;return u.default.createElement("aside",{className:"menu"},u.default.createElement("p",{className:"menu-label"},"Menu"),u.default.createElement("ul",{className:"menu-list"},u.default.createElement("li",null,u.default.createElement(s.default,{to:"/why"},"Why")),u.default.createElement("li",null,u.default.createElement(s.default,{to:"/blog"},"Blog")),u.default.createElement("li",null,u.default.createElement(s.default,{to:"/about"},"About")),u.default.createElement("li",null,u.default.createElement("a",{href:"https://gumroad.com/l/happierandhealthieryou/free"},u.default.createElement("span",{className:"icon"},u.default.createElement("i",{className:"fas fa-download"})),u.default.createElement("span",null,"Download")))),u.default.createElement("p",{className:"menu-label"},"Listen to Lessons"),u.default.createElement("ul",{className:"menu-list"},u.default.createElement("a",{href:t[0].node.youtube},u.default.createElement("li",null,u.default.createElement("span",{className:"icon"},u.default.createElement("i",{className:"fab fa-youtube-square "}))," YouTube")),u.default.createElement("a",{href:t[0].node.soundcloud,className:"menu-list"},u.default.createElement("li",null,u.default.createElement("span",{className:"icon"},u.default.createElement("i",{className:"fab fa-soundcloud "}))," Soundcloud"))),u.default.createElement("p",{className:"menu-label"},"Weekly Menu"),u.default.createElement("ul",{className:"menu-list"},t.map(function(e,t){return u.default.createElement(s.default,{to:e.node.slug},u.default.createElement("li",null,e.node.title))})))};t.default=c,e.exports=t.default},212:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(3),c=l(s),o=a(7),d=l(o),f=a(74),m=l(f),i=function(e){function t(){return n(this,t),u(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data.contentfulLesson,t=e.title,a=e.content,l=e.week;return c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"columns"},c.default.createElement("div",{className:"column"},c.default.createElement("progress",{className:"progress is-medium is-dark",value:l,max:"13"}),c.default.createElement("div",{className:"content lesson-content"},c.default.createElement("h1",null,t),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:a.childMarkdownRemark.html}}))),c.default.createElement("div",{className:"column is-one-fifth"},c.default.createElement(m.default,{data:this.props.data})))))},t}(s.Component);i.PropTypes={data:d.default.object.isRequired},t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-lesson-js-1a01d783ba6bc3570f68.js.map