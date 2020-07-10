const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "wpscore")) {
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.RichEmbed()
			.setTitle("Wipe Account & Delete Score Requests")
			.setColor(hex)
			.addField("Information", "**Please Read before Requests!!**\nThis channel are only for <@&699280489164308541>! You can chose to wipe all your account or select a specific mode or specific score at some beatmap in there! You need to wait after submitting your requests and we need check the scores in database")
			.addField("Format Wipe Account", "```\nUsername :\nMode Wipe : (all mode,std,mania,taiko,ctb)\nMode : (Vanilla/Relax)\nReason : (Reason wipe your account? min 20-characters)```")
			.addField("Format Delete Score", "```\nUsername :\nMap Link : \nScore : (ex. 920.000)\nMode : (std,taiko,mania,ctb)```")
			message.channel.send(embed)
		}
	})
}