(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{0:function(e,t,a){e.exports=a("2f39")},"0047":function(e,t,a){},"034f":function(e,t,a){"use strict";var i=a("c4ee"),s=a.n(i);s.a},"22b2":function(e,t,a){"use strict";var i=a("58e6"),s=a.n(i);s.a},"2f39":function(e,t,a){"use strict";a.r(t);var i=a("967e"),s=a.n(i),o=(a("96cf"),a("fa84")),n=a.n(o),r=(a("7d6e"),a("e54f"),a("985d"),a("0047"),a("2b0e")),l=a("1f91"),c=a("42d2"),d=a("b05d");r["default"].use(d["a"],{config:{},lang:l["a"],iconSet:c["a"]});var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md",attrs:{id:"q-app"}},[a("div",{staticClass:"q-pa-md"},[a("q-slider",{attrs:{id:"scaleSlider",min:1,max:10,step:1,snap:"",markers:"",label:"","label-value":"Scale: "+e.scaleValue,"label-always":"",color:"teal"},model:{value:e.scaleValue,callback:function(t){e.scaleValue=t},expression:"scaleValue"}})],1),a("div",{staticStyle:{padding:"20px 5px",background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggRDQENU0dyawAAACZJREFUGNNjPHXqDAMSMDY2ROYyMeAFNJVm/Pv3LzL/7Nnzg8VpAKebCGpIIxHBAAAAAElFTkSuQmCC)"}},[a("div",{staticStyle:{margin:"0 auto"},style:e.cssProps,attrs:{id:"DTBContainer"}},[a("DayList",{ref:"dayList1",attrs:{nrPeople:e.bookingNrOfPeople,displayDate:e.dateToDisplay,timeSlots:e.timesArray},on:{"row-selected":e.onRowSelected}})],1)]),e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col"}),a("div",{staticClass:"col-6"},[a("q-btn",{staticClass:"float-left",attrs:{id:"backBtn",color:"primary",label:"Back",disable:""}}),a("q-btn",{staticClass:"float-right",class:{disabled:e.continueBtnDisabled},attrs:{id:"continueBtn",color:"primary",label:"Continue"}})],1),a("div",{staticClass:"col"})]),a("div",{staticClass:"q-mt-lg q-pa-xs shadow-4",staticStyle:{"background-color":"lightgray","border-color":"black"},attrs:{bordered:""}},[e._m(1),a("div",{staticClass:"q-pa-xs",staticStyle:{color:"maroon","font-weight":"bold"}},[e._v("\n        Info:\n      ")]),a("div",{staticClass:"q-py-xs q-px-xs"},[e._v("Selected Slot: "+e._s(e.clickedId))]),a("div",{staticClass:"q-py-xs q-px-xs"},[e._v("Selected Time: "+e._s(e.clickedTime))]),a("div",{staticClass:"q-py-xs q-px-xs"},[e._v("Selected Availability in Slot: "+e._s(e.clickedAvail))]),a("hr"),a("div",{staticClass:"q-py-xs q-px-xs"},[e._v("\n        User Group of: "),a("strong",[e._v(e._s(e.bookingNrOfPeople))]),e._v(": \n          "),a("q-btn-dropdown",{attrs:{color:"primary",label:"Nr of People",size:"sm",id:"peopleDropMenu"}},[a("q-list",[e._l(e.maxPeoplePerBooking,(function(t){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:"x."+t,attrs:{clickable:"",highlight:"","v:bind":"bookingNrOfPeople"},on:{click:e.onNrPplClick}},[a("q-item-section",[a("q-item-label",[e._v(e._s(t))])],1)],1)})),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:"x."+(e.maxPeoplePerBooking+1),attrs:{clickable:"",highlight:""},on:{click:e.onTooManyPeople}},[a("q-item-section",[a("q-item-label",[e._v(e._s(e.maxPeoplePerBooking+1)+"+ people")])],1)],1)],2)],1)],1),a("div",{staticClass:"q-py-xs q-px-xs"},[e._v("User selected Date: "),a("strong",[e._v(e._s(e.getUserDateStr))]),a("span",{staticStyle:{width:"3px"}},[e._v(" ")]),a("q-btn",{staticStyle:{position:"relative",top:"-2px"},attrs:{color:"blue",size:"8px",icon:"today"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"},on:{"before-show":e.calUpdateProxy}},[a("q-date",{attrs:{options:e.optionsFn},model:{value:e.dateToDisplay,callback:function(t){e.dateToDisplay=t},expression:"dateToDisplay"}},[a("div",{staticClass:"row items-center justify-end q-gutter-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancel",color:"primary",flat:""}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"primary",flat:""}})],1)])],1)],1)],1)]),a("vs-dialog",{attrs:{id:"bigGroupDialog",blur:"",width:"450px","not-center":""},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"center q-my-md"},[a("q-icon",{staticClass:"icon",attrs:{size:"60px",name:"info",color:"primary"}})],1),a("h4",{staticClass:"center q-mb-md q-mt-md"},[e._v("\n          Booking a "),a("strong",[e._v("Big")]),e._v(" Group\n        ")])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"con-footer",staticStyle:{"text-align":"center"}},[a("q-btn",{attrs:{id:"btnClosePeopleDialog",rounded:"",color:"primary"},on:{click:function(t){e.exceededMaxNrPeopleDialogActive=!1}}},[a("strong",{staticClass:"q-px-lg"},[e._v("Ok")])])],1)]},proxy:!0}]),model:{value:e.exceededMaxNrPeopleDialogActive,callback:function(t){e.exceededMaxNrPeopleDialogActive=t},expression:"exceededMaxNrPeopleDialogActive"}},[a("div",{staticClass:"con-content"},[a("p",[e._v("If your group contains "+e._s(e.maxPeoplePerBooking+1)+" or more people...")]),a("p",[e._v("\n          ...you can either do 2 or more separate bookings, splitting your group\n          up amongst available times, or send us a Booking message (later in this\n          booking process) or just give us a ring: Tel +41 79 123 3456\n        ")])])])],1)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{attrs:{id:"officeMeetingTimes"}},[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" All times are meeting at the\n      "),a("a",{attrs:{href:"#"}},[e._v("FlyZermatt office")]),e._v(".\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-h4 text-weight-bold q-ml-auto q-mr-auto",staticStyle:{"text-align":"center",color:"teal"}},[e._v("bSoftware's"),a("br"),e._v("DayTimeBooker Playpen")])}],m=a("574d"),f=a.n(m),v=(a("04f2"),a("bd4c")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"text-white shadow-4",attrs:{id:"DayList",dense:"",bordered:""}},[a("q-card-section",{staticClass:"center text-shadow-2",attrs:{id:"DLHead"}},[a("div",{staticStyle:{"font-weight":"bold"},attrs:{id:"dlh-text-h4"}},[e._v(e._s(e.getDisplayDay))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{id:"dlh-text-subtitle1"}},[e._v(e._s(e.getDisplaySubtitleDateStr))])]),a("div",{},e._l(e.timeSlots,(function(t){return a("DayListItem",{key:t.id,ref:"items",refInFor:!0,staticClass:"item",attrs:{id:t.id,"disable-row":e.initializeRow(t.avail),avail:t.avail,bookedNr:e.nrPeople},on:{"row-click":function(a){return e.onRowClick(t,a)}},scopedSlots:e._u([{key:"time",fn:function(){return[a("span",{staticStyle:{color:"maroon"}},[e._v("*")]),e._v("\n        "+e._s(e.getHours(t.time))),a("span",{staticClass:"itemMinutes"},[e._v(":"+e._s(e.getMins(t.time)))])]},proxy:!0},{key:"message",fn:function(){return[a("div",{attrs:{id:"defaultMsg-"+t.id}},[a("q-chip",{staticClass:"itemMessage q-my-none ellipsis",attrs:{color:"white",size:"0.9em"}},[a("q-icon",{staticClass:"icon",staticStyle:{"padding-right":"0.5em"},attrs:{name:"check_circle",color:"gray",size:"1.3em"}}),e._v("\n            "+e._s(t.avail)+" places available\n          ")],1)],1),a("div",{staticClass:"hidden",attrs:{id:"bookedMsg-"+t.id}},[a("q-chip",{staticClass:"itemMessageSelected q-my-none ellipsis",staticStyle:{"font-weight":"bolder"},attrs:{color:"positive","text-color":"white",size:"0.9em"}},[a("q-icon",{staticClass:"icon",staticStyle:{"padding-right":"0.5em"},attrs:{name:"add_circle_outline",color:"white",size:"1.3em"}}),e._v("\n            "+e._s(e.nrPeople)+" SELECTED\n          ")],1)],1)]},proxy:!0}],null,!0)})})),1),a("p",{attrs:{id:"availabilityTimeMsg"}},[e._v(" ")])],1)},h=[],y=(a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("06db"),a("28a5"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{class:[{disabled:e.disabledRow,hiliteRow:e.selected}],on:{click:e.onClickedRow}},[a("div",{staticClass:"itemRow row disable-text-selection"},[a("div",{staticClass:"itemTime col-3 center"},[e._t("time")],2),a("div",{staticClass:"col center",staticStyle:{"letter-spacing":"0.005em"}},[e._t("message")],2)])])}),g=[],w={name:"DayListItem",data:function(){return{nrAvailable:this.avail,disabledRow:this.disableRow,selected:!1,bookingNrPeople:this.bookedNr}},props:["disableRow","avail","bookedNr"],methods:{onClickedRow:function(e){this.disabledRow||this.$emit("row-click",this)},select:function(){this.disabledRow||(this.selected=!0,document.getElementById("defaultMsg-"+this.$attrs.id).className="hidden",document.getElementById("bookedMsg-"+this.$attrs.id).className="")},deselect:function(){this.disabledRow||(this.selected=!1,document.getElementById("defaultMsg-"+this.$attrs.id).className="",document.getElementById("bookedMsg-"+this.$attrs.id).className="hidden")},reset:function(e){e>this.nrAvailable?(this.selected=!1,this.disabledRow=!0,document.getElementById("defaultMsg-"+this.$attrs.id).className="",document.getElementById("bookedMsg-"+this.$attrs.id).className="hidden"):this.disabledRow=!1}}},x=w,k=(a("57e3"),a("2877")),D=a("eebe"),_=a.n(D),A=a("f09f"),C=Object(k["a"])(x,y,g,!1,null,"129f0be2",null),S=C.exports;function q(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=P(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s,o=!0,n=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){n=!0,s=e},f:function(){try{o||null==i.return||i.return()}finally{if(n)throw s}}}}function P(e,t){if(e){if("string"===typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}_()(C,"components",{QCard:A["a"]});var N=v["b"],B={name:"DayList",components:{DayListItem:S},props:["timeSlots","nrPeople","displayDate"],data:function(){return{displayDayStr:"",bookingNrPeople:this.nrPeople,selectedRowObj:null}},methods:{onRowClick:function(e,t){var a,i=q(this.$refs.items);try{for(i.s();!(a=i.n()).done;){var s=a.value;s===t?(s.select(),this.selectedRowObj=s):s.deselect()}}catch(o){i.e(o)}finally{i.f()}this.$emit("row-selected",e.id,e.time,e.avail,t)},getHours:function(e){var t=e.split(":");if(2!==t.length)throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:'+e);return t[0]},getMins:function(e){var t=e.split(":");if(2!==t.length)throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:'+e);return t[1]},initializeRow:function(e){return!(e>=this.bookingNrPeople)},changedGroupSize:function(e){var t,a=q(this.$refs.items);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.reset(e)}}catch(s){a.e(s)}finally{a.f()}}},computed:{getDisplayDay:function(){return N.formatDate(this.displayDate,"ddd")},getDisplaySubtitleDateStr:function(){return""+N.formatDate(this.displayDate,"D MMMM, YYYY")}}},R=B,I=(a("22b2"),a("a370")),T=a("b047"),E=a("0016"),O=Object(k["a"])(R,b,h,!1,null,"739bad31",null),Y=O.exports;_()(O,"components",{QCard:A["a"],QCardSection:I["a"],QChip:T["a"],QIcon:E["a"]}),r["default"].use(f.a);var $=v["b"],L={name:"App",components:{DayList:Y},data:function(){return{bookingNrOfPeople:2,maxPeoplePerBooking:6,clickedId:0,clickedTime:"-",clickedAvail:0,clickedRowObj:null,scaleValue:5,dateToDisplay:Date.now(),exceededMaxNrPeopleDialogActive:!1,continueBtnDisabled:!0,timesArray:[{id:1,time:"08:30",avail:6},{id:2,time:"10:15",avail:1},{id:3,time:"11:45",avail:0},{id:4,time:"13:15",avail:4},{id:5,time:"14:45",avail:2},{id:6,time:"16:15",avail:5},{id:7,time:"17:00",avail:6},{id:8,time:"19:00",avail:2}]}},computed:{getUserDateStr:function(){return""+$.formatDate(this.dateToDisplay,"dddd, MMMM D, YYYY")},cssProps:function(){return{"--scale-font-size":.15*(this.scaleValue-2)+.7+"em","--scale-box-width":30*this.scaleValue+250+"px"}}},methods:{onRowSelected:function(e,t,a,i){this.clickedId=e,this.clickedTime=t,this.clickedAvail=a,this.clickedRowObj=i,this.continueBtnDisabled=!1},onNrPplClick:function(e){this.bookingNrOfPeople=parseInt(e.target.textContent,10),this.$refs.dayList1.changedGroupSize(this.bookingNrOfPeople),this.$refs.dayList1.selectedRowObj&&(this.continueBtnDisabled=!0)},onTooManyPeople:function(e){this.bookingNrOfPeople=this.maxPeoplePerBooking,this.exceededMaxNrPeopleDialogActive=!this.exceededMaxNrPeopleDialogActive,this.$refs.dayList1.changedGroupSize(this.bookingNrOfPeople),e.preventDefault()},closeGroupDialog:function(e){},calUpdateProxy:function(){},optionsFn:function(e){var t=$.formatDate($.addToDate(Date.now(),{days:2}),"YYYY/MM/DD"),a=$.formatDate($.addToDate(Date.now(),{year:1}),"YYYY/MM/DD");return e>=t&&e<=a}}},Q=L,j=(a("034f"),a("58a8")),z=a("c1d0"),U=a("9c40"),V=a("f20b"),G=a("1c1c"),F=a("66e5"),H=a("4074"),J=a("0170"),K=a("7cbe"),W=a("52ee"),X=a("7f67"),Z=Object(k["a"])(Q,p,u,!1,null,null,null),ee=Z.exports;_()(Z,"components",{QBadge:j["a"],QSlider:z["a"],QBtn:U["a"],QBtnDropdown:V["a"],QList:G["a"],QItem:F["a"],QItemSection:H["a"],QItemLabel:J["a"],QPopupProxy:K["a"],QDate:W["a"],QIcon:E["a"]}),_()(Z,"directives",{ClosePopup:X["a"]});var te=a("a18c"),ae=a.n(te),ie=function(){return se.apply(this,arguments)};function se(){return se=n()(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof ae.a){e.next=6;break}return e.next=3,ae()({Vue:r["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=ae.a;case 7:return t=e.t0,a={router:t,render:function(e){return e(ee)}},a.el="#q-app",e.abrupt("return",{app:a,router:t});case 11:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function oe(){return ne.apply(this,arguments)}function ne(){return ne=n()(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:t=e.sent,a=t.app,t.router,new r["default"](a);case 6:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}oe()},"57e3":function(e,t,a){"use strict";var i=a("c3ce"),s=a.n(i);s.a},"58e6":function(e,t,a){},a18c:function(e,t){},c3ce:function(e,t,a){},c4ee:function(e,t,a){}},[[0,1,2]]]);