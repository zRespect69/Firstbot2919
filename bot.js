


const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const hero = client;
const Data = {};
const fs = require("fs");
const ms = require("ms");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.login(process.env.BOT_TOKEN);


const devs = ["535979538551930891"];
const adminprefix = ["!"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('arply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('arwt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('arls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('arst')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('arsetname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('arsetavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});








client.on('ready', async() => {
    console.log('hello')
    const server = "590851546875559946"; // ايدي السررفر
const channel = "590864664347279361";//ايدي الروم
    setInterval(()=>{
    Spam1.guilds.get(server).channels.get(channel).send(`**تفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجير
    تفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجير
  dsdssssds
    تفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجير  
    تفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجيرتفجير
  dsdsds............  **`)//spamming message.
},200);//Delay Time
})
 
