const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');
const config = require("../config.json")

module.exports = function (client) {
    client.on('message', async message => {
        if (message.content.toLowerCase().startsWith(config.bot.prefix + "restrict")) {
        if (!message.member.roles.cache.some(role => (role.name == "Community Manager" || role.name === "Moderator"))) { return message.channel.send("This is reserved for ilyt, sorry!") }
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "restrict ");
            msg = msg[1];
            if (msg === "") { return message.channel.send("Error.") }
            var user = await fetch(`${config.bot.domain}/api/v1/fokabotMessage?k=${config.bot.banchokey}&to=%23admin&msg=!restrict+${msg}`).then(response => response.json());
            message.channel.send("Your commando has been succesfully execute!")
        }
    });
}