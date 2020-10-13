(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["billInformation"],{"4ba5":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"exchangeForm"},[l("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[l("div",{staticClass:"infoWrapper"},[l("h4",{staticClass:"title"},[e._v("填写表单信息")]),l("Picker",{attrs:{required:!0,name:"region",title:"区域",placeholder:"区域",columns:e.regions,rules:[{required:!0,message:"请选择区域"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),l("van-field",{attrs:{type:"digit",name:"accountNumber",label:"户号",placeholder:"户号"},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),l("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填用户名"}]},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),l("van-field",{staticClass:"required",attrs:{name:"contacter",label:"填报人",placeholder:"填报人"},model:{value:e.contacter,callback:function(a){e.contacter=a},expression:"contacter"}}),l("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),l("van-field",{attrs:{type:"tel",name:"tellNumber",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tellNumber,callback:function(a){e.tellNumber=a},expression:"tellNumber"}}),l("van-field",{staticClass:"required",attrs:{name:"place",label:"报漏地点",placeholder:"报漏地点",rules:[{required:!0,message:"请填报漏地点"}]},scopedSlots:e._u([{key:"button",fn:function(){return[l("van-button",{attrs:{block:"",size:"mini",type:"primary",text:"获取地点","native-type":"button"}})]},proxy:!0}]),model:{value:e.place,callback:function(a){e.place=a},expression:"place"}}),l("van-field",{attrs:{rows:"2",name:"remark",autosize:"",label:"备注",type:"textarea",maxlength:"50",placeholder:"备注","show-word-limit":""},model:{value:e.remark,callback:function(a){e.remark=a},expression:"remark"}})],1),l("div",{staticClass:"submit"},[l("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},n=[],i={name:"report",data:function(){return{regions:["石岐","东区","西区","北区"],region:"",accountNumber:"",userName:"",contacter:"",phoneNumber:"",tellNumber:"",place:"",remark:""}}},r=i,c=(l("f0dd"),l("2877")),o=Object(c["a"])(r,t,n,!1,null,"00794a81",null);a["default"]=o.exports},"5b02":function(e,a,l){e.exports=l.p+"img/photo.d9f34302.png"},"82d1":function(e,a,l){"use strict";var t=l("f60a"),n=l.n(t);n.a},a1b3:function(e,a,l){},ae5c:function(e,a,l){e.exports=l.p+"img/back.ab619f43.png"},bcc0:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"exchangeForm"},[l("van-form",{attrs:{"scroll-to-error":!0},on:{submit:e.onSubmit}},[l("div",{staticClass:"infoWrapper"},[l("h4",{staticClass:"title"},[e._v("填写表单信息")]),l("Picker",{attrs:{required:!0,name:"accountNumber",title:"户号",placeholder:"户号",columns:e.accounts,rules:[{required:!0,message:"请选择户号"}]},on:{change:e.accountNumberChange},model:{value:e.accountNumber,callback:function(a){e.accountNumber=a},expression:"accountNumber"}}),l("van-field",{staticClass:"required",attrs:{disabled:"",name:"region",label:"区域",placeholder:"区域",rules:[{required:!0,message:"区域为必填项"}]},model:{value:e.region,callback:function(a){e.region=a},expression:"region"}}),l("van-field",{attrs:{disabled:"",name:"userName",label:"用户名",placeholder:"用户名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}}),l("van-field",{staticClass:"required",attrs:{disabled:"",name:"address",label:"用水地址",placeholder:"用水地址",rules:[{required:!0,message:"请填用水地址"}]},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}}),l("van-field",{staticClass:"required",attrs:{name:"applicant",label:"申请人",placeholder:"申请人"},model:{value:e.applicant,callback:function(a){e.applicant=a},expression:"applicant"}}),l("van-field",{staticClass:"required",attrs:{type:"tel",name:"phoneNumber",label:"手机号码",placeholder:"手机号码",rules:[{validator:e.phoneReg,message:"请填正确的手机号码"}]},model:{value:e.phoneNumber,callback:function(a){e.phoneNumber=a},expression:"phoneNumber"}}),l("van-field",{attrs:{type:"tel",name:"tellNumber",label:"联系电话",placeholder:"联系电话",rules:[{validator:e.telReg,message:"请填正确的电话号码"}]},model:{value:e.tellNumber,callback:function(a){e.tellNumber=a},expression:"tellNumber"}}),l("Picker",{attrs:{required:!0,name:"typeOfCertificate",title:"证件类型",placeholder:"证件类型",columns:e.certificates,rules:[{required:!0,message:"请选择证件类型"}]},model:{value:e.typeOfCertificate,callback:function(a){e.typeOfCertificate=a},expression:"typeOfCertificate"}}),l("van-field",{staticClass:"required",attrs:{name:"certificate",label:"证件号码",placeholder:"证件号码",rules:[{required:!0,message:"请填证件号码"}]},model:{value:e.certificate,callback:function(a){e.certificate=a},expression:"certificate"}}),l("Picker",{attrs:{required:!0,name:"invoice",title:"票据类型",placeholder:"票据类型",columns:e.typeOfInvoice,rules:[{required:!0,message:"请选择票据类型"}]},model:{value:e.invoice,callback:function(a){e.invoice=a},expression:"invoice"}}),l("van-field",{staticClass:"required",attrs:{name:"invoiceName",label:"税票名称",placeholder:"税票名称",rules:[{required:!0,message:"请填税票名称"}]},model:{value:e.invoiceName,callback:function(a){e.invoiceName=a},expression:"invoiceName"}}),l("van-field",{attrs:{name:"invoiceId",label:"纳税人识别号",placeholder:"纳税人识别号"},model:{value:e.invoiceId,callback:function(a){e.invoiceId=a},expression:"invoiceId"}}),l("van-field",{attrs:{name:"invoiceAccount",label:"税票账号",placeholder:"税票账号"},model:{value:e.invoiceAccount,callback:function(a){e.invoiceAccount=a},expression:"invoiceAccount"}}),l("van-field",{attrs:{name:"invoiceBank",label:"税票开户行",placeholder:"税票开户行"},model:{value:e.invoiceBank,callback:function(a){e.invoiceBank=a},expression:"invoiceBank"}}),l("van-field",{attrs:{name:"invoiceAddress",label:"税票地址",placeholder:"税票地址"},model:{value:e.invoiceAddress,callback:function(a){e.invoiceAddress=a},expression:"invoiceAddress"}}),l("van-field",{attrs:{name:"invoiceTell",label:"税票电话",placeholder:"税票电话"},model:{value:e.invoiceTell,callback:function(a){e.invoiceTell=a},expression:"invoiceTell"}})],1),l("div",{staticClass:"infoWrapper"},[l("h4",{staticClass:"title"},[e._v("所需资料证件上传")]),l("PhotoUpload",{attrs:{name:"idCardPositive",label:"请添加《身份证》(正面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.positive,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(正面)的照片"}]}}),l("PhotoUpload",{attrs:{name:"idCardBack",label:"请添加《身份证》(反面)",placeholder:"个人用户请上传户主身份证，单位用户请上传法人身份证",image:e.back,maxcount:1,required:!0,rules:[{required:!0,message:"请添加身份证(反面)的照片"}]}}),l("PhotoUpload",{attrs:{name:"holdIdCard",label:"请添加《手持身份证照》",image:e.photo,maxcount:1,required:!0,rules:[{required:!0,message:"请添加手持身份证的照片"}]}}),l("PhotoUpload",{attrs:{name:"businessLicense",label:"请添加《营业执照》",placeholder:"单位用户请提供原件照片"}}),l("PhotoUpload",{attrs:{name:"businessForm",label:"请添加《业务受理表》",placeholder:"单位用户请上传加盖公章的业务受理表"}}),l("PhotoUpload",{attrs:{name:"otherDocuments",label:"请添加《其他证件》",placeholder:"其他相关证明、证件可在此添加"}}),l("Signature",{attrs:{required:!0,name:"signature",label:"请添加《个人签名》",rules:[{required:!0,message:"请添加《个人签名》"}]}})],1),l("div",{staticClass:"submit"},[l("van-button",{attrs:{size:"small",block:"",type:"info",text:"提交","native-type":"submit"}})],1)])],1)},n=[],i=l("e8c3"),r=l.n(i),c=l("ae5c"),o=l.n(c),s=l("5b02"),u=l.n(s),d=l("ca4f"),m=l.n(d),p={name:"billInformation",data:function(){return{positive:r.a,back:o.a,photo:u.a,bankImage:m.a,accounts:["12345678","87654321","34567893","67890432"],certificates:["身份证","营业执照","港澳通行证","港澳身份证","护照","军官证","其他证件"],typeOfInvoice:["普票","专票"],accountNumber:"",region:"",userName:"",address:"",applicant:"",typeOfCertificate:"",certificate:"",tellNumber:"",phoneNumber:"",invoice:"",invoiceName:"",invoiceId:"",invoiceAccount:"",invoiceBank:"",invoiceAddress:"",invoiceTell:""}},methods:{onSubmit:function(e){},accountNumberChange:function(){},telReg:function(e){if(e)return/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e)||/^1[3456789]\d{9}$/.test(e)},phoneReg:function(e){if(e)return/^1[3456789]\d{9}$/.test(e)}}},b=p,v=(l("82d1"),l("2877")),f=Object(v["a"])(b,t,n,!1,null,"2d3d1af2",null);a["default"]=f.exports},ca4f:function(e,a,l){e.exports=l.p+"img/bank.cba49524.png"},e8c3:function(e,a,l){e.exports=l.p+"img/positive.e2d27c0b.png"},f0dd:function(e,a,l){"use strict";var t=l("a1b3"),n=l.n(t);n.a},f60a:function(e,a,l){}}]);