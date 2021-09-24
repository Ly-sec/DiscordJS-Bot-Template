require("dotenv").config();

const { Client, Collection } = require("discord.js");

const { eventLoader } = require("./handler/events");
const { commandLoader } = require("./handler/commands");

const bot = new Client({
  intents: [
    "GUILDS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES",
    "GUILD_WEBHOOKS",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
  ],
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.description = new Collection();
bot.fqdn = new Collection();

eventLoader(bot, __dirname, "events");
commandLoader(bot, __dirname, "commands");

bot.login(process.env.token);
