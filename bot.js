


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
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



client.on('message', msg => {
  if (msg.content === ("!settings")) {
      const embed = new Discord.RichEmbed()
          .setAuthor('❯ Settings:', 'https://labs-public-dl.xda-cdn.com/images/af6aef8c-4d0a-41f4-8afb-5b8572aa3697.png')
          .addField(`❯ Values: `, `» \`limitsban\`, \`limitskick\`, \`limitsroleD\`, \`limitsroleC\`, \`limitschannelD\`, \`limitstime\`, \`setMedia\`, \`infoMedia\`, \`toggleMedia\`, \`setwel\`, \`setrole\`, \`AntiFake\`, \`SetFake\`, \`SetSug\`, \`AntiBots\``)
          .addField(`❯ Commands: `, `» $settings [limitsban/limitschannelD/...] [vlaue]\n» $settings [AntiFake/AntiFake/...] [On/Off]`)
      msg.channel.send(embed)

  };
});

client.on('message', message => {
  if (message.author.bot) return;
  let wewa = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "WEWA");
  let RainBow = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "RainBowS");
  let Band = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "BanS");
  let gl = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "GlowPartner");
  let ss = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "NONOFUCKYOU");
  let xx = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "NOO");
  let zg = client.guilds.get("525365808352985088").emojis.find(r => r.name === "Money");
  let qq = client.guilds.get("537028830943248385").emojis.find(r => r.name === "524948763890941952");
  let t = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "true");
  let f = hero.guilds.get("522904523455594496").emojis.find(r => r.name === "false");
  if (message.content.startsWith("!help")) {
      message.author.send(`**
❯ Informetion Commands | الأوامر التعريفية :
» \`$stats\` : معلومات عن البوت
» \`$settings\` : رؤية ما يمكن إعدادة في البوت
» \`$ping\` : رؤية سرعة البوت
» \`$invite\` : لدعوة البوت**
`)


  }
});

client.on('message', message => {
  if (message.author.bot) return;
  let Band = hero.guilds.get("525365808352985088").emojis.find(r => r
