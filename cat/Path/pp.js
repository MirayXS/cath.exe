const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
  name: "pp",
  description: "Check how long is the user",
  usage: "(User)",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let embed = new MessageEmbed()
      .addField(
        `${user.username}\'s peepee`,
        `8${"=".repeat(Math.floor(Math.random() * 20))}D`
      )
      .setColor(client.color)
      .setTitle("Peepee size machine")
      .setTimestamp()
      .setFooter(`Made by Cath Team`);
    message.inlineReply(embed);
  },
};
