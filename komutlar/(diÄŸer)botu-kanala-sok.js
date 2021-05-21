exports.run = async (client, message, args) => {
if (!message.member.voice.channel) return;
await message.member.voice.channel.join()
};
exports.conf = {
aliases: []
};
exports.help = {
name: "kanalagir"
};