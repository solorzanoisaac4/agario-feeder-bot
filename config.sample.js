// IGNORE THESE
var config = {};
config.account = {};
// END OF IGNORE

// 0 = Shows small amount of logs | 1 = Shows default logs | 2 = Shows most logs
config.verbosityLevel = 1;

// Useragent the bot will use
config.userAgent = 'agario-feeder-bot';

// the feederServer connects your node script with your browser (mouse coordinates & commands)
// you can use the public server or run your own node server/server.js
// if you are new just use the free public server ws://104.236.100.252:8081
config.feederServer = "ws://104.236.100.252:8081";

config.serverPort = 8081; // optional: setting only used if you run your own feederServer - it will run on this port
config.client_uuid = "e7f9"; // after you install the userscript press F12 and search for a debug msg on the console

// Location of your proxy files with HTTP proxies (Sock proxies not supported yet!)
config.proxies = "proxy.txt";
config.botsPerIp = 1;
config.onboardingTimer = 5000;

// Maximum number of bots to load
config.maxBots = 500;

config.useRandomSkinName = true; // Set to true to use random name
config.useStaticName = "AgarioFeederBot"; // If above is false, us this skin name

// Edit this value so bots collect mass before coming towards the player
config.minimumMassBeforeFeed = 0;
config.enableSaveMoveTo = false;

config.useFacebookAuth = false; // Set to true for Facebook authentication
config.account.token = ""; // Auth token which is only valid for 2 hours - better use cookies

// You can also generate your own token through Facebook Data. (This will get overwritten if you use account.token)
config.account.c_user = ""; // Cookie from "c_user" at http://facebook.com
config.account.datr = "";// Cookie from "datr" at http://facebook.com
config.account.xs = ""; // Cookie from "xs" at http://facebook.com

// IGNORE THIS
module.exports = config;
// END OF IGNORE
