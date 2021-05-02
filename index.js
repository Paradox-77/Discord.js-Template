require('module-alias/register')
require('dotenv').config()
const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
const config = require('./config.json')
const logger = require('@paradoxic/logger')

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