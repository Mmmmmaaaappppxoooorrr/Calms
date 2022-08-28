const config = require("../config.json")
const { Database } = require("quickmongo");
const db = new Database(config.database);
   
   module.exports = async (client) => {
   client.user.setPresence({ activity: { name: `>help | Verifay Soon ^^`, type: "WATCHING" }, status: "online" });
      
   }
