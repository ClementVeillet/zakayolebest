module.exports = class game {
	static addgame (message) {
		let rlist = message.guild.roles.find('name', '==Liste==Des==Jeux');
		if (!message.member.roles.has(rlist.id))
		{
			message.member.addRole(rlist.id)
		}
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === '') return message.channel.send('Séléctionnez un jeu. (addgame list)')
		if (args.join('') === 'list') return message.channel.send("Voilà la liste des jeux que vous pouvez choisir : \n-Overwatch -Minecraft -Fortnite -LeagueOfLegends -Osu -PUBG -Garry'sMod")
		if (args.join('') === 'Minecraft') {
			let rminecraft = message.guild.roles.find(`name`, `Minecraft`);
			message.member.addRole(rminecraft.id)
			message.channel.send('Minecraft à été ajouté à la liste de vos jeux !')
		}
		else if (args.join('') === 'Fortnite') {
			let rfortnite = message.guild.roles.find(`name`, `Fortnite`);
			message.member.addRole(rfortnite.id);
			message.channel.send('Fortnite à été ajouté à la liste de vos jeux !')
		}
		else if (args.join('') === 'Overwatch') {
			let Overwatch = message.guild.roles.find(`name`, `Overwatch`);
			message.member.addRole(Overwatch.id);
			message.channel.send('Overwatch à été ajouté à la liste de vos jeux !')
		}
		else if (args.join('') === 'Osu') {
			let rOsu = message.guild.roles.find(`name`, `Osu`);
			message.member.addRole(rOsu.id);
			message.channel.send('Osu è été ajouté à la liste de vos jeux !')
		}
		else if (args.join('') === 'LeagueOfLegends') {
			let rLeagueOfLegends = message.guild.roles.find(`name`, `League Of Legends`);
			message.member.addRole(rLeagueOfLegends.id);
			message.channel.send('League Of Legends à été ajouté à la liste de vos jeux !')
		}
		else if (args.join('') === 'PUBG') {
			let rPUBG = message.guild.roles.find(`name`, `PUBG`);
			message.member.addRole(rPUBG.id);
			message.channel.send('PUBG à été ajouté à la liste de vos jeux !')
		}
		else if (args.join('') === "Garry'sMod") {
			let rGarrysMod = message.guild.roles.find(`name`, `Garry's Mod`);
			message.member.addRole(rGarrysMod.id);
			message.channel.send("Garry'sMod à été ajouté à la liste de vos jeux !")
		}
		else {
			message.channel.send('Jeu non trouvé.')
		}
	}
	static removegame (message) {
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === '') return message.channel.send('Séléctionnez un jeu. (removegame list)')
		if (args.join('') === 'list') return message.channel.send("Voilà la liste des jeux que vous pouvez choisir : \n-Overwatch -Minecraft -Fortnite -League Of Legends -Osu -PUBG -Garry'sMod")
		if (args.join('') === 'Minecraft') {
			let rminecraft = message.guild.roles.find(`name`, `Minecraft`);
			message.member.removeRole(rminecraft.id)
			message.channel.send('Minecraft à été enlevé à la liste de vos jeux !')
		}
		else if (args.join('') === 'Fortnite') {
			let rfortnite = message.guild.roles.find(`name`, `Fortnite`);
			message.member.removeRole(rfortnite.id);
			message.channel.send('Fortnite à été enlevé à la liste de vos jeux !')
		}
		else if (args.join('') === 'Overwatch') {
			let Overwatch = message.guild.roles.find(`name`, `Overwatch`);
			message.member.removeRole(Overwatch.id);
			message.channel.send('Overwatch à été enlevé à la liste de vos jeux !')
		}
		else if (args.join('') === 'LeagueOfLegends') {
			let rLeagueOfLegends = message.guild.roles.find(`name`, `League Of Legends`);
			message.member.removeRole(rLeagueOfLegends.id);
			message.channel.send('League Of Legends à été enlevé à la liste de vos jeux !')
		}
		else if (args.join('') === 'Osu') {
			let rOsu = message.guild.roles.find(`name`, `Osu`);
			message.member.removeRole(rOsu.id);
			message.channel.send('Osu à été enlevé à la liste de vos jeux !')
		}
		else if (args.join('') === 'PUBG') {
			let rPUBG = message.guild.roles.find(`name`, `PUBG`);
			message.member.removeRole(rPUBG.id);
			message.channel.send('PUBG à été enlevé à la liste de vos jeux !')
		}
		else if (args.join('') === "Garry's Mod") {
			let rGarrysMod = message.guild.roles.find(`name`, `Garry's Mod`);
			message.member.removeRole(rGarrysMod.id);
			message.channel.send("Garry's mod à été enlevé à la liste de vos jeux !")
		}
		else {
			message.channel.send('Jeu non trouvé.')
		}
	}
}