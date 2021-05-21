const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  
  const sunucusayısı = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle("Bakalım Kaç Sunucudayım ?")
  .addField("**Toplam Sunucular**", client.guilds.cache.size.toLocaleString(), true)
  message.channel.send(sunucusayısı)
  
  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucular"],
};
                                                  
exports.help = {
  name: "sunucu-sayısı",
  description: "Bot kaç sunucuda",
  usage: "sunucu-sayısı"
};