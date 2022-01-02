const prompts = require('prompts');
const player_lookup = require('./lib/player_lookup');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Last Name?',
    validate: value => value.length < 1 ? `Field can not be blank` : true
  });

  players = await player_lookup.findByName(response['value'])

  // Remove players with incomplete names
  players = players.filter(player => player["first_name"] != null);

  const selectPlayer = await prompts({
    type: 'select',
    name: 'value',
    message: `Which ${response['value']}?`,
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
})();