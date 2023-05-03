CREATE DATABASE IF NOT EXISTS `knowledge_is_power`;

USE `knowledge_is_power`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `QuizAnswers`;
CREATE TABLE `QuizAnswers` (
    `answer_id` INT NOT NULL AUTO_INCREMENT,
    `question_id` INT NOT NULL,
    `answer_choice` TINYINT NOT NULL,
    `is_correct` TINYINT NOT NULL,
    PRIMARY KEY (`answer_id`),
    FOREIGN KEY (`question_id`) REFERENCES `QuizQuestions`(`id`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `QuizQuestions`;
CREATE TABLE `QuizQuestions` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `question_prompt` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

ALTER TABLE `QuizAnswers` ADD FOREIGN KEY (`question_id`) REFERENCES `QuizQuestions`(`id`);
ALTER TABLE `Users` ADD FOREIGN KEY (`user_id`) REFERENCES `QuizAnswers`(`answer_id`);

INSERT INTO `QuizQuestions` (`id`, `question_prompt`) VALUES
(1, 'In the Marvel Comics universe, what is the name of the metal alloy used to create Captain America''s shield?'),
(2, 'What is the name of the protagonist in the video game series Assassin''s Creed?'),
(3, 'In the TV show The Big Bang Theory, what is the name of Sheldon''s favorite comic book superhero?'),
(4, 'What is the name of the planet that the Doctor and his companions often travel to in the TV show Doctor Who?');

INSERT INTO `QuizAnswers` (`question_id`, `answer_choice`, `is_correct`) VALUES
(1, 1, 0),
(1, 2, 1),
(1, 3, 0),
(1, 4, 0),
(2, 1, 0),
(2, 2, 1),
(2, 3, 0),
(2, 4, 0),
(3, 1, 0),
(3, 2, 1),
(3, 3, 0),
(3, 4, 0),
(4, 1, 0),
(4, 2, 0),
(4, 3, 1),
(4, 4, 0);












    