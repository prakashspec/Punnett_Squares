
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to <b>Punnett Squares.</b> In this lab, you will use Punnett squares to predict the genetic makeup of offspring for four different organisms.',
				'speechStyle':'bubbleDivNone',
				'position':[274,170],
				'anim':{},
				'AudioNamecon':['vlpsw_01']
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'You can construct Punnett squares for selected pairs on the Making Crosses tab. Or you can challenge yourself to solve genetic puzzles on the Punnett Puzzles tab.',
				'speechStyle':'bubbleDivMultidouble1',
				'position':[270,105],
				'anim':{},
				'AudioNamecon':['vlpsw_02']
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'Start with the Making Crosses activity. Here, you can select which organism you want to study. Choose from pea plants, sunflowers, dogs, or mice.',
				'speechStyle':'bubbleDivMulti',
				'position':[200,160],
				'anim':{},
				'AudioNamecon':['vlpsw_03']
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'The Trait box will display a trait for the organism you selected. For pea plants, the trait is seed color.',
				'speechStyle':'bubbleDivMulti',
				'position':[200,270],
				'anim':{},
				'AudioNamecon':['vlpsw_04']
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'Below the trait, you will see the two alleles for the trait. In pea plants, the dominant allele is denoted with a capital B and is associated with yellow seeds. The recessive allele is denoted with a lowercase b and is associated with green seeds.',
				'speechStyle':'bubbleDivMulti1',
				'position':[200,290],
				'anim':{},
				'AudioNamecon':['vlpsw_05']
				},		
		'step_5':{
				'bgimg':'step_4',
				'text':'Use the Parents menu to choose the genetic makeup of the two parents. Then select Cross to cross these parents.',
				/* 'speechStyle':'bubbleDivMultidouble1', */
				'position':[335,265],
				'anim':{},
				'AudioNamecon':['vlpsw_06']
				},		
		'step_6':{
				'bgimg':'step_1',
				'text':'Next, complete the Punnett square to predict the genetic makeup of the offspring. Do this by dragging the offspring and alleles to fill in the empty spaces.',
				/* 'speechStyle':'bubbleDivBottom', */
				'position':[345,38],
				'anim':{},
				'AudioNamecon':['vlpsw_07']
				},	
		'step_7':{
				'bgimg':'step_1',
				'text':'When you have finished, select Check Answer.',
				'speechStyle':'bubbleDivBottom',
				'position':[355,375],
				'anim':{},
				'AudioNamecon':['vlpsw_08']
				},
		'step_8':{
				'bgimg':'step_4',
				'text':"If you made a mistake, you can select Redo to make corrections.",
				'speechStyle':'bubbleDivBottom2',
				'position':[355,360],
				'anim':{},
				'AudioNamecon':['vlpsw_09']
				},			
		'step_9':{
				'bgimg':'step_5',
				'text':'If you want to clear the Punnett Square, select Clear All.',
				'speechStyle':'bubbleDivBottom1',
				'position':[355,360],
				'anim':{},
				'AudioNamecon':['vlpsw_10']
				},
		'step_10':{
				'bgimg':'step_6',
				'text':'Selecting Reset will take you back to the start, where you can start over or select a new organism.',
				'speechStyle':'bubbleDivMulti2',
				'position':[200,382],
				'anim':{},
				'AudioNamecon':['vlpsw_11']
				},			
		'step_11':{
				'bgimg':'step_7',
				'text':'Try the Punnett Puzzles when you think you&#39;re ready for more challenging Punnett squares.',
				'speechStyle':'bubbleDivMultidouble',
				'position':[290,105],
				'anim':{},
				'AudioNamecon':['vlpsw_12']
				},
		'step_12':{
				'bgimg':'step_6',
				'text':'Start by selecting an organism. A partially completed Punnett square will appear.',
				'speechStyle':'bubbleDivNone',
				'position':[190,405],
				'anim':{},
				'AudioNamecon':['vlpsw_13']
				},
		'step_13':{
				'bgimg':'step_1',
				'text':'Fill in the missing information to complete the puzzle.',
				/* 'speechStyle':'bubbleDivTopCustom', */
				'position':[190,405],
				'anim':{},
				'AudioNamecon':['vlpsw_14']
				},
		'step_14':{
				'bgimg':'step_1',
				'text':'Then use Check Answer to check your work. If you made any mistakes, you can select Redo to correct them.',
				'speechStyle':'bubbleDivTopCustom',
				'position':[390,350],
				'anim':{},
				'AudioNamecon':['vlpsw_15']
				},
		'step_15':{
				'bgimg':'step_1',
				'text':'Use Clear All to clear the puzzle and start over.',
				'speechStyle':'bubbleDivTopCustom1',
				'position':[200,375],
				'anim':{},
				'AudioNamecon':['vlpsw_16']
				},
		'step_16':{
				'bgimg':'step_1',
				'text':'Or select Reset to try a puzzle for a different organism.',
				'speechStyle':'bubbleDivMulti21',
				'position':[200,403],
				'anim':{},
				'AudioNamecon':['vlpsw_17']
				},
		'step_17':{
				'bgimg':'step_1',
				'text':'Now select Explore to begin exploring on your own. Or select Activity for a guided exploration. Select Info at any time to learn more about inherited traits and Punnett squares.',
				'speechStyle':'bubbleDivNone',
				'position':[535,30],
				'anim':{},
				'AudioNamecon':['vlpsw_18']
				}				
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,2000,13000,22000,26000,35000,50000,67000,76000,85000,92000,101000,109000,119000,129000,144000,151000,158000];
var animPlayArrRev = [0,2500,13500,22500,26500,35500,50500,67500,76500,85500,92500,101500,109500,119500,129500,144500,151500,158500];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';