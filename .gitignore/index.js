const Discord = require('discord.js')
const bot = new Discord.Client()
const ytdl = require('ytdl-core');
const troll = require('./commands/troll')
const call = require('./commands/call')
const cid = require('./commands/cid')
const fun = require('./commands/fun')
const silence = require('./commands/silence')
const qr = require('./commands/qr')
const talkedRecently = new Set();
var vol = 1;
var streamOptions = { seek: 0, volume: vol };
var abcd = ["a", "b", "c", "d", "e", ,"f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const now = new Date();
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();
var mess = null;
var amessage = null;
var on = true;
var botGame = `_help | 6 srv | Zakayo`
var prefix = '_'
var bws = true
var qrvar = true
var filtered = ["fdp", "pd", "connard", "connart", "connars", "connar", "bâtard", "batard", "batars", "batart", "batar", "bite", "ta mere", "abruti", "niqué", "niquer", "enculé", "enculer", "andouille", "bête", "bete", "bouffon", "boufon", "salop", "salope", "pute", "ta race", "rasse", "rase", "cassosse", "cassoce", "chatte", "bite"];
var msgonoff = true
const emojiCharacters = require('./commands/emojiCharacters')

bot.on('ready', function () {
	bot.user.setActivity(botGame)
	bot.user.setStatus('online')
	bot.user.setAvatar('./robot.jpg')
	console.log('Je suis prêt ^^')
	bot.user.setStatus("online");
})

bot.on('guildMemberAdd', function (member)
{
  if (member.guild.name !== '[FR] Gaming / Discussion') {
    member.createDM().then(function (channel) 
  {
    channel.send('Bienvenu(e) sur le serveur ' + member.guild.name + ' va dans un channel textuel pour parler !')
  })
  if (member.guild.channels.find(c=>c.name.includes('bienvenu'))) {
    member.guild.channels.find(c=>c.name.includes('bienvenu')).send(`Bienvenue à @${member} sur le serveur ` + member.guild.name + ` !`);
  }
  }

  if (member.guild.name === '[FR] Gaming / Discussion') {
    member.addRole('445970294956359682')
    member.addRole('454353752078549008')
    member.createDM().then(function (channel) 
  {
    channel.send("Bienvenu(e) à toi sur le serveur [FR] Gaming / Discussion ! Tu peux aller dans Discussion pour parler mais n'oublie pas de lire les règles ! Nous organisons souvent des concours pour gagner des choses dans le sytle de compte minecraft grade ou autre ! Amuse-toi bien ! ")
  })
  if (member.guild.channels.find("name","🔰-bonjour-aurevoir-🔰")) {
    member.guild.channels.find("name","🔰-bonjour-aurevoir-🔰").send(`Bienvenue à ${member} sur le serveur **[FR] Gaming / Discussion** ! Va dans <#410086550639083520> pour parler avec les autres membres, tu peux aussi aller dans <#460846838271049758> pour activer ou non les notifs mais n'oublie pas d'aller dans <#410088360342847488> et de les accepter !`);
    }
  }
});
bot.on('message', message => {
  if (message.content.startsWith(prefix + 'play')) {
    if (message.member.voiceChannel) {
      let args = message.content.split(' ')
      const voiceChannel = message.member.voiceChannel
      const connection = message.member.voiceChannel.join();
        const ytdl = require('ytdl-core');
    voiceChannel.join()
      .then(connection => {
      const stream = ytdl(args[1], { filter : 'audioonly' });
      const dispatcher = connection.playStream(stream, streamOptions);
      message.channel.send("J'ai lancer votre vidéo " + message.author + " !")
  })
  .catch(console.error);
    } else {
      message.reply('Vous devez être dans un channel vocal !');
    }
  }
  if (message.content === prefix + 'leave') {
    if (message.member.voiceChannel) {
      const connection = message.member.voiceChannel.leave();
      message.reply(" j'ai quitté le channel !")
    }else {
      message.reply('Vous devez être dans un channel vocal !');
    }}
    if (message.content.startsWith(prefix + 'volume')) {
      let args = message.content.split(' ')
      if (args[1].indexOf(abcd) !== -1) {
        message.channel.send('Le volume est réglable de **1** à **100** !')
      } else {
        if (args[1] >= 1) {
          if (args[1] <= 100) {
          vol = args[1]
        message.channel.send(`J'ai mis le volume sur **${vol}** !`)
      } else {
        message.channel.send('Le volume est trop **fort** ! (1 à 100)')
      }
    } else {
      message.channel.send("Le volume n'est **pas asser fort** ! (1 à 100)")
    } 
      }
    }
})
bot.on('guildMemberRemove', function (member)
{
  if (member.guild.name !== '[FR] Gaming / Discussion') {
    member.createDM().then(function (channel) 
  {
    channel.send('Au revoir du serveur ' + member.guild.name)
  })

  if (member.guild.channels.find(c=>c.name.includes('bienvenu'))) {
    member.guild.channels.find(c=>c.name.includes('bienvenu')).send(`Au revoir à ${member} tu était un bonne amis :'( !`);
  }
  }
  if (member.guild.name === '[FR] Gaming / Discussion') {
    member.createDM().then(function (channel) 
  {
    channel.send("Au revoir a toi du serveur **[FR] Gaming / Discussion** reviens quand tu veux ! Voilà le lien si tu vex revenir : https://discord.gg/ZWWmXRM")
  })
  if (member.guild.channels.find("name","🔰-bonjour-aurevoir-🔰")) {
    member.guild.channels.find("name","🔰-bonjour-aurevoir-🔰").send(`Au revoir ${member} à très bientôt sur le serveur **${member.guild.name}**!`);
    }
  }
});
bot.on('message', async message => {
  if (message.channel.type === 'dm') {
    if (message.author.bot) return;
  message.channel.send(':x: Error: **Je ne peux pas répondre correctement à vos messages, je suis un bot tout de même !**')
}
		//COMMANDES
    if (message.content.indexOf('https://discord.gg/') !== -1) {
      if (message.member.hasPermission('ADMINISTRATOR')) return;
      if (!message.channel.name.indexOf("pub")) return;
      message.delete()
      message.channel.send('Les invitations sont autorisé seulement dans les channels de pub !' + message.author).then((message)=>{
        setTimeout(()=>{
          message.delete()
      }, 3000);
      })
    }
    if (message.content.startsWith(prefix + 'alert')) {
      if (message.member.hasPermission('MANAGE_MESSAGES')) {
        message.delete()
        let args = message.content.split(' ')
      args.shift()
      if (args.join('') === '') return message.channel.send('Choisir le texte a dire : /alert <texte>');
      message.channel.send('**```css\n /!\\ [' + args.join(' ') + '] /!\\ ```**')
      } else {
        message.channel.send('Vous devez être administrateur pour faire cela !')
      }
    }

        if (message.content.startsWith(prefix + 'troll')) return troll.troll(message);

        if (message.content.startsWith(prefix + 'call')) return call.call(message);

        if (message.content.startsWith(prefix + 'id')) return cid.cid(message);

        if (message.content.startsWith('?iprefix')) return message.channel.send('Le prefix est ' + prefix + ".");

        if (message.content.startsWith(prefix + 'ping')) return message.channel.send('**Pong !** :ping_pong: ').then((message) => {message.edit(`**Pong !** :ping_pong: J'ai mis ${Math.round(bot.ping)}ms à répondre !`)});

        if (message.content.startsWith(prefix + 'pong')) return message.channel.send('**Ping !** :ping_pong: ').then((message) => {message.edit(`**Ping !** :ping_pong: J'ai mis ${Math.round(bot.ping)}ms à répondre !`)});

        if (message.content.startsWith(prefix + 'dieu')) return message.channel.send("Votre Dieu est Zayy' soumettez vous à lui");

        if (message.content.startsWith('.set')) return fun.set(message);

        if (message.content.startsWith('.unset')) return fun.unset(message);

        if (message.content.startsWith('.destruction')) return fun.destrcuct(message);

    	 if (message.content.startsWith(prefix + 'admintroll')) return message.channel.send('Alexian548 troll les admins');

       if (message.content.startsWith(prefix + 'silence')) return silence.silence(message);

       if (message.content.startsWith('.leave')) return fun.leave(message);

       if (message.content.startsWith('.ban')) return fun.ban(message)

        //DiMz only

        if (message.content.startsWith('[2]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
        }
        if (message.content.startsWith('[3]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
        }
        if (message.content.startsWith('[4]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
          .then(() => message.react(emojiCharacters[4]))
        }
        if (message.content.startsWith('[5]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
          .then(() => message.react(emojiCharacters[4]))
          .then(() => message.react(emojiCharacters[5]))
        }
        if (message.content.startsWith('[6]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
          .then(() => message.react(emojiCharacters[4]))
          .then(() => message.react(emojiCharacters[5]))
          .then(() => message.react(emojiCharacters[6]))
        }
        if (message.content.startsWith('[7]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
          .then(() => message.react(emojiCharacters[4]))
          .then(() => message.react(emojiCharacters[5]))
          .then(() => message.react(emojiCharacters[6]))
          .then(() => message.react(emojiCharacters[7]))
        }
        if (message.content.startsWith('[8]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
          .then(() => message.react(emojiCharacters[4]))
          .then(() => message.react(emojiCharacters[5]))
          .then(() => message.react(emojiCharacters[6]))
          .then(() => message.react(emojiCharacters[7]))
          .then(() => message.react(emojiCharacters[8]))
        }
        if (message.content.startsWith('[9]')) {
          message.react(emojiCharacters[1])
          .then(() => message.react(emojiCharacters[2]))
          .then(() => message.react(emojiCharacters[3]))
          .then(() => message.react(emojiCharacters[4]))
          .then(() => message.react(emojiCharacters[5]))
          .then(() => message.react(emojiCharacters[6]))
          .then(() => message.react(emojiCharacters[7]))
          .then(() => message.react(emojiCharacters[8]))
          .then(() => message.react(emojiCharacters[9]))
        }
        if (message.content.startsWith('[SUPR]')) {
          message.delete()
        }


        if (message.content === '.serveur') {
          if (message.author.id === '342330037652946945') {
          let sname = 'Vocal'
          let cname = 'commandebot'
          let mserveur = bot.guilds.find(g => g.name === "[FR] Gaming / Discussion")
          let serveur = bot.guilds.find(g => g.name === sname)
          let serveurc = serveur.channels.find('name', cname)
          serveurc.createInvite()
          .then(invite => message.channel.send(`Voici le lien du serveur : https://discord.gg/${invite.code}`))
          .catch(console.error);
        }
        }

        if (message.content === '.infoserveur'){
          if (message.author.id === '342330037652946945') {
          let sname = 'Vocal'
          let serveur = bot.guilds.find(g => g.name === sname)
          console.log(serveur)
        }
        }

        // Help

        let HEmbed = new Discord.RichEmbed()
    	.setDescription(message.author)
    	.setColor("#FFFFFF")
    	.addField("~Info~", "Pour connaitre le prefix : ?iprefix.")
    	.addField('Aide', prefix + "help <nom de la commande> pour obtenir de l'aide sur la commande." + prefix + "helphere pour avoir l'aide dans le channel.")
   		.addField("Commande de base :", "```invite, google, youtube, ping, si, botinfo, guild, id, membercount, new```")
   		.addField("Fun :", "```rps, 8ball, call, pf, nani, dice, silence, clap, message, messageset, play, leave```")
   		.addField("Jeu :", "```kill, addgame, removegame```")
   		.addField("Commande personnalisé :", "```Under2World : troll\nZayy' : dieu\nAlexian548 : admintroll```")
      .addField("Voici l'aide des admins :", "```say, kick, ban, mp, alert, mute, unmute, clear```")
      .addField('Heure', `${h}:${m}`)

    let HDimz = new Discord.RichEmbed()
    .setTitle('Help de DiMz')
    .setColor('#FFFFFF')
    .setDescription('Vos commandes sont à utiliser avec "." comme prefix !')
    .addField("Voici la liste de vos commande DiMz :"," ```set, unset, destruction, botgame, prefix, serveur, infoserveur, ban, msg, banword, on```")

    	if (message.content.startsWith(prefix + 'helphere') || message.content.startsWith(prefix + 'hh')) 
		{
   			message.channel.send(HEmbed)
		}

  if (message.content === prefix + 'dhelp' || message.content === prefix + 'dh') {
    if (message.author.id === '342330037652946945') {
    message.channel.send('Votre aide privé vous à été envoyé en privé DiMz.')
    message.author.send(HDimz)
  } else {return message.channel.send('Seulement DiMz peut faire cela !')}
  }

	if (message.content === prefix + 'help' || message.content === prefix + 'h') 
	{
		message.reply("L'aide vous à été envoyé en privé.")
   		message.author.send(HEmbed)
	}
  if(message.content.startsWith(prefix + 'clear')) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les perms pour faire cela !")
  let args = message.content.split(' ')
    const deleteCount = parseInt(args[1], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Le nombre de message à suprimmer doit être compris entre 2 et 100.");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
	if (message.content.startsWith(prefix + 'help rps') || message.content.startsWith(prefix + 'h rps')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à jouer au pierre feuille ciseaux avec le bot.")
   		.addField("Comment utiliser cette commande ?", prefix + "rps <Pierre / Feuille / Ciseaux>")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help google') || message.content.startsWith(prefix + 'h google')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à faire une recherche google.")
   		.addField("Comment utiliser cette commande ?", prefix + "google <Chose a rechercher sur google>")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help youtube') || message.content.startsWith(prefix + 'h youtube')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à faire une recherche youtube.")
   		.addField("Comment utiliser cette commande ?", prefix + "google <Chose a rechercher sur youtube>")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help help') || message.content.startsWith(prefix + 'h help')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à obtenir la fiche d'aide.")
   		.addField("Comment utiliser cette commande ?", prefix + "help")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help invite') || message.content.startsWith(prefix + 'h invite')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à obtenir le lien pour mettre le bot sur votre serveur.")
   		.addField("Comment utiliser cette commande ?", prefix + "invite")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help troll') || message.content.startsWith(prefix + 'h troll')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à troller une personne en lui faisant croire qu'il/elle a gagné un grade.")
   		.addField("Comment utiliser cette commande ?", prefix + "troll <@pseudo>")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help ping') || message.content.startsWith(prefix + 'h ping')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à vous donner votre ping :3")
   		.addField("Comment utiliser cette commande ?", prefix + "ping")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help info') || message.content.startsWith(prefix + 'h info')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à donner des information sur le serveur.")
   		.addField("Comment utiliser cette commande ?", prefix + "si")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help pf') || message.content.startsWith(prefix + 'h pf')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à jouer a pile ou face avec le bot.")
   		.addField("Comment utiliser cette commande ?", prefix + "pf")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help nani') || message.content.startsWith(prefix + 'h nani')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à généré une image nani aléatoire.")
   		.addField("Comment utiliser cette commande ?", prefix + "nani")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help 8ball') || message.content.startsWith(prefix + 'h 8ball')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à poser une question au bot.")
   		.addField("Comment utiliser cette commande ?", prefix + "8ball <QuestionÀPoserAuBot>")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help kill') || message.content.startsWith(prefix + 'h kill')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à kill une personne choisi.")
   		.addField("Comment utiliser cette commande ?", prefix + "kill <@pseudo>")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help guild') || message.content.startsWith(prefix + 'h guild')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert a obtenir le lien du serveur discord du créateur du bot.")
   		.addField("Comment utiliser cette commande ?", prefix + "guild")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help call') || message.content.startsWith(prefix + 'h call')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à dire à une personne que vous voulez l'appeller.")
   		.addField("Comment utiliser cette commande ?", prefix + "call")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help id') || message.content.startsWith(prefix + 'h id')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à donner son ID discord.")
   		.addField("Comment utiliser cette commande ?", prefix + "id ou " + prefix + " id <@pseudo>")
   		message.channel.send(HEmbed)
	}
  	if (message.content.startsWith(prefix + 'help dieu') || message.content.startsWith(prefix + 'h dieu')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à connaître le dieu du serveur.")
   		.addField("Comment utiliser cette commande ?", prefix + "dieu")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help membercount') || message.content.startsWith(prefix + 'h membercount')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à compter le nombre de personnne du serveur.")
   		.addField("Comment utiliser cette commande ?", prefix + "membercount")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help addgame') || message.content.startsWith(prefix + 'h addgame')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert ajouter un rôle avec le nom des jeux aux quelle vous jouez.")
   		.addField("Comment utiliser cette commande ?", prefix + "addgame")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help removegame') || message.content.startsWith(prefix + 'h removegame')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert enlever un rôle avec le nom des jeux aux quelle vous jouez.")
   		.addField("Comment utiliser cette commande ?", prefix + "removegame")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help new') || message.content.startsWith(prefix + 'h new')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert donner des idées pour Zakayo")
   		.addField("Comment utiliser cette commande ?", prefix + "new")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help admintroll') || message.content.startsWith(prefix + 'h admintroll')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert faire en sorte que que alexian troll les admins")
   		.addField("Comment utiliser cette commande ?", prefix + "admintroll")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help dice') || message.content.startsWith(prefix + 'h dice')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert à lancer un dé")
   		.addField("Comment utiliser cette commande ?", prefix + "dice")
   		message.channel.send(HEmbed)
	}
	if (message.content.startsWith(prefix + 'help botinfo') || message.content.startsWith(prefix + 'h botinfo')) 
	{
		let HEmbed = new Discord.RichEmbed()
    	.setDescription("~Help~")
    	.setColor("#FFFFFF")
    	.addField("A quoi sert cette commande ?", "Elle sert se renseigner sur le bot.")
   		.addField("Comment utiliser cette commande ?", prefix + "botinfo")
   		message.channel.send(HEmbed)
	}
  if (message.content.startsWith(prefix + 'help clap') || message.content.startsWith(prefix + 'h clap')) 
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à clap !")
      .addField("Comment utiliser cette commande ?", prefix + "clap <Texte>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help message' || message.content === prefix + 'h message')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle à voir le message actif")
      .addField("Comment utiliser cette commande ?", prefix + "message")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help messageset' || message.content === prefix + 'h messageset')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à changer le message !")
      .addField("Comment utiliser cette commande ?", prefix + "message <Texte>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help say' || message.content === prefix + 'h say')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à faire dire quelque chose au bot !")
      .addField("Comment utiliser cette commande ?", prefix + "say <Texte>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help say' || message.content === prefix + 'h say')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à envoyer un mp à un membre !")
      .addField("Comment utiliser cette commande ?", prefix + "mp <pseudo> <texte>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help kick' || message.content === prefix + 'h kick')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à kick un membre du serveur")
      .addField("Comment utiliser cette commande ?", prefix + "kick <pseudo> <raison>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help ban' || message.content === prefix + 'h ban')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à ban un membre du serveur")
      .addField("Comment utiliser cette commande ?", prefix + "ban <pseudo> <raison>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help alert' || message.content === prefix + 'h alert')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à créer une alert")
      .addField("Comment utiliser cette commande ?", prefix + "alert <texte>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help mute' || message.content === prefix + 'h mute')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à mute un membre du serveur")
      .addField("Comment utiliser cette commande ?", prefix + "mute <pseudo>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help unmute' || message.content === prefix + 'h unmute')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à unmute un membre du serveur")
      .addField("Comment utiliser cette commande ?", prefix + "unmute <pseudo>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help clear' || message.content === prefix + 'h clear')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à clear les messages")
      .addField("Comment utiliser cette commande ?", prefix + "clear <nombre de 2 à 100>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help play' || message.content === prefix + 'h play')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à play une musique si vous êtes dans un channel vocal")
      .addField("Comment utiliser cette commande ?", prefix + "play <lien youtube>")
      message.channel.send(HEmbed)
  }
  if (message.content === prefix + 'help leave' || message.content === prefix + 'h leave')
  {
    let HEmbed = new Discord.RichEmbed()
      .setDescription("~Help~")
      .setColor("#FFFFFF")
      .addField("A quoi sert cette commande ?", "Elle sert à faire quitter le bot du channel après avoir écouté une musique")
      .addField("Comment utiliser cette commande ?", prefix + "leave")
      message.channel.send(HEmbed)
  }

	// AUTRE
  if (message.content.startsWith('.botgame')) {
    if (message.author.id === '342330037652946945') {
      let args = message.content.split(' ')
      args.shift()
      if (args.join('') === '') return message.channel.send('Veuillez choisir le jeu du bot : .botgame <Jeu> !')
      bot.user.setGame(args.join(' '))
      message.channel.send('Le jeu du bot à bien été mis sur : ' + args.join(' ') + ` c'est possible qu'il y a un peu de latence, patientez quelque secondes, vous pouvez jouer au rps en attendant !`)
    } else {return message.channel.send('Seulement DiMz peut faire cela !')}
  }

	if (message.content.startsWith('.banword')) {
    if (message.author.id !== '342330037652946945') return;
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous devez être admin pour faire cela !");
		let args = message.content.split(" ")
		args.shift()
		if (args.join('') === 'on') {
			bws = true
			return message.channel.send('Baned Word activé !');
		}
		if (args.join('') === 'list') return message.channel.send('**Liste des mots interdits :**\n' + filtered + "\n**Je m'exuse pour ces mots violent :o**");
		if (args.join('') === 'off') {
			bws = false
			return message.channel.send('Baned Word désactivé !');
		}
		if (args.join('') !== 'on' && args.join('') !== 'off' && args.join('') !== 'list') message.channel.send('Séléctioner un mode (on/off/list)');
}
	if (bws === true)
		{
			for (var filter of filtered) {
        if (message.content.indexOf(filter) !== -1) {
            if (message.member.hasPermission('MANAGE_MESSAGES')) return;
            message.delete()
		message.channel.send('Surveille ton language ' + message.author + ' !').then((message) => {
			setTimeout(()=> {
				message.delete()
			}, 3000)
		})
        }
    }
}
if (message.content === prefix + 'message') {
  if (message === null || amessage === null) return message.channel.send(`Aucun message n'est défini ! ${prefix}messageset pour définir un message !`)
  let msg = new Discord.RichEmbed()
  .setTitle(message.author.username)
  .setColor('#FFFFFF')
  .addField('Message de :', amessage)
  .addField('Message :', mess)
  message.channel.send(msg)
}
if (message.content.startsWith(prefix + 'messageset')) {
  let args = message.content.split(' ')
  args.shift()
  if (args.join('') === '') return message.channel.send('Veuillez chosir votre message ' + prefix + 'messageset <Message> puis ' + prefix + 'message pour le voir !')
  mess = args.join(' ')
  amessage = message.author
  message.channel.send('Le message est désormais : **' + args.join(' ') + '**')
}
if (message.content.startsWith(prefix + 'clap')) {
  if (message.author.bot) return;
  let args = message.content.split(' ')
  args.shift()
  if (args.join('') === '') return message.channel.send(`Entrer du texte ! ${prefix}clap <Texte>`)
  message.channel.send('**' + message.author.username + '** : :clap:**' + args.join(' ') + '**:clap:').then((message) =>
    message.react('👏'))
}

	if (message.content.startsWith('.on')) 
	{
		if (message.author.id === '342330037652946945') {
		message.channel.send('Le bot se prépare...')
		if (message.guild.roles.find("name","VIP+")) {
		message.channel.send('Rôle VIP+ déjà créé.')
	} else {
		message.channel.send('Création du rôle VIP+.')
		message.guild.createRole({
 		name: 'VIP+',
 		color: '#ebdd11',
 		position: 5,
 		})
 		message.channel.send('Rôle VIP+ créé.')
	}
		if (message.guild.channels.find("name","🔰-bonjour-aurevoir-🔰")) {
 		message.channel.send('Channel 🔰-bonjour-aurevoir-🔰 déjà créé.')
		} else {
			message.channel.send('Création du channel 🔰-bonjour-aurevoir-🔰')
			message.guild.createChannel('🔰-bonjour-aurevoir-🔰', '' [{
  		id: message.guild.id,
  		deny: ['MANAGE_MESSAGES', 'SEND_MESSAGEs', 'KICK_MEMBERS', 'BAN_MEMBERS'],
  		allow: ['ADD_REACTIONS', 'CREATE_INSTANT_INVITE']
		}])
		message.channel.send('Channel 🔰-bonjour-aurevoir-🔰 créé.')
 		}
		}
	message.channel.send('Changement du nickname.')
	message.guild.members.get(bot.user.id).setNickname("Zakayo")
	message.channel.send('Nickname changé.')
		message.channel.send('Le bot est prêt a être utilisé !')
	}

	if (message.content.startsWith(prefix + 'membercount')) 
	{
		let MEmbed = new Discord.RichEmbed()
		.setDescription("~Member Count~")
    	.setColor("#FFFFFF")
    	.addField('Total Users :', message.guild.memberCount)
    	.addField("Total Members :", message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size)
    	.addField("Total Bots :", message.guild.members.filter(m=>m.user.bot).size)
    	message.channel.send(MEmbed)
	}
	if (message.content.startsWith(prefix + 'new')) {
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === '') return message.channel.send(prefix + 'new <Idée> pour proposer votre idée pour le bot !')
		IEmbed = new Discord.RichEmbed()
		.setDescription('~Idée~')
		.setColor('FFFFFF')
		.addField('Idée de :', message.author)
    .addField('Serveur :', message.guild.name)
		.addField('Idée :', args.join(' '))
		bot.channels.get('454955379605110784').send(IEmbed)
		message.delete()
		message.channel.send(message.author + ', votre idée a été envoyé.')
	}

	if (message.content.startsWith('.msg')) 
	{
    if (message.author.id !== '342330037652946945') return;
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === 'on') 
		{
			msgonoff = true
			message.channel.send('Les message sont désormais activés !')
		}
		if (args.join('') === 'off') 
		{
			msgonoff = false
			message.channel.send('Les message sont désormais désactivés !')
		}
		if (args.join('') === '') 
		{
			message.channel.send('Séléctionner un mode (on/off)')
		}
	}

	if (msgonoff === false) 
	{
		if (message.member.hasPermission('MANAGE_MESSAGES'))
		{
			return;
		}
		message.guild.delete()
		return message.channel.send('Les messages sont désactivés !').then((message) => {
			setTimeout(()=> {
				message.delete()
			}, 3000)
		})
	}
	if (message.content.startsWith(prefix + 'kill')) 
	{
			let vkill = Math.round(Math.random() * 9)
			let userm = message.guild.member(message.mentions.users.first())
			if (userm === null || userm.id === message.author.id) return message.channel.send(message.author + " s'est suicidé.");
			if (vkill === 0) message.channel.send(userm + ' est tombé dans le vide.');
			if (vkill === 1) message.channel.send(userm + ' a quitté le jeu.');
			if (vkill === 2) message.channel.send(userm + ' à été tué par ' + message.author + '.');
			if (vkill === 3) message.channel.send(userm + ' à essayer de nager dans de la lave.');
			if (vkill === 4) message.channel.send(userm + ' à fait une chute mortelle.');
			if (vkill === 5) message.channel.send(userm + " s'est fait tué par un zombie.");
			if (vkill === 6) message.channel.send(userm + " s'est fait tué par un squelette."); 
			if (vkill === 7) message.channel.send(userm + " s'est fait exploser par un creeper.")
			if (vkill === 8) message.channel.send(userm + " s'est noyé.")
			if (vkill === 9) message.channel.send(userm + "s'est fait tiré dessus a 69m.")
		 }
	if (message.content.startsWith(prefix + '8ball'))
	{
		let ball = Math.round(Math.random() * 9)
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === '') return message.channel.send('Merci de poser votre question : ' + prefix + '8ball <question>.');
		if (ball === 0) message.channel.send('Oui');
		if (ball === 1) message.channel.send('Non');
		if (ball === 2) message.channel.send('Sûrement');
		if (ball === 3) message.channel.send('Sûrement pas');
		if (ball === 4) message.channel.send('Bien sûr');
		if (ball === 5) message.channel.send('Bien sûr que non');
		if (ball === 6) message.channel.send('Je pense');
		if (ball === 7) message.channel.send('Je pense pas');
		if (ball === 8) message.channel.send('Peut-être');
		if (ball === 9) message.channel.send('Peut-être pas');
	}
	if (message.content.startsWith(prefix + 'nani')) 
	{
		let nani = Math.round(Math.random() * 8)
    nani = nani+1
    message.channel.sendFile('./nani/nani'+nani+'.jpg')	
  }
	if (message.content.startsWith(prefix + 'rps')) 
	{
		let args = message.content.split(' ')
		args.shift()
		let varrps = Math.round(Math.random() * 2)
		if (args.join('') === 'Feuille') 
		{
			if (varrps === 0) message.channel.send("Vous avez choisi Feuille \n J'ai choisi Feuille \n Egalité.");
			if (varrps === 1) message.channel.send("Vous avez choisi Feuille \n J'ai choisi Pierre \n Vous avez gagné.");
			if (varrps === 2) message.channel.send("Vous avez choisi Feuille \n J'ai choisi Ciseaux \n J'ai gagné.");
		}
		else if (args.join('') === 'Pierre') 
		{
			if (varrps === 0) message.channel.send("Vous avez choisi Pierre \n J'ai choisi Feuille \n J'ai gagné.");
			if (varrps === 1) message.channel.send("Vous avez choisi Pierre \n J'ai choisi Pierre \n Egalité.");
			if (varrps === 2) message.channel.send("Vous avez choisi Pierre \n J'ai choisi Ciseaux \n Vous avez gagné.");
		}
		else if (args.join('') === 'Ciseaux') 
		{
			if (varrps === 0) message.channel.send("Vous avez choisi Ciseaux \n J'ai choisi Feuille \n Vous avez gagné.");
			if (varrps === 1) message.channel.send("Vous avez choisi Ciseaux \n J'ai choisi Pierre \n J'ai gagné.");
			if (varrps === 2) message.channel.send("Vous avez choisi Ciseaux \n J'ai choisi Ciseaux \n Egalité.");
		} else return message.channel.send('Merci de selectionner : Pierre, Feuille, Ciseaux.');
	}

	if (message.content.startsWith(prefix + 'say') || message.content.startsWith(prefix + 'Say'))
	{
		if (message.member.hasPermission('ADMINISTRATOR') || message.author.id === '342330037652946945') {
		message.delete()
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === null) message.channel.send('Merci de choisir que faire dire au bot : ' + prefix + "say <ChoseADire>");
		message.channel.send(args.join(' '))
	} else {return message.channel.send('Vous devez être administrateur pour faire cela.')}
	}

	if (message.content.startsWith(prefix + 'mp')) 
	{
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous devez être administrateur pour faire cela.');
		let args = message.content.split(" ");
  		let userm = message.guild.member(message.mentions.users.first())
		if (!userm) return message.channel.send('A qui voulez vous envoyer les message ? ' + prefix + 'mp <@pseudo> <ChoseADire>');
		args.shift()
		args.shift()
		if (args.join('') === '') return message.channel.send('Que voulez-vous lui dire ? ' + prefix + 'mp <@pseudo> <ChoseADire>')
		userm.send(args.join(' '))
		message.delete()
	}

	if (message.content.startsWith('.prefix') || message.content.startsWith('.Prefix')) 
	{
		if (!message.author.id === '342330037652946945') return message.channel.send('Vous devez être DiMz pour faire cela.');
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('Le prefix est désormais : ' + args.join(' ') + ".")
		prefix = args.join(' ')
	}

	if (message.content.startsWith(prefix + 'pf'))
    {
    	let pfvar = Math.round(Math.random() * 1)
    	if (pfvar === 0) message.channel.send("J'ai choisi Pile !");
    	if (pfvar === 1) message.channel.send("J'ai choisi Face !");
    }
    if (message.content.startsWith(prefix + 'dice')) {
    	let dice = Math.round(Math.random() * 5)
      dice = dice + 1
      message.channel.send('Cela donne ' + dice + ' !')
    }
	if (message.content.startsWith(prefix + 'invite') || message.content.startsWith(prefix + 'Invite')) 
	{
		message.channel.send("Voici le lien pour m'ajouter sur votre discord : https://discordapp.com/oauth2/authorize?client_id=434027164816637993&scope=bot&permissions=2146958591")
	}
	if (message.content.startsWith(prefix + 'guild')) 
	{
		message.channel.send("Voici le lien du serveur discord du créateur du bot : https://discord.gg/ZWWmXRM")
	}
	if (message.content.startsWith(prefix + 'google ')) 
	{
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://www.google.fr/search?client=opera&q=' + args.join('+'))
	}
	if (message.content.startsWith(prefix + 'youtube ')) 
	{
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://www.youtube.com/results?search_query=' + args.join('+'))
	}
	// Question Réponse !
	if (message.content.startsWith(prefix + 'qr')) {
		if (message.member.hasPermission('ADMINISTRATOR')) {
		let args = message.content.split(' ')
		args.shift()
		if (args.join('') === '') message.channel.send('Choisissez un mode (on/off)');
		else if (args.join('') === 'off') {
			message.channel.send('Question réponse désactivé')
			qrvar = false
		} else if (args.join('') === 'on') {
			message.channel.send('Question réponse activé !')
			qrvar = true
		} else message.channel.send('Choisissez un mode (on/off)');
		} else return message.channel.send('Vous devez être Administrateur')
	} 
  if (message.channel.name === 'discussion-zakayo') {
	if (qrvar = true) {
	if (message.author.bot) return;
	if (qr.q1(message)) return qr.r1(message);
	if (qr.q2(message)) return qr.r2(message);
	if (qr.q3(message)) return qr.r3(message);
	if (qr.q4(message)) return qr.r4(message);
	if (qr.q5(message)) return qr.r5(message);
	if (qr.q6(message)) return qr.r6(message);
	if (qr.q7(message)) return qr.r7(message);
	if (qr.q8(message)) return qr.r8(message);
	if (qr.q9(message)) return qr.r9(message);
	if (qr.q10(message)) return qr.r10(message);
  if (qr.q11(message)) return qr.r11(message); 	
  }		
}
});
const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
  if (!events.hasOwnProperty(event.t)) return;

  const { d: data } = event;
  const user = bot.users.get(data.user_id);
  const channel = bot.channels.get(data.channel_id) || await user.createDM();

  if (channel.messages.has(data.message_id)) return;

  const message = await channel.fetchMessage(data.message_id);
  const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
  let reaction = message.reactions.get(emojiKey);

  if (!reaction) {
    const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
    reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
  }

  bot.emit(events[event.t], reaction, user);
});

bot.on('messageReactionAdd', async (reaction, user)=>{
  // GAME ZAKAYO !!
  if (reaction.message.content.startsWith('[JEUX]')) {
    reaction.message.react('460384650393550848').then((message)=> {
    reaction.message.react('460385999986491392')
    reaction.message.react('460387641204932608')
    reaction.message.react('460388303812821003')
    reaction.message.react('460388413669900289')
    reaction.message.react('460388502966632478')
    reaction.message.react('460388596860452864')
    })
    if (reaction.emoji.id === '460384650393550848') {
      let rminecraft = reaction.message.guild.roles.find(`name`, `Minecraft`);
      reaction.message.guild.members.get(user.id).addRole(rminecraft.id)
      user.send('Vous avez reçu le role "Minecraft" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460385999986491392') {
      let rfortnite = reaction.message.guild.roles.find(`name`, `Fortnite`);
      reaction.message.guild.members.get(user.id).addRole(rfortnite.id)
      user.send('Vous avez reçu le role "Fortnite" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460387641204932608') {
      let roverwatch = reaction.message.guild.roles.find(`name`, `Overwatch`);
      reaction.message.guild.members.get(user.id).addRole(roverwatch.id)
      user.send('Vous avez reçu le role "Overwatch" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388303812821003') {
      let rlol = reaction.message.guild.roles.find(`name`, `League Of Legends`);
      reaction.message.guild.members.get(user.id).addRole(rlol.id)
      user.send('Vous avez reçu le role "League Of Legends" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388413669900289') {
      let rosu = reaction.message.guild.roles.find(`name`, `Osu`);
      reaction.message.guild.members.get(user.id).addRole(rosu.id)
      user.send('Vous avez reçu le role "Osu" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388502966632478') {
      let rpubg = reaction.message.guild.roles.find(`name`, `PUBG`);
      reaction.message.guild.members.get(user.id).addRole(rpubg.id)
      user.send('Vous avez reçu le role "PUBG" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388596860452864') {
      let rgmod = reaction.message.guild.roles.find(`name`, `Garry's Mod`);
      reaction.message.guild.members.get(user.id).addRole(rgmod.id)
      user.send(`Vous avez reçu le role "Garry's Mod" sur le serveur ` + reaction.message.guild.name + ' !')
    }
    else {
      reaction.remove(user)
    }
  }


  // NOTIF DU SERVEUR !

  if (reaction.message.content.startsWith('[NOTIF]')) {
    try {
      await reaction.message.react('💰')
      await reaction.message.react('🔔')
      await reaction.message.react('✨')
      await reaction.message.react('🎉')
      await reaction.message.react('🎮')
    } catch (error) {
      console.log('Error [NOTIF]')
    }
    if (reaction.emoji.name === '🔔') {
      let annonce = reaction.message.guild.roles.find(`name`, `Notif Annonce`);
      reaction.message.guild.members.get(user.id).addRole(annonce.id)
      user.send('Vous avez reçu le role "Notif Annonce" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '✨') {
      let sondage = reaction.message.guild.roles.find(`name`, `Notif Sondage`);
      reaction.message.guild.members.get(user.id).addRole(sondage.id)
      user.send('Vous avez reçu le role "Notif Sondage" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '🎉') {
      let concours = reaction.message.guild.roles.find(`name`, `Notif Concours`);
      reaction.message.guild.members.get(user.id).addRole(concours.id)
      user.send('Vous avez reçu le role "Notif Concours" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '🎮') {
      let zakayo = reaction.message.guild.roles.find(`name`, `Notif Zakayo`);
      reaction.message.guild.members.get(user.id).addRole(zakayo.id)
      user.send('Vous avez reçu le role "Notif Zakayo" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '💰') {
      let all = reaction.message.guild.roles.find(`name`, `Notif Everyone`);
      reaction.message.guild.members.get(user.id).addRole(all.id)
      user.send('Vous avez reçu le role "Notif Everyone" sur le serveur ' + reaction.message.guild.name + ' !')
    } else {
      reaction.remove(user)
    }
  }

});

bot.on('messageReactionRemove', (reaction, user)=>{

// POUR LE ZAKAYO GAME

  if (reaction.message.content.startsWith('[JEUX]')) {
    if (reaction.emoji.id === '460384650393550848') {
      let rminecraft = reaction.message.guild.roles.find(`name`, `Minecraft`);
      reaction.message.member.removeRole(rminecraft.id)
      user.send('Vous avez été enlevé du role "Minecraft" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460385999986491392') {
      let rfortnite = reaction.message.guild.roles.find(`name`, `Fortnite`);
      reaction.message.guild.members.get(user.id).removeRole(rfortnite.id)
      user.send('Vous avez été enlevé du role "Fortnite" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460387641204932608') {
      let roverwatch = reaction.message.guild.roles.find(`name`, `Overwatch`);
      reaction.message.guild.members.get(user.id).removeRole(roverwatch.id)
      user.send('Vous avez été enlevé du role "Overwatch" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388303812821003') {
      let rlol = reaction.message.guild.roles.find(`name`, `League Of Legends`);
      reaction.message.guild.members.get(user.id).removeRole(rlol.id)
      user.send('Vous avez été enlevé du role "League Of Legends" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388413669900289') {
      let rosu = reaction.message.guild.roles.find(`name`, `Osu`);
      reaction.message.guild.members.get(user.id).removeRole(rosu.id)
      user.send('Vous avez été enlevé du role "Osu" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388502966632478') {
      let rpubg = reaction.message.guild.roles.find(`name`, `PUBG`);
      reaction.message.guild.members.get(user.id).removeRole(rpubg.id)
      user.send('Vous avez été enlevé du role "PUBG" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.id === '460388596860452864') {
      let rgmod = reaction.message.guild.roles.find(`name`, `Garry's Mod`);
      reaction.message.guild.members.get(user.id).removeRole(rgmod.id)
      user.send(`Vous avez été enlevé du role "Garry's Mod" sur le serveur ` + reaction.message.guild.name + ' !')
    }
  }

  // POUR LES NOTIFS

  if (reaction.message.content.startsWith('[NOTIF]')) {
    if (reaction.emoji.name === '🔔') {
      let annonce = reaction.message.guild.roles.find(`name`, `Notif Annonce`);
      reaction.message.guild.members.get(user.id).removeRole(annonce.id)
      user.send('Vous avez été enlevé du role "Notif Annonce" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '✨') {
      let sondage = reaction.message.guild.roles.find(`name`, `Notif Sondage`);
      reaction.message.guild.members.get(user.id).removeRole(sondage.id)
      user.send('Vous avez été enlevé du role "Notif Sondage" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '🎉') {
      let concours = reaction.message.guild.roles.find(`name`, `Notif Concours`);
      reaction.message.guild.members.get(user.id).removeRole(concours.id)
      user.send('Vous avez été enlevé du role "Notif Concours" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '🎮') {
      let zakayo = reaction.message.guild.roles.find(`name`, `Notif Zakayo`);
      reaction.message.guild.members.get(user.id).removeRole(zakayo.id)
      user.send('Vous avez été enlevé du role "Notif Zakayo" sur le serveur ' + reaction.message.guild.name + ' !')
    }
    else if (reaction.emoji.name === '💰') {
      let all = reaction.message.guild.roles.find(`name`, `Notif Everyone`);
      reaction.message.guild.members.get(user.id).removeRole(all.id)
      user.send('Vous avez été enlevé du role "Notif Everyone" sur le serveur ' + reaction.message.guild.name + ' !')
    } else {
      reaction.remove(user)
    }
  }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === (prefix + 'kick')){


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur non trouvé.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas faire ça!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kické!")
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);

    return;
  }

  if(cmd === (prefix + 'ban')){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Utilisateur non trouvé.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Je ne peux pas faire ça!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kické!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);


    return;
  }
  if (cmd === (prefix + 'botinfo') || cmd === (prefix + 'bi')) {
  	let botembed = new Discord.RichEmbed()
  	.setTitle('Bot Info')
  	.setColor('#FFFFFF')
  	.addField('Bot Name', 'Zakayo')
  	.addField('Créator', 'TC_DiMz#5657')
    .addField('Site web', 'Très prochainement !')
  	.addField('Total server :', bot.guilds.size)
    .addField('Guilds Name Liste', bot.guilds.map(g => g.name))
    message.channel.send(botembed)
  }

  if(cmd === (prefix + 'si')){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#FFFFFF")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)


    return message.channel.send(serverembed);
  }

if(cmd === (prefix + 'addrole')){
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Désolé je ne peux pas faire ça.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Utilisateur non trouvé.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specifier le rôle!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Rôle non trouvé!");

    if(rMember.roles.has(gRole.id)) return message.reply("Cette utilisateur a déja ce rôle!");
    await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Félicitations vous avez bien reçu le rôle ${gRole.name}`)
  }catch(e){
    message.channel.send(`Félicitations à <@${rMember.id}>, pour avoir bien reçu le rôle ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}

if(cmd === (prefix + 'removerole')){
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Désolé je ne peux pas faire ça..");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Utilisateur non trouvé.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specifier un rôle!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Rôle non trouvé!");

  if(!rMember.roles.has(gRole.id)) return message.reply("Cette Uilisateur n'a pas ce rôle!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, vous avez perdu le rôle ${gRole.name}.`)
  }catch(e){
    message.channel.send(`RIP à <@${rMember.id}>, qui à perdu le rôle ${gRole.name}.`)
  }
}
module.exports.help = {
  name: "removerole"
}
if(cmd === prefix + "mute"){

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role){
      try {
        role = await message.guild.createRole({
          name: "Muted",
          color:"#000000",
          permissions:[]
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');

    await(toMute.addRole(role));
    message.channel.send(`${toMute} est désomais muté !`);

    return;
  }
  if (cmd === prefix + 'unmute') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour unmuter un utilisateur !");
let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
let role = message.guild.roles.find(r => r.name === "Muted");
if (!toMute.roles.has(role.id)) return message.channel.send("Cette personne n'est pas mute !")
  toMute.removeRole(role.id)
message.channel.send(`${toMute} est désomais unmté !`)
  }
});


bot.login(process.env.TOKEN)
