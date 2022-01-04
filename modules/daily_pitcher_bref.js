const prompts = require('prompts');
const bbref = require('../lib/baseballreference');
const saveToFile = require('../modules/display_or_save_data');

exports.run = async function() {
    // Get Start Date
    const startDate = await prompts(
    {
        type: 'date',
        name: 'value',
        message: 'Range start date? (YYYY-MM-DD)',
        mask: 'YYYY-MM-DD',
        validate: date => date > Date.now() ? 'Date Invalid. It can not be in the future' : true
    });

    // Get End Date
    const endDate = await prompts(
    {
        type: 'date',
        name: 'value',
        message: 'Range end date? (YYYY-MM-DD)',
        mask: 'YYYY-MM-DD',
        validate: date => (date > Date.now() || date < startDate.value) ? 'Date Invalid. It is either in the future or before start date' : true
    });

    // Start/End dates acquired, perform search
    let startDateFormatted = startDate.value.toISOString().split('T')[0];
    let endDateFormatted = endDate.value.toISOString().split('T')[0];
    try {
        data = await bbref.rangePitcherLogs(startDateFormatted, endDateFormatted);

        if (data.length == 0) {
            console.log(`No data found for ${startDateFormatted} - ${endDateFormatted}`);
        }
    
        // Output
        saveToFile.displayOrSave(data, `daily_pitcher_bref-${startDateFormatted}-${endDateFormatted}.json`);
    } catch(err) {
        console.log(`No data found for ${startDateFormatted} - ${endDateFormatted}`);4
    }
};