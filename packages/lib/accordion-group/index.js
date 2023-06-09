"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}(0,_baseComponent.default)({relations:{"../accordion/index":{type:"child",observer:function(){this.callDebounceFn(this.updated)}}},properties:{prefixCls:{type:String,value:"wux-accordion-group"},cellGroupPrefixCls:{type:String,value:"wux-cell-group"},defaultCurrent:{type:Array,value:[]},current:{type:Array,value:[],observer:function(t){this.data.controlled&&this.updated(t)}},controlled:{type:Boolean,value:!1},accordion:{type:Boolean,value:!1},title:{type:String,value:""},label:{type:String,value:""},mode:{type:String,value:"default"},bodyStyle:{type:[String,Object],value:""}},data:{activeKey:"",keys:[]},methods:{updated:function(t){var e=0<arguments.length&&void 0!==t?t:this.data.activeKey;this.data.activeKey!==e&&this.setData({activeKey:e}),this.changeCurrent(e)},changeCurrent:function(n){var i=this,t=this.getRelationNodes("../accordion/index");0<t.length&&t.forEach(function(t,e){var a=t.data.key||String(e),r=i.data.accordion?n[0]===a:-1!==n.indexOf(a);t.changeCurrent(r,a)}),this.data.keys.length!==t.length&&this.setData({keys:t.map(function(t){return t.data})})},emitEvent:function(t){this.triggerEvent("change",{key:t,keys:this.data.keys})},setActiveKey:function(t){this.data.controlled||this.updated(t),this.emitEvent(this.data.accordion?t[0]:t)},onClickItem:function(e){var t=_toConsumableArray(this.data.activeKey);t=this.data.accordion?t[0]===e?[]:[e]:-1!==t.indexOf(e)?t.filter(function(t){return t!==e}):[].concat(_toConsumableArray(t),[e]),this.setActiveKey(t)}},ready:function(){var t=this.data,e=t.defaultCurrent,a=t.current,r=t.controlled?a:e;this.updated(r)}});