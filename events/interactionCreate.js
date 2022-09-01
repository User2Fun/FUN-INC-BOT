module.exports = {
    name: 'interactionCreate',
    exeute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggerd an interaction`);
    },
};