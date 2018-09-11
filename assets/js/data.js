var MainNavigations=0;	
var baseConfig = {activityTitle:'Punnett Squares'};
var Tabs=["welcome","explore","activity"];
var TopMenuText=["Making Crosses","Punnett Puzzles"];
var rightMenuText=["Food Web","Tropic Game"];
//label background on top
var labelSettings = {
						0:'#313131', //monteryBay background
						1:'#313131'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imgshow","okhide","slidershow"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenuhide","rightmenuhide","baseimghide"], //explore
					["topmenuhide","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow

var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';

var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep=0;
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-280;
var angleRot=180;

//incorrect Audio multiple
var incorrectText = [
					'Incorrect. Producers occupy this level. Producers are organisms that make their own food through photosynthesis. Try again.',
					'Incorrect. Primary consumers occupy this level. Primary consumers are organisms that feed only on producers. Try again.',
					'Incorrect. Secondary consumers occupy this level. Secondary consumers are organisms that feed on primary consumers. Try again.',
					'Incorrect. Tertiary consumers occupy this level. Tertiary consumers are organisms that feed on secondary and primary consumers. Try again.'
					];


//shell Audio
var FindState=["MonteryBay","AmazonRainForest"];
var FindLevel=["FoodWeb","TropicLevel"];
var SlideContents_explore = {
	"MonteryBay":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		},
		"TropicLevel":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		}
	},
	"AmazonRainForest":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		},
		"TropicLevel":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		}
	}
};

