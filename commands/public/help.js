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
    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(", "),
        };

        categories.push(data);
      });

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
