module.exports = class call {
	static call (message) {
	let userm = message.guild.member(message.mentions.users.first())
    		if (userm === null) return message.channel.send('Veuillez choisir un utilisateur.')
    		if (message.author.id === userm.id) return message.channel.send('Vous ne pouvez pas vous appeller vous même !')
    		message.channel.send(userm + ' Il y a ' + message.author + ' qui veut vous avoir en vocal !')
	}
}