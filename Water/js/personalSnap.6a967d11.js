(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["personalSnap"],{"1cdd":function(e,a,t){},"5b02":function(e,a,t){e.exports=t.p+"img/photo.d9f34302.png"},"772b":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"exchangeForm"},[t("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("填写表单信息")]),t("Picker",{attrs:{required:!0,name:"region",title:"区域",placeholder:"区域",columns:e.regions,rules:[{required:!0,message:"请选择区域"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),t("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"用户名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),t("van-field",{staticClass:"required",attrs:{name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),t("Picker",{attrs:{required:!0,name:"caliber",title:"口径",placeholder:"口径",columns:e.calibers,rules:[{required:!0,message:"请选择口径"}]},model:{value:e.caliber,callback:function(a){e.caliber=a},expression:"caliber"}}),t("van-field",{staticClass:"required",attrs:{type:"digit",name:"applications",label:"申请户数",placeholder:"申请户数",rules:[{required:!0,message:"请填申请户数"}]},model:{value:e.applications,callback:function(a){e.applications=a},expression:"applications"}}),t("Picker",{attrs:{required:!0,name:"nature",title:"用水性质",placeholder:"用水性质",columns:e.natures,rules:[{required:!0,message:"请选择用水性质"}]},model:{value:e.nature,callback:function(a){e.nature=a},expression:"nature"}}),t("Picker",{attrs:{required:!0,name:"typeOfCertificate",title:"证件类型",placeholder:"证件类型",columns:e.certificates,rules:[{required:!0,message:"请选择证件类型"}]},model:{value:e.typeOfCertificate,callback:function(a){e.typeOfCertificate=a},expression:"typeOfCertificate"}}),t("van-field",{staticClass:"required",attrs:{name:"certificate",label:"证件号码",placeholder:"证件号码",rules:[{required:!0,message:"请填证件号码"}]},model:{value:e.certificate,callback:function(a){e.certificate=a},expression:"certificate"}}),t("Picker",{attrs:{required:!0,name:"bank",title:"开户银行",placeholder:"开户银行",columns:e.banks,rules:[{required:!0,message:"请选择开户银行"}]},model:{value:e.bank,callback:function(a){e.bank=a},expression:"bank"}}),t("van-field",{staticClass:"required",attrs:{name:"accountName",label:"开户人名称",placeholder:"开户人名称",rules:[{required:!0,message:"请填开户人名称"}]},model:{value:e.accountName,callback:function(a){e.accountName=a},expression:"accountName"}}),t("van-field",{staticClass:"required",attrs:{type:"digit",name:"bankCode",label:"银行账号",placeholder:"银行账号",rules:[{required:!0,message:"请填银行账号"}]},model:{value:e.bankCode,callback:function(a){e.bankCode=a},expression:"bankCode"}}),t("van-field",{staticClass:"required",attrs:{name:"contact",label:"联系人",placeholder:"联系人",rules:[{required:!0,message:"请填联系人"}]},model:{value:e.contact,callback:function(a){e.contact=a},expression:"contact"}}),t("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),t("van-field",{attrs:{type:"tel",name:"tell",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tell,callback:function(a){e.tell=a},expression:"tell"}})],1),t("div",{staticClass:"infoWrapper"},[t("h4",{staticClass:"title"},[e._v("所需资料证件上传")]),t("PhotoUpload",{attrs:{name:"idCardPositive",label:"请添加《身份证》(正面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.positive,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(正面)的照片"}]}}),t("PhotoUpload",{attrs:{name:"idCardBack",label:"请添加《身份证》(反面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.back,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(反面)的照片"}]}}),t("PhotoUpload",{attrs:{name:"holdIdCard",label:"请添加《手持身份证照》",image:e.photo,maxcount:1,required:!0,rules:[{required:!0,message:"请添加手持身份证的照片"}]}}),t("PhotoUpload",{attrs:{name:"proofOfHouse",label:"请添加《产权证明》",placeholder:"如房产证、不动产证、土地证、备案表等，请提供原件照片",required:!0,rules:[{required:!0,message:"请添加《产权证明》"}]}}),t("PhotoUpload",{attrs:{name:"bankCard",label:"请添加《银行卡》",placeholder:"如选择银行代扣,请填写开户行，开户名，账号等信息，并上传银行卡照片",image:e.bankImage,required:!0,rules:[{required:!0,message:"请添加《银行卡》的照片"}]}}),t("PhotoUpload",{attrs:{name:"withholding",label:"请添加《代扣人身份证》",placeholder:"如代扣人与户主身份信息不同,请添加代扣人身份证正反面"}}),t("PhotoUpload",{attrs:{name:"drawing",label:"请添加《图纸》",placeholder:"口径≥DN40或集中安装≥5个需提供图纸，如红线图、地形图、消防设计图等"}}),t("PhotoUpload",{attrs:{name:"otherDocuments",label:"请添加《其他证件》",placeholder:"其他相关证明、证件可在此添加"}}),t("Signature",{attrs:{required:!0,name:"signature",label:"请添加《个人签名》",rules:[{required:!0,message:"请添加《个人签名》"}]}})],1),t("div",{staticClass:"submit"},[t("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},l=[],s=t("e8c3"),i=t.n(s),n=t("ae5c"),o=t.n(n),c=t("5b02"),u=t.n(c),d=t("ca4f"),p=t.n(d),m={name:"personalSnap",data:function(){return{positive:i.a,back:o.a,photo:u.a,bankImage:p.a,regions:["石岐","东区","西区","北区"],certificates:["身份证","营业执照","港澳通行证","港澳身份证","护照","军官证","其他证件"],banks:["农商银行","广发银行","建设银行","工商银行","交通银行","农业银行","中国银行","交通银行","邮政储蓄","招商银行"],calibers:[15,20,25,40,50,80,100,150,200,250,300,400,500,600,800,1200],natures:["生活","商业","工业","建筑","学校","机团","特种","公共"],region:"",userName:"",address:"",typeOfCertificate:"",certificate:"",contact:"",tell:"",phoneNumber:"",verificationCode:"",bank:"",bankCode:"",accountName:"",caliber:"",applications:1,nature:""}},methods:{onSubmit:function(e){},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},b=m,f=(t("9606"),t("2877")),g=Object(f["a"])(b,r,l,!1,null,"25b54d5d",null);a["default"]=g.exports},9606:function(e,a,t){"use strict";var r=t("1cdd"),l=t.n(r);l.a},ae5c:function(e,a,t){e.exports=t.p+"img/back.ab619f43.png"},ca4f:function(e,a,t){e.exports=t.p+"img/bank.cba49524.png"},e8c3:function(e,a,t){e.exports=t.p+"img/positive.e2d27c0b.png"}}]);