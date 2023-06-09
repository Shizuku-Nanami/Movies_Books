"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_eventsMixin=_interopRequireDefault(require("../helpers/eventsMixin")),_props=require("./props");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(n,!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function getOptions(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(e,t){return"string"==typeof e?{title:e,value:e,index:t}:_objectSpread({},e,{index:t})})}(0,_baseComponent.default)({useField:!0,behaviors:[(0,_eventsMixin.default)()],relations:{"../field/index":{type:"ancestor"},"../radio/index":{type:"child",observer:function(){this.callDebounceFn(this.changeValue)}}},properties:_props.props,data:{inputValue:"",keys:[]},observers:_defineProperty({value:function(e){this.hasFieldDecorator||(this.updated(e),this.changeValue(e))},inputValue:function(e){this.hasFieldDecorator&&this.changeValue(e)}},"options, disabled, readOnly, prefixCls",function(e,t,n,i){this.changeValue(this.data.inputValue,e,t,n,i)}),methods:{updated:function(e){this.data.inputValue!==e&&this.setData({inputValue:e})},changeValue:function(e,t,n,i,a){var o=this,u=0<arguments.length&&void 0!==e?e:this.data.inputValue,r=1<arguments.length&&void 0!==t?t:this.data.options,l=2<arguments.length&&void 0!==n?n:this.data.disabled,s=3<arguments.length&&void 0!==i?i:this.data.readOnly,c=4<arguments.length&&void 0!==a?a:this.data.prefixCls,d=getOptions(r);wx.nextTick(function(){!function(e){var a=[];if(e&&0<e.length){var r=e.length-1;e.forEach(function(e,t){var n=u===e.data.value,i=t===r;e.changeValue(n,t,i,{disabled:l,readOnly:s}),a.push(e.data)})}o.data.keys!==a&&o.setData({keys:a})}(0<d.length?o.selectAllComponents(".".concat(c,"__radio")):o.getRelationNodes("../radio/index"))})},onChange:function(e){this.triggerEvent("change",_objectSpread({},e,{},this.getValue(e.value),{name:this.data.name,value:e.value}))},onRadioChange:function(e){var t=e.currentTarget.dataset.index;this.onChange(_objectSpread({},e.detail,{index:t}))},getValue:function(e,t){var n=0<arguments.length&&void 0!==e?e:this.data.inputValue,i=1<arguments.length&&void 0!==t?t:this.data.keys,a=n?[n]:[],r=i.filter(function(e){return a.includes(e.value)}).map(function(e){return e.title})||[],o=i.map(function(e){return e.value}),u=a.map(function(e){return o.indexOf(e)});return{value:n,displayValue:null!=r[0]?r[0]:"",selectedIndex:null!=u[0]?u[0]:-1,selectedValue:n,cols:i}},getBoundingClientRect:function(e){return this.cellGroup=this.cellGroup||this.selectComponent("#wux-cell-group"),this.cellGroup&&this.cellGroup.getBoundingClientRect(e)}}});