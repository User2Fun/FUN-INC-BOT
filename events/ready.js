module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.warn("-----------------------------")
        console.log(`${client.user.username} ON`);
        console.warn("-----------------------------")
        console.info(`LEGGED-IN-AS : ${client.user.tag}`);
        console.warn("-----------------------------")
        console.info(`Bot ID : ${client.user.id}`);
        console.warn("-----------------------------")
        console.info(`Created At : ${client.user.createdAt}`);
        console.warn("-----------------------------")
    },
};