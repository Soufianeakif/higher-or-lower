const fs = require('fs'); // Import the file system module
const jsonData = require('./data.json'); // Load the original JSON data

// Function to add a unique ID to each object in the JSON
function addUniqueId(jsonData) {
    let index = 0;
    for (let key in jsonData) {
        if (jsonData.hasOwnProperty(key)) { // Ensure the key is part of the object itself
            jsonData[key].id = index++;
        }
    }
    return jsonData;
}

// Add unique IDs to the JSON data
const resultObject = addUniqueId(jsonData);

// Write the updated data to addedid.json
fs.writeFileSync('./addedid.json', JSON.stringify(resultObject, null, 2), 'utf-8'); // Pretty-print the JSON

console.log('Modified data has been saved to addedid.json.');
