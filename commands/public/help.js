const ButtonPages = require('discord-button-pages');
const { MessageEmbed, Discord, Client } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { readdirSync } = require("fs");
const Color = "#9700ff";

  module.exports = {
    name: "help",
    description: 'Botun Geçikme Değeri',
    options: [],
  run: async (client, message, args ) => {
    
   

      const help = new MessageEmbed()
        .setTitle("- Help Menu Commands:")
        .addFields(categories)
        .setDescription(`The bot prefix is: [ **>** ]`)
        .setFooter(`To see command descriptions or inforamtion, type: .help [Command Name]`, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(Color)

      message.channel.send(help);

    }
  }
}
