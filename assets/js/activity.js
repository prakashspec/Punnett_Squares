
var organismImg = [
    ["bean1", "bean1", "bean1"],
    ["flow1", "flow1", "flow2"]
]
var ind=0;
var selectval = ["Pea Plants", "Sunflowers", "Dogs", "Misc"]
var actmatchArr = ["", ""]
var txtdragPos=[[239,291],[371,291],[145,410],[145,589],[270,410],[270,589],[405,410],[405,589]]
var dragimgpos=[[220,365],[220,543],[353,365],[353,543],[81,451],[301,174]]
var dragImsrev=[[],[204,30],[278,30]]
var PunnettAns=[[["BB","Bb","Bb","bb","B","b","B","b"],[1,1,1,2,1,1],[5,6,7,8,1,2,3,4]],
				 [["Ee","Ee","ee","ee","E","e","e","e"],[1,1,2,2,2,1]],
				 [["Ff","ff","Ff","ff","f","f","F","f"],[1,2,1,2,1,2]],
				 [["TT","Tt","Tt","tt","T","t","T","t"],[1,1,1,2,1,1]]
				 ]
var currentFlag=false;
var organSelect1 = [

    {
        'Pea Plants': [
            ["bean1", "bean1", "bean2"],
            ["yellow", "yellow", "green"],
            ["B", "b", "BB", "Bb", "bb"],
            ["B yellow", " b green"],
            ["BB", "Bb", "bb"],
            ["Seed color"]

        ]
    },
    {
        'Sunflowers': [
            ["flow2", "flow2", "flow1"],
            ["red", "red", "yellow"],
            ["E", "e", "EE", "Ee", "ee"],
            ["E red", "e yellow"],
            ["EE", "Ee", "ee"],
            ["Flower color"]

        ]
    },
    {
        'Dogs': [
            ["dog1", "dog1", "dog2"],
            ["curly", "curly", "straight"],
            ["F", "f", "FF", "Ff", "ff"],
            ["F curly", " f straight"],
            ["FF", "Ff", "ff"],
            ["Hair texture"]
        ]
    },
    {
        'Mice': [
            ["rat1", "rat1", "rat2"],
            ["dark hair", "dark hair", "light hair"],
            ["T", "t", "TT", "Tt", "tt"],
            ["T dark hair", "t light hair"],
            ["TT", "Tt", "tt"],
            ["Hair color"]

        ]
    }
]
var actansArr = ["", "", "", ""]
var replace=[["Bb","bB"],["Ee","eE"],["Ff","fF"],["Tt","tT"]]
var imgAtt=[["bb",0],["ee",1],["ff",2],["tt",3]]
var actimgArr = ["","","",""];
var actredo=false;
var actpuntpuz=false;
var ActivitPopupTxt=["Seed color in pea plants is determined by one gene. There are two alleles for this gene. The B allele is dominant. It codes for yellow color in seeds. The b allele is recessive. It codes for green color in seeds. "]
var popCount=0;
$(document).ready(function() {
    actinit();
	
})
var actselectParents = function() {
    $("#" + $(this).attr("class")).show();
	$("#acthighlight_7,#acthighlight_6").hide()
	
}
var actinit=function(){
	
	$(".actdragImg1,actdragImg2").hide();
	$(".screenArea").off("mousedown").on("mousedown",screenFun)
	$(".actfselect").off("click").on("click", actselectParents);
	$(".actmselect").off("click").on("click",wrongfun);
  //  $(".actmselect").off("click").on("click", actselectParents)
    $(".actval").off("click").on("click", actvalParents);
	
    $(".actoption").off("change").on("change", actselectOrgan)
    $(".actcross").off("click").on("click", actcrossFun)
    $("#actcheckbtn").off("click").on("click", actcheckFun)
	$("#actredobtn").off("click").on("click",actredoFun)
	$("#actclearbtn").off("click").on("click",actclearFun)
	$("#actclearbtn").off("click")
	$(".actbtn").off("click").on("click",acttabmenuFun)
	actdragFun();
	$(".actdragImg1,.acttxtdrag").draggable({disabled:true,stop:stopDrag}).css({"cursor":"default"})
	
	if(actpuntpuz){
		$("#actimgdrop5,#actimgdrop6").show()
	}else{	 
		$("#actimgdrop5,#actimgdrop6").hide()
	}
	$(".actcross").off("click")
	$("#actcheckbtn").off("click")
	$(".actfselect,.actmselect").off("click")
	$(".actfselect,.actmselect").text("Select")
	curentStep=0;
	$(".actfselect,.actmselect").css({"background":"#58595b","opacity":"0.5","cursor":"default"})	
$(".drpdwntArrw1,.drpdwntArrw2").css({"border-color":"rgb(255, 255, 255) rgb(171, 172, 173) rgb(171, 172, 173)","cursor":"default","opacity":"1"});
//actclearFun()
}

