
const Discord = require("discord.js");

exports.run = (client, message) => {

const izex = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Dostum Senin Şuanda** \n**Efkarın:** **%${izex}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "izex| Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
