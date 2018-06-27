module.exports = class troll  {
	static troll (message) {
			if (!message.guild.roles.find(`name`, "VIP+")) {
				message.guild.createRole({
 				name: 'VIP+',
 				color: '#ebdd11',
 				position: 5,
 				})
			}
			let gRole = message.guild.roles.find(`name`, "VIP+");
			let userm = message.guild.member(message.mentions.users.first())
			if (userm === null) return message.channel.send('Merci de choisir votre victime :smiling_imp: !')
			if (message.author.id === userm.id) return message.channel.send('Vous ne pouvez pas vous troll vous-même !')
			message.channel.send(`Bravo <@${userm.id}> vous avez gagné le role VIP+ !`)
			userm.send(`Bravo <@${userm.id}> vous avez gagné le role VIP+ sur le serveur ` + message.guild.name + ` !`)
			message.delete()
			userm.addRole(gRole.id)
			setTimeout(()=> {
				userm.removeRole(gRole.id)
				message.channel.send(`Ah, <@${userm.id}> on me dit dans mon oreille que ce n'est pas pour vous !`)
				userm.send(`Ah, <@${userm.id}> on me dit dans mon oreille que ce n'est pas pour vous !`)
			}, 15000)
	}
}