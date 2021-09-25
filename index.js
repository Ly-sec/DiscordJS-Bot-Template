require("dotenv").config();

const { Client, Collection } = require("discord.js");

const { eventLoader } = require("./handler/events");
const { commandLoader } = require("./handler/commands");

const bot = new Client({
  intents: [32767]
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.description = new Collection();
bot.fqdn = new Collection();

eventLoader(bot, __dirname, "events");
commandLoader(bot, __dirname, "commands");

bot.login(process.env.token);
