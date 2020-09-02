const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "breq")) {
		if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("Beatmap Request Channel")
			.setColor(hex)
			.addField("Information", "This is channel for request your beatmap to be ranked and send directly to our `Beatmap Nominator`!\nWe can make your loved status to be ranked in here!\nMake sure you already read our `Ranking Criteria` before requesting!\nPlease use format below, dont spam and do not request map who already ranked! or we will kick you!")
			.addField("Format", "```\nMap Name :\nMap Link :\nStatus Now:(unranked/loved)\nMode : (std,mania,taiko,ctb)```")
			message.channel.send(embed)
		}
	})
}
