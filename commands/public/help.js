const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { MessageButton } = require("discord-buttons")
const { MessageActionRow } = require("discord-buttons")
const Color = "#303136";
const db = require("quick.db")
const language = "en"

module.exports = {
  name: "help",
   aliases: ["h"],
  run: async (client, message, args ) => {
    const prefix = db.get(`guild_${message.guild.id}_prefix`) || '+';
      //--------------------------------------S T A R T---------------------------------------
        const embed = new Discord.MessageEmbed() 
         .setTitle(`Hello`) 
        .addField("Categories:", `🏠 | Home\n🌐 | General\n⚙️ | Moderation\n🐸 | Funny\n🌀 | Gif\n🖼️ | Photo\n🖋️ | Text\n🎈 | Emote`)
        .addField("Prefix:", `+`)
        .addField("Commands:", `Select a category`)
        .setColor(Color)        
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`Requester: ${message.author.username}`)
        .setFooter('Home Page' , client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        const embed1 = new Discord.MessageEmbed()
        .setTitle("❯ General Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`avatar, stats, github, help, links, ping, roleinfo, serverinfo, userinfo\``)
        .setColor(Color)
        .setFooter('First Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
      
         const embed2 = new Discord.MessageEmbed()
        .setTitle("❯ Moderation Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`addrole, ban, bans, channels, channelinfo, purge, hide, kick, lock, mute, rmvrole, role, roles, nick, slowmode, unban, unhide, unlock, unmute, vkick\``)
        .setColor(Color)
        .setFooter('second Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        
        const embed3 = new Discord.MessageEmbed()
        .setTitle("❯ Funny Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`baka, clyde, cuddle, dance, deepfry, dicksize, hug, joke, pat, motivation\``)
        .setColor(Color)
        .setFooter('third Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

      const embed4 = new Discord.MessageEmbed()
        .setTitle("❯ Gif Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`boy\`, \`girl\`, \`anime\`, \`animal\`, \`couple\`, \`emoji\`, \`baby\``)
        .setColor(Color)
        .setFooter('fourth Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
               
        const embed5 = new Discord.MessageEmbed()
        .setTitle("❯ Photo Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`pboy\`, \`pgirl\`, \`panimal\`, \`pbaby\`, \`pemoji\``)
        .setColor(Color)
        .setFooter('fiveth Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
      
        const embed6 = new Discord.MessageEmbed()
         .setTitle("❯ Text Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`textenglish, textkurdish, textarabic, textpersian, textturkish\``)
        .addField("Aliases:", `\`te, tk, ta, tp, tt\``)
        .setColor(Color)
        .setFooter('sixth Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        
        const embed7 = new Discord.MessageEmbed()
        .setTitle("❯ Emote Category:")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addField("Availby Commands:", `\`‌add-emoji, add-these, emoji-info, emojis-list, emojistats, emojis, jumbo, remove-emoji, remove-these, rename-emoji\``)
        .setColor(Color)
        .setFooter('seventh Page', client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        const expired = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`❯ This Help Menu is expired!`)
        .addField("Retype:", `\`${prefix}help\` To Do Again!`)
        .setColor(Color)      
        .setTimestamp()
        
      
        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('General')
        .setEmoji('🌐')
        .setValue('option1')
        .setDescription('Click To see General Commands!')

        let option2 = new MessageMenuOption()
        .setLabel('Moderation')
        .setEmoji('⚙️')
        .setValue('option2')
        .setDescription('Click To see moderation Commands!')

        let option3 = new MessageMenuOption()
        .setLabel('Funny')
        .setEmoji('🐸')
        .setValue('option3')
        .setDescription('Click To see funny Commands!')

        let gif = new MessageMenuOption()
        .setLabel('Gif')
        .setEmoji('🌀')
        .setValue('gif')
        .setDescription('Click To see gif Commands!!')

        let pic = new MessageMenuOption()
        .setLabel('Photo')
        .setEmoji('🖼️')
        .setValue('pic')
        .setDescription('Click To see pic Commands!!')

        let home = new MessageMenuOption()
        .setLabel('Home')
        .setEmoji('🏠')
        .setValue('home')
        .setDescription('Return To Home')

        let text = new MessageMenuOption()
        .setLabel('Text')
        .setEmoji('🖋️')
        .setValue('text')
        .setDescription('Click To see text Commands!')

        let emote = new MessageMenuOption()
        .setLabel('Emote')
        .setEmoji('🎈')
        .setValue('emote')
        .setDescription('Click To see Emote Commands!')


    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Please Select a Category!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(home, option1, option2, option3, gif, pic, text, emote)
      
        //-----------------------------OPTIONS----------------------

    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => message.guild;
    let collector = Sendmenu.createMenuCollector(filter, { time : 150000 });
    collector.on("collect", (b, menu) => {
      if(b.clicker.id !== message.author.id) return b.reply.send(`:x: <@${b.clicker.id}> you can't use that!`, true)
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select, true)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select, true)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select, true)
        }

        if(b.values[0] == "gif") {
          Sendmenu.edit(embed4, select, true)
        }

        if(b.values[0] == "pic") {
          Sendmenu.edit(embed5, select, true)
        }

        if(b.values[0] == "text") {
          Sendmenu.edit(embed6, select)
        }

        if(b.values[0] == "emote") {
          Sendmenu.edit(embed7, select)
        }

        if(b.values[0] == "home") {
          Sendmenu.edit(embed, select, true)
        }

        b.reply.defer();

    collector.on("end", (b) => {
        Sendmenu.edit(expired)
    })
    })
 //------------------------EVENT-----------------------------   
    /*client.on('clickMenu', (menu) => {
      if (menu.message.id === selector) {
        if (menu.clicker.user.id === message.author.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });*/
  }
}

