//Add shapeId to customize your summons. shapeId can be found in NpcData in Datacenter. 
//Some Samples:
//ugly shit from AT:302100 | elins: 500400,203605,203606,203607,510480,510280(mirr) |slime:800470 |mushroom:800460 | SpiritOfFury:303360
//Lachelith:303260

//You can add more ids customized npc too if you want. Follow the sample given below
//Word of advise: Use similar sized shapeId for replacement else good luck with the body block / buggy textures 
//Try not to use elins for summons, t-pose and texture breakages occurs, although mirr seems to work for HB-7
//There will be a bug where the npc remains on screen for some time after unsummon (~5sec). No way around it

module.exports = {
	
	//Follow the sample below to add more custom npc:
	1: { //huntingZoneId
		999:302100,	//templateId:shapeId
	},
	
	//Player Summons can be customized here
	1023: {	
		30302007: false, //HB-7
		30303007: false, //Keen HB-7
		30301004: false,  //ST-4
		
		10239003: false, //Summon: Thrall Lord
		10238007: false, //Thrall of Wrath VII
		10238008: false, //Thrall of Wrath (Augmented)
		10237014: false, //Thrall of Vengeance XII
		10237015: false, //Thrall of Vengeance (Augmented)
		10236013: false, //Thrall of Life XIII
		10236014: false, //Thrall of Life (Augmented)
		10235016: false, //Thrall of Protection III
		10235017: false, //Thrall of Protection (Augmented)
		1024001: false,	 //Warding Totem II
		
		1010101: false,	 //Smoke Agressor
		2010101: false,	 //Smoke Flanker
		
		12345: false, 	 //Decoy Jutsu wooden block		
	},
	
	

		
		
}