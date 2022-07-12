const superagent = require("snekfetch");
const Discord = require('discord.js')
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "baka",
  aliases: ["baka"],
  description: "Show Gif",
  usage: "Gif",
   run: async (client, message, args) => {
     
    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("BAKA!")
      .setImage(response.body.url)
      .setColor(color)
      .setFooter(`idiot!`)
      .setURL(response.body.url);
  message.lineReplyNoMention(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}
}
