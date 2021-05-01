const util = require('util')
const clean = require("../../utils/clean.js")

module.exports = {
    name: "eval",
    aliases: ["js"],
    description: "Evaluate/Run JavaScript code using discord.",
    type: "dev",
    allowDM: true,
    execute(client, message, args) {
        try{
            const code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string") {
                evaled = util.inspect(evaled);
            }
            let result = evaled
            for(let i = 0; i < result.length; i += 1900) {
                const toSend = result.substring(i, Math.min(result.length, i + 1900));
                    message.channel.send(clean(toSend), {code:"xl"})
                }
        } catch(err){
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
}