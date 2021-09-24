const glob = require('glob');

var today = new Date();
var time = "[" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "]";

function commandLoader(bot, dirName, folderName) {
    const files = glob.sync(`${dirName}/${folderName}/**/*.js`)
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`${file}`);
        bot.fqdn.set(props.help.name, `${__dirname}/${file}`)
        bot.commands.set(props.help.name, props);
        if (props.help.aliases) {
            for (const alias of props.help.aliases) {
                bot.aliases.set(alias, props.help.name);
            }
        }
    });
    console.log ('\x1b[36m' + time + ' [COMMAND] > LOADED '+ files.length + ' COMMANDS');
  }

  module.exports = {
      commandLoader
  }