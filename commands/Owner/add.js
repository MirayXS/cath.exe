const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
  name: "add",
  category: "Owner",
  usage: "(Number)",
  description: "Add coins from someone",
  Owner: true,
  /**
   * @param {Client}client
   * @param {Message}message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!args[0] || isNaN(args[0]))
      return message.channel.send("Number of coins?");
    const user = message.mentions.members.first() || message.author;
    client.data.add(user.id, parseInt(args[0]));
    message.react("<a:a_yes:808683134786863124>");
  },
};
