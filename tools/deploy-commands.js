const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config.js');
const fs = require('fs');

const rest = new REST({ version: '9' }).setToken(config.discordToken);
const commands = [];
const commandFiles = fs.readdirSync('../src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../src/commands/${file}`);
	commands.push(command.data.toJSON());
}

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(config.clientId, config.guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	}
	catch (error) {
		console.error(error);
	}
})();