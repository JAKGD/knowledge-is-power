create table users (user_id int auto_increment primary key,username varchar (5), password varchar(10)) ;
create table comments (comment_id int auto_increment primary key,content text, post_id int, user_id int) ;
create table posts (post_id int auto_increment primary key,content text, user_id int) ;