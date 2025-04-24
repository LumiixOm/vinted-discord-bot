import { SlashCommandBuilder } from 'discord.js';
import { createBaseEmbed, sendErrorEmbed, sendWaitingEmbed } from '../components/base_embeds.js';
import crud from '../../crud.js';

export const data = new SlashCommandBuilder()
    .setName('unlink_public_channel')
    .setDescription('Unlink a public monitoring channel.');

export async function execute(interaction) {
    try {
        await sendWaitingEmbed(interaction, 'Deleting public channel...');

        if (await crud.isUserAdmin(interaction) === false) {
            await sendErrorEmbed(interaction, 'You do not have permission to delete a public channel.');
            return;
        }

        const channelId = interaction.channel.id;

        // Find the VintedChannel by channelId
        const vinted-updatedChannel = await crud.getVintedChannelById(channelId);
        if (!vinted-updatedChannel || vinted-updatedChannel.type !== 'public') {
            await sendErrorEmbed(interaction, 'Public channel not found.');
            return;
        }
        
        // Delete the VintedChannel from the database
        await crud.deleteVintedChannel(vinted-updatedChannel._id);

        const embed = await createBaseEmbed(
            interaction,
            'Public Channel Deleted',
            `Public channel with ID ${channelId} has been deleted successfully.`,
            0xFF0000
        );

        await interaction.editReply({ embeds: [embed] });
    } catch (error) {
        console.error('Error deleting public channel:', error);
        await sendErrorEmbed(interaction, 'There was an error deleting the public channel.');
    }
}
