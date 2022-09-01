const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Guild, GuildMember } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const { token } = require("./config.json");

client.login(token);

//Event Handler////////////////////////////////////////////////////////////////
const eventPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventPath, file);
    const event = require(filePath);
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
/////////////////////////////////////////////////////////////////////////
