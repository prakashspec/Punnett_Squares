var activityFunction = function(currentPage) {
	$(".btn").show();
	puntpuz=false;
	actpuntpuz=false;
	SliderOkClick("close");
    if (currentPage == "explore") {
        console.log(currentPage);
		SliderOkClick("close");
    }
    if (currentPage == "activity") {
        console.log(currentPage);
		$(this).css("background","#8cbeb2")
		//alert(currentPage)
		
		
    }
    if (currentPage == "welcome") {
        console.log(currentPage);
		$(".btn").hide();
    }
			$(".chheader1").removeClass("chheader1Act")
		    $(".chheader1").addClass("chheader1").css({"background":"#140858"})
		    $(".chheader2").addClass("chheader2Act").css({"background":"#6D6E70"})
		    $("#explore").css({"background":"#8cbeb2"})
			puntpuz=false;
			$(".dragImg1,.fpImg,.mpImg").hide();
			id=0
			actid=0;
			$(".option,.actoption").removeAttr("checked");
			//actmatchArr["",""]
			$(".fselect,.mselect,.cross,.drpdwntArrw1,.drpdwntArrw2,.ftxt,.mtxt,.leftDiv,.rfs,.parentTit,.fP.mP,.topParent").show();
			$(".actfselect,.actmselect,.actcross,.actdrpdwntArrw1,.actdrpdwntArrw2,.actftxt,.actmtxt,.actleftDiv,.rfs,.parentTit,.fP.mP,.topParent").show();
			$("#imgdrop5,#imgdrop6,#actimgdrop5,#actimgdrop6,#dot5,#dot6").hide()
			$(".imgContains").css({"top":"188px"});$(".imgContains1").css({"top":"261px"});$("#txtdrag1,#txtdrag2").css({"top":"335px"});
			$("#txtdrag4,#txtdrag5,#txtdrag3").css({"top":"385px"})
			$(".actfselect,.actmselect").text("")
			dragImsrev=[[],[191,83],[263,83]]
			puntpuz=false;
			$(".mselect,.fselect,.actmselect,.actfselect").off("click")
			
		
}
var organismImg = [
    ["bean1", "bean1", "bean1"],
    ["flow1", "flow1", "flow2"]
]
var ind=0;
var radiobtn=false;
var selectval = ["Pea Plants", "Sunflowers", "Dogs", "Misc"]
var matchArr = ["", ""]
var txtdragPos=[[239,291],[371,291],[145,410],[145,589],[270,410],[270,589],[405,410],[405,589]]
var dragimgpos=[[220,365],[220,543],[353,365],[353,543],[81,451],[301,233]]
var dragImsrev=[[],[191,83],[263,83]]
var PunnettAns=[[["BB","Bb","Bb","bb","B","b","B","b"],[1,1,1,2,1,1],[5,6,7,8,1,2,3,4]],
				 [["Ee","Ee","ee","ee","E","e","e","e"],[1,1,2,2,2,1]],
				 [["Ff","ff","Ff","ff","f","f","F","f"],[1,2,1,2,2,1]],
				 [["TT","Tt","Tt","tt","T","t","T","t"],[1,1,1,2,1,1]]
				 ]

var organSelect = [

    {
        'Pea Plants': [
            ["bean1", "bean1", "bean2"],
            ["yellow", "yellow", "green"],
            ["B", "b", "BB", "Bb", "bb"],
            ["B yellow", " b green"],
            ["BB", "Bb", "bb"],
            ["Seed color"],
			["Yellow seeds","Green seeds"]

        ]
    },
    {
        'Sunflowers': [
            ["flow2", "flow2", "flow1"],
            ["red", "red", "yellow"],
            ["E", "e", "EE", "Ee", "ee"],
            ["E red", "e yellow"],
            ["EE", "Ee", "ee"],
            ["Flower color"],
			["Red flower","Yellow flower"]

        ]
    },
    {
        'Dogs': [
            ["dog1", "dog1", "dog2"],
            ["curly", "curly", "straight"],
            ["F", "f", "FF", "Ff", "ff"],
            ["F curly", " f straight"],
            ["FF", "Ff", "ff"],
            ["Hair texture"],
			["Curly hair","Straight hair"]
        ]
    },
    {
        'Mice': [
            ["rat1", "rat1", "rat2"],
            ["dark hair", "dark hair", "light hair"],
            ["T", "t", "TT", "Tt", "tt"],
            ["T dark hair", "t light hair"],
            ["TT", "Tt", "tt"],
            ["Hair color"],
			["Dark hair","Light hair"]

        ]
    }
]
var ansArr = ["", "", "", ""]
var replace=[["Bb","bB"],["Ee","eE"],["Ff","fF"],["Tt","tT"]]
var imgAtt=[["bb",0],["ee",1],["ff",2],["tt",3]]
var imgArr = ["","","",""];
var radiobtn=false;
var puntpuz=false;
$(document).ready(function() {
	
   init(); 
	
})

