# npc-replacer
A Tera Proxy Module to replace Npc/summons with custom shape

## Basic Info
This module allows you to change the appearance of NPC while maintaining it's original functions like skill usages in summons or npc dialogs etc...

Elin-npc module written by me is also included in this, so you can just remove the other module if you are using this.

However, it will certainly bug out texture wise. Summons might also stay around for 5 seconds after being unsummoned due to death animation. Set checkDespawn to true to fix this long despawn

Here is a list of shapeId and their corresponding Animation Name:

https://raw.githubusercontent.com/SerenTera/npc-replacer/master/shapeId.json

This is the best I can do for now, search using the names like Popori_F for elins, mushroom for the mushroom, etc...
## Requirements
Requires
- Tera Proxy
- S_SPAWN_NPC version 8 (Update tera-data if you need to)

Supports
- Caali's Proxy
## Config
Config for module is in config.json. You can also customize the Npc to be replaced and the shapeId to be replacing it by using npcConfig.js

#### Config.json
The following are options in config.json

- "enabled" : Default enable/disable of module on start up
- "checkDespawn": This option when enabled immediately despawns changed npcs instead of waiting for death animation, which bugs out and makes the npc 'stay around' for more than necessary. However, the check involved can tax the system abit if you have alot of replacement done, especially if you use the change everything mode.
- "customChange": Whether to change npc based on npcConfig or not. If true, changes it
- "changeOnlyPlayerSummons": Whether to change only your summons or all summons when custom change is enabled. True to only change your summon.


- "changeAllSummonsRandomly":Changes all summons randomly if set to true. Add in shapeId in `summonsRngAppearance`
- "changePlayerSummonsRandomly":Changes only player summons randomly if set to true. Add in shapeId in `summonsRngAppearance`
- "summonsRngAppearance" : This is a list of shapeId to be randomly chosen from for the above two options


- "changeVillagers" : Changes all villagers and npc in towns/cities randomly. Add in shapeId in `villagersRngAppearance`
- "villagersRngAppearance":  This is a list of shapeId to be randomly chosen from for the above option


- "changeEverything" : This changes every single thing to a random appearance. Add in shapeId in `everythingRngAppearance`
- "everythingRngAppearance": This is a list of shapeId to be randomly chosen from for the above option

#### npcConfig.js
In npcConfig.js, a set of player summons has been added for your convienece already. You can add in more by following the instructions layed out in this file.

## Commands
Commands are to be typed in proxy chat

Main command: 
- `cn` - toggle enable/disable of module
- `cn owned` - toggle changeOnlyPlayerSummons
- `cn custom` - toggle customChange
- `cn despawn` - toggle checkDespawn

Random command: The following are random command that affects the rng stuff. First type `cn random ` then add in a secondary argument below. For example: `cn random owned` toggles changePlayerSummonsRandomly

- `playersummon/player/owned`: Any one of this secondary command toggles changePlayerSummonsRandomly
- `allsummon/allsummons` : Any one of this secondary command toggles changeAllSummonsRandomly
- `villager/townnpc/npc` : Any one of this secondary command toggles changeVillagers
- `all/everything` : Any one of this secondary command toggles changeEverything

## Some IDs
Some of these are listed down in npcConfig already. Additional info can be found in NpcShape.xml in this mod.
 - ugly shit from AT:302100 
 - elins: 500400,203605,203606,203607,510480,510280(mirr) 
 - slime:800470 
 - mushroom:800460 
 - SpiritOfFury:303360
 - Lachelith:303260

## Bugs
As mentioned earlier, theres plenty of bugs due to the nature of the game itself.
- Summons can take a long time to despawn sometimes (fixed by setting checkDespawn in config to true)
- T-pose will occur for some shapeId if they are walking/doing animation not supported by the shape
- Broken Face Textures will occur for using shapeId of some elins on summons, such as hb-bot
- Animation can be too fast for some shapeId


## Screenshot
![screenshot](https://i.imgur.com/Gf92Ned.png)
