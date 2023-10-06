create database rent;
use rent;

create table rent.customer_details(
customer_id int primary key auto_increment, 
customer_name varchar(50),
customer_mail varchar(50),
customer_password varchar(50),
customer_mobile bigint,
customer_idproof varchar(200),
customer_address varchar(250),
reward_points int,
admin_verified varchar(50)

);
