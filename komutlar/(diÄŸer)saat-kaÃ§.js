const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  

  const saat = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription('⇓ Saat ⇓')
  .setTimestamp()
  message.channel.send(saat)
  
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};
exports.help = { 
    name: "saat"
}
