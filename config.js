//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348120110442";
global.owner = process.env.OWNER_NUMBER || "2348120110442";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5WWnMvNWova3FRWmNhOG9iUitPR3BuZDA2eTd4a21ZYnM0dlFOakkwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkZSK2JVYlRiNFhETGR1WTV2V0VqdnhaMmd1K0pkdTFaNk8wREUzU1lFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUElGK3JWU0lGQ01zYkpoaC9wanJsZVdVVCt2OUhVbmlwK0h3ZGZSbDEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyQzVjMkpCSzVQQjBmMWcrRUt1MFE3ZXVSK1VXSTNZQXZuMkJYdFhDWVRNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLL0ZNTjhlNUlqdCtVdHpNM2tlVWYrNTdhYUVsUUZ0eWVFajJyUERzbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCTDVDeWs3VVRKZUlZZUcwdGJ6dmFTTXNBY05LSVlsZ2pxZFl5T3hQRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZjYWFDK3pFNXpwMTJ3cGtEYlQyUGhKbjJpeWswNlBVcTRkbFFGUWVrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTc3SU5XQzVqL3dDSUptblpKb2VQRG9CZE9NWHo2a04vb3FWaXhSaE94UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRCY3B2YTJnclB6NVpjemdJK2pFMEx5b3lqUmwwdFpLYUtwNFRUNUErbTVQVE4yQnRoQ0duRVg3eDYrYzFrOG5RZ0FTV3RzNlVrU2thWnFlTXFSbGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJadW1aTjMwelFoR1BvOGZMUHZMQm1Obks4SlhuY28xNElGNCtERGIwSmlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5ZnpwS0RzTFRjaXBlYVpqT2FyRUdnIiwicGhvbmVJZCI6ImE5NTU1ZWE0LWY0ZTEtNDk3Mi1hM2Y0LWNiMjViZWZmY2VlNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSOTJQb3I5NE9Dd0R1VHRSVExqbXF1UnJUWlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTENxZHlQdTlKTEdQRmgvK2FtK2pXdGtjUHZZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik41TUY1N0FBIiwibWUiOnsiaWQiOiIyMzQ4MTIwMTEwNDQyOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdVSURBTkNFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPQ3hqWnNGRUtyMDZib0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEMzFCb1Y3VHJSdkVQMXJxaE40MXhkL2Y3cjZ6Q3JhQWtoNm5JZFJOb244PSIsImFjY291bnRTaWduYXR1cmUiOiJzOUptV0I5S25PZ2FrWHZUZzVnMFh6anFGaGRLUFNtUTFycS9uQzNjVkFsWklFSXlJZ0RlZThoVURDNTV2YTRQdjQ1SzNLbWs5NDYzRzhpeDk1ZjZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXdRaFU0RjNpR1FVdWY5R2I3Q0hXZVR3QmpvL0VhQy83Q2ZTK2N0OE9LNDg0ZktaUlJsYjdkaTRFYU1JMDVHZ0c3QURnTW1ObDlVeVVMWUhxM3UraUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIwMTEwNDQyOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE5OVFhRmUwNjBieEQ5YTZvVGVOY1hmMys2K3N3cTJnSkllcHlIVVRhSi8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM5ODI3NzV9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