function init(){
	
	
	$(".fselect,.drpdwntArrw1").off("click").on("click", selectParents)
    $(".mselect,.drpdwntArrw2").off("click").on("click", selectParents1)
	$('.parentDiv').off("click").on("click",parentfun)
	$(".okBtn").off("click").on("click",okbtnFun)
    $(".val").off("click").on("click", valParents)
    $(".option").off("click").on("click", selectOrgan)
    $(".cross").off("click").on("click", crossFun)
    $("#checkbtn").off("click").on("click", checkFun)
	$(".drpdwntArrw1,.drpdwntArrw2").off("click")
	$("#clearbtn").off("click").on("click",clearFun)
	$("#resetbtn").off("click").on("click",resetFun) 
	$(".btn").off("click").on("click",tabmenuFun)
	$(".fselect,.mselect").css({"opacity":"0.5"})
	 $("#checkbtn,#redobtn").off("click")
	$(".drpdwntArrw1,.drpdwntArrw2").css({"border-color":"#fff #abacad #abacad #abacad"})
	 dragFun();
	 $(".texxt").hide()
	  $(".drp").off("click")
	 $(".dragImg1,.txtdrag").draggable({disabled:true})
 	if(puntpuz){
		$("#imgdrop5,#imgdrop6,#dot5,#dot6").show()
		$(".dragImg1").css("left","0px")
	}else{	 
	 $("#imgdrop5,#imgdrop6,#dot5,#dot6").hide()
	}
	 $(".cross").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default","opacity":"0.5"})
	  $(".bnt").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
	 $("#checkbtn").off("click")
	 $(".fselect,.mselect,.drpdwntArrw1,.drpdwntArrw2").off("click")
	 $(".drp").off("click")
       $(".dragImg1").hide() 
	   $(".popup").hide();
	   matchArr=["",""]
	   $(".wrong").hide();
	   $(".expDiv,.activeSlider").css("display","none");
	   $(".Traitxt,.alltxt1,.alltxt2").html("")
	   $(".fselect,.mselect").html("Select")
	    $(".drp").off("click").css({"cursor":"default"});
}
 var parentfun=function(){
		$("#fselect,#mselect").hide();
}
var okbtnFun=function(){
	 $(this).parent().hide();
	 //$("#resetbtn").trigger("click")
	 //$("#resetbtn").trigger("click")
	 globalAudioPause();
}
var tabmenuFun=function(){
	$("#opt_0,#opt_1,#opt_2,#opt_3").removeAttr("checked");
	$(".dot").show()
 	 if($(this).attr("id").split("_")[1]==1){
		    $(this).removeClass("chheader1Act")
		    $(this).addClass("chheader1").css({"background":"#140858"})
		    $(".chheader2").addClass("chheader2Act").css({"background":"#6D6E70"})
		    $("#explore").css({"background":"#8cbeb2"})
		    puntpuz=false;
			$(".fP,.mP").show();
			 $(".cross").off("click").on("click", crossFun)
	 }
	 else{
		 
		   $(this).removeClass("chheader2Act")
		   $(this).addClass("chheader2").css({"background":"#140858"})
		   $(".chheader1").addClass("chheader1Act").css({"background":"#6D6E70"})
		   puntpuz=true;
		   $("#explore").css({"background":"#56b9d0"})
		   $(".cross").off("click")
		   $("#checkbtn").off("click")
		   $(".fselect,.mselect,.drpdwntArrw1,.drpdwntArrw2").off("click")
		   $(".drp").off("click")

	 }
	resetFun();
	punntPuzzleFun();
	$(".radio_hide,.dragImg1").hide();
	$(".txtdrag").text("")
	
} 
var valParents = function(e) {
	
    $("." + $(this).parent().attr("id")).text($(this).text())
    $("#" + $(this).parent().attr("id")).hide();

    if ($(this).parent().attr("id") == "fselect") {
        var index = $(this).index()
        $.each(organSelect[id][val][0], function(ind, ele) {
	        if (index == ind){
				console.log(ele)
                $("#fpImg").attr("src", "assets/images/activity/" + ele + ".png")
				 $(".fpImg").show();
                 matchArr[0] = index;
			}
	      })
	
   }
    if ($(this).parent().attr("id") == "mselect") {
        var index1 = $(this).index()
        $.each(organSelect[id][val][0], function(ind, ele) {
            if (index1 == ind){
                $("#mpImg").attr("src", "assets/images/activity/" + ele + ".png")
				$(".mpImg").show();
            matchArr[1] = index1
		
			}
       })
    }
	

   if(matchArr.indexOf("") === -1){
	   
   $(".cross").off("click").on("click", crossFun).css({"background":"rgb(255, 204, 0)","color":"#000","opacity":"1","cursor":"pointer"})
	    
   }		
}
var selectOrgan = function(e) {
					$("#resetbtn").off("click").on("click",resetFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
    val = $(this).val()
    id = $(this).attr("id").split("_")[1]
	console.log(id)
	
	$(".option").removeClass("imChecked")
	if(id==3){
		
		$("#fpImg,#mpImg").css({"width":"110px","margin-top":"-9px"})
	}
	if(id==1)
	{
		$("#fpImg,#mpImg").css({"margin-top":"18px","width":"55px"})
	}
	if(id==0)
	{
		$("#fpImg,#mpImg").css({"margin-top":"30px","width":"215px"})
	}
	if(id==2)
	{
		$("#fpImg,#mpImg").css({"margin-top":"8px","width":"75px"})
	}

	$(this).addClass("imChecked")
    $.each(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][2], function(ind, ele) {
        $("#txtdrag" + (ind + 1)).text(ele)
    })
    $.each(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][3], function(ind, ele) {
        $(".alltxt" + (ind + 1)).text(ele)
    })
