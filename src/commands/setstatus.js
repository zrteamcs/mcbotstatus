const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')
const { statusMessageEdit } = require('../index')
const config = require('../../config')
const chalk = require('chalk')
const fs = require('fs')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setstatus')
    .setDescription('Mengatur pesan status server Minecraft di saluran saat ini.')
    .setDefaultMemberPermissions(
      PermissionFlagsBits.ManageChannels,
      PermissionFlagsBits.ManageThreads,
      PermissionFlagsBits.ModerateMembers
    ),

  run: async ({ interaction, client }) => {
    await interaction.deferReply({ ephemeral: true })
    try {
      if (!config.autoChangeStatus.enabled) {
        interaction.editReply({
          content: '**Please enable `auto Change Status` in the config to enable status message feature.**',
          ephemeral: true,
        })
        return
      }
      const channel = client.channels.cache.get(interaction.channelId)
      const msg = await channel.send(':gear: Checking the status ...')
      interaction.editReply({
        content: `:arrows_clockwise: Checking status and necessary info.`,
        ephemeral: true,
      })
      const readData = fs.readFileSync('./src/data.json', 'utf8')
      data = await JSON.parse(readData)
      data.channelId = interaction.channelId
      data.messageId = msg.id
      fs.writeFileSync('./src/data.json', JSON.stringify(data, null, 2), 'utf8')
      const dataRead = fs.readFileSync('./src/data.json', 'utf8')
      let dataID = JSON.parse(dataRead)
      await statusMessageEdit()
      interaction.editReply({
        content: `:white_check_mark: **Status message is set successfully in <#${dataID.channelId}>. Message:** https://discord.com/channels/${msg.guildId}/${dataID.channelId}/${dataID.messageId}`,
        ephemeral: true,
      })
      console.log(`Successfully set the status message in ${chalk.cyan(`#${msg.channel.name}`)}`)
      setInterval(() => {
        statusMessageEdit()
      }, config.autoChangeStatus.updateInterval * 1000)
    } catch (error) {
      interaction.editReply({
        content: `:warning: Could not set status message because of an error: ${error.message}`,
        ephemeral: true,
      })
      const { getError } = require('../index')
      if (settings.logging.error) {
        console.log(getError(error, 'Setting status message'))
      }
    }
  },
  }
