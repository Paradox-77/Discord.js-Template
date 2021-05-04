require('module-alias/register')
require('dotenv').config()
const Discord = require('discord.js');
const db = require('quick.db')
const config = require('./config.json')
const logger = require('@paradoxic/logger')
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.config = config
client.db = db
client.log = logger

logger.notice("Bot is starting.")

var handlers = ["command_handler", "event_handler"];
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.bottoken);