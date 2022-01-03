const prompts = require('prompts');
const player_lookup = require('../lib/player_lookup');

exports.run = async function() {
    // Ask for player name
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Last Name?',
        validate: value => value.length < 1 ? `Field can not be blank` : true
    });

    // Search for player
    players = await player_lookup.findByName(response['value'])

    // Remove players with incomplete names
    players = players.filter(player => player["first_name"] != null);

    console.table(players);
}