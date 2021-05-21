const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    
  if (message.channel.type !== 'dm') {
    const güncelleme = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Güncelleme:`)
    .addField(`1- Botu girdiğin sesli kanala çekme özelliği eklendi ^^`)
    .addField(`2- sos oynama eklendi`)
    .addField(`3- saat gösterme ve tarih gösterme eklendi`)
    .addField(`4- v11 bi kodu v12ye çevirme özelli geldi`)
    .addField(`5- eğlence amaçlı intihar etme komutu geldi`)
    .addField(`6- efkar ölçer ve aşk ölçer komutları eklendi`)
    .addField(`7- aduket çekme ve nah çekme komutu eklendi`)
    .addField(`8- boğazla komutu eklendi`)
    .addField(`9- mayın tarlası ve fake mesaj komutu eklendi`)
    .addField(`10- botun kaç sunucuda oldunu sayı ile gösteren bir komut eklendi`)
    .addField(`11- zula deste açma komutu csgo kasa açma komutu ve brawl stars kasa açma komutu eklendi`)
    .addField(`12- bu saat'ten sonra hava durumu komutu eklenmiş bulunmaktadır!!!!!`)
    .addField(`13- sunucunun taç sahibi kim olduğunu gösteren bir komut eklendi!!!!!`)
    .addField(`14- sahibi cagırma komutu eklendi`)
    .addField(`15- bakım komutu eklenmiştir (DİPNOT: BU KOMUT SADECE YAPIMCIYA ÖZELDİR DENESENDE ÇALIŞMAZ BOŞA DENEME SADECE YAPIMCIM DENEYEBİLİR!!!!!)`)
    message.channel.send(güncelleme) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güncelleme'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
};
