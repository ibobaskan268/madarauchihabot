const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var sesese = "2";

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.login(process.env.token);
client.on('message', message => {
if (message.content === `<@${client.user.id}>`) {
 message.reply('Prefixim: ?')
}
});
client.on('guildMemberAdd', async (member) => {
    var kanal = member.guild.channels.get('838401623801593876') //Mesajın atılmasını istediğiniz kanalın id sini girin.
    kanal.send(`Heeey! ${member} Sunucumuza Hoşgeldin, Seninle Beraber $**{member.guild.memberCount} Kişi** Olduk!`) ;
})
client.on('guildMemberAdd', async(member) => {
if(member.guild.id = '838381579981815838') { //Sunucu ID giriniz.
const botkulub = `╠-● Son Üye • ${member.user.username}`
let  BotClub = client.channels.get("839104902219300884") //KANAL ID Giriniz
BotClub.setName(botkulub); 
}
});
app.on("guildCreate", guild => {
  let kanal = guild.channels.cache.find(r => r.id === "839379914909155348")
  const embed = new Discord.MessageEmbed()
  .setColor("#FFD600")
  .setTitle(`${guild.name} Adlı sunucuya eklendim!`)
  .setDescription(`
  - | **Sunucu Adı**: ${guild.name}
  - | **Sunucu Sahip Bilgileri**: İD: ${guild.ownerID} - Sahip: ${guild.owner} - İsim: ${guild.owner.name}
  - | **Sunucu Üye Sayısı**: ${guild.memberCount}
  - | **Sunucu Kanal Sayısı**: ${guild.channels.cache.size}
  - | **Sunucu Rol Sayısı**: ${guild.roles.cache.size}
  - | Bünyemize **1** Sunucu ve **${guild.memberCount}** Üye Katıldı! 
  - | Toplamda **${app.guilds.cache.size}** Sunucu ve **${app.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** Üye Olduk!
  `)
  .setFooter(app.user.username, app.user.avatarURL())
  kanal.send(embed)
})


app.on("guildDelete", guild => {
  let kanal = guild.channels.cache.find(r => r.id === "839379914909155348")
  const embed = new Discord.MessageEmbed()
  .setColor("#FFD600")
  .setTitle(`${guild.name} Adlı sunucudan atıldım!`)
  .setDescription(`
  - | **Sunucu Adı**: ${guild.name}
  - | **Sunucu Sahip Bilgileri**: İD: ${guild.ownerID} - Sahip: ${guild.owner} - İsim: ${guild.owner.name}
  - | **Sunucu Üye Sayısı**: ${guild.memberCount}
  - | **Sunucu Kanal Sayısı**: ${guild.channels.cache.size}
  - | **Sunucu Rol Sayısı**: ${guild.roles.cache.size}
  - | Bünyemizden **1** Sunucu ve **${guild.memberCount}** Üye Ayrıldı! 
  - | Toplamda **${app.guilds.cache.size}** Sunucu ve **${app.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** Üye Kaldık!
  `)
  .setFooter(app.user.username, app.user.avatarURL())
  kanal.send(embed)
})
client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('of')) msg.reply('Of deme ah de!');
  if (msg.content.toLowerCase().includes('ah')) msg.reply('Ah deme oh de!');
  if (msg.content.toLowerCase().includes('oh')) msg.reply('Oh deme püf de!');
  if (msg.content.toLowerCase().includes('püf')) msg.reply('Püf deme of de!');
  if (msg.content.toLowerCase().includes('günaydın')) msg.reply('sana da günaydın');
  if (msg.content.toLowerCase().includes('herkese günaydın')) msg.reply('günaydın :)');
  if (msg.content.toLowerCase().includes('iyi geceler')) msg.reply('sana da iyi geceler');
  if (msg.content.toLowerCase().includes('sa')) msg.reply('as');
  if (msg.content.toLowerCase().includes('iyi akşamlar')) msg.reply('sana da iyi akşamlar');
  if (msg.content.toLowerCase().includes('selamın aleyküm')) msg.reply('aleyküm selam');
  if (msg.content.toLowerCase().includes('güle güle')) msg.reply('sana da güle güle');
  if (msg.content.toLowerCase().includes('naber')) msg.reply('iyi senden naber ?');
  if (msg.content.toLowerCase().includes('domal')) msg.reply('sen domaldın ne gerek var :joy:');
  if (msg.content.toLowerCase().includes('napim')) msg.reply('domal :sunglasses:');
  if (msg.content.toLowerCase().includes('seni sikerim')) msg.reply('Olmayan şeylemi ?');
  if (msg.content.toLowerCase().includes('sikişelimmi')) msg.reply('olur aşkım geç yatağa aç götünü geliyorum :smiling_imp:');
  if (msg.content.toLowerCase().includes('efkarlımısın')) msg.reply('yooo değilim sen efkarlımısın ?');
  if (msg.content.toLowerCase().includes('evlenelimmi')) msg.reply('olur karıcım gel evlenelim');
  if (msg.content.toLowerCase().includes('ben senden ayrılmak istiyorum')) msg.reply('Niye ? :sob: :broken_heart:');
  if (msg.content.toLowerCase().includes('sapıkmısın')) msg.reply('evet senden daha çok sapığım aşkım mrrrr :yum:');
  if (msg.content.toLowerCase().includes('sen gerçek insanmısın')) msg.reply('yok ben botum ya yapımcımda bu şahıs ! Flex〝Ɲ.Â.Я.𝔘.₮.Ø.dll💖Sudem#5320');
  if (msg.content.toLowerCase().includes('adres versene')) msg.reply('bak şimdi kardeşim ananın amına giriyosun sağ yapıyosun ordan dimdik ilerliyosun al sana adresim :joy:');
  if (msg.content.toLowerCase().includes('bana küfür etsene')) msg.reply('Knk bak şimdi 2 kelime söylicem s ve g kısacası siktir git belanı benden bulma oruçlu oruçlu ne küfürü aq');
  if (msg.content.toLowerCase().includes('kızmısın erkekmi')) msg.reply('Sence kıza benzer bi halimmi var aq erkeğim tabiki :smile:');
  if (msg.content.toLowerCase().includes('sevgilin varmı')) msg.reply('sevdiğim var ama o beni sevmiyo :sob: :broken_heart:.....');
  if (msg.content.toLowerCase().includes('benimle çıkarmısın')) msg.reply('Olur nerden çıkıcaz merdivendenmi asansördenmi yoksa sevgili anlamında çıkmakmı :smile:')
   if (msg.content.toLowerCase().includes('arka odaya geçelimmi ?')) msg.reply('olur gel geçelim :yum:');
   if (msg.content.toLowerCase().includes('?pgif')) msg.reply('sapıkmısın orospu cocugu ramazan ramazan ağzımı açtırtma siktir git orucunu tut iftardan sonra bak bu giflere :smile:');
});