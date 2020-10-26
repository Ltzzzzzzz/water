(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"59d3":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"exchangeForm"},[t("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("填写表单信息")]),t("Picker",{attrs:{required:!0,name:"region",title:"区域",placeholder:"区域",columns:e.regions,rules:[{required:!0,message:"请选择区域"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),t("van-field",{attrs:{type:"digit",name:"accountNumber",label:"户号",placeholder:"户号"},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),t("van-field",{staticClass:"required",attrs:{name:"userName",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填用户名"}]},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),t("van-field",{staticClass:"required",attrs:{name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),t("van-field",{staticClass:"required",attrs:{name:"contacter",label:"联系人",placeholder:"联系人"},model:{value:e.contacter,callback:function(a){e.contacter=a},expression:"contacter"}}),t("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),t("van-field",{attrs:{type:"tel",name:"tellNumber",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tellNumber,callback:function(a){e.tellNumber=a},expression:"tellNumber"}}),t("van-field",{staticClass:"required",attrs:{rows:"2",name:"remark",autosize:"",label:"情况说明",type:"textarea",maxlength:"50",placeholder:"情况说明","show-word-limit":"",rules:[{required:!0,message:"请填情况说明"}]},model:{value:e.remark,callback:function(a){e.remark=a},expression:"remark"}})],1),t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("所需资料证件上传")]),t("PhotoUpload",{attrs:{name:"otherFiles",label:"请添加《其他文件》",placeholder:"其他相关文件可在此添加"}})],1),t("div",{staticClass:"submit"},[t("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},l=[],s={name:"suggest",data:function(){return{regions:["石岐","东区","西区","北区"],region:"",accountNumber:"",userName:"",address:"",contacter:"",phoneNumber:"",remark:""}},methods:{onSubmit:function(e){},accountNumberChange:function(){},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},i=s,n=(t("7958"),t("2877")),o=Object(n["a"])(i,r,l,!1,null,"8276ce72",null);a["default"]=o.exports},"5b02":function(e,a,t){e.exports=t.p+"img/photo.d9f34302.png"},"739a":function(e,a,t){},7958:function(e,a,t){"use strict";var r=t("739a"),l=t.n(r);l.a},"94ed":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"exchangeForm"},[t("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("填写表单信息")]),t("Picker",{attrs:{required:!0,name:"accountNumber",title:"户号",placeholder:"户号",columns:e.accounts,rules:[{required:!0,message:"请选择户号"}]},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),t("van-field",{staticClass:"required",attrs:{disabled:"",name:"region",label:"区域",placeholder:"区域",rules:[{required:!0,message:"区域为必填项"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),t("van-field",{attrs:{disabled:"",name:"userName",label:"用户名",placeholder:"用户名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),t("van-field",{staticClass:"required",attrs:{disabled:"",name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),t("van-field",{staticClass:"required",attrs:{name:"contacter",label:"联系人",placeholder:"联系人"},model:{value:e.contacter,callback:function(a){e.contacter=a},expression:"contacter"}}),t("Picker",{attrs:{required:!0,name:"typeOfCertificate",title:"证件类型",placeholder:"证件类型",columns:e.certificates,rules:[{required:!0,message:"请选择证件类型"}]},model:{value:e.typeOfCertificate,callback:function(a){e.typeOfCertificate=a},expression:"typeOfCertificate"}}),t("van-field",{staticClass:"required",attrs:{name:"certificate",label:"证件号码",placeholder:"证件号码",rules:[{required:!0,message:"请填证件号码"}]},model:{value:e.certificate,callback:function(a){e.certificate=a},expression:"certificate"}}),t("van-field",{staticClass:"required",attrs:{name:"mailingAddress",label:"通讯地址",placeholder:"通讯地址",rules:[{required:!0,message:"请填通讯地址"}]},model:{value:e.mailingAddress,callback:function(a){e.mailingAddress=a},expression:"mailingAddress"}}),t("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),t("van-field",{staticClass:"required",attrs:{type:"digit",name:"verificationCode",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填验证码"}]},scopedSlots:e._u([{key:"button",fn:function(){return[t("van-button",{attrs:{block:"",size:"mini",type:"primary",text:"发送验证码","native-type":"button"}})]},proxy:!0}]),model:{value:e.verificationCode,callback:function(a){e.verificationCode=a},expression:"verificationCode"}}),t("van-field",{attrs:{type:"tel",name:"tellNumber",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tellNumber,callback:function(a){e.tellNumber=a},expression:"tellNumber"}}),t("van-field",{attrs:{name:"email",label:"Email",placeholder:"Email",rules:[{validator:e.emailReg,message:"请填正确的邮箱"}]},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("所需资料证件上传")]),t("PhotoUpload",{attrs:{name:"idCardPositive",label:"请添加《身份证》(正面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.positive,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(正面)的照片"}]}}),t("PhotoUpload",{attrs:{name:"idCardBack",label:"请添加《身份证》(反面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.back,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(反面)的照片"}]}}),t("PhotoUpload",{attrs:{name:"holdIdCard",label:"请添加《手持身份证照》",image:e.photo,maxcount:1,required:!0,rules:[{required:!0,message:"请添加手持身份证的照片"}]}}),t("PhotoUpload",{attrs:{name:"otherDocuments",label:"请添加《其他证件》",placeholder:"其他相关证明、证件可在此添加"}}),t("Signature",{attrs:{required:!0,name:"signature",label:"请添加《个人签名》",rules:[{required:!0,message:"请添加《个人签名》"}]}})],1),t("div",{staticClass:"submit"},[t("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},l=[],s=t("e8c3"),i=t.n(s),n=t("ae5c"),o=t.n(n),c=t("5b02"),u=t.n(c),d={name:"contact",data:function(){return{positive:i.a,back:o.a,photo:u.a,accounts:["12345678","87654321","34567893","67890432"],certificates:["身份证","营业执照","港澳通行证","港澳身份证","护照","军官证","其他证件"],accountNumber:"",region:"",userName:"",address:"",contacter:"",typeOfCertificate:"",certificate:"",mailingAddress:"",tellNumber:"",phoneNumber:"",verificationCode:"",email:""}},methods:{onSubmit:function(e){},accountNumberChange:function(){},emailReg:function(e){if(e)return/^([a-zA-Z\d])(\w|-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/.test(e)},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},m=d,p=(t("f645"),t("2877")),b=Object(p["a"])(m,r,l,!1,null,"369298af",null);a["default"]=b.exports},ae5c:function(e,a,t){e.exports=t.p+"img/back.ab619f43.png"},e8c3:function(e,a,t){e.exports=t.p+"img/positive.e2d27c0b.png"},ee29:function(e,a,t){},f645:function(e,a,t){"use strict";var r=t("ee29"),l=t.n(r);l.a}}]);