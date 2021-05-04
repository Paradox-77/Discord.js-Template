const fs = require('fs');

module.exports = (client, Discord) => {
    client.log.notice("Loading event handler.")
    const load_dir = (dirs) => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'))

        for(const file of eventFiles) {
            const event = require(`../events/${dirs}/${file}`)
            if(event.name){
                eventNameUpperCase = event.name.charAt(0).toUpperCase() + event.name.slice(1)
                client.log.discord(`Loading ${eventNameUpperCase} event.`)
            }

            if(event.once){
                client.once(event.name, (...args) => event.execute(...args, client, Discord));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client, Discord));
            }
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e))
}