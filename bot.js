const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.channel.send(`**:information_source: | Help Menu in DM , رسالة المساعدة في الخاص .**`);


  }
});


client.login(process.env.BOT_TOKEN);
