module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Sends the latency of the bot.",
    type: "public",
    allowDM: false,
    execute(client, message) {
        message.channel.send({
            embed: {
                title: "Ping Pong",
                timestamp: new Date(),
                fields: [
                    { name: 'Bot Latency', value: `${Date.now() - message.createdTimestamp}ms`},
                    { name: 'API Latency', value: `${Math.round(client.ws.ping)}ms`}
                ],
                color: client.config.settings.color
            }
        })
    }
}