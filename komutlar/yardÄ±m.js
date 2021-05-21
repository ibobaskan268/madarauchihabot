const Discord = require(`discord.js`)
exports.run = async(client, message, args) => {

    const izexlesh = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setAuthor(`${client.user.username} `, client.user.avatarURL()) 
      .setDescription('Detaylı yardım almak için **?yardım**\n Örnek komut kullanımı: **?anime**.\n Botumuzu davet etmek için **?davet** ')
      .addField('** ❯ Anime Komutları (2)**', `Herkesin kullanabileceği **Anime** komutları. \n` +  '`anime`, `anime-tavsiye`')
      .addField('** ❯ Anime Gif Komutları (13)**', `Herkesin kullanabileceği **Anime Gif** komutları. \n` +  '`anime-gif`, `naruto-gif`, `shouka-gif`, `luffy-gif`, `levi-gif`,\n `usagi-gif`, `goku-gif`, `rintaro-gif`, `edward-gif`, `yuno-gif`,\n `mary-gif`, `izuku-gif`, `lubbock-gif`')
      .addField('** ❯ NSFW(+18) Komutları (9)**',   `Herkesin kullanabileceği **NSFW** komutları. \n` + '`anal`, `4k`, `ass`, `pgif`, `pussy`, `hkitsune`, `neko`, `hneko`, `holo`')
      .addField('** ❯ Sahip Komutları (3)**',`Bot **Sahibinin** kullanabileceği komutlar. \n` +  '`reebot`, `karaliste`, `eval`, `kanalagir`, `bakım`')
      .addField('** ❯ Diğer Komutlar (4)**',`Herkesin kullanabileceği **Diğer** komutlar. \n` +  '`istatistik`, `ping`, `davet`, `avatar`, `komutsay`, `cevir`, `sos`, `saat`, `tarih`, `intihar-et`, `yenilikler`, `taç`, `sahibimi-çağır`, `mayın-tarlası`, `boğazla`, `fake-mesaj`, `sunucular`, `kutuaç`, `kasaaç`, `deste-aç`, `hava-durumu`, `efkarım`, `aşk`, `aduket-çek`, `yaz`, `nah-çek`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL())
    .setImage("https://cdn.discordapp.com/attachments/791232249373655080/838683030071410728/standard_4.gif")
    .setTimestamp()
    message.channel.send(izexlesh).catch()

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help","h","y","yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü!",
  usage: ""
};



