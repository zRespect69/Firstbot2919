client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.channel.send(`**:information_source: | Help Menu in DM , رسالة المساعدة في الخاص .**`);


  }
});
