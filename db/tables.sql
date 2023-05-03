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
(1, 'What year was the first issue of Punk Planet published?'),
(2, 'Which band is NOT known for being one of the early Hardcore Punk bands?'),
(3, 'Which of these is NOT a club associated with the early days of Punk Rock?'),
(4, 'What is the name of the all female punk band that has had hits such as Cherry Bomb and Bad Reputation?'),
(5, 'Which of these is NOT one of The Ramones original members?');

INSERT INTO `Quiz Answers` (`question_id`,`answer_choice`,`is_correct`) VALUES
(1,1,1),
(1,2,0),
(1,3,0),
(1,4,0),
(2,1,0),
(2,2,0),
(2,3,1),
(2,4,0),
(3,1,0),
(3,2,0),
(3,3,0),
(3,4,1),
(4,1,0),
(4,2,1),
(4,3,0),
(4,4,0),
(5,1,0),
(5,2,0),
(5,3,0),
(5,4,1);











    