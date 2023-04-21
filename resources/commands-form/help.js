const { SlashCommandBuilder } = require('discord.js');

const slashHelp = new SlashCommandBuilder()
        .setName('help')
        .setDescription('request help!')
        .addStringOption(option => 
            option.setName('language')
                .setDescription('The language of the season')
                .setRequired(true)
                .addChoices(
                    { name: 'Javascript', value: 'Javascript' },
                    { name: 'Python', value: 'Python' },
                    { name: 'C', value: 'C' },
                    { name: 'Java', value: 'Java' },
                    { name: 'Golang', value: 'Golang' },
                    { name: 'CPP', value: 'CPP' },
                    { name: 'Rust', value: 'Rust' },
                    { name: 'Other', value: 'Other' }
                )
        )
        .addStringOption(option => 
            option.setName('project')
                .setDescription('Project\'s name')
                .setRequired(true)
        )
        .addAttachmentOption(option => 
            option.setName('image')
                .setDescription("A picture of your code (optional)")
        )

module.exports = slashHelp