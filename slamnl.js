const Discord = require("discord.js"), client = new Discord.Client();
const request = require("request-promise")
const creds = require("./creds.json")

client.login(creds.token);

client.setGame("EDM/House/Tropical");

client.on("ready", () => {
	client.channels.get(creds.channelid).join().then(connection => {
		let stream = request({uri:'http://listen.181fm.com/181-vibe_128k.mp3', headers:{'User-Agent':`SLAM!`}});
		connection.playStream(stream, {passes: 2})
	})
})
