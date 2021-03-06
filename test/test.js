let testStrings = [
    'This is the life',
];

const testSearchOptions = {
    duration: 'short',
    sortBy: 'DontSoryByDueMisstypedError',
}

const Discord = require("discord.js");
const client = new Discord.Client();

const Util = require('../src/Util');
const { Player, version } = require('../index');
let player = new Player(client);
const ytsr = require('../src/node-ytsr-wip/main');

console.log(version);

for (const str in testStrings) {

    console.log(`Running Song: ${testStrings[str]}`);

    Util.getVideoBySearch(testStrings[str], ytsr, testSearchOptions).then(result => {
        console.log(`Found Song: ${result.title} | ${result.link}`);
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(0);
    });

}