(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213afc"],{ae79:function(t,i,e){"use strict";e.r(i);var o,a,n,s,r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{attrs:{id:"inspire"}},[e("v-main",[e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("DomainList")],1)],1)],1)],1)},l=[],c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.domains,"sort-by":"user"},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v("Domains")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:t.domainDialogShow,callback:function(i){t.domainDialogShow=i},expression:"domainDialogShow"}},[e("v-card",[e("v-card-title",[t._v(" "+t._s(t.domainDialog.placeName)+" ")]),e("v-card-text",{staticClass:"text-left"},[e("v-list",{staticClass:"transparent"},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Place Name ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.placeName)+" ")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Users ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.users)+" ")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Ice Server ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.iceServer)+" ")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Domain ID ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.domainID)+" ")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Owner Account ID ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.sponsorAccountId)+" ")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Protocol ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.protocol)+" ")])],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" Version ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.version)+" ")])],1)],1),e("v-list-item",[e("v-expansion-panels",[e("v-expansion-panel",[e("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-information-variant")])]},proxy:!0}])},[t._v(" Public Key ")]),e("v-expansion-panel-content",[t._v(" "+t._s(t.domainDialog.publicKey)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(i){var o=i.item;return[e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,n=i.attrs;return[e("v-icon",t._g(t._b({attrs:{small:"",color:"red",disabled:!t.canEditDomain(o.sponsorAccountId)},on:{click:function(i){return i.stopPropagation(),t.deleteDomain(o.domainID,o.placeName)}}},"v-icon",n,!1),a),[t._v(" mdi-delete-alert ")])]}}],null,!0)},[e("span",[t._v("Delete Domain")])])]}},{key:"item.images",fn:function(t){var i=t.item;return[e("v-avatar",[e("img",{attrs:{src:i.images.thumbnail}})])]}}])})},d=[],m=(e("4160"),e("b0c0"),e("159b"),e("ade3")),u=(e("8552"),o={name:"DomainList",props:{source:String},data:function(){return{dialog:!1,headers:[{text:"Place Name",align:"start",sortable:!0,value:"placeName"},{text:"Version",value:"version"},{text:"Users",value:"users"},{text:"Actions",value:"actions",sortable:!1}],domainDialogShow:!1,domainDialog:{placeName:"",users:"",domainID:"",version:"",protocol:"",publicKey:"",iceServer:"",sponsorAccountId:"",networkingMode:""},editingDomain:null,domains:[]}},computed:{},watch:{},created:function(){a=this,n=this.$store.state,s=n.metaverseConfig.server,this.initialize()}},Object(m["a"])(o,"computed",{}),Object(m["a"])(o,"methods",{initialize:function(){this.retrieveDomainList(s)},rowClicked:function(t){this.domainDialogShow=!0,this.domainDialog.placeName=t.placeName,this.domainDialog.domainID=t.domainID,this.domainDialog.version=t.version,this.domainDialog.protocol=t.protocol,this.domainDialog.publicKey=t.publicKey,this.domainDialog.iceServer=t.iceServer,this.domainDialog.sponsorAccountId=t.sponsorAccountId,this.domainDialog.networkingMode=t.networkingMode,this.domainDialog.users=t.users},canEditDomain:function(t){return n.account.useAsAdmin||n.account.accountId===t},beginEditingDomain:function(t){this.editingDomain=t},savePlaceName:function(t){this.postUpdateDomain(this.editingDomain,{place_name:t})},deleteDomain:function(t,i){confirm("Are you sure you want to delete "+i+"?")&&this.postDeleteDomain(t)},retrieveDomainList:function(t){var i=window.$.param({asAdmin:n.account.useAsAdmin});i="?"+i,window.$.ajax({type:"GET",url:t+"/api/v1/domains"+i,contentType:"application/json"}).done((function(t){a.domains=[],t.data.domains.forEach((function(t,i){a.domains.push({placeName:t.name,domainID:t.domainId,users:t.total_users,protocol:t.protocol_version,publicKey:t.public_key,version:t.version,iceServer:t.ice_server_address,sponsorAccountId:t.sponsor_account_id,networkingMode:t.networking_mode})}))})).fail((function(t){console.info("Failed to retrieve domain list: ",t),a.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve domain list.",code:"2",full:t.responseJSON.error}}),a.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},postUpdateDomain:function(t,i){var e=window.$.param({asAdmin:n.account.useAsAdmin});e="?"+e,window.$.ajax({type:"POST",url:s+"/api/v1/domains/"+t+e,contentType:"application/json",data:{domain:{dataToUpdate:i}}}).done((function(i){console.info("Successfully updated domain:",t),a.retrieveDomainList(s)})).fail((function(i){console.info("Failed to update domain:",t),a.$store.commit("mutate",{property:"error",with:{title:"Failed to update domain:"+t,code:"3",full:i.responseJSON.error}}),a.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),a.retrieveDomainList(s)}))},postDeleteDomain:function(t){var i=window.$.param({asAdmin:n.account.useAsAdmin});i="?"+i,window.$.ajax({type:"DELETE",url:s+"/api/v1/domains/"+t+i}).done((function(i){console.info("Successfully deleted domain:",t),a.retrieveDomainList(s)})).fail((function(i){console.info("Failed to delete domain:",t),a.$store.commit("mutate",{property:"error",with:{title:"Failed to delete domain:"+t,code:"3",full:i.responseJSON.error}}),a.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),a.retrieveDomainList(s)}))}}),o),v=u,p=e("2877"),f=e("6544"),D=e.n(f),h=e("8212"),g=e("b0af"),_=e("99d9"),w=e("8fea"),b=e("169a"),y=e("ce7e"),S=e("cd55"),V=e("49e2"),x=e("c865"),A=e("0393"),I=e("132d"),E=e("8860"),k=e("da13"),L=e("5d23"),C=e("2fa4"),N=e("71d9"),T=e("2a7f"),O=e("3a2f"),$=Object(p["a"])(v,c,d,!1,null,null,null),P=$.exports;D()($,{VAvatar:h["a"],VCard:g["a"],VCardText:_["b"],VCardTitle:_["c"],VDataTable:w["a"],VDialog:b["a"],VDivider:y["a"],VExpansionPanel:S["a"],VExpansionPanelContent:V["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:A["a"],VIcon:I["a"],VList:E["a"],VListItem:k["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VSpacer:C["a"],VToolbar:N["a"],VToolbarTitle:T["a"],VTooltip:O["a"]});var j={name:"Domain",props:{source:String},components:{DomainList:P}},F=j,K=e("7496"),J=e("a523"),M=e("f6c4"),U=e("0fd9"),z=Object(p["a"])(F,r,l,!1,null,null,null);i["default"]=z.exports;D()(z,{VApp:K["a"],VContainer:J["a"],VMain:M["a"],VRow:U["a"]})}}]);
//# sourceMappingURL=chunk-2d213afc.99b4f420.js.map