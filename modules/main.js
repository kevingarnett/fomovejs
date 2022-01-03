const prompts = require('prompts');

const MODULES = [
    {
        title: "Player Search",
        value: "../modules/player_lookup"
    }
];

exports.run = async function() {

    // Display function list
    const mainMenuSelection = await prompts({
        type: 'select',
        name: 'value',
        message: 'What shall we do?',
        choices: MODULES,
        initial: 0
    });

    // load selected module
    const module = require(mainMenuSelection.value);
    module.run();
}