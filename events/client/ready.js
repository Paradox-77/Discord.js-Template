const logger = require('@paradoxic/logger');

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        logger.success("Bot has started.")
    }
}