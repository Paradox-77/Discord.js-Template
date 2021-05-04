const chalk = require('chalk')
const time = require('./getTime')

function success(log){
    if(log) {
        console.log(`${time()} | ` + chalk.green("[Success]") + ` | ${log}`)
    }
}

function warn(log){
    if(log) {
        console.log(`${time()} | ` + chalk.yellow("[Warning]") + ` | ${log}`)
    }
}

function error(log){
    if(log) {
        console.log(`${time()} |  ` + chalk.red("[Error]") + `  | ${log}`)
    }
}

function notice(log){
    if(log) {
        console.log(`${time()} |  ` + chalk.blue("[Notif]") + `  | ${log}`)
    }
}

function discord(log){
    if(log) {
        console.log(`${time()} | ` + chalk.rgb(114, 137, 218)("[Discord]") + ` | ${log}`)
        //console.log(chalk.rgb(114, 137, 218)(log))
    }
}

module.exports.success = success;
module.exports.warn = warn;
module.exports.error = error;
module.exports.notice = notice;
module.exports.discord = discord;