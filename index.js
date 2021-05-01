require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.config = config

var handlers = ["command_handler", "event_handler"];
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.bottoken);