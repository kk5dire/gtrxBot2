const tools = require('../tools');

module.exports = {
    name: 'kill',
    description: 'Kills the specified user in a random way',
    usage: '[text or @user]',
    async execute(message, args) {
        try {
            //use the given text as the target, or your mention if nothing was given
            let target;
            if (args.length) {target = args.join(' ')}
            else {target = message.author;};

            //select a random message from the list...
            const messages = [
                `${target} died.`,
                `${target} ate too much ass.`,
                `${target} didn't join [the meme cave](http://discord.gg/dvsxQQG).`,
                `${target} was caught awake at 3am.`,
                `${target} got rejected.`,
                `${target} nutted twice in a day, his weak body couldn't last any more.`,
                `${target} laughed at an instagram meme.`,
                `${target} got wooooshed.`,
                `${target} was a mod in r/dankmemes.`,
                `${target} ran out of ideas.`,
                `${target} stepped on a LEGO.`,
                `${target} ate a bat from Wuhan, China.`
                //add your own messages here or suggest them: https://discord.gg/bRTPbpg
            ]
            const killMsg = messages[Math.floor(Math.random() * messages.length)];

            //create an embed for the kill message
            const embed = tools.makeEmbed('', '')
            .setDescription(killMsg);
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
