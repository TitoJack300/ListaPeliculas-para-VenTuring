const parse = require('csv-parse');
const fs = require ("fs");
const  csvData = [];
//const csv = require (csvtojson);

fs.createReadStream(__dirname + './pelis.csv')
    .pipe(
        parse({
            delimiter: ','
        })
    )
    .on('data', function (dataRow) {
        csvData.push(dataRow);
    })
    .on('end',function () {
        console.log(csvData);
    })