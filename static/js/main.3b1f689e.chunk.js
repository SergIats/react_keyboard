(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),c=n(4),r=n(5),o=n(7),i=n(6),u=n(1),d=n(0),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={message:"Nothing was pressed yet"},e.keyboardClick=function(t){e.setState({message:"The last pressed key is [".concat(t.key,"]")})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.keyboardClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.keyboardClick)}},{key:"render",value:function(){var e=this.state.message;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e})})}}]),n}(u.Component);n(13);s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3b1f689e.chunk.js.map