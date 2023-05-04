CREATE DATABASE IF NOT EXISTS `quiz_app`;

USE `quiz_app`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT 0,
    `username` VARCHAR(20) NULL DEFAULT NULL,
    `password` VARCHAR(20) NULL DEFAULT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `Quiz Answers`;
CREATE TABLE `Quiz Answers` (
    `answer_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
    `question_id` INTEGER NULL DEFAULT NULL,
    `answer_choice` TINYINT NULL DEFAULT NULL,
    `is_correct` INTEGER NULL DEFAULT NULL,
    PRIMARY KEY (`answer_id`),
    FOREIGN KEY (`question_id`) REFERENCES `Quiz Questions`(`id`)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS `Quiz Questions`;
CREATE TABLE `Quiz Questions` (
    `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
    `question_prompt` VARCHAR(255) NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

ALTER TABLE `Quiz Answers` ADD FOREIGN KEY (`question_id`) REFERENCES `Quiz Questions`(`id`);
ALTER TABLE `Users` ADD FOREIGN KEY (`user_id`) REFERENCES `Quiz Answers`(`answer_id`);

INSERT INTO `Quiz Questions` (`id`,`question_prompt`) VALUES
(1, 'In the Marvel Comics universe, what is the name of the metal alloy used to create Captain America''s shield?'),
(2, 'What is the name of the protagonist in the video game series Assassin''s Creed?'),
(3, 'In the TV show The Big Bang Theory, what is the name of Sheldon''s favorite comic book superhero?'),
(4, 'What is the name of the planet that the Doctor and his companions often travel to in the TV show Doctor Who?');

INSERT INTO `Quiz Answers` (`question_id`,`answer_choice`,`is_correct`) VALUES
(1,1,0),
(1,2,1),
(1,3,0),
(1,4,0),
(2,1,0),
(2,2,1),
(2,3,0),
(2,4,0),
(3,1,0),
(3,2,1),
(3,3,0),
(3,4,0),
(4,1,0),
(4,2,0),
(4,3,1),
(4,4,0);













    