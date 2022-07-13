const { Client, Guild, MessageEmbed } = require("discord.js")

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {

 let channel = client.channels.cache.get("994933719263608922");

 const joinEmbed = new MessageEmbed()
       .setColor("RANDOM")
       .setTitle("New Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just joined to here **${guild.name}**.\n\nThere is **${guild.memberCount}** members`,
         true
       )
       .addField(
         "Owner:",
         `${guild.owner}`,
         true
       )
       .addField(
         "Servers:",
         `[${client.guilds.cache.size}]`,
         true
       )
       .setTimestamp() // moment().format('LLL'),
       .setFooter(`Bzhe la xom`);
    channel.send(joinEmbed);

}
