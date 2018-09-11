/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'puz_wrong',
            display:'none',
            type:'group',
            rect:['632','119','251','197','auto','auto'],
            c:[
            {
               id:'puz_rect_wrg',
               type:'rect',
               rect:['90px','130px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(255,0,0,1.00)","solid"]
            },
            {
               id:'puz_rect_wrg1',
               type:'rect',
               rect:['0px','0px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(255,0,0,1.00)","solid"]
            }]
         },
         {
            id:'puz_right_sel',
            display:'none',
            type:'group',
            rect:['473px','190px','410','300','auto','auto'],
            c:[
            {
               id:'puz_rect_13',
               type:'rect',
               rect:['70px','59px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_14',
               type:'rect',
               rect:['-110px','148px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_12',
               type:'rect',
               rect:['249px','192px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_11',
               type:'rect',
               rect:['70px','192px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_4',
               type:'rect',
               rect:['2px','227px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_1',
               type:'rect',
               rect:['2px','96px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_3',
               type:'rect',
               rect:['121px','133px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_2',
               type:'rect',
               rect:['123px','2px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_5',
               type:'rect',
               rect:['302px','135px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_8',
               type:'rect',
               rect:['302px','265px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'puz_rect_7',
               type:'rect',
               rect:['122px','265px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            }]
         },
         {
            id:'rect_wrg',
            display:'none',
            type:'rect',
            rect:['542px','249px','153px','59px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[4,"rgba(255,0,0,1.00)","solid"]
         },
         {
            id:'right_sel',
            display:'none',
            type:'group',
            rect:['473','190','410','300','auto','auto'],
            c:[
            {
               id:'rect_13',
               type:'rect',
               rect:['249px','59px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_12',
               type:'rect',
               rect:['249px','192px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_11',
               type:'rect',
               rect:['70px','192px','153px','59px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_4',
               type:'rect',
               rect:['2px','227px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_1',
               type:'rect',
               rect:['2px','96px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_3',
               type:'rect',
               rect:['301px','0px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_5',
               type:'rect',
               rect:['302px','135px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_8',
               type:'rect',
               rect:['302px','265px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            },
            {
               id:'rect_7',
               type:'rect',
               rect:['122px','265px','38px','27px','auto','auto'],
               borderRadius:["6px 6px","6px 6px","6px 6px","6px 6px"],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[4,"rgba(0,128,0,1.00)","solid"]
            }]
         },
         {
            id:'bb_double',
            display:'none',
            type:'image',
            rect:['222px','440px','23px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bb_double.png",'0px','0px']
         },
         {
            id:'bg_blur',
            type:'image',
            tag:'img',
            rect:['-113px','-144px','924px','587px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_blur.png",'0px','0px']
         },
         {
            id:'b_single',
            display:'none',
            type:'image',
            rect:['227px','390px','13px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"b_single.png",'0px','0px']
         },
         {
            id:'pbb_double',
            display:'none',
            type:'image',
            rect:['336px','280px','21px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pbb_double.png",'0px','0px']
         },
         {
            id:'yellow_img',
            display:'none',
            type:'image',
            rect:['215px','318px','148px','47px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"yellow_img.png",'0px','0px']
         },
         {
            id:'highlight',
            display:'none',
            type:'rect',
            rect:['44px','364px','58px','16px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[5,"rgba(255,204,0,1.00)","solid"]
         },
         {
            id:'welcomeGroup',
            type:'group',
            rect:['291px','199px','380','132','auto','auto'],
            c:[
            {
               id:'audio_icon_normal',
               type:'image',
               tag:'img',
               rect:['9px','12px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"audio_icon_normal2.png",'0px','0px']
            },
            {
               id:'welText',
               type:'text',
               rect:['48px','12px','321px','auto','auto','auto'],
               text:"Test"
            },
            {
               id:'right_slider_act',
               type:'image',
               tag:'img',
               rect:['196px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"right_slider_act2.png",'0px','0px']
            },
            {
               id:'left_slider_act',
               type:'image',
               tag:'img',
               rect:['156px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"left_slider_act2.png",'0px','0px']
            }]
         },
         {
            id:'arrow_1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['746px','0px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_1.png",'0px','0px']
         },
         {
            id:'arrow_2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['832px','0px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_2.png",'0px','0px']
         },
         {
            id:'arrow_3',
            display:'none',
            type:'image',
            tag:'img',
            rect:['895px','0px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_3.png",'0px','0px']
         },
         {
            id:'cursor',
            display:'none',
            type:'image',
            rect:['431px','269px','31px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cursor.png",'0px','0px']
         },
         {
            id:'pyellow_img',
            display:'none',
            type:'image',
            rect:['728px','264px','149px','47px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pyellow_img.png",'0px','0px']
         },
         {
            id:'pyellow_img1',
            display:'none',
            type:'image',
            rect:['636px','151px','149px','47px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pyellow_img1.png",'0px','0px']
         },
         {
            id:'pb_single',
            display:'none',
            type:'image',
            rect:['436','418','13px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pb_single.png",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['44px','150px','23px','95px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'camera_icon',
            type:'image',
            rect:['878px','541px','40px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"camera_icon.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_pyellow_img1}": [
            ["motion", "location", '712.5px 155.5px'],
            ["style", "display", 'none']
         ],
         "${_puz_rect_3}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '133px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "left", '121px'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_puz_rect_wrg1}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgb(255, 0, 0)']
         ],
         "${_puz_rect_4}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '227px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "left", '2px'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_rect_5}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '135px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "left", '302px'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_puz_rect_11}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '192px'],
            ["style", "left", '70px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgb(0, 128, 0)']
         ],
         "${_bb_double}": [
            ["style", "display", 'none'],
            ["motion", "location", '233.5px 448px']
         ],
         "${_arrow_3}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '892px'],
            ["style", "z-index", '10']
         ],
         "${_highlight}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '5px'],
            ["style", "width", '55px'],
            ["style", "top", '366px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,204,0,1.00)'],
            ["style", "left", '44px'],
            ["style", "opacity", '0']
         ],
         "${_puz_rect_5}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '135px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '302px']
         ],
         "${_puz_right_sel}": [
            ["style", "top", '190px'],
            ["style", "left", '473px'],
            ["style", "display", 'none']
         ],
         "${_puz_rect_2}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '2px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '123px']
         ],
         "${_welcomeGroup}": [
            ["style", "box-shadow", 'rgba(0, 0, 0, 0.25) 1px 1px 2px 1px'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "z-index", '10'],
            ["style", "height", '150px']
         ],
         "${_rect_13}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["color", "border-color", 'rgba(0,128,0,1.00)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '249px'],
            ["style", "top", '59px']
         ],
         "${_bnt_2}": [
            ["style", "opacity", '0']
         ],
         "${_right_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '196px'],
            ["style", "cursor", 'pointer']
         ],
         "${_puz_rect_wrg}": [
            ["style", "top", '130px'],
            ["color", "border-color", 'rgb(255, 0, 0)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '90px'],
            ["color", "background-color", 'rgba(192,192,192,0)']
         ],
         "${_bnt_1}": [
            ["style", "opacity", '0']
         ],
         "${_left_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '156px'],
            ["style", "cursor", 'pointer']
         ],
         "${_puz_rect_13}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '59px'],
            ["style", "left", '70px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgb(0, 128, 0)']
         ],
         "${_welText}": [
            ["style", "top", '12px'],
            ["style", "width", '321px'],
            ["style", "line-height", '24px'],
            ["style", "left", '48px'],
            ["style", "font-size", '16px']
         ],
         "${_b_single}": [
            ["motion", "location", '233.5px 398px'],
            ["style", "display", 'none']
         ],
         "${_rect_8}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '265px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '302px']
         ],
         "${_arrow_2}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '832px'],
            ["style", "z-index", '10']
         ],
         "${_rect_4}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '227px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px']
         ],
         "${_rect_wrg}": [
            ["style", "top", '249px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '542px'],
            ["style", "display", 'none'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgba(255,0,0,1.00)']
         ],
         "${_yellow_img}": [
            ["style", "height", '46px'],
            ["motion", "location", '289px 340.5px'],
            ["style", "display", 'none'],
            ["style", "width", '149px']
         ],
         "${_arrow_1}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '746px'],
            ["style", "z-index", '10']
         ],
         "${_pyellow_img}": [
            ["motion", "location", '802.5px 287.5px'],
            ["style", "display", 'none']
         ],
         "${_puz_rect_7}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '265px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '122px']
         ],
         "${_puz_rect_8}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '265px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "left", '302px'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle}": [
            ["style", "height", '95px'],
            ["style", "top", '150px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${_right_sel}": [
            ["style", "display", 'none']
         ],
         "${_pbb_double}": [
            ["motion", "location", '346.5px 288px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_puz_rect_12}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '249px'],
            ["style", "top", '192px']
         ],
         "${_bg_blur}": [
            ["style", "top", '0px'],
            ["style", "height", '590px'],
            ["style", "left", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "z-index", '1'],
            ["style", "width", '924px']
         ],
         "${_rect_1}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '96px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "left", '2px'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_rect_3}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '301px']
         ],
         "${_pb_single}": [
            ["style", "display", 'none'],
            ["motion", "location", '797.5px 210px']
         ],
         "${_rect_7}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '265px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "left", '122px'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_puz_rect_14}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-width", '4px'],
            ["style", "height", '58px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-110px'],
            ["style", "top", '148px']
         ],
         "${_puz_rect_1}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '38px'],
            ["style", "top", '96px'],
            ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px']
         ],
         "${_rect_11}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["color", "border-color", 'rgb(0, 128, 0)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '70px'],
            ["style", "top", '192px']
         ],
         "${_rect_12}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '192px'],
            ["style", "left", '249px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgb(0, 128, 0)']
         ],
         "${_camera_icon}": [
            ["style", "left", '878px'],
            ["style", "top", '541px']
         ],
         "${_etxt2Copy}": [
            ["style", "top", '497px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '705px'],
            ["style", "font-size", '15px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(140,190,178,1.00)'],
            ["style", "width", '924px'],
            ["style", "height", '588px'],
            ["style", "overflow", 'hidden']
         ],
         "${_puz_wrong}": [
            ["style", "display", 'none']
         ],
         "${_cursor}": [
            ["style", "height", '31px'],
            ["motion", "location", '446.5px 284.5px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "z-index", '10'],
            ["style", "width", '31px']
         ],
         "${_audio_icon_normal}": [
            ["style", "top", '12px'],
            ["style", "left", '9px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 160000,
         autoPlay: false,
         labels: {
            "Step_0": 1000,
            "Step 1": 2000,
            "Step_2": 13000,
            "Step_3": 22000,
            "Step_4": 26000,
            "Step_5": 35000,
            "Step_6": 50000,
            "Step_7": 67000,
            "Step_8": 76000,
            "Step_9": 85000,
            "Step_10": 92000,
            "Step_11": 101000,
            "Step_12": 109000,
            "Step_13": 119000,
            "Step_14": 129000,
            "Step_15": 144000,
            "Step_16": 151000,
            "Step_17": 158000
         },
         timeline: [
            { id: "eid13", tween: [ "style", "${_arrow_3}", "opacity", '1', { fromValue: '0'}], position: 158500, duration: 500 },
            { id: "eid5", tween: [ "style", "${_arrow_3}", "display", 'block', { fromValue: 'none'}], position: 158500, duration: 0 },
            { id: "eid422", tween: [ "style", "${_rect_wrg}", "display", 'block', { fromValue: 'none'}], position: 71500, duration: 0 },
            { id: "eid424", tween: [ "style", "${_rect_wrg}", "display", 'none', { fromValue: 'block'}], position: 79500, duration: 0 },
            { id: "eid372", tween: [ "motion", "${_pyellow_img}", [[802.5,287.5,0,0],[288.5,178.5,0,0]]], position: 135500, duration: 2000 },
            { id: "eid373", tween: [ "style", "${_pyellow_img1}", "display", 'block', { fromValue: 'none'}], position: 135500, duration: 0 },
            { id: "eid392", tween: [ "style", "${_pyellow_img1}", "display", 'none', { fromValue: 'block'}], position: 137500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_bnt_1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid126", tween: [ "motion", "${_yellow_img}", [[289,340.5,0,0],[621.5,288,0,0]]], position: 54000, duration: 1500 },
            { id: "eid213", tween: [ "motion", "${_yellow_img}", [[623.5,288,0,0],[288.5,341,0,0]]], position: 79500, duration: 1500 },
            { id: "eid374", tween: [ "style", "${_pb_single}", "display", 'block', { fromValue: 'none'}], position: 135500, duration: 0 },
            { id: "eid391", tween: [ "style", "${_pb_single}", "display", 'none', { fromValue: 'block'}], position: 138000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_arrow_2}", "opacity", '1', { fromValue: '0'}], position: 158500, duration: 500 },
            { id: "eid154", tween: [ "style", "${_bb_double}", "display", 'block', { fromValue: 'none'}], position: 62250, duration: 0 },
            { id: "eid201", tween: [ "style", "${_bb_double}", "display", 'none', { fromValue: 'block'}], position: 71500, duration: 0 },
            { id: "eid204", tween: [ "style", "${_bb_double}", "display", 'block', { fromValue: 'none'}], position: 79500, duration: 0 },
            { id: "eid242", tween: [ "style", "${_bb_double}", "display", 'none', { fromValue: 'block'}], position: 96500, duration: 0 },
            { id: "eid9", tween: [ "style", "${_arrow_1}", "display", 'block', { fromValue: 'none'}], position: 158500, duration: 0 },
            { id: "eid18", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid7", tween: [ "style", "${_arrow_2}", "display", 'block', { fromValue: 'none'}], position: 158500, duration: 0 },
            { id: "eid336", tween: [ "style", "${_pbb_double}", "display", 'block', { fromValue: 'none'}], position: 119500, duration: 0 },
            { id: "eid419", tween: [ "style", "${_pbb_double}", "display", 'none', { fromValue: 'block'}], position: 147500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_bnt_2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid368", tween: [ "style", "${_pyellow_img}", "display", 'block', { fromValue: 'none'}], position: 135500, duration: 0 },
            { id: "eid393", tween: [ "style", "${_pyellow_img}", "display", 'none', { fromValue: 'block'}], position: 137500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_welcomeGroup}", "display", 'none', { fromValue: 'block'}], position: 1385, duration: 0 },
            { id: "eid102", tween: [ "style", "${_welcomeGroup}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid1", tween: [ "style", "${_bg_blur}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "style", "${_bg_blur}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_highlight}", "opacity", '1', { fromValue: '0'}], position: 27500, duration: 500 },
            { id: "eid60", tween: [ "style", "${_highlight}", "opacity", '0', { fromValue: '1'}], position: 28250, duration: 500 },
            { id: "eid63", tween: [ "style", "${_highlight}", "opacity", '1', { fromValue: '0'}], position: 29000, duration: 500 },
            { id: "eid64", tween: [ "style", "${_highlight}", "opacity", '0', { fromValue: '1'}], position: 29750, duration: 500 },
            { id: "eid66", tween: [ "style", "${_highlight}", "opacity", '1', { fromValue: '0'}], position: 30500, duration: 500 },
            { id: "eid68", tween: [ "style", "${_highlight}", "opacity", '0', { fromValue: '1'}], position: 31250, duration: 500 },
            { id: "eid384", tween: [ "motion", "${_pyellow_img1}", [[712.5,155.5,0,0],[288.5,178.5,0,0]]], position: 135500, duration: 2000 },
            { id: "eid67", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 890 },
            { id: "eid150", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 1385, duration: 290 },
            { id: "eid105", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500 },
            { id: "eid62", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 205 },
            { id: "eid55", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 500 },
            { id: "eid106", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 21250, duration: 303 },
            { id: "eid107", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 22500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_welcomeGroup}", "opacity", '0.5', { fromValue: '1'}], position: 25169, duration: 281 },
            { id: "eid109", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '0.5'}], position: 25450, duration: 155 },
            { id: "eid110", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 26500, duration: 500 },
            { id: "eid111", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 33000, duration: 500 },
            { id: "eid58", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 35500, duration: 500 },
            { id: "eid44", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 49303, duration: 500 },
            { id: "eid46", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 50500, duration: 500 },
            { id: "eid47", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 66250, duration: 500 },
            { id: "eid48", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 67500, duration: 500 },
            { id: "eid97", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 75000, duration: 500 },
            { id: "eid98", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 76498, duration: 500 },
            { id: "eid115", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 84250, duration: 500 },
            { id: "eid116", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 85500, duration: 500 },
            { id: "eid127", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 91250, duration: 500 },
            { id: "eid135", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 92507, duration: 500 },
            { id: "eid136", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 100048, duration: 500 },
            { id: "eid145", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 101500, duration: 500 },
            { id: "eid148", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 108250, duration: 500 },
            { id: "eid149", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 109500, duration: 500 },
            { id: "eid175", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 118250, duration: 500 },
            { id: "eid176", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 119500, duration: 500 },
            { id: "eid177", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 128250, duration: 500 },
            { id: "eid178", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 129500, duration: 500 },
            { id: "eid2", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 143250, duration: 500 },
            { id: "eid3", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 144500, duration: 500 },
            { id: "eid406", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 150250, duration: 500 },
            { id: "eid407", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 151500, duration: 500 },
            { id: "eid408", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 157250, duration: 500 },
            { id: "eid409", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 158500, duration: 500 },
            { id: "eid21", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500 },
            { id: "eid33", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 500 },
            { id: "eid37", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 500 },
            { id: "eid45", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 500 },
            { id: "eid75", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 35500, duration: 500 },
            { id: "eid104", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 48000, duration: 500 },
            { id: "eid114", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 51500, duration: 500 },
            { id: "eid163", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 64250, duration: 500 },
            { id: "eid180", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 68000, duration: 500 },
            { id: "eid188", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 71500, duration: 500 },
            { id: "eid191", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 76500, duration: 500 },
            { id: "eid220", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 79500, duration: 500 },
            { id: "eid221", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '0'}], position: 80000, duration: 0 },
            { id: "eid224", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 85500, duration: 500 },
            { id: "eid230", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 88500, duration: 500 },
            { id: "eid233", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 93500, duration: 500 },
            { id: "eid239", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 96500, duration: 500 },
            { id: "eid246", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 101500, duration: 500 },
            { id: "eid257", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 105500, duration: 500 },
            { id: "eid258", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '0'}], position: 106000, duration: 0 },
            { id: "eid261", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 109500, duration: 500 },
            { id: "eid326", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 500 },
            { id: "eid332", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 119500, duration: 500 },
            { id: "eid358", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 125000, duration: 500 },
            { id: "eid361", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 129500, duration: 500 },
            { id: "eid396", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 135500, duration: 500 },
            { id: "eid399", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 144500, duration: 500 },
            { id: "eid405", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 147500, duration: 500 },
            { id: "eid412", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 151500, duration: 500 },
            { id: "eid418", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 155000, duration: 500 },
            { id: "eid144", tween: [ "motion", "${_b_single}", [[233.5,398,0,0],[619.5,209,0,0]]], position: 58250, duration: 1500 },
            { id: "eid212", tween: [ "motion", "${_b_single}", [[618.5,208,0,0],[234.5,399,0,0]]], position: 79500, duration: 1500 },
            { id: "eid49", tween: [ "style", "${_highlight}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0 },
            { id: "eid426", tween: [ "style", "${_puz_right_sel}", "display", 'block', { fromValue: 'none'}], position: 132500, duration: 0 },
            { id: "eid429", tween: [ "style", "${_puz_right_sel}", "display", 'none', { fromValue: 'block'}], position: 147500, duration: 0 },
            { id: "eid137", tween: [ "style", "${_b_single}", "display", 'block', { fromValue: 'none'}], position: 58250, duration: 0 },
            { id: "eid200", tween: [ "style", "${_b_single}", "display", 'none', { fromValue: 'block'}], position: 71500, duration: 0 },
            { id: "eid202", tween: [ "style", "${_b_single}", "display", 'block', { fromValue: 'none'}], position: 79500, duration: 0 },
            { id: "eid241", tween: [ "style", "${_b_single}", "display", 'none', { fromValue: 'block'}], position: 96500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_bg_blur}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid390", tween: [ "motion", "${_pb_single}", [[797.5,210,0,0],[234.5,238,0,0]]], position: 135500, duration: 2000 },
            { id: "eid427", tween: [ "style", "${_puz_wrong}", "display", 'block', { fromValue: 'none'}], position: 132500, duration: 0 },
            { id: "eid428", tween: [ "style", "${_puz_wrong}", "display", 'none', { fromValue: 'block'}], position: 135500, duration: 0 },
            { id: "eid423", tween: [ "style", "${_right_sel}", "display", 'block', { fromValue: 'none'}], position: 71500, duration: 0 },
            { id: "eid425", tween: [ "style", "${_right_sel}", "display", 'none', { fromValue: 'block'}], position: 88500, duration: 0 },
            { id: "eid340", tween: [ "style", "${_pbb_double}", "opacity", '1', { fromValue: '0'}], position: 119500, duration: 500 },
            { id: "eid345", tween: [ "style", "${_pbb_double}", "opacity", '1', { fromValue: '1'}], position: 120000, duration: 0 },
            { id: "eid24", tween: [ "motion", "${_cursor}", [[443.5,309.5,0,0],[677.87,261.91,176.32,-192.35,170.07,-185.53],[714.5,34.5,0,0]]], position: 4500, duration: 1500 },
            { id: "eid30", tween: [ "motion", "${_cursor}", [[714.5,34.5,0,0],[464.86,82.99,-362.24,-0.74,-375.52,-0.76],[222.5,33.5,0,0]]], position: 7500, duration: 1500 },
            { id: "eid40", tween: [ "motion", "${_cursor}", [[222.5,33.5,0,0],[60.5,170.5,0,0]]], position: 15500, duration: 1500 },
            { id: "eid80", tween: [ "motion", "${_cursor}", [[60.5,170.5,0,0],[197.01,184.99,207.99,-3.74,209.01,-3.76],[338.5,165.5,0,0]]], position: 36500, duration: 1500 },
            { id: "eid84", tween: [ "motion", "${_cursor}", [[338.5,165.5,0,0],[338.5,182.5,0,0]]], position: 39502, duration: 748 },
            { id: "eid88", tween: [ "motion", "${_cursor}", [[338.5,182.5,0,0],[554.31,205.49,283.39,-9.21,314.94,-10.24],[738.5,169.5,0,0]]], position: 41500, duration: 1000 },
            { id: "eid91", tween: [ "motion", "${_cursor}", [[738.5,169.5,0,0],[739.5,222.5,0,0]]], position: 43500, duration: 1000 },
            { id: "eid99", tween: [ "motion", "${_cursor}", [[739.5,222.5,0,0],[527.26,258.85,-346.17,3.9,-318.69,3.59],[295.5,227.5,0,0]]], position: 45500, duration: 1500 },
            { id: "eid120", tween: [ "motion", "${_cursor}", [[295.5,227.5,0,0],[289.5,352.5,0,0]]], position: 52500, duration: 1000 },
            { id: "eid128", tween: [ "motion", "${_cursor}", [[290.5,351.5,0,0],[624.5,292.5,0,0]]], position: 54000, duration: 1500 },
            { id: "eid134", tween: [ "motion", "${_cursor}", [[624.5,292.5,0,0],[233.5,410.5,0,0]]], position: 56000, duration: 1500 },
            { id: "eid146", tween: [ "motion", "${_cursor}", [[233.5,410.5,0,0],[618.5,220.5,0,0]]], position: 58250, duration: 1500 },
            { id: "eid152", tween: [ "motion", "${_cursor}", [[618.5,218.5,0,0],[233.5,463.5,0,0]]], position: 60250, duration: 1500 },
            { id: "eid159", tween: [ "motion", "${_cursor}", [[233.5,463.5,0,0],[617.5,354.5,0,0]]], position: 62250, duration: 1500 },
            { id: "eid183", tween: [ "motion", "${_cursor}", [[617.5,354.5,0,0],[758.7,389.12,169.86,75.54,198.04,88.08],[812.55,493.29,-154.04,137.9,-54.68,48.95],[548.5,572.5,0,0]]], position: 69000, duration: 2000 },
            { id: "eid198", tween: [ "motion", "${_cursor}", [[548.5,572.5,0,0],[710.5,572.5,0,0]]], position: 77500, duration: 1500 },
            { id: "eid227", tween: [ "motion", "${_cursor}", [[710.5,572.5,0,0],[389.5,572.5,0,0]]], position: 86500, duration: 1500 },
            { id: "eid236", tween: [ "motion", "${_cursor}", [[389.5,572.5,0,0],[219.83,561.97,-199.27,-49.64,-215.59,-53.7],[112.5,503.5,0,0]]], position: 94500, duration: 1500 },
            { id: "eid249", tween: [ "motion", "${_cursor}", [[112.5,503.5,0,0],[613.42,334.29,457.76,-351.48,446.6,-342.91],[715.5,40.5,0,0]]], position: 102500, duration: 2500 },
            { id: "eid264", tween: [ "motion", "${_cursor}", [[715.5,40.5,0,0],[60.5,170.5,0,0]]], position: 110500, duration: 2000 },
            { id: "eid348", tween: [ "motion", "${_cursor}", [[60.5,170.5,0,0],[347.5,302.5,0,0]]], position: 120500, duration: 1500 },
            { id: "eid353", tween: [ "motion", "${_cursor}", [[347.5,302.5,0,0],[801.5,487.5,0,0]]], position: 122500, duration: 2000 },
            { id: "eid364", tween: [ "motion", "${_cursor}", [[801.5,487.5,0,0],[710.39,564.86,-186.35,61.38,-191.58,63.1],[549.5,570.5,0,0]]], position: 130500, duration: 1500 },
            { id: "eid367", tween: [ "motion", "${_cursor}", [[549.5,570.5,0,0],[710.5,569.47,0,0]]], position: 133500, duration: 1500 },
            { id: "eid402", tween: [ "motion", "${_cursor}", [[710.5,569.47,0,0],[400.5,569.47,0,0]]], position: 145500, duration: 1500 },
            { id: "eid415", tween: [ "motion", "${_cursor}", [[400.5,569.47,0,0],[219.13,570.98,-209.62,-47.71,-224.85,-51.18],[110.5,503.47,0,0]]], position: 152500, duration: 2000 },
            { id: "eid121", tween: [ "style", "${_yellow_img}", "display", 'block', { fromValue: 'none'}], position: 54000, duration: 0 },
            { id: "eid199", tween: [ "style", "${_yellow_img}", "display", 'none', { fromValue: 'block'}], position: 71500, duration: 0 },
            { id: "eid203", tween: [ "style", "${_yellow_img}", "display", 'block', { fromValue: 'none'}], position: 79500, duration: 0 },
            { id: "eid240", tween: [ "style", "${_yellow_img}", "display", 'none', { fromValue: 'block'}], position: 96500, duration: 0 },
            { id: "eid354", tween: [ "motion", "${_pbb_double}", [[346.5,288,0,0],[799.5,472,0,0]]], position: 122500, duration: 2000 },
            { id: "eid158", tween: [ "motion", "${_bb_double}", [[233.5,448,0,0],[618.5,342,0,0]]], position: 62250, duration: 1500 },
            { id: "eid211", tween: [ "motion", "${_bb_double}", [[617.5,341,0,0],[234.5,449,0,0]]], position: 79500, duration: 1500 },
            { id: "eid11", tween: [ "style", "${_arrow_1}", "opacity", '1', { fromValue: '0'}], position: 158500, duration: 500 }         ]
      }
   }
},
"highAnim": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      s: [1,'rgb(0, 0, 0)','solid'],
      r: ['0px','0px','141px','32px','auto','auto'],
      id: 'highlightWel',
      t: 'rect',
      v: 'none',
      f: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlightWel}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '144px'],
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,204,0,1.00)'],
            ["style", "height", '33px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(255,204,0,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "dg136", tween: [ "style", "${_highlightWel}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg138", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '20px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "dg139", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '0px', { fromValue: '20px'}], position: 1000, duration: 1000 },
            { id: "dg140", tween: [ "style", "${_highlightWel}", "width", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
            { id: "dg137", tween: [ "style", "${_highlightWel}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1817669");
