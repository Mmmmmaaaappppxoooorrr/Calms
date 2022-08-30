


const Discord = require('discord.js');
const OWNER_ID = "743887896481628190";
const errorChannel = "1013736720363175967";
const lineReplyNoMention = require('discord-reply');
const color = "#ff0000";

module.exports = {
    name: "leaveservers",
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 3,
    description: "Check what Servers the bot is in!",
    async execute(client, message, cmd, args, Discord) {
        try {
            if (message.author.id != OWNER_ID) {
                const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command! 😔**`)
                return message.lineReplyNoMention({ embed: nopr })
            }
            let data = [];
            client.guilds.cache.forEach(x => {
                if (x.memberCount <= 5) {
                    x.leave()
                    const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setDescription(`🔹 Left **${x.name}** As It Had \`${x.memberCount}\` Members\n............................`)
                    message.lineReplyNoMention({ embed: embed });
                }
            });
            if (data.length > 0) {
                data.sort();
                data = `🔹 ` + data.join('\n🔹');
            }
            else {
                data = "[No server found]";
            }
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `Error On Bot Server Command!\n\nError:\n\n **${err}**` })
        }
    }
}
