import { CommandInteraction, MessageEmbed} from "discord.js";

export async function handleQuote(interaction: CommandInteraction) {
    const quoteRes = await fetch("http://api.quotable.io/random");
    const quoteData = await quoteRes.json();

    const imageRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=500&titles=${quoteData.author}`);
    const imageData = await imageRes.json();

    const embed = new MessageEmbed()
        .setDescription(`*${quoteData.content}*`)
        .setAuthor({
            name: quoteData.author,
            url: `https://en.wikipedia.org/wiki/${quoteData.author}`.replace(" ", "_"),
            iconURL: imageData.query.pages[Object.keys(imageData.query.pages)[0]].thumbnail.source.replace(" ", "_")
        })
        .setColor("#0099ff")
    
    interaction.reply({ embeds: [embed] });

}