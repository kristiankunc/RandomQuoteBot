import { CommandInteraction } from "discord.js";
import { handleQuote } from "./quote";

export async function handleCommand(interaction: CommandInteraction) {
    const commandName = interaction.commandName;

    if (commandName === "quote") {
        await handleQuote(interaction);
    }
}