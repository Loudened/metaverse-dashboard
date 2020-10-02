(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213afc"],{ae79:function(t,e,i){"use strict";i.r(e);var o,n,a,s,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"4"}},[i("RegisterDomain")],1),i("v-col",{attrs:{cols:"6"}},[i("DomainList")],1)],1)],1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.domains,loading:t.domainDataTableLoading,"sort-by":"user"},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Domains")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",small:"",fab:""},on:{click:function(e){return t.retrieveDomainList()}}},"v-btn",n,!1),o),[i("v-icon",[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh Domain List")])]),i("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:t.domainDialogShow,callback:function(e){t.domainDialogShow=e},expression:"domainDialogShow"}},[i("v-card",[i("v-card-title",[t._v(" "+t._s(t.domainDialog.name)+" ")]),i("v-card-text",{staticClass:"text-left"},[i("v-list",{staticClass:"transparent"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Domain Name ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.name)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Users ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.users)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Ice Server ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.iceServer)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Domain ID ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.domainID)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Owner Account ID ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.sponsorAccountId)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Protocol ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.protocol)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Version ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.version)+" ")])],1)],1),i("v-list-item",[i("v-expansion-panels",[i("v-expansion-panel",[i("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:t._u([{key:"actions",fn:function(){return[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-information-variant")])]},proxy:!0}])},[t._v(" Public Key ")]),i("v-expansion-panel-content",[t._v(" "+t._s(t.domainDialog.publicKey)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var o=e.item;return[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({attrs:{small:"",color:"red",disabled:!t.canEditDomain(o.sponsorAccountId)},on:{click:function(e){return e.stopPropagation(),t.deleteDomain(o.domainID,o.name)}}},"v-icon",a,!1),n),[t._v(" mdi-delete-alert ")])]}}],null,!0)},[i("span",[t._v("Delete Domain")])])]}},{key:"item.images",fn:function(t){var e=t.item;return[i("v-avatar",[i("img",{attrs:{src:e.images.thumbnail}})])]}}])})},d=[],m=(i("4160"),i("b0c0"),i("159b"),i("ade3")),u=(i("8552"),o={name:"DomainList",props:{source:String},data:function(){return{dialog:!1,headers:[{text:"Domain Name",align:"start",sortable:!0,value:"name"},{text:"Version",value:"version"},{text:"Users",value:"users"},{text:"Actions",value:"actions",sortable:!1}],domainDataTableLoading:!1,domainDialogShow:!1,domainDialog:{name:"",users:"",domainID:"",version:"",protocol:"",publicKey:"",iceServer:"",sponsorAccountId:"",networkingMode:""},editingDomain:null,domains:[]}},computed:{},watch:{},created:function(){n=this,a=this.$store.state,s=a.metaverseConfig.server,this.initialize()}},Object(m["a"])(o,"computed",{}),Object(m["a"])(o,"methods",{initialize:function(){this.retrieveDomainList()},rowClicked:function(t){this.domainDialogShow=!0,this.domainDialog.name=t.name,this.domainDialog.domainID=t.domainID,this.domainDialog.version=t.version,this.domainDialog.protocol=t.protocol,this.domainDialog.publicKey=t.publicKey,this.domainDialog.iceServer=t.iceServer,this.domainDialog.sponsorAccountId=t.sponsorAccountId,this.domainDialog.networkingMode=t.networkingMode,this.domainDialog.users=t.users},canEditDomain:function(t){return a.account.useAsAdmin||a.account.accountId===t},beginEditingDomain:function(t){this.editingDomain=t},savePlaceName:function(t){this.postUpdateDomain(this.editingDomain,{place_name:t})},deleteDomain:function(t,e){confirm("Are you sure you want to delete "+e+"?")&&this.postDeleteDomain(t)},retrieveDomainList:function(){var t=window.$.param({asAdmin:a.account.useAsAdmin});t="?"+t,this.domainDataTableLoading=!0,window.$.ajax({type:"GET",url:s+"/api/v1/domains"+t,contentType:"application/json"}).done((function(t){n.domainDataTableLoading=!1,n.domains=[],t.data.domains.forEach((function(t,e){n.domains.push({name:t.name,domainID:t.domainId,users:t.total_users,protocol:t.protocol_version,publicKey:t.public_key,version:t.version,iceServer:t.ice_server_address,sponsorAccountId:t.sponsor_account_id,networkingMode:t.networking_mode})}))})).fail((function(t){console.info("Failed to retrieve domain list: ",t),n.domainDataTableLoading=!1,n.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve domain list.",code:"2",full:t.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},postUpdateDomain:function(t,e){var i=window.$.param({asAdmin:a.account.useAsAdmin});i="?"+i,window.$.ajax({type:"POST",url:s+"/api/v1/domains/"+t+i,contentType:"application/json",data:{domain:{dataToUpdate:e}}}).done((function(e){console.info("Successfully updated domain:",t),n.retrieveDomainList()})).fail((function(e){console.info("Failed to update domain:",t),n.$store.commit("mutate",{property:"error",with:{title:"Failed to update domain:"+t,code:"3",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrieveDomainList()}))},postDeleteDomain:function(t){var e=window.$.param({asAdmin:a.account.useAsAdmin});e="?"+e,window.$.ajax({type:"DELETE",url:s+"/api/v1/domains/"+t+e}).done((function(e){console.info("Successfully deleted domain:",t),n.retrieveDomainList()})).fail((function(e){console.info("Failed to delete domain:",t),n.$store.commit("mutate",{property:"error",with:{title:"Failed to delete domain:"+t,code:"3",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrieveDomainList()}))}}),o),v=u,p=i("2877"),f=i("6544"),D=i.n(f),g=i("8212"),h=i("8336"),b=i("b0af"),_=i("99d9"),w=i("8fea"),k=i("169a"),y=i("ce7e"),S=i("cd55"),V=i("49e2"),T=i("c865"),x=i("0393"),A=i("132d"),L=i("8860"),C=i("da13"),I=i("5d23"),E=i("2fa4"),O=i("71d9"),$=i("2a7f"),j=i("3a2f"),P=Object(p["a"])(v,c,d,!1,null,null,null),F=P.exports;D()(P,{VAvatar:g["a"],VBtn:h["a"],VCard:b["a"],VCardText:_["b"],VCardTitle:_["c"],VDataTable:w["a"],VDialog:k["a"],VDivider:y["a"],VExpansionPanel:S["a"],VExpansionPanelContent:V["a"],VExpansionPanelHeader:T["a"],VExpansionPanels:x["a"],VIcon:A["a"],VList:L["a"],VListItem:C["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VSpacer:E["a"],VToolbar:O["a"],VToolbarTitle:$["a"],VTooltip:j["a"]});var N,J,K,U,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-list-item",{staticClass:"mb-4",attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-4"},[t._v(" Register A Domain ")]),i("v-list-item-subtitle",[t._v(" Use the access token that is generated to let your domain server log in to the metaverse. ")])],1)],1),i("v-list-item",{staticClass:"mb-4"},[i("p",{staticClass:"overline text-center",staticStyle:{width:"100%","font-size":"1.0rem !important"},domProps:{textContent:t._s(t.generatedToken)}})]),i("v-list-item-subtitle",{domProps:{textContent:t._s(t.generatedTokenText)}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{rounded:"",color:"input"},on:{click:function(e){return t.postGenerateDomainToken()}}},[t._v(" Generate ")])],1)],1)},G=[],M=(N={name:"DomainList",props:{source:String},data:function(){return{generatedToken:null,generatedTokenText:'Click "Generate" to create a token.'}},computed:{},watch:{},created:function(){J=this,K=this.$store.state,U=K.metaverseConfig.server,this.initialize()}},Object(m["a"])(N,"computed",{}),Object(m["a"])(N,"methods",{initialize:function(){},postGenerateDomainToken:function(){var t=window.$.param({asAdmin:K.account.useAsAdmin,scope:"domain"});t="?"+t,window.$.ajax({type:"POST",url:U+"/api/v1/token/new"+t,contentType:"application/json"}).done((function(t){console.info("Successfully generated token:",t),J.generatedToken=t.data.token,J.generatedTokenText="Paste this token into your domain-server."})).fail((function(t){console.info("Failed to generate token:",t),J.generatedToken=t.responseJSON.error,J.generatedTokenText="",J.$store.commit("mutate",{property:"error",with:{title:"Failed to generate token",code:"3",full:t.responseJSON.error}}),J.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))}}),N),R=M,B=Object(p["a"])(R,z,G,!1,null,null,null),H=B.exports;D()(B,{VBtn:h["a"],VCard:b["a"],VCardActions:_["a"],VListItem:C["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VSpacer:E["a"]});var q={name:"Domain",props:{source:String},components:{DomainList:F,RegisterDomain:H}},Q=q,W=i("7496"),X=i("62ad"),Y=i("a523"),Z=i("f6c4"),tt=i("0fd9"),et=Object(p["a"])(Q,r,l,!1,null,null,null);e["default"]=et.exports;D()(et,{VApp:W["a"],VCol:X["a"],VContainer:Y["a"],VMain:Z["a"],VRow:tt["a"]})}}]);
//# sourceMappingURL=chunk-2d213afc.dcdaee9b.js.map