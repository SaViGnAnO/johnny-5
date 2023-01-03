const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('Github commands to register a repository, link Discord/Github users, etc.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('repo')
				.setDescription('Register a GitHub repository you would like Johnny to keep track of in this server.')
				.addSubcommand(subcommandtoo =>
					subcommandtoo
						.setName('register')
						.setDescription('Register a GitHub repository you would like Johnny to keep track of in this server.')
						.addStringOption(option => option.setName('repourl').setDescription('Github repository url')))
				.addSubcommand(subcommandtoo =>
					subcommandtoo
						.setName('remove')
						.setDescription('Remove a GitHub repository previously registered in this server.')
						.addStringOption(option => option.setName('repourl').setDescription('Github repository url')))
				.addSubcommand(subcommandtoo =>
					subcommandtoo
						.setName('list')
						.setDescription('List GitHub repositories currently registered in this server.')
						.addStringOption(option => option.setName().setDescription('String by which to filter the repo list'))))
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('GitHub commands concerning the user, i.e. linking.')
				.addStringOption(option => option.setName('githubuser').setDescription('GitHub username'))
				.addUserOption(option => option.setName('discorduser').setDescription('Destination Discord @username mention'))),

	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
	},
};

// .setName('repo')
// .setDescription('Repository based commands')
// .addStringOption(option =>
// 	option.setName('command')
// 		.setDescription('The repository command to run')
// 		.setRequired(true)
// 		.addChoice('Register', 'register')
// 		.addChoice('Remove', 'remove')),