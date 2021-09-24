module.exports = async (bot, message, member) => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    let prefix = "!";

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (!message.content.startsWith(prefix)) return;
    try {
        let command;
        if (bot.commands.has(cmd.slice(prefix.length))) {
            command = bot.commands.get(cmd.slice(prefix.length));
        } else if (bot.aliases.has(cmd.slice(prefix.length))) {
            command = bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        }
        if (!command) return;
        command.run(bot, message, args);
        
    } catch (err) {
        console.error(err);
    }
}
