const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');
var os = require('os')
let iş = os.cpus()[0]

return message.channel.send(new Discord.MessageEmbed()
.setColor("#ff0000")
 .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(client.user.username+' | İstatistikler', client.user.avatarURL())
.addField("❯ Bot Owner", "<@683707976468398227> || ! Flex〝Kakashi.dll#5320")
.addField('❯ Gecikme Süresi', client.ws.ping+'ms.', true)
.addField('❯ Çalışma Süresi', moment.duration(client.uptime).format(`w [weeks] d [days] h [hours] m [minutes] s [seconds]`), true)
.addField('❯ Kişi Sayısı' ,client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("❯ Sunucu Sayısı", client.guilds.cache.size.toLocaleString(), true)
.addField("❯ Kanal Sayısı", client.channels.cache.size.toLocaleString(), true)
.addField("❯ Discord.JS Version", "v"+Discord.version, true)
.addField("❯ Node.JS Versiyonu", `${process.version}`, true)
.addField('❯ CPU Usage', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB', true));

  };
 
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["i","botbilgi","bot-bilgi","botinfo","bot-info","stats"],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
//izexlesh