$.each(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][6], function(ind, ele) {
        $(".textdrag" + (ind + 1)).text(ele)
    })
	
    $(".Traitxt").text(organSelect[$(this).attr("id").split("_")[1]][$(this).val()][5])
	 $(".dragImg1").show();
	 if(id==0){$(".dragImgani>img,.dragImg1>img").css({"width":"148px","top":"13px","left":"0px"})}
	  else if(id==3){$(".dragImg1>img,.dragImgani>img").css({"width":"63px","top":"-3px","left":"35px"}).removeClass("imgClass")}
	  else
	  {
		  $(".dragImg1>img,.dragImgani>img").css({"width":"39px","top":"2px","left":"55px"}).removeClass("imgClass")
	}
	  $("#dragImg1").attr("src","assets/images/activity/"+organSelect[id][val][0][[0]]+".png")
	   
   $("#dragImg2").attr("src","assets/images/activity/"+organSelect[id][val][0][[2]]+".png")
  // alert(puntpuz)
   if(puntpuz){
   $('.imgdrop').empty().droppable({disabled:false}).attr('data-img','');
   $('.dropdown').empty().droppable({disabled:false});
   $('.dropleft').empty().droppable({disabled:false});
   $('.droptop').empty().droppable({disabled:false});
   $(".dragImg1,.txtdrag").draggable({disabled:false})
createDefault();	  
	   $(".txtdrag").css({"color":"#000"})
	   $(".texxt").show()
		  /* if(id==0)
			{
				$("#imgdrop6").css({"width":"151px","height":"57px","top":"290px","left":"176px","transform":"rotate(90deg)"})
			}
			else{
				$("#imgdrop6").css({"width":"64px","height":"151px","top":"243px","left":"218px","transform":"rotate(0deg)"})
			} */
				//$("#imgdrop6").css({"width":"64px","height":"151px","top":"243px","left":"218px","transform":"rotate(0deg)"})
   }
   else{
	  // alert("2")
	   $(".dragImg1,.txtdrag").draggable({disabled:true})
	   $(".txtdrag").css({"color":"#fff"})
	    $(".dragImg").hide() 
   }
   
	  $("#checkbtn").off("click")
	   if(puntpuz){
		   
		   $("#checkbtn").off("click").on("click", checkFun)
		 $("#checkbtn").off("click")  
	   }
	$(".fselect,.drpdwntArrw1").off("click").on("click", selectParents).css({"opacity":"1","cursor":"pointer"})
$(".mselect,.drpdwntArrw2").off("click").on("click", selectParents1).css({"opacity":"1","cursor":"pointer"})
$(".drpdwntArrw1,.drpdwntArrw2").css({"border-color":"#fff #58595b #58595b #58595b"})
$(".drp").off("click").on("click",selectparents2)	

}  

