# knowledge-is-power
A geeky trivia game

## User Story

```md
AS A cultured geek
I WANT a simple geek-themed trivia app
SO THAT I can procrastinate and have fun in an ad-free environment
```

## Acceptance Criteria

```md
GIVEN a trivia site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes navigation links for the homepage and the dashboard; and the option to log in
    OPTIONAL WHEN I visit the site for the first time
    OPTIONAL THEN I am presented with the homepage, which includes navigation links for the homepage, the dashboard, the scoreboard with high scores; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
    OPTIONAL WHEN I choose to sign up 
    OPTIONAL I am prompted to create a username and password and select an avatar
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with the option to start the trivia game along with my high score
    OPTIONAL WHEN I click on the homepage option in the navigation
    OPTIONAL THEN I am presented with options for the length of the game (in questions) I would like to play, along with my high scores for said options
WHEN I click to start the game
THEN I am shown a multiple-choice question with a score counter
WHEN I answer the question
THEN I am taken to the next question and the score counter increments if my previous answer was correct
WHEN I answer the last question
THEN I am shown a scoreboard displaying my final score, my high score, and the high scores of other players
```

## Preliminary Directory Structure

```
Preliminary File Structure
├─ .env
├─ .gitignore
├─ config
│  └─ connection.js
├─ controllers
│  ├─ api
│  │  ├─ index.js
│  │  ├─ questionRoutes.js
│  │  └─ userRoutes.js
│  ├─ homeRoutes.js
│  └─ index.js
├─ db
│  └─ schema.sql
├─ models
│  ├─ index.js
│  ├─ Question.js
│  └─ User.js
├─ node-modules
├─ package-lock.json
├─ package.json
├─ public
│  ├─ css
│  │  └─ jass.css
│  └─ js
│     ├─ login.js
│     └─ logout.js
├─ README.md
├─ seeds
│  ├─ questionData.json
│  ├─ seed.js
│  └─ userData.json
├─ server.js
├─ utils
│  ├─ auth.js
│  └─ helpers.js
└─ views
   ├─ homepage.handlebars
   ├─ layouts
   │  ├─ main.handlebars
   ├─ question.handlebars
   ├─ scoreboard.handlebars
   └─ login.handlebars
```