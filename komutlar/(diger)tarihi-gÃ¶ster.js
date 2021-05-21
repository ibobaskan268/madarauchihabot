const Discord = require("discord.js")
const client = new Discord.Client();
const moment = require("moment")
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
let atilanAy = moment(Date.now()).format("MM");
    let saat = moment(Date.now()).format("HH:mm:ss");
    let gün = moment(Date.now()).format("DD");
    let tarih = `${gün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${saat}`

  const tarih2 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor('⇓ Tarih ⇓',message.author.avatarURL())
  .setDescription(`${tarih}`)
  .setTimestamp()
  message.channel.send(tarih2)
  
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "tarih2"
};
exports.help = { 
    name: 'tarih'
}
