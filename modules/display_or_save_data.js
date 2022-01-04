const fs = require('fs');
const prompts = require('prompts');

exports.displayOrSave = async function(data, fileName) {

    // Ask if should save
    const saveToFile = await prompts({
        type: 'confirm',
        name: 'value',
        initial: true,
        message: 'Save output to file? (Some result sets are very large and do not display well on screen)'
    });

    if (saveToFile.value) {
        let jsonData = JSON.stringify(data);

        await fs.writeFileSync(fileName, jsonData);

        console.log(`output written to ${fileName}`);
    } else {
        console.table(data);
    }

}