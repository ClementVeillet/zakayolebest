module.exports = class silence {
	static silence (message) {
			let userm = message.guild.member(message.mentions.users.first())
			if (!userm) return message.channel.send('Séléctionner un utilisateur !')
			if (userm.id === message.author.id) return message.channel.send('Vous ne pouvez pas vous réduire vous-même au silence !')
			if (userm.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Cette personne ne peut pas être réduit au silence !')
			if (userm.roles.some(r=>["Muted"].includes(r.name))) return message.channel.send('Cette utilisateur est déjà muet !')
			userm.addRole(message.guild.roles.find('name', 'Muted'))
			message.channel.send('Vous avez réduit ' + userm + ' au silence pour 10 secondes.')
			setTimeout(()=> {
				userm.removeRole(message.guild.roles.find('name', 'Muted'))
			}, 10000)
	}
}