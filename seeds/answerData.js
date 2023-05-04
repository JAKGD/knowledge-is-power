const { Answer } = require('../models');

const answerData = [
  { 
    "question_id": 1,
    "answer_choice": "Plasma Rifle",
    "is_correct": false
  },
  { 
    "question_id": 1,
    "answer_choice": "Blaster",
    "is_correct": false
  },
  { 
    "question_id": 1,
    "answer_choice": "Ion Cannon",
    "is_correct": false
  },
  { 
    "question_id": 1,
    "answer_choice": "Lightsaber",
    "is_correct": true
  },
  { 
    "question_id": 2,
    "answer_choice": "Thirteen",
    "is_correct": false
  },
  { 
    "question_id": 2,
    "answer_choice": "Fourteen",
    "is_correct": false
  },
  { 
    "question_id": 2,
    "answer_choice": "Twelve",
    "is_correct": false
  },
  { 
    "question_id": 2,
    "answer_choice": "Eleven",
    "is_correct": true
  },
  { 
    "question_id": 3,
    "answer_choice": "HAL 9000",
    "is_correct": false
  },
  { 
    "question_id": 3,
    "answer_choice": "R2-D2",
    "is_correct": false
  },
  { 
    "question_id": 3,
    "answer_choice": "Skynet",
    "is_correct": false
  },
  { 
    "question_id": 3,
    "answer_choice": "WOPR",
    "is_correct": true
  },
  { 
    "question_id": 4,
    "answer_choice": "GLaDOS",
    "is_correct": false
  },
  { 
    "question_id": 4,
    "answer_choice": "The Machine",
    "is_correct": false
  },
  { 
    "question_id": 4,
    "answer_choice": "Cortana",
    "is_correct": false
  },
  { 
    "question_id": 4,
    "answer_choice": "Samaritan",
    "is_correct": true
  },
  { 
    "question_id": 5,
    "answer_choice": "Eva",
    "is_correct": false
  },
  { 
    "question_id": 5,
    "answer_choice": "M-O",
    "is_correct": false
  },
  { 
    "question_id": 5,
    "answer_choice": "Hal",
    "is_correct": false
  },
  { 
    "question_id": 5,
    "answer_choice": "B-127",
    "is_correct": true
  },
  { 
    "question_id": 6,
    "answer_choice": "Ash",
    "is_correct": false
  },
  { 
    "question_id": 6,
    "answer_choice": "Bishop",
    "is_correct": false
  },
  { 
    "question_id": 6,
    "answer_choice": "Rachael",
    "is_correct": false
  },
  { 
    "question_id": 6,
    "answer_choice": "Roy Batty",
    "is_correct": true
  },

  {
    "question_id": 7,
    "answer_choice": "Howard",
    "is_correct": false
  },
  {
    "question_id": 7,
    "answer_choice": "Penny",
    "is_correct": false
  },
  {
    "question_id": 7,
    "answer_choice": "Raj",
    "is_correct": false
  },
  {
    "question_id": 7,
    "answer_choice": "Leonard",
    "is_correct": true
  },
  {
    "question_id": 8,
    "answer_choice": "Millennium Falcon",
    "is_correct": false
  },
  {
    "question_id": 8,
    "answer_choice": "Enterprise",
    "is_correct": false
  },
  {
    "question_id": 8,
    "answer_choice": "Galactica",
    "is_correct": false
  },
  {
    "question_id": 8,
    "answer_choice": "Serenity",
    "is_correct": true
  },
  {
    "question_id": 9,
    "answer_choice": "Squall",
    "is_correct": false
  },
  {
    "question_id": 9,
    "answer_choice": "Zidane",
    "is_correct": false
  },
  {
    "question_id": 9,
    "answer_choice": "Tidus",
    "is_correct": false
  },
  {
    "question_id": 9,
    "answer_choice": "Cloud",
    "is_correct": true
  },
  {
    "question_id": 10,
    "answer_choice": "The Oracle",
    "is_correct": false
  },
  {
    "question_id": 10,
    "answer_choice": "Agent Smith",
    "is_correct": false
  },
  {
    "question_id": 10,
    "answer_choice": "The Merovingian",
    "is_correct": false
  },
  {
    "question_id": 10,
    "answer_choice": "The Architect",
    "is_correct": true
  },
  {
    "question_id": 11,
    "answer_choice": "Peach",
    "is_correct": false
  },
  {
    "question_id": 11,
    "answer_choice": "Daisy",
    "is_correct": false
  },
  {
    "question_id": 11,
    "answer_choice": "Rosalina",
    "is_correct": false
  },
  {
    "question_id": 11,
    "answer_choice": "Toadette",
    "is_correct": true
  },
  {
    "question_id": 12,
    "answer_choice": "Phone Box",
    "is_correct": false
  },
  {
    "question_id": 12,
    "answer_choice": "DeLorean",
    "is_correct": false
  },
  {
    "question_id": 12,
    "answer_choice": "H.G. Wells",
    "is_correct": false
  },
  {
    "question_id": 12,
    "answer_choice": "TARDIS",
    "is_correct": true
  },
  {
    "question_id": 13,
    "answer_choice": "Raiden",
    "is_correct": false
  },
  {
    "question_id": 13,
    "answer_choice": "Liquid Snake",
    "is_correct": false
  },
  {
    "question_id": 13,
    "answer_choice": "Naked Snake",
    "is_correct": false
  },
  {
    "question_id": 13,
    "answer_choice": "Solid Snake",
    "is_correct": true
  },
  {
    "question_id": 14,
    "answer_choice": "Discovery",
    "is_correct": false
  },
  {
    "question_id": 14,
    "answer_choice": "Sulaco",
    "is_correct": false
  },
  {
    "question_id": 14,
    "answer_choice": "Event Horizon",
    "is_correct": false
  },
  {
    "question_id": 14,
    "answer_choice": "Nostromo",
    "is_correct": true
  },
  {
    "question_id": 15,
    "answer_choice": "Number",
    "is_correct": false
  },
  {
    "question_id": 15,
    "answer_choice": "Optimus Prime",
    "is_correct": false
  },
  {
    "question_id": 15,
    "answer_choice": "Wall-E",
    "is_correct": false
  },
  {
    "question_id": 15,
    "answer_choice": "Johnny 5",
    "is_correct": true
  },
  {
    "question_id": 16,
    "answer_choice": "Mike Ehrmantraut",
    "is_correct": false
  },
  {
    "question_id": 16,
    "answer_choice": "Saul Goodman",
    "is_correct": false
  },
  {
    "question_id": 16,
    "answer_choice": "Gus Fring",
    "is_correct": false
  },
  {
    "question_id": 16,
    "answer_choice": "Jesse Pinkman",
    "is_correct": true
  },
  {
    "question_id": 17,
    "answer_choice": "ADA",
    "is_correct": false
  },
  {
    "question_id": 17,
    "answer_choice": "GLaDOS",
    "is_correct": false
  },
  {
    "question_id": 17,
    "answer_choice": "Samantha",
    "is_correct": false
  },
  {
    "question_id": 17,
    "answer_choice": "Cortana",
    "is_correct": true
  },
  {
    "question_id": 18,
    "answer_choice": "Luke Skywalker",
    "is_correct": false
  },
  {
    "question_id": 18,
    "answer_choice": "Han Solo",
    "is_correct": false
  },
  {
    "question_id": 18,
    "answer_choice": "Boba Fett",
    "is_correct": false
  },
  {
    "question_id": 18,
    "answer_choice": "Din Djarin",
    "is_correct": true
  },
  { 
    "question_id": 19,
    "answer_choice": "Adept",
    "is_correct": false
  },
  {
    "question_id": 19,
    "answer_choice": "Vanguard",
    "is_correct": false
  },
  {
    "question_id": 19,
    "answer_choice": "Infiltrator",
    "is_correct": false
  },
  {
    "question_id": 19,
    "answer_choice": "Shepard",
    "is_correct": true
  },
  {
    "question_id": 20,
    "answer_choice": "OCP",
    "is_correct": false
  },
  {
    "question_id": 20,
    "answer_choice": "Weyland-Yutani Corporation",
    "is_correct": false
  },
  {
    "question_id": 20,
    "answer_choice": "Umbrella Corporation",
    "is_correct": false
  },
  {
    "question_id": 20,
    "answer_choice": "Tyrell Corporation",
    "is_correct": true
  },
  {
    "question_id": 21,
    "answer_choice": "Number One",
    "is_correct": false
  },
  {
    "question_id": 21,
    "answer_choice": "Number Two",
    "is_correct": false
  },
  {
    "question_id": 21,
    "answer_choice": "Number Eight",
    "is_correct": false
  },
  {
    "question_id": 21,
    "answer_choice": "Number Six",
    "is_correct": true
  },
  {
    "question_id": 22,
    "answer_choice": "Mithril",
    "is_correct": false
  },
  {
    "question_id": 22,
    "answer_choice": "Vibranium",
    "is_correct": false
  },
  {
    "question_id": 22,
    "answer_choice": "Kryptonite",
    "is_correct": false
  },
  {
    "question_id": 22,
    "answer_choice": "Adamantium",
    "is_correct": true
  },
  {
    "question_id": 23,
    "answer_choice": "Jim Halpert",
    "is_correct": false
  },
  {
    "question_id": 23,
    "answer_choice": "Dwight Schrute",
    "is_correct": false
  },
  {
    "question_id": 23,
    "answer_choice": "Ryan Howard",
    "is_correct": false
  },
  {
    "question_id": 23,
    "answer_choice": "Michael Scott",
    "is_correct": true
  },
  {
    "question_id": 24,
    "answer_choice": "Davros",
    "is_correct": false
  },
  {
    "question_id": 24,
    "answer_choice": "Sontarans",
    "is_correct": false
  },
  {
    "question_id": 24,
    "answer_choice": "Weeping Angels",
    "is_correct": false
  },
  {
    "question_id": 24,
    "answer_choice": "Cybermen",
    "is_correct": true
  },
  { 
    "question_id": 25,
    "answer_choice": "CASE",
    "is_correct": false
  },
  {
    "question_id": 25,
    "answer_choice": "TARS",
    "is_correct": false
  },
  {
    "question_id": 25,
    "answer_choice": "KIPP",
    "is_correct": false
  },
  {
    "question_id": 25,
    "answer_choice": "EVE",
    "is_correct": true
  },
  {
    "question_id": 26,
    "answer_choice": "The Inbetween",
    "is_correct": false
  },
  {
    "question_id": 26,
    "answer_choice": "The Other Side",
    "is_correct": false
  },
  {
    "question_id": 26,
    "answer_choice": "The Underneath",
    "is_correct": false
  },
  {
    "question_id": 26,
    "answer_choice": "The Upsidedown",
    "is_correct": true
  },
  {
    "question_id": 27,
    "answer_choice": "Mithril",
    "is_correct": false
  },
  {
    "question_id": 27,
    "answer_choice": "Adamantium",
    "is_correct": false
  },
  {
    "question_id": 27,
    "answer_choice": "Kryptonite",
    "is_correct": false
  },
  {
    "question_id": 27,
    "answer_choice": "Vibranium",
    "is_correct": true
  },
  {
    "question_id": 28,
    "answer_choice": "Shiva",
    "is_correct": false
  },
  {
    "question_id": 28,
    "answer_choice": "Leviathan",
    "is_correct": false
  },
  {
    "question_id": 28,
    "answer_choice": "Ifrit",
    "is_correct": false
  },
  {
    "question_id": 28,
    "answer_choice": "Bahamut",
    "is_correct": true
  },
  {
    "question_id": 29,
    "answer_choice": "Friday",
    "is_correct": false
  },
  {
    "question_id": 29,
    "answer_choice": "Ultron",
    "is_correct": false
  },
  {
    "question_id": 29,
    "answer_choice": "Vision",
    "is_correct": false
  },
  {
    "question_id": 29,
    "answer_choice": "Jarvis",
    "is_correct": true
  },
  {
    "question_id": 30,
    "answer_choice": "Alderaan",
    "is_correct": false
  },
  {
    "question_id": 30,
    "answer_choice": "Coruscant",
    "is_correct": false
  },
  {
    "question_id": 30,
    "answer_choice": "Naboo",
    "is_correct": false
  },
  {
    "question_id": 30,
    "answer_choice": "Tatooine",
    "is_correct": true
  },
  {
    "question_id": 31,
    "answer_choice": "B-127",
    "is_correct": false
  },
  {
    "question_id": 31,
    "answer_choice": "M-O",
    "is_correct": false
  },
  {
    "question_id": 31,
    "answer_choice": "HAL",
    "is_correct": false
  },
  {
    "question_id": 31,
    "answer_choice": "EVA",
    "is_correct": true
  },
  {
    "question_id": 32,
    "answer_choice": "Umbridge",
    "is_correct": false
  },
  {
    "question_id": 32,
    "answer_choice": "Grindelwald",
    "is_correct": false
  },
  {
    "question_id": 32,
    "answer_choice": "Bellatrix",
    "is_correct": false
  },
  {
    "question_id": 32,
    "answer_choice": "Voldemort",
    "is_correct": true
  },
  {
    "question_id": 33,
    "answer_choice": "Rob California",
    "is_correct": false
  },
  {
    "question_id": 33,
    "answer_choice": "Jan Levinson",
    "is_correct": false
  },
  {
    "question_id": 33,
    "answer_choice": "Charles Miner",
    "is_correct": false
  },
  {
    "question_id": 33,
    "answer_choice": "David Wallace",
    "is_correct": true
  },
  {
    "question_id": 34,
    "answer_choice": "Christopher Nolan",
    "is_correct": false
  },
  {
    "question_id": 34,
    "answer_choice": "George Lucas",
    "is_correct": false
  },
  {
    "question_id": 34,
    "answer_choice": "James Cameron",
    "is_correct": false
  },
  {
    "question_id": 34,
    "answer_choice": "Steven Spielberg",
    "is_correct": true
  },
  {
    "question_id": 35,
    "answer_choice": "Oswell E. Spencer",
    "is_correct": false
  },
  {
    "question_id": 35,
    "answer_choice": "Nemesis",
    "is_correct": false
  },
  {
    "question_id": 35,
    "answer_choice": "William Birkin",
    "is_correct": false
  },
  {
    "question_id": 35,
    "answer_choice": "Albert Wesker",
    "is_correct": true
  },
  {
    "question_id": 36,
    "answer_choice": "Ulthos",
    "is_correct": false
  },
  {
    "question_id": 36,
    "answer_choice": "Essos",
    "is_correct": false
  },
  {
    "question_id": 36,
    "answer_choice": "Sothoryos",
    "is_correct": false
  },
  {
    "question_id": 36,
    "answer_choice": "Westeros",
    "is_correct": true
  },
  {
    "question_id": 37,
    "answer_choice": "The Atom",
    "is_correct": false
  },
  {
    "question_id": 37,
    "answer_choice": "Green Lantern",
    "is_correct": false
  },
  { 
    "question_id": 37,
    answer_choice: "Superman",
    is_correct: false
  }, 
  { 
    question_id: 37,
    answer_choice: "The Flash",
    is_correct: true
  }, 
  { 
    question_id: 38,
    answer_choice: "Gallifrey",
    is_correct: false
  },
  {
    question_id: 38,
    answer_choice: "Skaro",
    is_correct: false
  },
  {
    question_id: 38,
    answer_choice: "Raxacoricofallapatorius",
    is_correct: false
  },
  {
    question_id: 38,
    answer_choice: "Earth",
    is_correct: true
  },
  {
    question_id: 39,
    answer_choice: "SAM",
    is_correct: false
  },
  {
    question_id: 39,
    answer_choice: "GLaDOS",
    is_correct: false
  },
  {
    question_id: 39,
    answer_choice: "EDI",
    is_correct: false
  },
  {
    question_id: 39,
    answer_choice: "Cortana",
    is_correct: true
  },
  {
    question_id: 40,
    answer_choice: "Soong",
    is_correct: false
  },
  {
    question_id: 40,
    answer_choice: "Lore",
    is_correct: false
  },
  {
    question_id: 40,
    answer_choice: "B-4",
    is_correct: false
  },
  {
    question_id: 40,
    answer_choice: "Data",
    is_correct: true
  },
  {
    question_id: 41,
    answer_choice: "Geralt of Rivia",
    is_correct: false
  },
  {
    question_id: 41,
    answer_choice: "Master Chief",
    is_correct: false
  },
  {
    question_id: 41,
    answer_choice: "Solid Snake",
    is_correct: false
  },
  {
    question_id: 41,
    answer_choice: "Samus Aran",
    is_correct: true
  },
  {
    question_id: 42,
    answer_choice: "Temporal Locator",
    is_correct: false
  },
  {
    question_id: 42,
    answer_choice: "Quantum Destabilizer",
    is_correct: false
  },
  {
    question_id: 42,
    answer_choice: "Interdimensional Portal Device",
    is_correct: false
  },
  {
    question_id: 42,
    answer_choice: "Portal Gun",
    is_correct: true
  },
  {
    question_id: 43,
    answer_choice: "Star City",
    is_correct: false
  },
  {
    question_id: 43,
    answer_choice: "Metropolis",
    is_correct: false
  },
  {
    question_id: 43,
    answer_choice: "Central City",
    is_correct: false
  },
  {
    question_id: 43,
    answer_choice: "Gotham City",
    is_correct: true
  },
  {
    question_id: 44,
    answer_choice: "Yoshi",
    is_correct: false
  },
  {
    question_id: 44,
    answer_choice: "Wario",
    is_correct: false
  },
  {
    question_id: 44,
    answer_choice: "Toad",
    is_correct: false
  },
  { 
    question_id: 44,
    answer_choice: "Luigi",
    is_correct: true
  },
  { 
    question_id: 45,
    answer_choice: "Palladium",
    is_correct: false
  },
  { 
    question_id: 45,
    answer_choice: "Adamantium",
    is_correct: false
  },
  { 
    question_id: 45,
    answer_choice: "Vibranium",
    is_correct: false
  },
  { 
    question_id: 45,
    answer_choice: "Gold-Titanium Alloy",
    is_correct: true
  },
  { 
    question_id: 46,
    answer_choice: "Robot",
    is_correct: false
  },
  { 
    question_id: 46,
    answer_choice: "Flexo",
    is_correct: false
  },
  { 
    question_id: 46,
    answer_choice: "Calculon",
    is_correct: false
  },
  { 
    question_id: 46,
    answer_choice: "Bender",
    is_correct: true
  },
  { 
    question_id: 47,
    answer_choice: "Borg",
    is_correct: false
  },
  { 
    question_id: 47,
    answer_choice: "Klingons",
    is_correct: false
  },
  { 
    question_id: 47,
    answer_choice: "Romulans",
    is_correct: false
  },
  { 
    question_id: 47,
    answer_choice: "Vulcans",
    is_correct: true
  },
  { 
    question_id: 48,
    answer_choice: "Yokuda",
    is_correct: false
  },
  { 
    question_id: 48,
    answer_choice: "Akavir",
    is_correct: false
  },
  { 
    question_id: 48,
    answer_choice: "Atmora",
    is_correct: false
  },
  { 
    question_id: 48,
    answer_choice: "Tamriel",
    is_correct: true
  },
  { 
    question_id: 49,
    answer_choice: "Agrabah",
    is_correct: false
  },
  { 
    question_id: 49,
    answer_choice: "Zamunda",
    is_correct: false
  },
  { 
    question_id: 49,
    answer_choice: "Genovia",
    is_correct: false
  },
  { 
    question_id: 49,
    answer_choice: "Wakanda",
    is_correct: true
  },
  { 
    question_id: 50,
    answer_choice: "J.K. Rowling",
    is_correct: false
  },
  { 
    question_id: 50,
    answer_choice: "George R.R. Martin",
    is_correct: false
  },
  { 
    question_id: 50,
    answer_choice: "C.S. Lewis",
    is_correct: false
  },
  { 
    question_id: 50,
    answer_choice: "J.R.R. Tolkien",
    is_correct: true
  }
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;