function stopDrag(event,ui)
	{
		console.log($(event.target).attr('class')+" one"); 
	}

var screenFun=function(event){
	
	console.log($(event.target).attr('class')+" two"); 
	if( ($(event.target).attr('class')=="actparentDiv" || $(event.target).attr('class')=="organism" || $(event.target).attr('class')=="topParent" || $(event.target).attr('class')=="rightDiv" || $(event.target).attr('class')=="leftDiv" && parseInt($('.expDiv').css("left")) >= 0)){
		if(curentStep<2){
		if($('.expDiv').position().left < 0){
			return;
		}
		}
		globalAudioPause();
		$("#actfselect,#actmselect").hide()
		SliderOkClick("close");
	//console.log("2")
	}
}

function wrongfun()
{
	//alert("2")
	wrongAttemptFun('stop');
	worngFlag=true
	if(currentStep==1){
	$("#acthighlight_6").show();
	}
	else if(currentStep==2){
		$("#acthighlight_7").show();
		 $(".actmselect").off("click").on("click", actselectParents);
		
	}
	
     if($(this).attr("class")=="actfselect" && currentStep==2){
	 $("#acthighlight_7").show()
	$(".actrightarr").off("click").on("click",actrightFun)
	$(".actmselect").css({"background":"#58595b","opacity":"1","cursor":"pointer"})	
	$("#actdrpdwntArrw2").css({"border-color":"rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)","cursor":"pointer","opacity":"1"})
	$(".actmselect").off("click").on("click", actselectParents).css('z-index','2');
	 }
	
}
var acttabmenuFun=function(){

	 $("#opt1_0,#opt1_1,#opt1_2,#opt1_3").removeAttr("checked");
 	 if($(this).attr("id").split("_")[1]==1){
	 
		    $(this).removeClass("chheader1Act")
		    $(this).addClass("chheader1").css({"background":"#140858"})
		    $(".chheader2").addClass("chheader2Act").css({"background":"#6D6E70"})
		    $("#activity").css({"background":"#8cbeb2"})
		    actpuntpuz=false;
			 $(".actcross").off("click").on("click", actcrossFun)
	 }
	 else{
		   $(this).removeClass("chheader2Act")
		   $(this).addClass("chheader2").css({"background":"#140858"})
		   $(".chheader1").addClass("chheader1Act").css({"background":"#6D6E70"})
		   actpuntpuz=true;
		   $("#activity").css({"background":"#56b9d0"})
		   $(".actcross").off("click")
		   $("#actcheckbtn").off("click")
		   $(".actfselect,.actmselect").off("click")
	 }
	 actclearFun();
	actpunntPuzzleFun();
}
var step1Flag=false; 
var step2Flag=false;