var redoFun=function(){
	redo=true;
	$(this).off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
   if(puntpuz){
	   puntCheck();
   } else{ansCheck();}	
   $(".dragImg1,.txtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
 $(".dragImg").css({"cursor":"pointer"});
	   
	  $(".dragImgtmp").draggable({disabled:true}).css({"cursor":"default"})
   
	
	
}
var punntPuzzleFun=function(){
	
	if(puntpuz){
	$(".fselect,.mselect,.cross,.drpdwntArrw1,.drpdwntArrw2,.ftxt,.mtxt,.leftDiv,.parentTit,.rfs,.fP,.mP,.topParent").hide();
	$(".imgContains").css({"top":"27px"});$(".imgContains1").css({"top":"100px"});$("#txtdrag1,#txtdrag2").css({"top":"174px"});
	$("#txtdrag4,#txtdrag5,#txtdrag3").css({"top":"224px"})
	$("#imgdrop5,#imgdrop6,#dot5,#dot6").show()
	$(".dragImg1,.txtdrag").draggable({disabled:true})
	dragImsrev=[[],[43,30],[117,30]]
			   $("#txtdrag3").css({"left":"26px","top":"224px"})
			   $("#imgdrop5,#imgdrop6").css({"border":"4px solid #fff"})
	}
	else{
		$(".fselect,.mselect,.cross,.drpdwntArrw1,.drpdwntArrw2,.ftxt,.mtxt,.leftDiv,.rfs,.parentTit,.fP.mP,.topParent").show();
		$("#imgdrop5,#imgdrop6").hide()
		$(".imgContains").css({"top":"188px"});$(".imgContains1").css({"top":"261px"});$("#txtdrag1,#txtdrag2,#txtdrag3").css({"top":"335px"});
		$("#txtdrag4,#txtdrag5").css({"top":"385px"})
		$(".dragImg1,.txtdrag").draggable({disabled:true})
		dragImsrev=[[],[191,83],[263,83]]
				   $("#txtdrag3").css({"left":"26px","top":"385px"})
	}     
	resetFun();
	
}

var crossFun = function() {
	$(this).off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","opacity":"0.5","cursor":"default"})
    $(".fpImg,.mpImg").show()
    $(".dragImg1,.txtdrag").draggable({disabled:false})
    //$("#checkbtn").off("click").on("click", checkFun)
	$(".textdrag1").html()
		$(".textdrag1").html()
	$(".fselect,.mselect").off("click").css({"cursor":"default"});
	 $(".dragImg,.texxt").show() 
	 $(".txtdrag").css({"color":"#000"})
	 $(".drp").off("click").css({"cursor":"default"});

}
var dropCnt=0;
var dragFun=function(){
	
	$(".dragImg1").draggable({
        connectToSortable: '.drop-area',
        containment: '.parentDiv',
		start:function(e,ui){
			$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),
            top: Math.floor(ui.helper.height() / 2)
         }; 
		},
        helper: 'clone',
        revert: 'invalid',
        drag: function(event, ui) {
            ui.helper.css('z-index', "20");
        },appendTo:'body'
    })
    $(".txtdrag").draggable({
        connectToSortable: '.drop-area',
        containment: '.parentDiv',
		start:function(e,ui){
			$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),
            top: Math.floor(ui.helper.height() / 2)
         }; 
		},
        helper: 'clone',
        revert: 'invalid',
        drag: function(event, ui) {
           ui.helper.css({'z-index':"20","border":"none"});
        }
		
    })

		$(".imgdrop").droppable({
			accept: ".dragImg1",
			drop: function(event, ui) {
				$(this).empty()
				$(this).append($(ui.draggable).clone());
				$(this).addClass("dropped")
				//alert($(ui.draggable).children().attr("id").split("dragImg")[1])
				$(this).attr("data-ans",$(ui.draggable).children().attr("id").split("dragImg")[1])
				$(this).attr("data-img",$(ui.draggable).children().attr("src"))
				$(this).children().removeAttr("style").addClass("droppedImg")
				$("#clearbtn").off("click").on("click",clearFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
				//var s=$(".imgdrop").children().children().eq(1).css("position","relative")
			
				$(".radio_hide").show()
				if(id==0){$(".dragImg,.dragImgani>img").css({"width":"148px"})}
	  else if(id==3){$(".dragImg,.dragImgani>img").css({"width":"63px","top":"-3px"}).removeClass("imgClass")}
	  else
	  {
		  $(".dragImg,.dragImgani>img").css({"width":"39px","top":"2px"}).removeClass("imgClass")
		 // $(".dragImgani>img").css({"left":"55px"}).removeClass("imgClass")
		  }
		  
				if(puntpuz){
					if(id==0){
					//$('#imgdrop6 img').css({"transform":"rotate(90deg)","left":"-45px"});
					}
					if($(".dropped").length==6 &&  $(".dropped1").length==8)
                {
					$("#checkbtn").off("click").on("click", checkFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					
				}
					
				}
				else{				
				if($(".dropped").length==4 &&  $(".dropped1").length==8)
                {
					$("#checkbtn").off("click").on("click", checkFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					
				}
				}	
			}
		});

		$(".droptxt").droppable({
			accept: ".txtdrag",
			drop: function(event, ui) {
			$(this).empty();
			$(".radio_hide").show()
				$(this).append($(ui.draggable).text());
				
				$(this).attr("data-drag",$(ui.draggable).attr("id"))
				$("#clearbtn").off("click").on("click",clearFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
				$(this).addClass("dropped1")
				if(puntpuz){
					if($(".dropped").length==6 &&  $(".dropped1").length==8)
                {
					$("#checkbtn").off("click").on("click", checkFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
 $(".dragImg,.txtdrag").draggable({disabled:true}).css({"cursor":"default"})
				}
					
				}
				else{				
				if($(".dropped").length==4 &&  $(".dropped1").length==8)
                {
					$("#checkbtn").off("click").on("click", checkFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					 $(".dragImg,.txtdrag").draggable({disabled:true}).css({"cursor":"default"})
					
				}
				}				
			}
		});
	
}
var checkFun = function() {
	$("#redobtn").off("click").on("click",redoFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
	redo=false;
	 $(".dot").hide()
    droppos();
	$("#checkbtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
  if(!puntpuz){
		 var ele = organSelect[id][val][4][matchArr[0]] + organSelect[id][val][4][matchArr[1]];
		  sendVal(ele)
		   ansCheck()
	}
	else{
		
		puntCheck();
	}
$(".dragImg,.txtdrag,.dragImg1").draggable({disabled:true}).css({"cursor":"default"})
	 
}

var puntCheck=function(){
    count1=0
		$(".droptxt").each(function(ind,elem){
					 
					 if($(this).text()!="")
					{
					   if($(this).text()==PunnettAns[id][0][ind])
					   {
						  $(this).addClass("rightcol1")
/* 						   if($(this).attr('data-dropdis') == 'true'){
						   $(this).css("border","1px solid #ccc")
						   } */
						   $(this).droppable({disabled:true})
						   count1++;
					   }
					   else
					   {
						  $(this).addClass("wrongcol1") 
						  $("#wrong_"+$(this).attr("data-drop")).show()
						   if(redo){
							   $(this).removeClass("wrongcol1")
									 var ids=$(this).attr("data-drag")
									 var top1=$("#"+ids).css("top")
									 var left1=$("#"+ids).css("left")
									 $("#txtdrag_"+PunnettAns[0][2][ind]).show().text($(this).text())
									 console.log(ind)
									 $("#txtdrag_"+PunnettAns[0][2][ind]).animate({'position':'absolute','left': left1,'top':top1}, 1500,function(){
									 $(this).hide();
									}); 
									$(this).html("").css("border","1px solid #ccc");
									$(this).attr("data-ans","")
									 $(this).removeClass("dropped1")
									$(".wrong").hide();
								  }
					   }
					 
					 
					}
					 
			})
		 
				 $(".dropped").each(function(ind){console.log($(this).attr('data-dropdis'))
					  if($(this).attr("data-ans")==PunnettAns[id][1][ind])
					  {
					  console.log(PunnettAns[id][1][ind])
						   $(this).addClass("rightcol")
						   /* if($(this).attr('data-dropdis') == 'true'){
						   $(this).css("border","1px dashed #a3a3a3")
						   } */
						   $(this).droppable({disabled:true})
						   count1++;
						     $(this).children().addClass("dragImgtmp")
					  }
					  else{
							$(this).addClass("wrongcol")
							var id1=$(this).parent()
		  console.log(id1)
		  $(id1).children().eq(2).show()
						 if(redo){
									  $("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).show()
		 $("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).children().attr("src",$(this).attr("data-img"))
									$(this).children().hide();
									$(this).removeClass("wrongcol")
									/* $("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]+"px","left":dragImsrev[$(this).attr("data-ans")][1]+"px"}, 1500,
									function(){
												$(this).hide();
											  }); */
											  
											  if(id==1 || id==2){
		 $("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]-13+"px","left":dragImsrev[$(this).attr("data-ans")][1]+"px"}, 1500,function(){
					$(this).hide();
				
					  });
		}
		else if(id==3){
			$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]-20+"px","left":dragImsrev[$(this).attr("data-ans")][1]-8+"px"}, 1500,function(){
					$(this).hide();
				
					  });
		}
		else{
			
			$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]-3+"px","left":dragImsrev[$(this).attr("data-ans")][1]-3+"px"}, 1500,function(){
$(this).hide();
				
					  });
		}                            $("#dot"+(ind+1)).show()  
									 $(this).css({"border":"4px dashed #fff"})
									 $(this).attr("data-ans","")
									 $(this).removeClass("dropped")
									 $(".wrong").hide();
								}
					  }		 
				 
			 }) 
				if(count1==14){
					
					$(".popup").show();
					//globalAudioName="good_work.mp3"
						$("#redobtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
					$("#resetbtn").off("click").on("click",resetFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					$("#clearbtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
						$(".dragImg1,.txtdrag").draggable({disabled:true}).css({"cursor":"default"})
				}
				else{
					$(".popup").hide();
				}
	 
	}
	 
	


var droppos=function(){
	
	$(".textani").each(function(ind){
						$(this).css({"top":txtdragPos[ind][0]+"px","left":txtdragPos[ind][1]+"px"})
	})
	$(".dragImgani").each(function(ind){
		$(this).css({"top":dragimgpos[ind][0]+"px","left":dragimgpos[ind][1]+"px"})
	})
	
}
var count1=0;

var ansCheck=function(){
	count1=0;
	
	$(".droptxt").each(function(ind,elem){
	  if($(this).text()!="")
	  {
			  if($(this).attr("data-ans")==$(this).text())
			  {
				 $(this).addClass("rightcol1")
				 $(this).droppable({disabled:true})
				// countAns();
				 count1++
				 
			  }
			  else{
			  $(this).addClass("wrong1")
			  console.log($(this).attr("data-drop"),elem)
			  $("#wrong_"+$(this).attr("data-drop")).show()
			   if(redo){
					var ids=$(this).attr("data-drag")
					 var top1=$("#"+ids).css("top")
					 var left1=$("#"+ids).css("left")
					 $("#txtdrag_"+$(this).attr("data-drop")).show().text($(this).text())
					  $("#txtdrag_"+$(this).attr("data-drop")).animate({'position':'absolute','left': left1,'top':top1}, 1500,function(){
					  $(this).hide();
				$(".imgdrop").removeClass("wrongcol1")
					  });
					$(this).removeClass("dropped1")
					
					$(this).html("").css("border","1px solid #ccc");
					$(this).attr("data-ans","")
					$(".wrong").hide();
			  }
			  }
	  }
	  
	  })
				
	  $(".dropped").each(function(ind){
	
	  if($(this).attr("data-ans")==imgArr[ind])
	  {
			  $(this).addClass("rightcol")
			   $(this).droppable({disabled:true}) ;
			   $(this).children().addClass("dragImgtmp")
			// var ele1=$(this).parent()

			
				// countAns();
				count1++
	  }
	  else{
		  
		 $(this).addClass("wrongcol")
		  
	      var id1=$(this).parent()
		  console.log(id1)
		  $(id1).children().eq(2).show()
		   
		 if(redo){
		  $("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).show()
		 $("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).children().attr("src",$(this).attr("data-img"))
		 $(this).children().hide();
		$(".wrong").hide();
		
		$(this).removeClass("wrongcol")
		//alert($(this).attr("id"))
		
		if(id==1 || id==2){
		
		$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]+"px","left":dragImsrev[$(this).attr("data-ans")][1]-53+"px"}, 1500,function(){
					$(this).hide();
				
					  });
		}
		else if(id==3){
			$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]-6+"px","left":dragImsrev[$(this).attr("data-ans")][1]-62+"px"}, 1500,function(){
					$(this).hide();
				
					  });
		}
		else{
			
			$("#imgDrag_"+$(this).attr("id").split("imgdrop")[1]).animate({"top":dragImsrev[$(this).attr("data-ans")][0]+12+"px","left":dragImsrev[$(this).attr("data-ans")][1]-53+"px"}, 1500,function(){
					$(this).hide();
				
					  });
		}
		// console.log($(this).parent().eq(3).attr('id'))
		 $(this).css({"border":"4px dashed white"})
		 $(this).attr("data-ans","")
		 $(this).removeClass("dropped")
		  $("#dot"+(ind+1)).show()
		//  alert("2")
	  }
	  }
	
	})
	
	    if(puntpuz){
				if(count1==14){
					
					$(".popup").show();
					$("#redobtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
					$("#resetbtn").off("click").on("click",resetFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					$("#clearbtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
						$(".dragImg1,.txtdrag").draggable({disabled:true}).css({"cursor":"default"})
					
				}
				else{
					$(".popup").hide();
				}
		}
		else{
			
			if(count1==12){
					
					$(".popup").show();
						$("#redobtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
					$("#resetbtn").off("click").on("click",resetFun).css({"background":"rgb(255, 204, 0)","color":"#000","cursor":"pointer"})
					$("#clearbtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
					$(".dragImg1,.txtdrag").draggable({disabled:true}).css({"cursor":"default"})
					
				}
				else{
					$(".popup").hide();
				}
		}
	
}
var selectParents = function(e) {
	e.stopPropagation();
	$(".radio_hide").show();
  //  $("#" + $(this).attr("class")).show()
	$(".option").off("click")
	$(".rightSelect").hide()
	$(".leftSelect").show()
	/* if($(".leftSelect").css("display")=="block"){
		
		$(".rightSelect").hide()
	}
	if($(".rightSelect").css("display")=="block"){
		
		$(".leftSelect").hide()
	} */
	
	
	
	
}

var selectParents1 = function(e) {
	e.stopPropagation();
	$(".radio_hide").show();
  //  $("#" + $(this).attr("class")).show()
	$(".option").off("click")
	$(".rightSelect").show()
	$(".leftSelect").hide()
	/* if($(".leftSelect").css("display")=="block"){
		
		$(".rightSelect").hide()
	}
	if($(".rightSelect").css("display")=="block"){
		
		$(".leftSelect").hide()
	} */
	
	
	
	
}
var selectparents2=function(e){
	e.stopPropagation();
	$(".radio_hide").show();
	$(".option").off("click")
		$(".leftSelect").hide()
	if($(this).attr("id")=="drpdwntArrw1")
	{
		$("#fselect").show()
		
		
	}
//	alert($(this).attr("id"))
if($(this).attr("id")=="drpdwntArrw2")
	{
		$("#mselect").show()
		
	}	
	if($(".leftSelect").css("display")=="block"){
		
		$(".rightSelect").hide()
	}
	if($(".rightSelect").css("display")=="block"){
		
		$(".leftSelect").hide()
	}
}
var countAns=function(){
	
				if($(this).hasClass("group1"))
				 {
						count1++;
				 }
				 if($(this).hasClass("group2"))
				 {
						count1++;
				 }
				 if($(this).hasClass("group3"))
				 {
						count1++;
				 }
				 if($(this).hasClass("group4"))
				 {
						count1++;
				 }
				 
				 
	
}
var imId;
function sendVal(d) 
{
		
    for (var i in d) {
        ansArr[i] = d.charAt(i)
    }
   $(".dropmf").each(function(ind) {
		$(this).attr("data-ans", ansArr[ind])
    })
    $(".dropdown").each(function(ind, ele) {
        var att = ($(this).attr("data-id")).split(',');
		console.log(att)
        var myTxt = "";
        $.each(att, function(ii, vv) {
            myTxt += $('.dropmf').eq(vv).attr("data-ans");
        });
			$(this).attr("data-ans",myTxt)
			var data_ans=$(this).attr("data-ans")
	
        	if(replace[id].indexOf(data_ans))
			{
				var newStr = data_ans.replace(replace[id][1], replace[id][0]);
			}
			$(this).attr("data-ans",newStr)
	})
	
	$(".droptxt").each(function(ind1,ele){
		if($(this).attr("data-ans")==imgAtt[id][0])
		{
		   imgArr[Number($(this).attr("id").split("dropdown")[1])-1]=2
		}
		
	
	})
		$.each(imgArr,function(ind2,elem){
		  	if(elem=="")
			{
				imgArr[ind2]=1
			}
			
		})

}

var resetFun=function(){
	
	    $(this).off("click").css({"background":"rgb(109, 110, 112)"})
		$(".fpImg,.mpImg,.dragImg").hide();
		droppos();
		$(".imgdrop").removeClass("rightcol wrongcol")
		$(".droptxt").removeClass("rightcol1 wrongcol1")
		$(".imgdrop").each(function(){
		$(this).children().remove();
		$(this).attr("data-ans","").attr("data-img","").css({"border":"4px dashed #fff"}).removeClass("dropped")
		})
		$(".droptxt").each(function(){
			$(this).attr("data-drag","").attr("data-ans","").text("").css({"border":"1px solid #ccc"}).removeClass("dropped1")
		})
		
		$(".fselect,.mselect").text("")
		imgArr = ["","","",""];
		redo=false;
		 matchArr=["",""]
	   $(".wrong").hide();
		ansArr= ["","","",""];
		$(".radio_hide,.leftSelect,.rightSelect").hide();
		$(".txtdrag").css({"color":"#fff"})
		$(".option").removeAttr("checked");
		init();
		$(".droptxt,.imgdrop").droppable({disabled:false})
		$(".dragImg,.txtdrag").css({"cursor":"pointer"})
		$(".dot").show()
		if(puntpuz){
			$("#dot6,#dot5").show();
		}
		else{
		$("#dot6,#dot5").hide();
		}
	}  

var clearFun =function(){
	
	$(this).off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
		//$(".fpImg,.mpImg,.dragImg").hide();
		droppos();
	 $(".imgdrop").each(function(){
		$(this).children().remove();
		$(this).attr("data-ans","").attr("data-img","").css({"border":"4px dashed #fff"}).removeClass("dropped")
		})
		$(".droptxt").each(function(){
			$(this).attr("data-drag","").attr("data-ans","").text("").css({"border":"1px solid #ccc"}).removeClass("dropped1")
		})
		redo=false;
		$(".wrong").hide();
		$(".dot").show()
	//	$("").addClass("rightcol")
		$(".droptxt,.imgdrop,.txtdrag").droppable({disabled:false})
			$(".droptxt,.imgdrop,.txtdrag").droppable({disabled:false})
		$(".imgdrop").removeClass("rightcol wrongcol")
		$(".droptxt").removeClass("rightcol1 wrongcol1")
	$(".dragImg1,.txtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
	$("#redobtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
		if(puntpuz){
	createDefault();
	}
	else{
		$(".droptxt,.imgdrop,.txtdrag").droppable({disabled:false})
		$(".dragImg1,.txtdrag").draggable({disabled:false}).css({"cursor":"pointer"})
		
	$("#dot5,#dot6").hide();
	}
	
	$("#checkbtn").off("click").css({"background":"rgb(109, 110, 112)","color":"#fff","cursor":"default"})
}
var createDefault = function(){
$('.dropdown,.imgdrop,.dropleft,.droptop').removeAttr('data-dropdis');
$('.imgdrop').removeClass("dropped").attr('data-ans','');
$('.dropdown').removeClass("dropped1");
$('.droptop').removeClass("dropped1");
   switch(id)
   {
   case '0':
   $('.box1 #imgdrop1').attr('data-img','assets/images/activity/bean1.png').attr('data-dropdis','true').addClass('dropped').attr('data-ans','1');
   $('.box1 #imgdrop1').append('<img id="dragImg1" class="dragImg ui-draggable ui-draggable-handle droppedImg" data-ans="" data-dropdis="true" src="assets/images/activity/bean1.png" style="width: 148px;"><div class="textdrag1 texxt" style="display: block;">Yellow seeds</div>');
   
   $('.box4 #imgdrop4').attr('data-img','assets/images/activity/bean2.png').attr('data-dropdis','true').addClass('dropped').attr('data-ans','2');
   $('.box4 #imgdrop4').append('<img id="dragImg2" class="dragImg ui-draggable ui-draggable-handle droppedImg" data-ans="" data-dropdis="true" src="assets/images/activity/bean2.png" style="width: 148px;"><div class="textdrag1 texxt" style="display: block;">Green seeds</div>');
   
   $('.box2 #dropdown2').text('Bb').attr('data-dropdis','true').addClass('dropped1');
   $('.box3 #dropdown3').text('Bb').attr('data-dropdis','true').addClass('dropped1');
   break;
   
   case '1':
   $('.box1 #dropdown1').text('Ee').attr('data-dropdis','true').addClass('dropped1');
   $('.box4 #dropdown4').text('ee').attr('data-dropdis','true').addClass('dropped1');
   $('#dropleft1').text('E').attr('data-dropdis','true').addClass('dropped1');
   $('#dropleft2').text('e').attr('data-dropdis','true').addClass('dropped1');
   break;
   case '2':
   $('.box2 #imgdrop2').attr('data-img','assets/images/activity/dog2.png').attr('data-dropdis','true').addClass('dropped').attr('data-ans','2');
   $('.box2 #imgdrop2').append('<img id="dragImg2" class="dragImg ui-draggable ui-draggable-handle droppedImg" data-ans="" data-dropdis="true" src="assets/images/activity/dog2.png" style="width: 43px; top: 2px;"><div class="textdrag2 texxt" style="display: block;">Straight hair</div>');
   
   $('#droptop1').text('F').attr('data-dropdis','true').addClass('dropped1');
   $('#dropleft2').text('f').attr('data-dropdis','true').addClass('dropped1');
   break;
   case '3':
   $('#imgdrop5').attr('data-img','assets/images/activity/rat1.png').attr('data-dropdis','true').addClass('dropped').attr('data-ans','1');
   $('#imgdrop5').append('<img id="dragImg1" class="dragImg ui-draggable ui-draggable-handle droppedImg" data-ans=""  data-dropdis="true" src="assets/images/activity/rat1.png" style="width: 63px; top: -3px;"><div class="textdrag1 texxt" style="display: block;">Dark hair</div>');
   
   
   $('.box2 #imgdrop2').attr('data-img','assets/images/activity/rat1.png').attr('data-dropdis','true').addClass('dropped').attr('data-ans','1');
   $('.box2 #imgdrop2').append('<img id="dragImg1" class="dragImg ui-draggable ui-draggable-handle droppedImg" data-ans=""  data-dropdis="true" src="assets/images/activity/rat1.png" style="width: 63px; top: -3px;"><div class="textdrag1 texxt" style="display: block;">Dark hair</div>');
   
   $('.box4 #imgdrop4').attr('data-img','assets/images/activity/rat2.png').attr('data-dropdis','true').addClass('dropped').attr('data-ans','2');
   $('.box4 #imgdrop4').append('<img id="dragImg1" class="dragImg ui-draggable ui-draggable-handle droppedImg" data-ans=""  data-dropdis="true" src="assets/images/activity/rat2.png" style="width: 63px; top: -3px;"><div class="textdrag1 texxt" style="display: block;">Light hair</div>');
   
   break;
   }
   
   
   $("[data-dropdis='true']").droppable({disabled:true})
	  $("[data-dropdis='true']").draggable({disabled:true})
	  $(".dragImg").show()
	  $("#dot5,#dot6").show();
}