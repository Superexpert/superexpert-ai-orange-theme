const fs = require('fs');
const path = './preview.jpg';

fs.readFile(path, { encoding: 'base64' }, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const dataURI = `data:image/jpeg;base64,${data}`;
    console.log(dataURI);
});