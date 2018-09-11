var adobeReady = false;
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){


Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
	parent.adobeReady = true;
	$('#Stage_welText').html(welcomeMode['step_0']['text']);
	$('#Stage_welcomeGroup').css('min-height','82px').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
	$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
	$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
	$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
	var lpos=welcomeMode['step_'+welcomeMove].position[0];
	var tpos=welcomeMode['step_'+welcomeMove].position[1];
	$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
	$('#Stage_left_slider_act').css('cursor','default');
	$('#Stage_audio_icon_normal').attr('audio-state','pause');
	$('#Stage_audio_icon_normal').addClass('expAudio');


window.parent.$(".screenArea").css('display','block');
//alert(window.parent.$(".screenArea").css('display'));
});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym,e){this.stop();
});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32500, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym,e){this.stop();
});
//Edge binding end




Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym,e){this.stop()});
//Edge binding end






      

      
Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym,e){
	if(welcomeMove>0)
	{
		selectedIndex=0;
		welcomeMove--;
		$('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
		if(welcomeMove==7)
			{
				$('#Stage_rabbit_update_1').css('background-image','url(images/rabbit_update_1.png)');
			}
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);
		$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArrRev[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
if(welcomeMove==0)
	{
		$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png').css('cursor','default');
	}
		
});
      //Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym,e){
	if(welcomeMove<(weltextlen-1))
	{
		selectedIndex=0;
		welcomeMove++;
		$('#Stage_left_slider_act').attr('src','images/left_slider_act.png').css('cursor','pointer');		
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArr[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
	if(welcomeMove==(weltextlen-1))
	{
		$('#Stage_right_slider_act').attr('src','images/right_slider_deact.png').css('cursor','default');
	}
	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym,e){
		  passText=$('#Stage_welText').text();
		  parent.globalAudioName = welcomeMode['step_'+welcomeMove]['AudioNamecon'].toString();	
		  parent.playGlobalAudio(passText);
		});
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         //console.log(this.getPosition());

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         this.stop();

      });
	  Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
	  $(".topParent,.parentTit,.mP,.fP").show();
	$("#dot5, #dot6").hide();
	$(".imgContains").css('top','188px');
	$(".imgContains1").css('top','261px');
	$("#txtdrag1,#txtdrag2").css('top','335px');
	$("#txtdrag3,#txtdrag4,#txtdrag5").css('top','385px');

	  $(".fselect,.mselect").html("Select");
	  $(".cross").css({"background":"rgb(109, 110, 112)","opacity":"0.5","color":"rgb(255, 255, 255)"});
	  $('.mpImg,.fpImg,.dragImg1,.txt,.txt1,.txt2,.txt2_2,.dragImg3,.textimg3,.wrong,.textimg,.dragImg4,.textimg5,.textimg4,.dragImg6,.textimg6,.dragImg5,.textimg1').css('display','none');
	   $("#dot6").css('top','-37px');
	  $('#clearbtn,#checkbtn,#redobtn,#resetbtn').css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"})
         $(".drpdwntArrw1,.drpdwntArrw2").css({"z-index":"0"});
      });
	  Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         $(".drpdwntArrw1,.drpdwntArrw2").css({"z-index":"0"});
      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 66000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 74500, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 108000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 118000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         $("#Stage_welcomeGroup").css('box-shadow','rgba(0, 0, 0, 0.25) 1px 1px 2px 1px');
         //$(".txtdrag").html("");
         $("#bnt_1").removeClass("chheader1Act").addClass("chheader1").css("background","#140858")
         $("#bnt_2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")
         $("#Stage").css('background','rgb(140, 190, 178)');
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         $(".drpdwntArrw1,.drpdwntArrw2").css({"z-index":"1"});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 128009, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 143000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 150000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         $("#bnt_1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#bnt_2").removeClass("chheader2Act").addClass("chheader2").css("background","#140858")
         $("#Stage").css('background','rgb(86, 185, 208)')
         $(".topParent,.parentTit,.mP,.fP").hide();
         $("#dot5, #dot6").show();
         $(".imgContains").css('top','27px');
         $(".imgContains1").css('top','100px');
         $("#txtdrag1,#txtdrag2").css('top','174px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','224px');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         $("#bnt_1").addClass("chheader1").removeClass("chheader1Act").css("background","#140858")
         $("#bnt_2").addClass("chheader2Act").removeClass("chheader2").css("background","#6D6E70")
         $("#Stage").css('background','rgb(140, 190, 178)')
         $(".topParent,.parentTit,.mP,.fP").show();
         $("#dot5, #dot6").hide();
         $(".imgContains").css('top','188px');
         $(".imgContains1").css('top','261px');
         $("#txtdrag1,#txtdrag2").css('top','335px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','385px');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17250, function(sym, e) {
         $("#opt_0").attr("checked",true);
         $(".Traitxt,.alltxt1,.alltxt2").show();
         $("#resetbtn").css({'background-color':'rgb(255, 204, 0)',"color":"rgb(0, 0, 0)"});
         $(".mselect, .fselect").css({"opacity":"1"});
         $("#drpdwntArrw1,#drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         $("#opt_0").attr("checked",false);
         $("#resetbtn").css({'background-color':'rgb(109, 110, 112)',"color":"rgb(255, 255, 255)"});
         $(".mselect, .fselect").css({"opacity":"0.5"});
         $(".drpdwntArrw1,.drpdwntArrw2").css({"z-index":"1"});
         $("#drpdwntArrw1, #drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(171, 172, 173) rgb(171, 172, 173)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         $("#opt_0").attr("checked",true);
         $(".Traitxt,.alltxt1,.alltxt2").show();
         $("#resetbtn").css({'background-color':'rgb(255, 204, 0)',"color":"rgb(0, 0, 0)"});
         $(".mselect, .fselect").css({"opacity":"1"});
         $("#drpdwntArrw1,#drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         $("#opt_0").attr("checked",false);
         $(".drpdwntArrw1,.drpdwntArrw2").css({"z-index":"1"});
         $("#resetbtn").css({'background-color':'rgb(109, 110, 112)',"color":"rgb(255, 255, 255)"});
         $(".mselect, .fselect").css({"opacity":"0.5"});
         $("#drpdwntArrw1, #drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(171, 172, 173) rgb(171, 172, 173)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         
         $(".leftSelect").css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49060, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40750, function(sym, e) {
         $(".leftSelect").css('display','none');
         $(".fpImg").css('display','block');
         $(".fselect").html("Homozygous dominant");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44750, function(sym, e) {
         $(".rightSelect").css('display','none');
         $(".mpImg").css('display','block');
         $(".mselect").html("Homozygous recessive");
         $(".cross").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)","opacity":"1"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42750, function(sym, e) {
         $(".rightSelect").css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35500, function(sym, e) {
         $(".fpImg").css('display','none');
         $(".fselect").html("Select");
         $(".mpImg").css('display','none');
         $(".mselect").html("Select");
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','none');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26500, function(sym, e) {
         $(".fpImg").css('display','none');
         $(".fselect").html("Select");
         $(".mpImg").css('display','none');
         $(".mselect").html("Select");
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','none')
         $(".leftSelect").css('display','none');
         $(".rightSelect").css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         $(".rightSelect").css('display','none');
         $(".mpImg").css('display','block');
         $(".mselect").html("Homozygous recessive");
         $(".leftSelect").css('display','none');
         $(".fpImg").css('display','block');
         $(".fselect").html("Homozygous dominant");
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block')
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"})
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47500, function(sym, e) {
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block')
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"})

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67500, function(sym, e) {
         $(".txt1,.dragImg3,.textimg,.textimg3").css('display','block');
         $("#checkbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $(".wrong").hide();
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#txt_1,#txt_2,#txt_3,#txt_4").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         $("#bnt_1").addClass("chheader1").removeClass("chheader1Act").css("background","#140858")
         $("#bnt_2").addClass("chheader2Act").removeClass("chheader2").css("background","#6D6E70")
         $("#Stage").css('background','rgb(140, 190, 178)')
         $(".topParent,.parentTit,.mP,.fP").show();
         $("#dot5, #dot6").hide();
         $(".imgContains").css('top','188px');
         $(".imgContains1").css('top','261px');
         $("#txtdrag1,#txtdrag2").css('top','335px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','385px');
         $(".drpdwntArrw1,.drpdwntArrw2").css({"z-index":"1"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67000, function(sym, e) {
         $("#checkbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $(".txt1,.dragImg3,.textimg,.textimg3").css('display','block');
         $(".wrong").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50500, function(sym, e) {
         $(".txt1,.dragImg3,.textimg,.textimg3").css('display','none');
         $(".wrong").hide();
         $("#checkbtn,#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55750, function(sym, e) {
         $("#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71500, function(sym, e) {
         $(".wrong").show();
         $("#checkbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#redobtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 76000, function(sym, e) {
         $(".wrong").show();
         $("#checkbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#redobtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#txt_1,#txt_2,#txt_3,#txt_4").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 76500, function(sym, e) {
         $("#checkbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#redobtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#txt_1,#txt_2,#txt_3,#txt_4").show();
         $(".txt1,.dragImg3,.textimg,.textimg3,#imgdrop2").css('display','block');
         $(".mpImg").css('display','block');
         $(".mselect").html("Homozygous recessive");
         $(".fpImg").css('display','block');
         $(".fselect").html("Homozygous dominant");
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block')
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"})
         $(".wrong").show();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 79500, function(sym, e) {
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $(".wrong").hide();
         $("#txt_1,#txt_2,#txt_3,#txt_4").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 85000, function(sym, e) {
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $(".wrong").hide();
         $(".txt1,.dragImg3,.textimg,.textimg3,#imgdrop2").css('display','block');
         $("#txt_1,#txt_2,#txt_3,#txt_4").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 85500, function(sym, e) {
         $(".mpImg").css('display','block');
         $(".mselect").html("Homozygous recessive");
         $(".fpImg").css('display','block');
         $(".fselect").html("Homozygous dominant");
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block')
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"})
         $(".mselect, .fselect").css({"opacity":"1"});
         $("#drpdwntArrw1,#drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)');
         $(".txt1,.dragImg3,.textimg,#imgdrop2,.textimg3").css('display','block');
         $("#txt_1,#txt_2,#txt_3,#txt_4").hide();
         $("#resetbtn").css({'background-color':'rgb(255, 204, 0)',"color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $(".Traitxt,.alltxt1,.alltxt2").show();
         $("#opt_0").attr("checked",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88500, function(sym, e) {
         $(".txt1,.dragImg3,.textimg,#imgdrop2,.textimg3").css('display','none');
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 92500, function(sym, e) {
         $("#resetbtn").css({'background-color':'rgb(255, 204, 0)',"color":"rgb(0, 0, 0)"});
         $(".txt1,.dragImg3,.textimg").css('display','none');
         $(".mpImg").css('display','block');
         $(".mselect").html("Homozygous recessive");
         $(".fpImg").css('display','block');
         $(".fselect").html("Homozygous dominant");
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block');
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"});
         $(".mselect, .fselect").css({"opacity":"1"});
         $("#drpdwntArrw1,#drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)');
         $("#opt_0").attr("checked",true);
         $("#bnt_1").addClass("chheader1").removeClass("chheader1Act").css("background","#140858")
         $("#bnt_2").addClass("chheader2Act").removeClass("chheader2").css("background","#6D6E70")
         $("#Stage").css('background','rgb(140, 190, 178)')
         $(".topParent,.parentTit,.mP,.fP").show();
         $("#dot5, #dot6").hide();
         $(".imgContains").css('top','188px');
         $(".imgContains1").css('top','261px');
         $("#txtdrag1,#txtdrag2").css('top','335px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','385px');
         $(".Traitxt,.alltxt1,.alltxt2").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 92000, function(sym, e) {
         $(".txt1,.dragImg3,.textimg,#imgdrop2,.textimg3").css('display','none');
         $("#resetbtn").css({'background-color':'rgb(255, 204, 0)',"color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $(".mselect, .fselect").css({"opacity":"1"});
         $("#drpdwntArrw1,#drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)');
         $(".Traitxt,.alltxt1,.alltxt2").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 96500, function(sym, e) {
         $(".fpImg").css('display','none');
         $(".fselect").html("Select");
         $(".mpImg").css('display','none');
         $(".mselect").html("Select");
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','none')
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         $("#opt_0").attr("checked",false);
         $("#resetbtn").css({'background-color':'rgb(109, 110, 112)',"color":"rgb(255, 255, 255)"});
         $(".mselect, .fselect").css({"opacity":"0.5"});
         $("#drpdwntArrw1, #drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(171, 172, 173) rgb(171, 172, 173)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 101000, function(sym, e) {
         $(".fpImg").css('display','none');
         $(".fselect").html("Select");
         $(".mpImg").css('display','none');
         $(".mselect").html("Select");
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','none')
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         $("#opt_0").attr("checked",false);
         $("#resetbtn").css({'background-color':'rgb(109, 110, 112)',"color":"rgb(255, 255, 255)"});
         $(".mselect, .fselect").css({"opacity":"0.5"});
         $("#drpdwntArrw1, #drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(171, 172, 173) rgb(171, 172, 173)');
         
         
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         $("#opt_0").attr("checked",false);
         $("#resetbtn").css({'background-color':'rgb(109, 110, 112)',"color":"rgb(255, 255, 255)"});
         $(".mselect, .fselect").css({"opacity":"0.5"});
         $("#drpdwntArrw1, #drpdwntArrw2").css('border-color','rgb(255, 255, 255) rgb(171, 172, 173) rgb(171, 172, 173)');
         
         $("#Stage_welcomeGroup").css('box-shadow','rgba(0, 0, 0, 0.25) 1px 1px 2px 1px');
         //$(".txtdrag").html("");
         $("#bnt_1").removeClass("chheader1Act").addClass("chheader1").css("background","#140858")
         $("#bnt_2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")
         $("#Stage").css('background','rgb(140, 190, 178)');
         $(".Traitxt,.alltxt1,.alltxt2").hide();
         
         $("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105500, function(sym, e) {
         $("#bnt_1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#bnt_2").removeClass("chheader2Act").addClass("chheader2").css("background","#140858")
         $("#Stage").css('background','rgb(86, 185, 208)')
         $(".topParent,.parentTit,.mP,.fP").hide();
         $("#dot5, #dot6").show();
         $(".imgContains").css('top','27px');
         $(".imgContains1").css('top','100px');
         $("#txtdrag1,#txtdrag2").css('top','174px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','224px');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 101500, function(sym, e) {
         $("#bnt_1").addClass("chheader1").removeClass("chheader1Act").css("background","#140858")
         $("#bnt_2").addClass("chheader2Act").removeClass("chheader2").css("background","#6D6E70")
         $("#Stage").css('background','rgb(140, 190, 178)')
         $(".topParent,.parentTit,.mP,.fP").show();
         $("#dot5, #dot6").hide();
         $(".imgContains").css('top','188px');
         $(".imgContains1").css('top','261px');
         $("#txtdrag1,#txtdrag2").css('top','335px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','385px');
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 109500, function(sym, e) {
         $("#bnt_1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#bnt_2").removeClass("chheader2Act").addClass("chheader2").css("background","#140858")
         $("#Stage").css('background','rgb(86, 185, 208)')
         $(".topParent,.parentTit,.mP,.fP").hide();
         $("#dot5, #dot6").show();
		 $("#dot6").css('top','-37px');
         $(".imgContains").css('top','27px');
         $(".imgContains1").css('top','100px');
         $("#txtdrag1,#txtdrag2").css('top','174px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','224px');
         
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','none');
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#opt_0").attr("checked",false);
         
         $("#txt_3,#txt_4,#txt_9,#txt_10,.txt2_2").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         $(".Traitxt,.alltxt1,.alltxt2").css('display','none');
         $("#opt_0").attr("checked",false);
         
         $("#resetbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 109000, function(sym, e) {
         $("#bnt_1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#bnt_2").removeClass("chheader2Act").addClass("chheader2").css("background","#140858")
         $("#Stage").css('background','rgb(86, 185, 208)')
         $(".topParent,.parentTit,.mP,.fP").hide();
         $("#dot5, #dot6").show();
		 $("#dot6").css('top','-37px');
         $(".imgContains").css('top','27px');
         $(".imgContains1").css('top','100px');
         $("#txtdrag1,#txtdrag2").css('top','174px');
         $("#txtdrag3,#txtdrag4,#txtdrag5").css('top','224px');
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2,.txt2_2").css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113000, function(sym, e) {
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block');
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"});
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','block');
         $("#pstxt1,#pstxt2").css('display','block');
         $(".Traitxt,.alltxt1,.alltxt2").css('display','block');
         $("#opt_0").attr("checked",true);
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 119000, function(sym, e) {
         $("#dot1").css('display','block');
		 $("#dot6").css('top','-37px');
         $("#opt_0").attr("checked",true);
         $(".cross").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)","opacity":"0.5"});
         $(".dragImg1,.dragImg2,#dragImg1,#dragImg2,.txt").css('display','block');
         $("#dragImg1,#dragImg2").css({'width':'148px',"top":"13px","left":"0px"});
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','block');
         $(".dragImg6,.textimg6,#imgdrop2,#txt_5_,#txt_6_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         $("#pstxt1,#pstxt2").css('display','block');
         $(".Traitxt,.alltxt1,.alltxt2").css('display','block');
         $(".txt2_2").css('display','none');
         $("#clearbtn,#redobtn,#checkbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 119500, function(sym, e) {
         $("#opt_0").attr("checked",true);
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','none');
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','block');
         $(".dragImg6,.textimg6,#imgdrop2,#txt_5_,#txt_6_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         $(".txt2_2").css('display','none');
         $("#dot6").css('top','-37px');
         $("#clearbtn,#redobtn,#checkbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $(".wrong1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129000, function(sym, e) {
         $(".wrong1").hide();
		 $("#dot6").css('top','-85px');
		  $("#txt_7").css('top','-140px');
		 $("#txt_8").css('top','-140px');
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','block');
         $("#resetbtn,#checkbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#txt_5,#txt_6,.txt2_2").show();
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_,.dragImg6,.textimg6,#imgdrop2").css('display','block');
         $(",#txt_5_,#txt_6_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         $("#pstxt1,#pstxt2").css('display','block');
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 132500, function(sym, e) {
         $(".wrong1").show();
         $("#resetbtn,#redobtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#checkbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
		 $("#dot6").css('top','-133px');
		 $("#txt_7").css('top','-188px');
		 $("#txt_8").css('top','-187px');
		 
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 135500, function(sym, e) {
         $("#dot6").css('top','-37px');
		 $("#txt_7").css('top','-92px');
		 $("#txt_8").css('top','-90px');
		 $(".wrong1").hide();
         $("#txt_5,#txt_6,.txt2_2,.dragImg6,.textimg6,#imgdrop2,#txt_5_,#txt_6_").hide();
         $("#resetbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 136000, function(sym, e) {
         //$("#imgdrop2").animate({'left':'-502px','top':'-166px'},1500);
         //$("#txt_5").animate({'left':'27px','top':'-152px'},1500);
         //$("#txt_6").animate({'margin-left':'68px','margin-top':'-126px'},1500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129500, function(sym, e) {
         $(".wrong1").hide();
		 $("#dot6").css('top','-85px');
		 $("#txt_7").css('top','-140px');
		 $("#txt_8").css('top','-140px');
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','block');
         $("#resetbtn,#checkbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#txt_5,#txt_6,.txt2_2,.dragImg6,.textimg6,#imgdrop2").show();
         $(",#txt_5_,#txt_6_").hide();
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','block');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         $("#pstxt1,#pstxt2").css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125000, function(sym, e) {
         $("#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 144000, function(sym, e) {
         $(".wrong1").hide();
         $("#resetbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#checkbtn,#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#dot6").css('top','-37px');
		 $("#txt_7").css('top','-92px');
		 $("#txt_8").css('top','-90px');
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','block');
         $("#txt_5,#txt_6,.txt2_2,.dragImg6,.textimg6,#imgdrop2,#txt_5_,#txt_6_").hide();
         
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','block');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         $("#pstxt1,#pstxt2").css('display','block');
         
         //$(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','block');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         //$("#pstxt1,#pstxt2").css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 157000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 144500, function(sym, e) {
         $(".wrong1").hide();
         $("#resetbtn,#clearbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#checkbtn,#redobtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#dot6").css('top','-37px');
		 $("#txt_7").css('top','-92px');
		 $("#txt_8").css('top','-90px');
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','block');
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2,#txt_5_,#txt_6_").hide();
         
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','block');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','block');
         $("#pstxt1,#pstxt2").css('display','block');
         
         $("#dragImg1,#dragImg2,.texxt,.txt").css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 147500, function(sym, e) {
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','none');
         
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 155000, function(sym, e) {
         //$("#resetbt").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#checkbtn,#resetbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         $("#dragImg1,#dragImg2,.texxt,.txt").css('display','none');
         $("#opt_0").attr("checked",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 158000, function(sym, e) {
         //$("#resetbt").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn,#resetbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         $("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         $("#opt_0").attr("checked",false);
         $("#dragImg1,#dragImg2,.texxt,.txt").css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 151000, function(sym, e) {
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','none');
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         $("#opt_0").attr("checked",true);
         
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','none');
         
         $("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         
         $("#dragImg1,#dragImg2,.texxt,.txt").css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 151500, function(sym, e) {
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','none');
         $("#txt_3_,#txt_4_,#txt_9_,#txt_10_").css('display','none');
         //$("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         $("#opt_0").attr("checked",true);
         $("#resetbtn").css({"background-color":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"});
         $("#clearbtn").css({"background-color":"rgb(109, 110, 112)","color":"rgb(255, 255, 255)"});
         
         $("#txt_5,#txt_6,.txt2_2,#imgdrop2").hide();
         $(".txt2,.dragImg3,.textimg,.dragImg4,.textimg4,.textimg5").css('display','none');
         
         $("#txt_3,#txt_4,#txt_9,#txt_10").css('display','none');
         $("#pstxt1,#pstxt2").css('display','none');
         
         $("#dragImg1,#dragImg2,.texxt,.txt").css('display','block');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'highAnim'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym,e){this.play(0)});
//Edge binding end
})("highAnim");
   //Edge symbol end:'highAnim'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-1817669");

$(document).ready(function(){	
	$(document).on('keyup', function(e){	
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		//console.log(parent.parentTab,$('.helpwindow').css('display'))
		if(parent.parentTab == 'welcome' && parent.$('.helpwindow').css('display') == 'none')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}	
	})	
})