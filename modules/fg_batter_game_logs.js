const prompts = require('prompts');
const fangraphs = require('../lib/fangraphs');
const player_lookup = require('../lib/player_lookup')

exports.run = async function() {
    // Ask for player name
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Last Name?',
        validate: value => value.length < 1 ? `Field can not be blank` : true
    });

    players = await player_lookup.findByName(response['value'])

    // Filter all players that do not have a fangraphs id
    players = players.filter(player => player.fangraphs_id != null);

    // Remove players with incomplete names
    players = players.filter(player => player["first_name"] != null);

    // Display player options
    const selectedPlayer = await prompts({
        type: 'select',
        name: 'value',
        message: `Which ${response['value']}?`,
        hint: 'Displaying only players with a fangraphs ID',
        choices: players.map((player) => {

            if (player['first_name'] != null) {
                return {
                    title: `${player['first_name']} ${player['last_name']} ${(player['name_suffix'] == null) ? '' : player['name_suffix']} (born: ${(player['birth_year'] == null) ? '?' : player['birth_year']}, MLB Debut: ${(player['mlb_played_first'] == null) ? '?' : player['mlb_played_first']})`,
                    value: player
                }  
            }

        }),
        initial: 0
    });

    // Ask for target season
    const targetedSeason = await prompts({
        type: 'number',
        name: 'value',
        message: 'Targeted Season?',
        hint: "Looking for a four digit year (eg. 2021)"
    });

    // Fetch Batter Game Logs from Fangraphs
    data = await fangraphs.batterGameLogs(selectedPlayer.value.fangraphs_id, targetedSeason.value);

    // Display
    console.log(data);
}