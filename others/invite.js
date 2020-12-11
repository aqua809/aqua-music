const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle(":heart: Please Invite me: ").setDescription("https://discord.com/oauth2/authorize?client_id=771222165558263829&scope=bot&permissions=2147483647")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/avatars/771222165558263829/82293edd5dcc0375d34514a1ebae3c99.png?size=1024"));

  }
}