var SlideContents_activity = {

	"MonteryBay":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["In this activity, you will use Punnett squares to make genetic predictions for crosses between male and female pea plants. Select Pea Plants to begin."],[],['Select Pea Plants to begin.']],
			     "audio":[["vlpsa_01"],[],['vlpsa_2']]
			  },
			1:{
				'Image':'',
				'AudioText':[[],['Seed color in pea plants is determined by one gene. There are two alleles for this gene. The dominant allele is denoted by a capital B. It codes for yellow seeds. The recessive allele is denoted by a lower-case b. It codes for green seeds.','Pea plants reproduce sexually. You will now breed two pea plants, a female plant and a male plant. These will be the parents.','For the female plant, use the drop-down menu to select homozygous dominant. This means that the female parent has two dominant alleles for seed color.'],['That’s the wrong selection. Select “homozygous dominant” from the drop-down menu for the female parent.']],
				 "audio":[[],["vlpsa_02","vlpsa_03","vlpsa_04"],["vlpsa_05"]]
			  },
			2:{
				'Image':'',
				'AudioText':[[],['Good. Notice that the female parent has yellow seeds. This is because it has two dominant alleles, and the dominant allele produces yellow seed color.','Now, for the male parent, select homozygous recessive. What color seeds do you think the male parent will have?'],['That’s the wrong selection. Select “homozygous recessive” from the drop-down menu for the male parent.']],//2
				"audio":[[],["vlpsa_06","vlpsa_07"],["vlpsa_08"]]
			  },
			3:{
				'Image':'',
				'AudioText':[[],["Was your prediction correct? The male parent has green seeds because it has two recessive alleles. Recessive alleles are associated with green seeds. </br></br> Now it’s time to make some baby pea plants! Select Cross to breed the parent plants."],['Select Cross to breed the parent plants.']],//3
				"audio":[[],["vlpsa_10"],["vlpsa_09"]]
			  },
			4:{
				'Image':'',
				'AudioText':[[],['Since the parents had different seed colors, you might expect that some offspring will have yellow seeds and others green. You can test this hypothesis using a Punnett square.','The female parent’s alleles are placed on the left side of the Punnett square. The female parent has two dominant alleles, so drag a capital B tile to each empty box for the female parent.'],['Drag a capital B to each empty box on the left of the Punnett square.'],['The female parent’s alleles go on the left side of the Punnett Square. Drag a capital B to each empty box on the left of the Punnett square.']],
				"audio":[[],["vlpsa_11","vlpsa_12"],["vlpsa_13"],["vlpsa_14"]]
			  },
			5:{
				'Image':'',
				'AudioText':[[],["Good. Now place the alleles for the male parent, which is homozygous recessive. The male parent’s alleles go above the Punnett square."],['Drag a lower-case b to each empty box for the male parent.'],['The male parent’s alleles go above the Punnett Square. Drag a lower-case b to each empty box for the male parent.']],
				"audio":[[],["vlpsa_15"],["vlpsa_16"],["vlpsa_17"]]
			  },
			 6:{
				'Image':'',
				'AudioText':[[],['Excellent. Now you will begin filling out the squares for the offspring. In the top-left square, the offspring receives one dominant allele from the female parent (B) and one recessive allele from the male parent (b). So the offspring will be heterozygous, or Bb. Drag the Bb tile to the top-left square.'],['That’s incorrect. Drag the Bb tile to the top-left square in the Punnett square.']],
				"audio":[[],["vlpsa_18"],["vlpsa_19"]]
			  },
			7:{
				'Image':'',
				'AudioText':[[],["Very good. This offspring is heterozygous because it has one dominant and one recessive allele (Bb). What color seeds will it have? Make a prediction, then drag the tile for yellow seeds or green seeds to the top-left square."],['Your prediction was incorrect. Try again.']],
				"audio":[[],["vlpsa_20"],["vlpsa_21"]]
			  },
			8:{
				'Image':'',
				'AudioText':[[],['Excellent. The allele for yellow seeds is dominant, so it overrides the recessive allele for green seeds. This offspring’s seeds will be yellow.',"Now complete the rest of the Punnett square on your own by dragging tiles to the empty spaces."],['That’s not quite correct. Looks like you made some errors. Select Redo to correct your mistakes.']],
				"audio":[[],["vlpsa_22","vlpsa_23"],["vlpsa_24"]]
			  },
			  9:{
				'Image':'',
				'AudioText':[[],['You have completed the Punnett Square. When you’re ready, select Check Answer to check your work.'],['That’s not quite correct. Looks like you made some errors. Select Redo to correct your mistakes.'],['Now try to fill in the rest of the Punnett square correctly.']],
				"audio":[[],["vlpsa_25"],["vlpsa_24"],["Excelent"]]
			  },
			  
			 
			10:{
				'Image':'',
				'AudioText':[[],['Good work! You have successfully completed the Punnett square. Notice that even though one parent had green seeds, all the offspring have yellow seeds. This is because they are all heterozygous (Bb) and the dominant allele (B) causes their seeds to be yellow.','This cross resulted in a set of offspring with identical traits. All four offspring have yellow seeds. Do you think offspring of the same parents will always have identical traits? Could two pea plants ever produce some plants with yellow seeds and some with green? Write down your answer before you continue.','You have reached the end of the guided activity. But there is still more to learn in this virtual lab! Now go to Explore mode, where you can experiment with crossing different types of pea plants and using Punnett squares to predict the traits of the offspring. You can also try breeding sunflowers, dogs, and mice. Once you get the hang of Punnett squares, try challenging yourself with Punnett Puzzles. Good luck!']],
				"audio":[[],["vlpsa_26","vlpsa_27","vlpsa_28"]]
			  },
			11:{
				'Image':'',
				'AudioText':[[],['Good work! You have successfully completed the Punnett square. Notice that even though one parent had green seeds, all the offspring have yellow seeds. This is because they are all heterozygous (Bb) and the dominant allele (B) causes their seeds to be yellow.','This cross resulted in a set of offspring with identical traits. All four offspring have yellow seeds. Do you think offspring of the same parents will always have identical traits? Could two pea plants ever produce some plants with yellow seeds and some with green? Write down your answer before you continue.','You have reached the end of the guided activity. But there is still more to learn in this virtual lab! Now go to Explore mode, where you can experiment with crossing different types of pea plants and using Punnett squares to predict the traits of the offspring. You can also try breeding sunflowers, dogs, and mice. Once you get the hang of Punnett squares, try challenging yourself with Punnett Puzzles. Good luck!'],[]],
				"audio":[[],["vlpsa_27","vlpsa_28","vlpsa_29"]]
			  }
		}
	}
};
//information icon background text
var info_background = {
	
	 'block0':{
			'img':'audio_icon',
			'text':"A <b>trait</b> is a physical or behavioral characteristic.",
			'audio':['vlpsi_01']
		},
		
	'block1':{
			'img':'audio_icon',
			'text':"An <b>inherited trait</b> is a characteristic that parents pass to their offspring when they reproduce. Eye color is an example of a <i>physical</i> inherited trait. Bird migration is an example of a <i>behavioral</i> inherited trait.",
			'audio':['vlpsi_02']
		},
	'block2':{
			'img':'audio_icon',
			'text':"A <b>gene</b> is the basic unit by which genetic information is passed from parent to offspring. Genes carry instructions for how traits are expressed. Some traits are determined by a single gene. Other traits are determined by multiple genes.",
			'audio':['vlpsi_03']
		},
	'block3':{
			'img':'audio_icon',
			'text':"In <b>sexual reproduction,</b> a male parent and a female parent pass genetic information to offspring. Offspring receive half their genes from their male parent and half from their female parent. As a result, the offspring are not genetically identical to either parent.",
			'audio':['vlpsi_04']
		},
	'block4':{
			'img':'audio_icon',
			'text':"Different versions of the gene for a trait are called <b>alleles.</b> For example, a gene for seed color in peas may have different alleles for yellow seeds and green seeds.",
			'audio':['vlpsi_05']
			},
	'block5':{
			'img':'audio_icon',
			'text':"In some cases, alleles can be <b>dominant</b> or <b>recessive.</b> A dominant allele will override the effects of a recessive allele if both are present.",
			'audio':['vlpsi_06']
			},
	'block6':{
			'img':'audio_icon',
			'text':"If an individual inherits a dominant allele from both parents, the individual is said to be <b>homozygous dominant</b> and will exhibit the dominant form of the trait.",
			'audio':['vlpsi_07']
			},
   'block7':{
			'img':'audio_icon',
			'text':"If an individual inherits a recessive allele from both parents, the individual is said to be <b>homozygous recessive</b> and will exhibit the recessive form of the trait.",
			'audio':['vlpsi_08']
			},			
   'block8':{
			'img':'audio_icon',
			'text':"If an individual inherits a dominant allele from one parent and a recessive allele from the other, the individual is said to be <b>heterozygous.</b> Heterozygous individuals exhibit the dominant form of the trait. The recessive trait is not expressed, but the allele may be passed on to some of the individual’s offspring.",
			'audio':['vlpsi_09']
			},			
   'block9':{
			'img':'audio_icon',
			'text':"A <b>Punnett square</b> is a useful tool for predicting how a trait may be expressed in offspring that result from sexual reproduction. In a Punnett square, a dominant allele is represented with a capital letter such as a capital Y. A recessive allele is represented by a lowercase letter such as a lowercase y.",
			'audio':['vlpsi_10']
			},
	
	};
			
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'audio':['vlpsh_01']
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'audio':['vlpsh_02']
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'audio':['vlpsh_03']
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'audio':['vlpsh_04']
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'audio':['vlpsh_05']
		}
	};
