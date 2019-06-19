const Discord = require('discord.js');
const client = new Discord.Client();
const devs = ["535979538551930891"];
const adminprefix = ["res"];

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});


client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith('!setgame')) {
  client.user.setGame(argresult);
} else 
  if (message.content.startsWith('!setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith('!setavatar')) {
client.user.setAvatar(argresult);
      } else
  if (message.content.startsWith('!wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith('!ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else
if (message.content.startsWith('!sett')) {
  client.user.setGame(argresult, "https://www.twitch.tv/xkilleryt%22);
}
});





client.login(process.env.BOT_TOKEN);
