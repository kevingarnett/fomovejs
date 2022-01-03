const fs = require('fs');
const prompts = require('prompts');

exports.displayOrSave = async function(data, fileName) {

    // Ask if should save
    const saveToFile = await prompts({
        type: 'confirm',
        name: 'value',
        initial: true,
        message: 'Save output to file?'
    });

    if (saveToFile.value) {
        let jsonData = JSON.stringify(data);

        await fs.writeFileSync(fileName, jsonData);

        console.log(`output written to ${fileName}`);
    } else {
        console.log(data);
    }

}