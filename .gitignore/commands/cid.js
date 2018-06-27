module.exports = class cid {
	static cid (message) {
	let userm = message.guild.member(message.mentions.users.first())
		if (userm === null || userm.id === message.author.id) 
		{
			return message.channel.send('Votre ID est : ```' + message.author.id + "```");
		}
		message.channel.send("L'ID de " + userm + " est : ```" + userm.id + "```")
	}
}