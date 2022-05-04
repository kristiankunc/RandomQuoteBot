import { Client } from "discord.js";
import { TOKEN } from "./conf/token";
import { handleCommand } from "./commands/_handle";

export const client = new Client({
    intents: ["GUILDS"]
});

client.once("ready", () => {
    console.log("Ready!");
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) {
        return;
    }

    handleCommand(interaction);
});


client.login(TOKEN);