var actvalParents = function() {

    $("." + $(this).parent().attr("id")).text($(this).text())
    $("#" + $(this).parent().attr("id")).hide();
    if ($(this).parent().attr("id") == "actfselect") {
        var index = $(this).index()
		
        $.each(organSelect[actid][actval][0], function(ind, ele) {
	        if (index == ind){
				console.log(ele)
                $("#actfpImg").attr("src", "assets/images/activity/" + ele + ".png");
                 actmatchArr[0] = index;
				
			}
	      })
	
   }
    if ($(this).parent().attr("id") == "actmselect") {
        var index1 = $(this).index()
        $.each(organSelect[actid][actval][0], function(ind, ele) {
            if (index1 == ind){
	           $("#actmpImg").attr("src", "assets/images/activity/" + ele + ".png");
			   actmatchArr[1] = index1;
   		}
       })
    }
		
   if(currentStep==1 && !step1Flag ){
	 // alert($(".actfselect").text())
	 
	 //alert("1")
	  if($(".actfselect").text() == "Homozygous dominant")
	  {
	
			$(".actfselect,.actleftarr").off("click");
			
			rightAttemptFun();
			currentFlag=false;
			//alert(currentStep)
			$(".fpImg").show()
			step1Flag=true
			$(this).droppable({disabled:true})
			
	  }
     else{
	   // $("#acthighlight_6").show();
    	wrongAttemptFun('stop');
		$(".actfselect").off("click").on("click", actselectParents);
		currentFlag=true;
		 $("#acthighlight_6").show()
		 $(".actfselect").css({"background":"#58595b","opacity":"1","cursor":"pointer"})
		 $(".drpdwntArrw1").css({"border-color":"rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)","cursor":"pointer","opacity":"1"})
		$("#acthighlight_3").hide()
	 }
	   
   }	 
   if(currentStep==2 && step2Flag){
	 
	 
	if($(".actmselect").text() == "Homozygous recessive")
	  {
		//  alert($(".actmselect").text()) 
		rightAttemptFun();
		$(".actcross").off("click").on("click", actcrossFun);
		$(".actmselect,.actrightarr").off("click").on("click",wrongfun);
		$(".actcross").off("click").on("click", actcrossFun).css({"background":"rgb(255, 204, 0)","color":"#000","opacity":"1","cursor":"pointer"})
		$(".mpImg").show()
		$(this).droppable({disabled:true})
		step2Flag=false;
		//currentFlag=true;
		$("#act_procss").show()
		
	  }
	  else{
		
		 wrongAttemptFun('stop');
		 $(".actmselect").off("click").on("click", actselectParents);
		 //step2Flag=false;
		 $("#acthighlight_7").show()
		 $(".actmselect").css({"background":"#58595b","opacity":"1","cursor":"pointer"})	
$("#actdrpdwntArrw2").css({"border-color":"rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)","cursor":"pointer","opacity":"1"})
		 
		  
	  }
    
	   
   } 
   /* if($(".actfselect").text()!="" && $(".actmselect").text()!=""){
	  
	  if($(".actfselect").text() == "Homozygous dominant" && $(".actmselect").text()=="Homozygous recessive")
	  {
	
			$(".actcross").off("click").on("click", actcrossFun);
			$(".actfselect").off("click");
			$(".actmselect").off("click");
			rightAttemptFun();
	  }
     else{
	 
    	wrongAttemptFun('stop');
		
	 }
	   
   } */		
  
}
var worngFlag=false
var acthighlight6Fun=function(){
	
	$(this).hide();
}
var dragFlags=false;
var actleftFun=function(){
//	alert("2")
	$("#actfselect").show()
}
var actrightFun=function(){
//	alert("2")
	$("#actmselect").show()
}
var NextFun=function(){
$("#acthighlight_3,#acthighlight_5").hide();

if(currentStep==1 &&  stepIndex==0 && !worngFlag && $(".actfselect").text=="Select"){
$("#acthighlight_3,#acthighlight_5").hide();
}
else{
$("#acthighlight_3,#acthighlight_5").hide();
}
if(currentStep==1 &&  stepIndex==0){
	$("#acthighlight_6,#acthighlight_7,#act_procss").hide();
	$(".actfselect").off("click").css({"cursor":"default"})	
	$(".actfselect").css({"background":"#58595b","opacity":"0.5","cursor":"default"})
	$(".drpdwntArrw1").css({"border-color":"rgb(255, 255, 255) rgb(171, 172, 173)  rgb(171, 172, 173) ","cursor":"default","opacity":"1"})
     $("#acthighlight_3").show()
	 if($("#acthighlight_6").css("display")=="block"){
		 $("#acthighlight_3").hide()
	
	 
	 }
	}
	/* if(currentStep==1 &&  stepIndex==0 && currentStep){
		$("#acthighlight_3").hide()
			 //alert("a")
	} */
if(currentStep==1 &&  stepIndex==1){
	
$("#acthighlight_6,#acthighlight_7,#act_procss").show();
$(".actfselect").off("click").css({"cursor":"default"})	
$("#actfselect").hide();
$(".actfselect").css({"background":"#58595b","opacity":"0.5","cursor":"default"})
$(".drpdwntArrw1").css({"border-color":"rgb(255, 255, 255) rgb(171, 172, 173)  rgb(171, 172, 173) ","cursor":"default","opacity":"1"})
$(".actfselect").off("click")
} 
if(currentStep==1 &&  stepIndex==2){
	
$("#acthighlight_7,#act_procss").hide()
$(".actfselect").css({"background":"#58595b","opacity":"1","cursor":"pointer"})
$(".drpdwntArrw1").css({"border-color":"rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)","cursor":"pointer","opacity":"1"})
//$(".actmselect").off("click").on("click",wrongfun);
$(".actfselect").off("click").on("click", actselectParents).css('z-index','2');
$("#acthighlight_6").off("click").on("click", acthighlight6Fun);
$(".actleftarr").off("click").on("click",actleftFun)


}
if(currentStep==2 &&  stepIndex==0 ){
	if(!step2Flag){
	$(".actmselect").off("click")
	}
	
	$(".actmselect,.actrightarr").off("click")
	$("#actmselect").hide();
	$(".actmselect").css({"background":"#58595b","opacity":"0.5","cursor":"default"})
$(".drpdwntArrw2").css({"border-color":"rgb(255, 255, 255) rgb(171, 172, 173)  rgb(171, 172, 173) ","cursor":"default","opacity":"1"})
 $("#acthighlight_7").hide()
 /* if(step2Flag){
	
 } */
}
if(currentStep==2 &&  stepIndex==1 ){
$(".actfselect,.actleftarr").off("click").on("click", wrongfun)
 $("#acthighlight_7").show()
$(".actrightarr").off("click").on("click",actrightFun)
$(".actmselect").css({"background":"#58595b","opacity":"1","cursor":"pointer"})	
$("#actdrpdwntArrw2").css({"border-color":"rgb(255, 255, 255) rgb(88, 89, 91) rgb(88, 89, 91)","cursor":"pointer","opacity":"1"})
$(".actmselect").off("click").on("click", actselectParents).css('z-index','2');
step2Flag=true
}
else{
$(".rightSelect").hide()
//$(".actmselect").off("click")
//step2Flag=false;
}
if(currentStep==4 &&  stepIndex==1 ){
$("#acthighlight_8").show();
//$("#actdroptop1,#actdroptop2").droppable({disabled:false})

}
else{
	$("#acthighlight_8").hide();
}
if(currentStep==8 && stepIndex==1){
	dragFlags=true
}
else{
	dragFlags=false;
}
if(currentStep==8 && stepIndex==0)
{
	 $(".actdragImg1,.acttxtdrag").draggable({disabled:true}).css({"cursor":"default"})
	 $("#actdragImg1,#actdragImg2").css({"cursor":"default"})
}

if(currentStep==4 && stepIndex==1)
{
	 $(".actdragImg1,.acttxtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
	  $("#actdragImg1,#actdragImg2").css({"cursor":"pointer"})
}

if(currentStep==4 && stepIndex==0)
{
	 $(".actdragImg1,.acttxtdrag").draggable({disabled:true}).css({"cursor":"default"})
	 $("#actdragImg1,#actdragImg2").css({"cursor":"default"})
	 if(drop1flag || dragfalg){
		 $(".actdragImg1,.acttxtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
	  $("#actdragImg1,#actdragImg2").css({"cursor":"pointer"})
	 }
	 $('.expDiv').css({"top":"102px"})
	 $('.expDiv').stop().animate({left:0},800,function(){
            angleRot = (rotateValue >= 0)?0:180;		
			$('.activeSlider').myMethod(angleRot);		
		});
}

if(currentStep==8 && stepIndex==1)
{
	 $(".actdragImg1,.acttxtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
	  $("#actdragImg1,#actdragImg2").css({"cursor":"pointer"})
}

}
var actselectOrgan = function() {
	
    actval = $(this).val()
    actid = $(this).attr("id").split("_")[1]
	
	//$(".actmselect").off("click").on("click", wrongfun)
	//$(".actfselect").off("click").on("click", wrongfun)
  //  $(".actmselect").off("click").on("click", actselectParents)
	if(actid==0)
	{ 	
		$(".actradio_hide").css("display","block");
		
		rightAttemptFun();
		$("#acthighlight_3,#acthighlight_5").show();
		$("#acthighlight_1").hide();
		$(this).addClass("imChecked")
    $.each(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][2], function(ind, ele) {
	
	console.log('ind'+ind,ele)
        $("#acttxtdrag" + (ind + 1)).text(ele)
    })
    $.each(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][3], function(ind, ele) {
        $(".alltxt" + (ind + 1)).text(ele)
    })
    $(".Traitxt").text(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][5])
	}
	else{
	wrongAttemptFun("stop");	
	$("#acthighlight_1").show();
	}
	$(".option").removeClass("imChecked")
	
	 //$(".actdragImg1").show();
	  if(actid==0){$(".actdragImg1>img,.actdragImgani>img").css({"width":"148px","left":"3px","top":"13px"})}
	  else{ $(".actdragImg1,.actdragImgani").css({"width":"53px","left":"44px","top":"2px"}).removeClass("imgClass")}
	 // $("#actdragImg1").attr("src","assets/images/activity/"+organSelect[actid][actval][0][[0]]+".png")
     // $("#actdragImg2").attr("src","assets/images/activity/"+organSelect[actid][actval][0][[2]]+".png")
   if(actpuntpuz){
		    $(".actdragImg1,.acttxtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
		   if(actid==0)
			{
				$("#actimgdrop6").css({"width":"151px","height":"57px","top":"290px","left":"176px","transform":"rotate(90deg)"})
			}
			else{
				$("#actimgdrop6").css({"width":"57px","height":"151px","top":"243px","left":"223px","transform":"rotate(0deg)"})
			}
   }
   else{
	   $(".actactdragImg1,.acacttxtdrag").draggable({disabled:true}).css({"cursor":"default"})
   }
       $("#actcheckbtn").off("click")
	   if(actpuntpuz){
		   $("#actcheckbtn").off("click").on("click", actcheckFun)
	   }
}  
//var reden=false;
var actredoFun=function(){
	 drop1flag=true;
   wrongAttemptFun("stop");
$(".actdragImg").css({"cursor":"pointer"})
		$(this).off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
	actredo=true;
   if(actpuntpuz){
	   actpuntCheck();
   } else{actansCheck();}	
  // curentStep=;
  
	
   
}
var actpunntPuzzleFun=function(){
	//alert(actpuntpuz)
	if(actpuntpuz){
	$(".actfselect,.actmselect,.actcross,.drpdwntArrw1,.drpdwntArrw2,.ftxt,.mtxt,.leftDiv,.parentTit,.rfs,.fP,.mP,.topParent").hide();
	$(".imgContains").css({"top":"27px"});$(".imgContains1").css({"top":"100px"});$("#acttxtdrag1,#acttxtdrag2,#acttxtdrag3").css({"top":"174px"});
	$("#acttxtdrag4,#acttxtdrag5").css({"top":"224px"})
	$("#actimgdrop5,#actimgdrop6").show()
	/* $(".parentDiv").append('<div class="imgdrop imgdrop1" data-ans="" data-img="" id="imgdrop5"></div><div class="imgdrop imgdrop1" data-ans="" data-img="" id="imgdrop6"></div>')*/
	$(".actactdragImg1,.actacttxtdrag").draggable({disabled:true}).css({"cursor":"default"})	
	dragImsrev=[[],[43,30],[117,30]]
	
	}
	else{
		$(".actfselect,.actmselect,.actcross,.drpdwntArrw1,.drpdwntArrw2,.ftxt,.mtxt,.leftDiv,.rfs,.parentTit,.fP.mP,.topParent").show();
		$("#actimgdrop5,#actimgdrop6").hide()
		$(".imgContains").css({"top":"188px"});$(".imgContains1").css({"top":"261px"});$("#acttxtdrag2,#acttxtdrag3").css({"top":"335px"});
		$("#acttxtdrag4,#acttxtdrag5,#acttxtdrag1").css({"top":"385px"})
		$(".actactdragImg1,.actacttxtdrag").draggable({disabled:true}).css({"cursor":"default"})	
		dragImsrev=[[],[204,30],[278,30]]
	}     
	actclearFun();
	
}

var actcrossFun = function() {
	//alert(currentStep)
    $(".fpImg,.mpImg").show()
	$(this).off("click")
    $(".actdragImg1,.acttxtdrag").draggable({disabled:false}).css({"cursor":"pointer"})	
	rightAttemptFun()
    $("#actcheckbtn,.actleftarr,.actrightarr").off("click")
	$(".actcross").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","opacity":"1","cursor":"default","opacity":"0.5"})
	$(".texxt,.actdragImg1").show()
	$(".actdragImg2,.actdragImg1").css({"width":"153px","top":"0px","left":"0px"})
	$(".actdragImg1>img,.actdragImgani>img").css({"width":"148px","left":"3px","top":"13px"})
	$(".actmselect,.actfselect,.actdrpdwntArrw1,.actdrpdwntArrw1,.actdrpdwntArrw2").off("click").css({"cursor":"default"})
}
var dropCount1=0;
var dropCount2=0;
var drop1flag=false;
var dragfalg=false;
var actdragFun=function(){
		$(".actdragImg1").draggable({
        containment: '.actparentDiv',
        helper: 'clone',
        revert: 'invalid',
        drag: function(event, ui) {
            ui.helper.css('z-index', "20");
			
			 if(currentStep==7)
		    {	
				if($(this).children().attr("id").split("actdragImg1")[1] == 1){
					
				}
				else{
					   wrongfun();
						drop1flag=false
						$("#acthighlight_12").show()
				}
			}
            else{
			   if(currentStep==4){
				   
				   $("#acthighlight_8").show()
			   }
				
			}			
	    },appendTo:'body'
    })
	
    $(".acttxtdrag").draggable({
        containment: '.actparentDiv',
        helper: 'clone',
        revert: 'invalid',
        drag: function(event, ui) {
           ui.helper.css({'z-index':"20","border":"none"});
		  
	        if(currentStep==4){
				if($(this).attr("id").split("acttxtdrag")[1]==1){
				
					
				}
				else{
					drop1flag=false
					
					wrongfun();
					 dragfalg=true;
					 $("#acthighlight_8").show()
				}
		   } 
		   if(currentStep==5)
		  {	
	   dragfalg=false;
				if($(this).attr("id").split("acttxtdrag")[1] == 2){
					
				}
				else{
					wrongfun();
						drop1flag=false
				}
			} 
			 if(currentStep==6)
		  {
			   drop1flag=false
				if($(this).attr("id").split("acttxtdrag")[1] == 4){
					
				}
				else{
					wrongfun();
						drop1flag=false
						$("#acthighlight_10").show()
				}
			} 
			if(currentStep==7){
				
				$("#acthighlight_12").show()
			}
			
		}
		
    })
//var 
		$(".actimgdrop").droppable({
			accept: ".actdragImg1",
			drop: function(event, ui) {
				event.stopPropagation()
				if(currentStep==7 && $(ui.draggable).children().attr("id").split("actdragImg")[1]==1){
					if($(this).attr("id")=="actimgdrop1"){
				$(this).empty()
				$(this).append($(ui.draggable).clone());
				$(this).addClass("actdropped")
				//alert($(ui.draggable).children().attr("id").split("actdragImg")[1])
				$(this).attr("data-ans",$(ui.draggable).children().attr("id").split("actdragImg")[1])
				$(this).attr("data-img",$(ui.draggable).children().attr("src"))
				$(this).children().removeAttr("style").addClass("actdroppedImg")
				if(actid==0){$(".dragImg,.actdragImgani>img").css("width","148px")}
				rightAttemptFun();
				$(this).addClass("dropped")
				$("#actimgdrop1").attr({draggabled:true})
			}
			else{
				
				$("#acthighlight_13").show()
				if(curentStep==6){
					drop1flag=false;
				}
				wrongfun();
			}
			}
			if(dragFlags || actredo){
				$(this).addClass("dropped")
				$(this).empty()
				$(this).append($(ui.draggable).clone());
				$(this).addClass("actdropped")
				$(this).attr("data-ans",$(ui.draggable).children().attr("id").split("actdragImg")[1])
				$(this).attr("data-img",$(ui.draggable).children().attr("src"))
				$(this).children().removeAttr("style").addClass("actdroppedImg")
				if(actid==0){$(this).children().css("width","148px")}
			}
			if($(".dropped1").length==8 && $(".actdropped").length==4){
					if(!actredo){
					rightAttemptFun();
					}
					$("#actcheckbtn").off("click").on("click", actcheckFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					$(".actdragImg").css({"cursor":"default"})
				}
			}	
		});
//var dropwrong=false;
		$(".actdroptxt").droppable({
			accept: ".acttxtdrag",
			drop: function(event, ui) {
				event.stopPropagation()
				if(currentStep==4  && $(ui.draggable).text()=="B"){
					if($(this).hasClass("actdropleft")){
					   dropCount1++
					   $(this).addClass("dropped1")
						if(dropCount1==2){
							rightAttemptFun();
							$("#acthighlight_9").show()
							$("#actdropleft1,#actdropleft2").attr({draggabled:true})
						}
						$(this).empty()
						$(this).append($(ui.draggable).text());
						$(this).attr("data-drag",$(ui.draggable).attr("id"))
					}
					else{
						drop1flag=true;	
						wrongfun();
						$("#acthighlight_8").show()
									
						
					}
				}
				if(currentStep==5 &&  $(ui.draggable).text()=="b"){
						if($(this).hasClass("actdroptop") && dropCount1==2){
								dropCount2++
								$(this).addClass("dropped1")
								if(dropCount2==2){
									rightAttemptFun();
									$("#acthighlight_10,#acthighlight_11").show()
								}
								$(this).empty()
								$(this).append($(ui.draggable).text());
								$(this).attr("data-drag",$(ui.draggable).attr("id"))
								
						}
					else{
						 drop1flag=true;	
							wrongfun();							
							
					   }
			}
			if(currentStep==6  &&  $(ui.draggable).text()=="Bb"){
				if($(this).attr("id")=="actdropdown1" && dropCount2==2){
				rightAttemptFun();
				$(this).empty()
				$(this).addClass("dropped1")
				$(this).append($(ui.draggable).text());
				$(this).attr("data-drag",$(ui.draggable).attr("id"))
				$("#acthighlight_12,#acthighlight_13").show()
				
drop1flag=false;
			}
			else{
				$("#acthighlight_11").show()
				drop1flag=false;
				wrongfun();	
				
			}
			
			}
		
				if(dragFlags || actredo){
						$(this).empty()
						$(this).addClass("dropped1")
						$(this).append($(ui.draggable).text());
						$(this).attr("data-drag",$(ui.draggable).attr("id"))
					
				}
				if($(".dropped1").length==8 && $(".actdropped").length==4){
					if(!actredo){
					rightAttemptFun();
					}
					$("#actcheckbtn").off("click").on("click", actcheckFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					$(".actdragImg").css({"cursor":"default"})
				}
			}	
		});
	
}
var actcheckFun = function() {
	
		actredo=false;
		actdroppos()
		$(this).off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
	//$("#actredobtn").off("click").on("click",actredoFun)
	$("#actredobtn").off("click").on("click",actredoFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
	 $(".dot").hide()
  if(!actpuntpuz){
		 var ele = organSelect[actid][actval][4][actmatchArr[0]] + organSelect[actid][actval][4][actmatchArr[1]];
		  actsendVal(ele)
		  //console.log(organSelect[actid][actval][4][actmatchArr[1]])
		   actansCheck()
	}
	else{
		
		actpuntCheck();
	}
	if(actCount==12)
	{
		
		rightAttemptFun()
		$("#actredobtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
			$(".actdragImg1,.acttxtdrag").draggable({disabled:true}).css({"cursor":"default"})
	}
	else{
		drop1flag=false;
	    wrongAttemptFun('stop')
	}
	
	 
}

var actpuntCheck=function(){
    	
		 $(".actdroptxt").each(function(ind,elem){
			 
			 if($(this).text()!="")
			{
			   if($(this).text()==PunnettAns[actid][0][ind])
			   {
				  
				   $(this).css("border","4px solid green")
				   $(this).droppable({disabled:true}).css({"cursor":"default"})
				   
			   }
			   else
			   {

				  $(this).css("border","4px solid red") 
				   if(actredo){
					var ids=$(this).attr("data-drag")
					 var top1=$("#"+ids).css("top")
					 var left1=$("#"+ids).css("left")
					 console.log(PunnettAns[0][2][ind])
					 $("#acttxtdrag_"+PunnettAns[0][2][ind]).show().text($(this).text())
					 $("#acttxtdrag_"+PunnettAns[0][2][ind]).animate({'position':'absolute','left': left1,'top':top1}, 1500,function(){
					$(this).hide();
				
					  }); 
					$(this).html("").css("border","1px solid #ccc");
					$(this).attr("data-ans","")
			  }
			   }
			 
			 
			}
			 
		 })
		 
		 $(".actdropped").each(function(ind){
	  if($(this).attr("data-ans")==PunnettAns[actid][1][ind])
	  {
	   $(this).css("border","4px solid green")
	   $(this).droppable({disabled:true}).css({"cursor":"default"})
	  }
			  else{
				 $(this).css("border","4px solid red")
				 $("#wrong_"+$(this).attr("data-drop")).show()
				 if(actredo){
						$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).attr("src",$(this).attr("data-img")).show()
						$(this).children().hide();
							$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]+"px","left":dragImsrev[$(this).attr("data-ans")][1]+"px"}, 1500,
					function(){
					$(this).hide();
				});
		
		 $(this).css({"border":"4px dashed #fff"})
		 $(this).attr("data-ans","")
		 $(".wrong").hide();
		 $(this).removeClass("actdropped")
	  }
			  }		 
		 
	 }) 
	 
	}
	 
	


var actdroppos=function(){
	
	$(".acttextani").each(function(ind){
						$(this).css({"top":txtdragPos[ind][0]+"px","left":txtdragPos[ind][1]+"px"})
	})
	$(".actdragImgani").each(function(ind){
						$(this).css({"top":dragimgpos[ind][0]+"px","left":dragimgpos[ind][1]+"px"})
	})
	
}
var actCount=0
var actansCheck=function(){
	//alert("3")
	actCount=0
	$(".actdroptxt").each(function(ind,elem){
	
	  if($(this).text()!="")
	  {
		      
			  if($(this).attr("data-ans")==$(this).text())
			  {
				   
				 $(this).css("border","3px solid green")
				 $(this).droppable({disabled:true}).css({"cursor":"default"})
				 actCount++
			  }
			  else{
			  $(this).css("border","3px solid red")
			  				  $("#actwrong_"+$(this).attr("data-drop")).show() 
			   if(actredo){
					var ids=$(this).attr("data-drag")
					 var top1=$("#"+ids).css("top")
					 var left1=$("#"+ids).css("left")
					 $("#acttxtdrag_"+$(this).attr("data-drop")).show().text($(this).text())
					  $("#acttxtdrag_"+$(this).attr("data-drop")).animate({'position':'absolute','left': left1,'top':top1}, 1500,function(){
					$(this).hide();
				
					  });
					$(this).html("").css("border","1px solid #ccc");
					$(this).attr("data-ans","")
					 $(".wrong").hide();
					 drop1flag=true;
			  wrongAttemptFun('stop')
			  }
			  $(this).removeClass("dropped1")
			  dragFlags=true;
			  //drop1flag=false;
			  //wrongAttemptFun('stop')
			  }
	  }
	  
	  })
				
	  $(".actdropped").each(function(ind){
	 // console.log($(this).attr("data-ans")+"........."+actimgArr[ind])
	  if($(this).attr("data-ans")==actimgArr[ind])
	  {
	   $(this).css("border","4px solid green")
	   $(this).droppable({disabled:true}).css({"cursor":"default"})
	   actCount++
	  }
	  else{
		  
		  $(this).css("border","4px solid red")
var id1=$(this).parent()
		  console.log(id1)
		  $(id1).children().eq(2).show()
		 if(actredo){
			 console.log($(this).attr("id").split("actimgdrop")[1])
		  $("#actimgDrag_"+$(this).attr("id").split("actimgdrop")[1]).children().attr("src",$(this).attr("data-img")).show()
		$("#actimgDrag_"+$(this).attr("id").split("actimgdrop")[1]).show()
		$(this).children().hide();
		 
		 $("#actimgDrag_"+$(this).attr("id").split("actimgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]+12+"px","left":dragImsrev[$(this).attr("data-ans")][1]-53+"px"}, 1500,function(){
					$(this).hide();
				
					  });
		 console.log($(this).attr("data-ans"))
		 $(this).css({"border":"4px dashed #fff"})
		 $(this).attr("data-ans","")
		 $(this).removeClass("actdropped")
		   $("#actdot"+(ind+1)).show()
		   $(".wrong").hide();
		    drop1flag=true;
			  wrongAttemptFun('stop')
	  }
	  dragFlags=true;
	  
	  }
	
	})
	
	
	
}
var imId;
function actsendVal(d) {
	   //console.log(d)
    for (var i in d) {
        actansArr[i] = d.charAt(i)
		
    }
   $(".actdropmf").each(function(ind) {
		$(this).attr("data-ans", actansArr[ind])
		console.log(actansArr[ind])
    })
    $(".actdropdown").each(function(ind, ele) {
        var att = ($(this).attr("data-id")).split(',');
        var myTxt = "";
        $.each(att, function(ii, vv) {
	        myTxt += $('.actdropmf').eq(vv).attr("data-ans");
        });
			$(this).attr("data-ans",myTxt)
			var data_ans=$(this).attr("data-ans")
	
        	if(replace[actid].indexOf(data_ans))
			{
				var newStr = data_ans.replace(replace[actid][1], replace[id][0]);
			}
			$(this).attr("data-ans",newStr)
	})
	
	$(".actdroptxt").each(function(ind1,ele){
		if($(this).attr("data-ans")==imgAtt[actid][0])
		{
		   actimgArr[Number($(this).attr("id").split("dropdown")[1])-1]=2
		}
		
	
	})
		$.each(actimgArr,function(ind2,elem){
		  	if(elem=="")
			{
				actimgArr[ind2]=1
				
			}
			
		})

}

var actclearFun=function(){
	
	$(".fpImg,.mpImg,.actdragImg1").hide();
   	actdroppos();
	
	$(".actimgdrop").each(function(){
        $(this).children().remove();
		$(this).attr("data-ans","").attr("data-img","").css({"border":"4px dashed #fff"}).removeClass("dropped")
	})
	$(".actdroptxt").each(function(){
		$(this).attr("data-drag","").attr("data-ans","").text("").css({"border":"1px solid #ccc"})
	})
	$(".actfselect,.actmselect").text("Select")
	actimgArr = ["","","",""];
    actredo=false;
	actansArr= ["","","",""];
 	actinit()
	$(".actoption").removeAttr("checked");
	}  
