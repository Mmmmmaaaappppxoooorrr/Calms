const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const english = require("../json/textenglish.json")

module.exports = {
  name: "textenglish",
  aliases: ["textEnglish", "te", "ten"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {


   let en = english.ad[Math.floor((Math.random() * english.en.length))];

    message.channel.send(`${en}`).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
