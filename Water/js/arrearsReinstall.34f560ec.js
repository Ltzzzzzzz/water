(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["arrearsReinstall"],{"0e70":function(e,a,t){"use strict";var s=t("21c4"),l=t.n(s);l.a},"21c4":function(e,a,t){},f41f:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"exchangeForm"},[t("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("填写表单信息")]),t("Picker",{attrs:{required:!0,name:"accountNumber",title:"户号",placeholder:"户号",columns:e.accounts,rules:[{required:!0,message:"请选择户号"}]},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),t("van-field",{staticClass:"required",attrs:{disabled:"",name:"region",label:"区域",placeholder:"区域",rules:[{required:!0,message:"区域为必填项"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),t("van-field",{attrs:{disabled:"",name:"userName",label:"用户名",placeholder:"用户名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),t("van-field",{staticClass:"required",attrs:{disabled:"",name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),t("van-field",{attrs:{disabled:"",name:"userStatus",label:"用户状态",placeholder:"用户状态"},model:{value:e.userStatus,callback:function(a){e.userStatus=a},expression:"userStatus"}}),t("van-field",{staticClass:"required",attrs:{name:"contact",label:"联系人",placeholder:"联系人",rules:[{required:!0,message:"请填联系人"}]},model:{value:e.contact,callback:function(a){e.contact=a},expression:"contact"}}),t("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),t("van-field",{attrs:{type:"tel",name:"tell",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tell,callback:function(a){e.tell=a},expression:"tell"}})],1),t("div",{staticClass:"submit"},[t("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},l=[],r={name:"arrearsReinstall",data:function(){return{accounts:["12345678","87654321","34567893","67890432"],accountNumber:"",region:"",userName:"",address:"",userStatus:"",contact:"",tell:"",phoneNumber:""}},methods:{onSubmit:function(e){},accountNumberChange:function(){},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},n=r,u=(t("0e70"),t("2877")),c=Object(u["a"])(n,s,l,!1,null,"7870479a",null);a["default"]=c.exports}}]);