import{d as defineComponent,r as ref,c as computed,o as openBlock,a as createBlock,w as withCtx,b as createVNode,e as createTextVNode,t as toDisplayString,u as unref,f as createElementBlock,g as renderList,F as Fragment,i as index$g}from"./index-9770a2a9.js";const _sfc_main=defineComponent({__name:"index",setup(__props){let flag=!0,computeHistorys=[];const value=ref("0");let nextVal="";const result=computed((()=>{try{const val=eval(value.value).toFixed(2);return nextVal=`=${val}`,`=${val}`}catch(e){return nextVal}})),nums=[7,8,9,4,5,6,1,2,3,"",0,"."],computeSigns=["/","*","-","+"],handleReloadCompute=()=>{flag||(value.value="0",flag=!0)},handleSaveHistory=()=>{computeHistorys.push(value.value)},handleCLickNum=e=>{handleReloadCompute();const t=value.value,a=t[t.length-1];0===e?"0"!==t[0]&&"/"!==a&&(value.value=`${t}${e}`,handleSaveHistory()):"."===e?(computeSigns.includes(a)?value.value=`${t}0${e}`:value.value=`${t}${e}`,handleSaveHistory()):e&&("0"===t[0]&&1===t.length?value.value=`${e}`:value.value=`${t}${e}`,handleSaveHistory())},handleClickComputeSign=e=>{handleReloadCompute();const t=value.value,a=t[t.length-1];computeSigns.includes(a)?value.value=`${t.slice(0,t.length-1)}${e}`:value.value=`${t}${e}`,handleSaveHistory()},handleReset=()=>{value.value="0",computeHistorys=[]},handleBack=()=>{computeHistorys.pop(),value.value=computeHistorys[computeHistorys.length-1]||"0"},handleGetResult=()=>{flag=!1};return(e,t)=>{const a=index$g;return openBlock(),createBlock(a,{class:"index"},{default:withCtx((()=>[createVNode(a,{class:"content"},{default:withCtx((()=>[createVNode(a,{class:"expression"},{default:withCtx((()=>[createTextVNode(toDisplayString(value.value),1)])),_:1}),createVNode(a,{class:"result"},{default:withCtx((()=>[createTextVNode(toDisplayString(unref(result)),1)])),_:1})])),_:1}),createVNode(a,null,{default:withCtx((()=>[createVNode(a,{class:"other"},{default:withCtx((()=>[createVNode(a,{class:"item",onClick:handleReset},{default:withCtx((()=>[createTextVNode("C")])),_:1}),createVNode(a,{class:"item",onClick:handleBack},{default:withCtx((()=>[createTextVNode("del")])),_:1}),createVNode(a,{class:"item",onClick:handleGetResult},{default:withCtx((()=>[createTextVNode("=")])),_:1})])),_:1}),createVNode(a,{class:"operate-content"},{default:withCtx((()=>[createVNode(a,{class:"nums"},{default:withCtx((()=>[(openBlock(),createElementBlock(Fragment,null,renderList(nums,(e=>createVNode(a,{class:"item",key:e,onClick:t=>handleCLickNum(e)},{default:withCtx((()=>[createTextVNode(toDisplayString(e),1)])),_:2},1032,["onClick"]))),64))])),_:1}),createVNode(a,{class:"compute-sign"},{default:withCtx((()=>[(openBlock(),createElementBlock(Fragment,null,renderList(computeSigns,(e=>createVNode(a,{class:"item",key:e,onClick:t=>handleClickComputeSign(e)},{default:withCtx((()=>[createTextVNode(toDisplayString(e),1)])),_:2},1032,["onClick"]))),64))])),_:1})])),_:1})])),_:1})])),_:1})}}}),index_vue_vue_type_style_index_0_scoped_786a5f93_lang="",_export_sfc=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a},index=_export_sfc(_sfc_main,[["__scopeId","data-v-786a5f93"]]);export{index as default};
