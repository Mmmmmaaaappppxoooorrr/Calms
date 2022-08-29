const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const { MessageButton } = require('discord-buttons');
const {MessageActionRow} = require('discord-buttons');
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
  
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Use ${Prefix}help <Command Name> For More Command Information!
**Fun**
Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Choose, Hack, Randomnumber
**Moderation**
Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns
**Gif-Anime**
Boy, feed 
**Information**
Help, Covid, Weather, Userinfo, Serverinfo, Ping`)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    


    
    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
