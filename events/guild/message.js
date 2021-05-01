module.exports = (Discord, client, message) => {
    const prefix = client.config.prefix
    if(!message.content.startsWith(prefix) || message.author.id === client.user.id) return 

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(command){
        if(command.type === "dev" && message.author.id !== client.config.owner.id) return
        if(command.allowDM === false && message.guild === null) return

        command.execute(client, message, args, Discord)
    } 
}