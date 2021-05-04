const fs = require('fs');

module.exports = (client, Discord) => {
    client.log.notice("Loading command handler.")
    const categories = fs.readdirSync('./commands/');

    for (const category of categories) {
        const commandFiles = fs.readdirSync(`./commands/${category}`).filter(File => File.endsWith('.js'));

        for (const file of commandFiles) {
          const command = require(`../commands/${category}/${file}`);
          if(command.name){
            client.commands.set(command.name, command);
            commandNameUpperCase = command.name.charAt(0).toUpperCase() + command.name.slice(1)
            client.log.discord(`Loading ${commandNameUpperCase} command.`)
        } else {
            continue;
        }
                }
            }
}