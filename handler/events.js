const glob = require('glob');
const chalk = require('chalk');
var today = new Date();
var time = "[" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "]";

function eventLoader(bot, dirName, folderName) {
    const files = glob.sync(`${dirName}/${folderName}/**/*.js`)
      files.forEach(file => {
          if (!file.endsWith('.js')) return;
          const evt = require(file);
          let evtName = file.substring(file.lastIndexOf("/") +1).split('.')[0];
          bot.on(evtName, evt.bind(null, bot));
      });
      console.log(chalk.blue('-----------------------------------------'))
      console.log(chalk.blue(time + ' [EVENT]   > LOADED '+ files.length + ' EVENTS'));
  };

  module.exports = {
      eventLoader
  }