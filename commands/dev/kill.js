module.exports = {
    name: "kill",
    aliases: ["stop"],
    description: "Kills/Stops the bot",
    type: "dev",
    allowDM: true,
    execute(client, message){
        message.channel.send({
            embed: {
                title: "Stopping the bot.",
                timestamp: new Date(),
                color: client.config.settings.color
            }
        }).then(() => {
             client.destroy(42)
             process.exit(42)
        })
        

    }
}