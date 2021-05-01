const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Thanks for waking up ValorantAutoOwner!')
})

function keepAlive(){
    server.listen(3000, () => console.log("keepAlive server has restarted"));
}

module.exports = keepAlive;