const Discord = require("discord.js"), client = new Discord.Client();
const request = require("request-promise")
const creds = require("./creds.json")

client.login(creds.token);

client.on("ready", () => {
	client.user.setGame("EDM/Tropical/House",'https://www.twitch.tv/nocopyrightsounds');
	client.channels.get(creds.channelid).join().then(connection => {
		let stream = request({uri:'http://listen.181fm.com/181-vibe_128k.mp3', headers:{'User-Agent':`SLAM!`}});
		connection.playStream(stream, {passes: 2})
	})
})

client.on('message', message => {
  // if the message is "ping",
  if (message.content === 'anotha one') {
    // send "pong" to the same channel.
    message.channel.sendMessage('and anotha one');
  }
});
