
const Discord = require('discord.js');


module.exports = {
	name: 'leave',
  aliases: 'kar',
	execute: async(client, message, args) => {
    if(message.author.id != "743887896481628190" || message.author.id != "743887896481628190") {
	const embed = new Discord.MessageEmbed().setColor('#FF00FF');
  if(!args[0]) {
      message.guild.leave()
  } else {
    let server = client.guilds.cache.get(args[0]);
    server.leave()
  }
 message.channel.send(embed.setDescription('Successfully left the server!'));
    }
		
	},
};
