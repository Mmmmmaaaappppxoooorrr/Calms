const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const { MessageButton } = require("discord-buttons")
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "links",
  aliases: ["link", "invite", "support", "link"],
  description: "links",
  usage: "links",
  run: async (client, message, args) => {
  
      let invite = new MessageButton().setStyle('url').setLabel('Invite Me').setURL('https://discord.com/api/oauth2/authorize?client_id=914082317344059402&permissions=8&scope=bot')
      let support = new MessageButton().setStyle('url').setLabel('Soon').setURL('https://discord.gg/')
     
      const allbuttons = [invite, support]

    let mybuttonsmsg = await message.channel.send({
        embed: new MessageEmbed()
          .setColor(color)
          .setDescription('**Click on The buttons below to redirect**')
          .addField("Need Help?", 'Join To Our **Support Server**!')
          .addField("Use Me?", '**Invite me** now by [Click Here](https://discord.com/api/oauth2/authorize?client_id=914082317344059402&permissions=8&scope=bot) or click on the **button**'),
        buttons: allbuttons
      });
  }
}
