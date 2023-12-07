const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send([
        {
            name: "Iron Man",
            alias: "Tony Stark",
            powers: ["Powered Armor Suit", "Genius-Level Intellect"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Captain America",
            alias: "Steve Rogers",
            powers: ["Peak Human Strength", "Master Tactician"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Thor",
            alias: "Thor Odinson",
            powers: ["Superhuman Strength", "Control of Lightning"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Black Widow",
            alias: "Natasha Romanoff",
            powers: ["Expert Martial Artist", "Espionage Expertise"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Hulk",
            alias: "Bruce Banner",
            powers: ["Superhuman Strength", "Invulnerability"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Spider-Man",
            alias: "Peter Parker",
            powers: ["Wall-Crawling", "Spider-Sense"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Wolverine",
            alias: "Logan",
            powers: ["Regeneration", "Adamantium Claws"],
            team: "X-Men",
            universe: "Marvel"
        },
        {
            name: "Doctor Strange",
            alias: "Stephen Strange",
            powers: ["Mystic Arts", "Sorcery"],
            team: "Avengers",
            universe: "Marvel"
        },
        {
            name: "Black Panther",
            alias: "T'Challa",
            powers: ["Enhanced Senses", "Vibranium Suit"],
            team: "Avengers",
            universe: "Marvel"
        }]);
}
);


app.listen(port, () => {

})