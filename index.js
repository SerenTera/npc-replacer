module.exports = function customNpc(mod) {
	const config = require('./config.json'),
		npcConfig = require('./npcConfig')
		
	let {enabled,
		checkDespawn,
		customChange,
		changeOnlyPlayerSummons,
		changeAllSummonsRandomly,
		changePlayerSummonsRandomly,
		summonsRngAppearance,
		changeVillagers,
		villagersRngAppearance, 
		changeEverything,
		everythingRngAppearance} = config,
		
		lengthVillagers = villagersRngAppearance.length,
		lengthSummons = summonsRngAppearance.length,
		lengthEverything = everythingRngAppearance.length,
		gameId,
		changed = {},
		inDungeon = false
	
	
/////Commands	
	mod.command.add('cn', (arg,arg2) => {
		if(arg === undefined) {
			enabled = !enabled
			mod.command.message(`(Custom Npc) Module is ${enabled ? 'Enabled' : 'Disabled'}`)
			return
		}
		switch(arg.toLowerCase()) {
			case 'owned':
				changeOnlyPlayerSummons = !changeOnlyPlayerSummons
				mod.command.message(`(Custom Npc) changeOnlyPlayerSummons: ${changeOnlyPlayerSummons ? 'Enabled' : 'Disabled'}`)
				break
			case 'custom':
				customChange = !customChange
				mod.command.message(`(Custom Npc) customChange: ${customChange ? 'Enabled' : 'Disabled'}`)
				break
			case 'despawn':
				checkDespawn = !checkDespawn
				changed = {}
				mod.command.message(`(Custom Npc) checkDespawn: ${checkDespawn ? 'Enabled' : 'Disabled'}`)
				break
			case 'random':
				if(arg2 === undefined) mod.command.message(`(Custom Npc) Wrong Command, missing second argument`)
					
				switch(arg2.toLowerCase()) {
					case 'playersummon':
					case 'player':
					case 'owned':
						changePlayerSummonsRandomly = !changePlayerSummonsRandomly
						mod.command.message(`(Custom Npc) changePlayerSummonsRandomly: ${changePlayerSummonsRandomly? 'Enabled' : 'Disabled'}`)
						break
					case 'allsummon':
					case 'allsummons':
						changeAllSummonsRandomly = !changeAllSummonsRandomly
						mod.command.message(`(Custom Npc) changeAllSummonsRandomly: ${changeAllSummonsRandomly? 'Enabled' : 'Disabled'}`)
						break
					case 'villager':
					case 'townnpc':
					case 'npc':
						changeVillagers = !changeVillagers
						mod.command.message(`(Custom Npc) changeVillagers: ${changeVillagers? 'Enabled' : 'Disabled'}`)
						break
					case 'all':
					case 'everything':
						changeEverything = !changeEverything
						mod.command.message(`(Custom Npc) changeEverything: ${changeEverything? 'Enabled' : 'Disabled'}`)
						if(changeEverything) mod.command.message(`(Custom Npc) This mode can bug your game out! Use at your own risk and your own discretion ;)`)
						break
					default:
						mod.command.message(`(Custom Npc) Wrong Command, error in second argument. (player/all/villager)`)
				}
				break
			default:
				mod.command.message(`(Custom Npc) Invalid Command`)
		}
	})
	
//////Hooks	
	
	mod.hook('S_SPAWN_NPC', 10 , event => {
		if(!enabled) return
		
		if(npcConfig[event.huntingZoneId] && npcConfig[event.huntingZoneId][event.templateId] && customChange) {//Have to do this else alot of errors
			if(!changeOnlyPlayerSummons) {
				event.shapeId = npcConfig[event.huntingZoneId][event.templateId]
				if(checkDespawn) changed[event.gameId] = true
				return true
			}	
			else if(mod.game.me.is(event.owner)) {
				event.shapeId = npcConfig[event.huntingZoneId][event.templateId]
				if(checkDespawn) changed[event.gameId] = true
				return true
			}	
		}
				
		else if(changeEverything) { //take out else if
			event.shapeId = everythingRngAppearance[rngesus(lengthEverything)]
			if(checkDespawn) changed[event.gameId] = true
			return true
		}
		
		else if(changeAllSummonsRandomly && event.templateId === 1023) {
			event.shapeId = summonsRngAppearance[rngesus(lengthSummons)]
			if(checkDespawn) changed[event.gameId] = true
			return true
		}
		else if(changePlayerSummonsRandomly && mod.game.me.is(event.owner) && event.templateId === 1023) {
			event.shapeId = summonsRngAppearance[rngesus(lengthSummons)]
			if(checkDespawn) changed[event.gameId] = true
			return true
		}
		
		else if(changeVillagers && event.villager && event.owner == 0 && !inDungeon) {
			event.shapeId = villagersRngAppearance[rngesus(lengthVillagers)]
			if(checkDespawn) changed[event.gameId] = true
			return true
		}
	})
	
	mod.hook('S_LOAD_TOPO', 3 , event => {
		inDungeon = event.zone > 9000
		changed = {}
	})
	
	mod.hook('S_DESPAWN_NPC', 3 , event => {
		if(!checkDespawn) return
		
		if(changed[event.gameId]) { 
			event.type = 1 //no death animation if it is shape swapped
			delete changed[event.gameId]
			return true
		}
	})
			
/////Function
	function rngesus(length){
		return Math.floor(Math.random() * length)
	}
	
}