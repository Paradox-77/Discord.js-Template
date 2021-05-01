const clean = require('../../utils/clean.js')

module.exports = (Discord, client, message) => {
    const prefix = client.config.settings.prefix
    if(!message.content.startsWith(prefix) || message.author.id === client.user.id) return 

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command){
        if(command.type === "dev" && message.author.id !== client.config.owner.id) return
        if(command.allowDM === false && message.guild === null) return
        
        try{
            command.execute(client, message, args, Discord)
            client.db.add(command.name, 1)
        } catch(err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    } 
}