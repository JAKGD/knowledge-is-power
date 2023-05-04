const { Question } = require('../models');

const questionData = [
  {
    id: 1,
    question_prompt: 'In the Star Wars universe, what is the name of the primary weapon used by the Jedi and Sith?',
  },
  {
    id: 2,
    question_prompt: 'In the TV show Stranger Things, what is the name of the telekinetic girl who becomes friends with the main characters',
  }, {
    id: 3,
    question_prompt: 'What is the name of the computer in the movie WarGames?',
  }, {
    id: 4,
    question_prompt: 'What is the name of the computer in the TV show Person of Interest?',
  }, {
    id: 5,
    question_prompt: 'What is the name of the robot in the movie Wall-E?',
  }, {
    id: 6,
    question_prompt: 'What is the name of the primary antagonist in the movie Blade Runner?',
  }, {
    id: 7,
    question_prompt: 'In the TV show The Big Bang Theory, what is the name of Sheldon Coopers best friend?',
  }, {
    id: 8,
    question_prompt: 'What is the name of the ship in the TV show Firefly?',
  }, {
    id: 9,
    question_prompt: 'In the video game series Final Fantasy VII, what is the name of the spiky-haired protagonist?',
  }, {
    id: 10,
    question_prompt: 'What is the name of the computer program that created the Matrix?',
  }, {
    id: 11,
    question_prompt: 'What is the name of Princess that Mario has to often save in his games?',
  }, {
    id: 12,
    question_prompt: 'In the TV show Doctor Who, what is the name of the Doctors time machine?',
  }, {
    id: 13,
    question_prompt: 'In the video game series Metal Gear Solid, what is the name of the protagonist?',
  }, {
    id: 14,
    question_prompt: 'What is the name of the spacecraft in the movie Alien?',
  }, {
    id: 15,
    question_prompt: 'What is the name of the robot in the movie Short Circuit?',
  }, {
    id: 16,
    question_prompt: 'In the TV show Breaking Bad, what is the name of Walter Whites partner in crime?',
  }, {
    id: 17,
    question_prompt: 'In the video game series Halo, what is the name of the AI companion?',
  }, {
    id: 18,
    question_prompt: 'What is the name of the main character in the TV show The Mandalorian?',
  }, {
    id: 19,
    question_prompt: 'In the video game series Mass Effect, what is the name of the protagonist?',
  }, {
    id: 20,
    question_prompt: 'What is the name of the company that produces the replicants in the movie Blade Runner?',
  }, {
    id: 21,
    question_prompt: 'In the TV show Battlestar Galactica, what is the name of the Cylon model played by Tricia Helfer?',
  }, {
    id: 22,
    question_prompt: 'What is the name of the fictional metal used to make Wolverines claws?',
  }, {
    id: 23,
    question_prompt: 'In the TV show The Office (US), what is the name of the character played by Steve Carell?',
  }, {
    id: 24,
    question_prompt: 'What is the name of the alien race in the TV show Doctor Who that are known for their use of Daleks?',
  }, {
    id: 25,
    question_prompt: 'What is the name of the flying robot in the movie Wall-E?',
  }, {
    id: 26,
    question_prompt: 'In the TV show Stranger Things, what is the name of the alternate dimension that is home to the Demogorgon?',
  }, {
    id: 27,
    question_prompt: 'What is the name of the fictional metal used to make Captain Americas shield?',
  }, {
    id: 28,
    question_prompt: 'In the video game series Final Fantasy, what is the name of the recurring summon that appears as a large green dragon?',
  }, {
    id: 29,
    question_prompt: 'What is the name of the AI system that assists Tony Stark in the Iron Man movies?',
  }, {
    id: 30,
    question_prompt: 'What is the name of the planet that Luke Skywalker grew up on in the Star Wars franchise?',
  }, {
    id: 31,
    question_prompt: 'What is the name of the trash robot in the movie Wall-E?',
  }, {
    id: 32,
    question_prompt: 'In the Harry Potter series, what is the name of the main villain who seeks to kill Harry?',
  }, {
    id: 33,
    question_prompt: 'In the TV show The Office, what is the name of Michael Scotts boss?',
  }, {
    id: 34,
    question_prompt: 'Who directed the movie Jurassic Park?',
  }, {
    id: 35,
    question_prompt: 'What is the name of the main villain in the video game series Resident Evil?',
  }, {
    id: 36,
    question_prompt: 'What is the name of the fictional continent where the events of the Game of Thrones TV series take place?',
  }, {
    id: 37,
    question_prompt: 'In the TV show The Big Bang Theory, what is the name of Sheldon Coopers favorite comic book superhero?',
  }, {
    id: 38,
    question_prompt: 'What is the name of the planet that the Doctor and his companions adventure on the most in Doctor Who?',
  }, {
    id: 39,
    question_prompt: 'In the video game series Halo, what is the name of the artificial intelligence that assists the protagonist, Master Chief?',
  }, {
    id: 40,
    question_prompt: 'In the TV show Star Trek: The Next Generation, what is the name of the android crew member?',
  }, {
    id: 41,
    question_prompt: 'What is the name of the main character in the video game series Metroid?',
  },{
    id: 42,
    question_prompt: 'In the TV show Rick and Morty, what is the name of Ricks portal gun?',
  }, {
    id: 43,
    question_prompt: 'What is the name of the fictional city where the Batman comics take place?',
  }, {
    id: 44,
    question_prompt: 'In the video game series Super Mario Bros., what is the name of Marios brother?',
  }, {
    id: 45,
    question_prompt: 'What is the name of the fictional metal used to make Iron Mans suit?',
  }, {
    id: 46,
    question_prompt: 'In the TV show Futurama, what is the name of the robot who works as a bending unit at Planet Express?',
  }, {
    id: 47,
    question_prompt: 'What is the name of the alien race in the TV show Star Trek that have a strict adherence to logic and reason?',
  }, {
    id: 48,
    question_prompt: 'In the video game series The Elder Scrolls, what is the name of the continent where most of the games take place?',
  }, {
    id: 49,
    question_prompt: 'What is the name of the fictional country where Black Panther is set?',
  }, {
    id: 50,
    question_prompt: 'Who created the fictional world of Middle-earth in The Lord of the Rings?'
  }
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;



































