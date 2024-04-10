
CREATE DATABASE IF NOT EXISTS GradingSystem;
USE GradingSystem;

drop table if exists Account;
create table Account (
	account_id integer primary key,
	account_email varchar(320),
	account_password varchar(320),
	account_type integer 
);
/* User Types:
1: IT/Admin
2: Instructor
3: ProjectLead
4: Registrar
*/
insert into Account
(account_id, account_email, account_password, account_type)
values
(0, 'it@aubh.edu.bh', '1a2b3c4d', 1),
(1, 'prof@aubh.edu.bh', '1234', 2),
(2, 'lead@aubh.edu.bh', '5678', 3),
(3, 'reg@aubh.edu.bh', 'abcd', 4);