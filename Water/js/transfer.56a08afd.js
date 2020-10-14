(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["transfer"],{"01fe":function(e,a,r){"use strict";var t=r("5c8e"),l=r.n(t);l.a},"0316":function(e,a,r){},"0ddf":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"exchangeForm"},[r("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[r("div",{staticClass:"infoWrapper"},[r("h4",{staticClass:"title"},[e._v("填写表单信息")]),r("Picker",{attrs:{required:!0,name:"region",title:"区域",placeholder:"区域",columns:e.regions,rules:[{required:!0,message:"请选择区域"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),r("van-field",{attrs:{type:"digit",name:"accountNumber",label:"户号",placeholder:"户号"},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),r("van-field",{staticClass:"required",attrs:{name:"originUserName",label:"原用户名",placeholder:"原用户名",rules:[{required:!0,message:"请填原用户名"}]},model:{value:e.originUserName,callback:function(a){e.originUserName=a},expression:"originUserName"}}),r("van-field",{staticClass:"required",attrs:{name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),r("van-field",{attrs:{disabled:"",type:"number",name:"currentPeriod",label:"本期行至",placeholder:"本期行至"},model:{value:e.currentPeriod,callback:function(a){e.currentPeriod=a},expression:"currentPeriod"}}),r("van-field",{attrs:{disabled:"",name:"currentPeriodDate",label:"本期抄表日",placeholder:"本期抄表日"},model:{value:e.currentPeriodDate,callback:function(a){e.currentPeriodDate=a},expression:"currentPeriodDate"}}),r("van-field",{staticClass:"required",attrs:{name:"newUserName",label:"新用户名",placeholder:"新用户名",rules:[{required:!0,message:"请填新用户名"}]},model:{value:e.newUserName,callback:function(a){e.newUserName=a},expression:"newUserName"}}),r("Picker",{attrs:{required:!0,name:"typeOfCertificate",title:"新证件类型",placeholder:"新证件类型",columns:e.certificates,rules:[{required:!0,message:"请选择证件类型"}]},model:{value:e.typeOfCertificate,callback:function(a){e.typeOfCertificate=a},expression:"typeOfCertificate"}}),r("van-field",{staticClass:"required",attrs:{name:"certificate",label:"证件号码",placeholder:"证件号码",rules:[{required:!0,message:"请填证件号码"}]},model:{value:e.certificate,callback:function(a){e.certificate=a},expression:"certificate"}}),r("van-field",{staticClass:"required",attrs:{name:"newContact",label:"新联系人",placeholder:"新联系人",rules:[{required:!0,message:"请填新联系人"}]},model:{value:e.newContact,callback:function(a){e.newContact=a},expression:"newContact"}}),r("van-field",{attrs:{type:"tel",name:"newTell",label:"新联系电话",placeholder:"新联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.newTell,callback:function(a){e.newTell=a},expression:"newTell"}}),r("van-field",{staticClass:"required",attrs:{type:"tel",name:"newPhoneNumber",label:"新手机号码",placeholder:"新手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.newPhoneNumber,callback:function(a){e.newPhoneNumber=a},expression:"newPhoneNumber"}}),r("van-field",{staticClass:"required",attrs:{type:"digit",name:"verificationCode",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填验证码"}]},scopedSlots:e._u([{key:"button",fn:function(){return[r("van-button",{attrs:{block:"",size:"mini",type:"primary",text:"发送验证码","native-type":"button"}})]},proxy:!0}]),model:{value:e.verificationCode,callback:function(a){e.verificationCode=a},expression:"verificationCode"}}),r("Picker",{attrs:{required:!0,name:"bank",title:"新开户银行",placeholder:"新开户银行",columns:e.banks,rules:[{required:!0,message:"请选择新开户银行"}]},model:{value:e.bank,callback:function(a){e.bank=a},expression:"bank"}}),r("van-field",{staticClass:"required",attrs:{type:"digit",name:"bankCode",label:"新银行账号",placeholder:"新银行账号",rules:[{required:!0,message:"请填新银行账号"}]},model:{value:e.bankCode,callback:function(a){e.bankCode=a},expression:"bankCode"}}),r("van-field",{staticClass:"required",attrs:{name:"newAccountName",label:"新开户人名称",placeholder:"新开户人名称",rules:[{required:!0,message:"请填新开户人名称"}]},model:{value:e.newAccountName,callback:function(a){e.newAccountName=a},expression:"newAccountName"}}),r("van-field",{attrs:{rows:"2",name:"remark",autosize:"",label:"备注",type:"textarea",maxlength:"50",placeholder:"备注","show-word-limit":""},model:{value:e.remark,callback:function(a){e.remark=a},expression:"remark"}})],1),r("div",{staticClass:"infoWrapper"},[r("h4",{staticClass:"title"},[e._v("所需资料证件上传")]),r("PhotoUpload",{attrs:{name:"idCardPositive",label:"请添加《身份证》(正面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.positive,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(正面)的照片"}]}}),r("PhotoUpload",{attrs:{name:"idCardBack",label:"请添加《身份证》(反面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.back,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(反面)的照片"}]}}),r("PhotoUpload",{attrs:{name:"holdIdCard",label:"请添加《手持身份证照》",image:e.photo,maxcount:1,required:!0,rules:[{required:!0,message:"请添加手持身份证的照片"}]}}),r("PhotoUpload",{attrs:{name:"proofOfHouse",label:"请添加《产权证明》",placeholder:"如房产证、不动产证、土地证、备案表等，请提供原件照片",required:!0,rules:[{required:!0,message:"请添加《产权证明》"}]}}),r("PhotoUpload",{attrs:{name:"bankCard",label:"请添加《银行卡》",placeholder:"如选择银行代扣,请填写开户行，开户名，账号等信息，并上传银行卡照片",image:e.bankImage,required:!0,rules:[{required:!0,message:"请添加《银行卡》的照片"}]}}),r("PhotoUpload",{attrs:{name:"businessLicense",label:"请添加《营业执照》",placeholder:"单位用户请提供原件照片"}}),r("PhotoUpload",{attrs:{name:"withholding",label:"请添加《代扣人身份证》",placeholder:"如代扣人与户主身份信息不同,请添加代扣人身份证正反面"}}),r("PhotoUpload",{attrs:{name:"businessForm",label:"请添加《业务受理表》",placeholder:"单位用户请上传加盖公章的业务受理表"}}),r("PhotoUpload",{attrs:{name:"otherDocuments",label:"请添加《其他证件》",placeholder:"其他相关证明、证件可在此添加"}}),r("Signature",{attrs:{required:!0,name:"signature",label:"请添加《个人签名》",rules:[{required:!0,message:"请添加《个人签名》"}]}})],1),r("div",{staticClass:"submit"},[r("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},l=[],n=r("e8c3"),s=r.n(n),i=r("ae5c"),o=r.n(i),c=r("5b02"),u=r.n(c),d=r("ca4f"),m=r.n(d),b={name:"transfer",data:function(){return{positive:s.a,back:o.a,photo:u.a,bankImage:m.a,regions:["石岐","东区","西区","北区"],certificates:["身份证","营业执照","港澳通行证","港澳身份证","护照","军官证","其他证件"],banks:["农商银行","广发银行","建设银行","工商银行","交通银行","农业银行","中国银行","交通银行","邮政储蓄","招商银行"],region:"",accountNumber:"",originUserName:"",address:"",currentPeriod:"",currentPeriodDate:"",newUserName:"",typeOfCertificate:"",certificate:"",newContact:"",newTell:"",newPhoneNumber:"",verificationCode:"",bank:"",bankCode:"",newAccountName:"",remark:""}},methods:{onSubmit:function(e){},accountNumberChange:function(){},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},p=b,f=(r("0e3c"),r("2877")),h=Object(f["a"])(p,t,l,!1,null,"7d49050e",null);a["default"]=h.exports},"0e3c":function(e,a,r){"use strict";var t=r("0316"),l=r.n(t);l.a},"5b02":function(e,a,r){e.exports=r.p+"img/photo.d9f34302.png"},"5c8e":function(e,a,r){},ae5c:function(e,a,r){e.exports=r.p+"img/back.ab619f43.png"},ca4f:function(e,a,r){e.exports=r.p+"img/bank.cba49524.png"},e8c3:function(e,a,r){e.exports=r.p+"img/positive.e2d27c0b.png"},f88c:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"exchangeForm"},[r("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[r("div",{staticClass:"infoWrapper"},[r("h4",{staticClass:"title"},[e._v("填写表单信息")]),r("Picker",{attrs:{required:!0,name:"accountNumber",title:"户号",placeholder:"户号",columns:e.accounts,rules:[{required:!0,message:"请选择户号"}]},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),r("van-field",{staticClass:"required",attrs:{disabled:"",name:"region",label:"区域",placeholder:"区域",rules:[{required:!0,message:"区域为必填项"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),r("van-field",{attrs:{disabled:"",name:"userName",label:"用户名",placeholder:"用户名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),r("van-field",{staticClass:"required",attrs:{disabled:"",name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),r("van-field",{attrs:{disabled:"",name:"meterNo",label:"表身号",placeholder:"表身号"},model:{value:e.meterNo,callback:function(a){e.meterNo=a},expression:"meterNo"}}),r("van-field",{attrs:{disabled:"",name:"caliber",label:"水表口径",placeholder:"水表口径"},model:{value:e.caliber,callback:function(a){e.caliber=a},expression:"caliber"}}),r("van-field",{attrs:{disabled:"",type:"number",name:"currentPeriod",label:"本期行至",placeholder:"本期行至"},model:{value:e.currentPeriod,callback:function(a){e.currentPeriod=a},expression:"currentPeriod"}}),r("van-field",{attrs:{disabled:"",name:"currentPeriodDate",label:"本期抄表日",placeholder:"本期抄表日"},model:{value:e.currentPeriodDate,callback:function(a){e.currentPeriodDate=a},expression:"currentPeriodDate"}}),r("van-field",{staticClass:"required",attrs:{name:"applicant",label:"申请人",placeholder:"申请人"},model:{value:e.applicant,callback:function(a){e.applicant=a},expression:"applicant"}}),r("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),r("van-field",{attrs:{type:"tel",name:"tellNumber",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tellNumber,callback:function(a){e.tellNumber=a},expression:"tellNumber"}}),r("van-field",{staticClass:"required",attrs:{rows:"2",name:"remark",autosize:"",label:"申请原因",type:"textarea",maxlength:"50",placeholder:"申请原因","show-word-limit":"",rules:[{required:!0,message:"请填申请原因"}]},model:{value:e.remark,callback:function(a){e.remark=a},expression:"remark"}})],1),r("div",{staticClass:"infoWrapper"},[r("h4",{staticClass:"title"},[e._v("所需资料证件上传")]),r("PhotoUpload",{attrs:{name:"idCardPositive",label:"请添加《身份证》(正面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.positive,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(正面)的照片"}]}}),r("PhotoUpload",{attrs:{name:"idCardBack",label:"请添加《身份证》(反面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.back,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(反面)的照片"}]}}),r("PhotoUpload",{attrs:{name:"holdIdCard",label:"请添加《手持身份证照》",image:e.photo,maxcount:1,required:!0,rules:[{required:!0,message:"请添加手持身份证的照片"}]}}),r("PhotoUpload",{attrs:{name:"businessLicense",label:"请添加《营业执照》",placeholder:"单位用户请提供原件照片"}}),r("PhotoUpload",{attrs:{name:"withholding",label:"请添加《代扣人身份证》",placeholder:"如代扣人与户主身份信息不同,请添加代扣人身份证正反面"}}),r("PhotoUpload",{attrs:{name:"scene",label:"请添加《现场图片》",placeholder:"请添加《现场图片》"}}),r("PhotoUpload",{attrs:{name:"otherDocuments",label:"请添加《其他证件》",placeholder:"其他相关证明、证件可在此添加"}}),r("Signature",{attrs:{required:!0,name:"signature",label:"请添加《个人签名》",rules:[{required:!0,message:"请添加《个人签名》"}]}})],1),r("div",{staticClass:"submit"},[r("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},l=[],n=r("e8c3"),s=r.n(n),i=r("ae5c"),o=r.n(i),c=r("5b02"),u=r.n(c),d={name:"checkWaterMeter",data:function(){return{positive:s.a,back:o.a,photo:u.a,accounts:["12345678","87654321","34567893","67890432"],accountNumber:"",region:"",userName:"",address:"",meterNo:"",caliber:"",currentPeriod:"",currentPeriodDate:"",applicant:"",phoneNumber:"",tellNumber:"",remark:""}},methods:{onSubmit:function(e){},accountNumberChange:function(){},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},m=d,b=(r("01fe"),r("2877")),p=Object(b["a"])(m,t,l,!1,null,"0dbb6e01",null);a["default"]=p.exports}}]);