module.exports = class qr {
	static q1 (message) {
		return message.content.startsWith('Salut') || message.content.startsWith('Yo') || message.content.startsWith('Bonjour') || message.content.startsWith('Slt') || message.content.startsWith('Bjr') || message.content.startsWith('yo') || message.content.startsWith('salut') || message.content.startsWith('slt');
	}
	static r1 (message) {
		message.channel.send('Bonjour ' + message.author);
	}
	static q2 (message) {
		 return message.content.startsWith('Ca va') || message.content.startsWith('Cv') || message.content.startsWith('La forme') || message.content.startsWith('Comment va tu') || message.content.startsWith('Sa va') || message.content.startsWith('sa va')
	}
	static r2 (message) {
		return message.channel.send('Bien et toi ?');
	}
	static q3 (message) {
		return message.content.startsWith('Mdr') || message.content.startsWith('mdr') || message.content.startsWith('Ptdr') || message.content.startsWith('Lol') || message.content.startsWith('ptdr') || message.content.startsWith('lol');
	}
	static r3 (message) {
		return message.channel.send("La blague n'était pas drôle.");
	}
	static q4 (message) {
		return message.content.startsWith('Pk') || message.content.startsWith('pk') || message.content.startsWith('Pq') || message.content.startsWith('pq') || message.content.startsWith('pourquoi') || message.content.startsWith('Pourquoi');
	}
	static r4 (message) {
		return message.channel.send('Parce que la vie.');
	}
	static q5 (message) {
		return message.content.startsWith('Tfk') || message.content.startsWith('tfk') || message.content.startsWith('Tu fais quoi') || message.content.startsWith('vfk') || message.content.startsWith('Vfk') || message.content.startsWith('Vous faite quoi');
	}
	static r5 (message) {
		return message.channel.send('Je hack des ordinateurs.');
	}
	static q6 (message) {
		return message.content.startsWith('Ah') || message.content.startsWith('ah');
	}
	static r6 (message) {
		return message.channel.send('B ?');
	}
	static q7 (message) {
		return message.content.startsWith('Oui') || message.content.startsWith('oui') || message.content.startsWith('ui') || message.content.startsWith('Ui') || message.content.startsWith('Non') || message.content.startsWith('non') || message.content.startsWith('Nn') || message.content.startsWith('Non') || message.content.startsWith('Nan') || message.content.startsWith('nan')
	}
	static r7 (message) {
		return message.channel.send('Tu as sûrement raison.');
	}
	static q8 (message) {
		return message.content.startsWith('tg') || message.content.startsWith('Tg')
	}
	static r8 (message) {
		return message.channel.send("V ? Si c'est le cas je vous conseil de commander dès maintenant votre ticket sur le site officiel de la nscf : https://www.sncf.com/fr et n'oublier pas qu'il y a beaucoup de retard !")
	}
	static q9 (message) {
		return message.content === 'c' || message.content === 'C'
	}
	static r9 (message) {
		return message.channel.send("D ? Bon j'arrête c'est pas drôle.")
	}
	static q10 (message) {
		return message.content.startsWith('Trkl') || message.content.startsWith('Bien') || message.content.startsWith('bien') || message.content.startsWith('trkl')
	}
	static r10 (message) {
		return message.channel.send('Tant mieux !')
	}
	static q11 (message) {
		return message.content.startsWith('Ping Pong') || message.content.startsWith('ping pong') || message.content.startsWith('PingPong') || message.content.startsWith('pingpong') || message.content.startsWith('Pingpong') || message.content.startsWith('Ping-Pong') || message.content.startsWith('Ping-pong') || message.content.startsWith('ping-pong')
	}
	static r11 (message) {
		return message.channel.send('Non, je préfère le tennis de table ^^')
	}
}