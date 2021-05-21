const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
  var oyun = [
    `?yardım | Bot hakkında detaylı yardım alabilirsiniz!`,
    `?anime | Sizler için rasgele anime önerir!`,
    `?anime-tavsiye | Anime tavsiyesinde bulunabilirsiniz!`,
    `?istatistik | Botun yapımcısını bu komut sayesinde veya bu komut ile bulabilirsiniz!`,
    `${client.guilds.cache.size} Sunucu Ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kişi'Ye Hizmet Veriyor.....`
  
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};