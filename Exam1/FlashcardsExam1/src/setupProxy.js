// THIS FILE IS USED FOR LOCAL DEVELOPMENT ONLY

const fs = require('fs');
const path = require('path');

module.exports = function(app) {

    const CUR_PATH = "/Users/surplus/Desktop/Bio264Textbook-master/skull_questions_restructured.json"

    const REACT_PATH = "/data/skull_questions_restructured.json"

    app.get(REACT_PATH, (req, res) => {
        console.log("Fetching data");
        if (!fs.existsSync(CUR_PATH)) {
            console.log("File not found");
            console.log("Tried ${CUR_PATH}");
            return res.status(404).send("File not found");
        }
        fs.readFile(CUR_PATH, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send(err.message)
            }

            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        });

    });
}