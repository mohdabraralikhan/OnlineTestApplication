# OnlineTestApplication

## Description

The Online Test Application system creates an application that enables users to provide online tests, review them, and display the results.

System Details
This system contains three main modules: Quiz, Review, and Result. The quiz section of the online test application accepts the questions in JSON format. The JSON file can be easily shared from the server in the pre-defined format. The application renders the test at the client-side.
The “Review and display result” section allows users to declare the results immediately. You can simply call another JSON with the answers in it and evaluate and display the results immediately.

## Database setup
CREATE DATABASE OnlineTestApplicationSystem;
USE OnlineTestApplicationSystem;
CREATE TABLE QUESTIONS_AND_ANSWERS(
 QUESTION VARCHAR(500),
A VARCHAR(255),
B VARCHAR(255) ,
C VARCHAR(255) ,
D VARCHAR(255),
E VARCHAR(255),
ANSWER VARCHAR(255));

GRANT FILE ON *.* TO 'root'@'localhost';

select * from QUESTIONS_AND_ANSWERS;
LOAD DATA INFILE 'MCQ.csv' #PROVIDE THE PATH TO THE CSV HERE 
# HERE I Have Stored It Inside The Folder Of My Database
INTO TABLE QUESTIONS_AND_ANSWERS 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\r\n'; 
 -- Ignore the header if your CSV file has a header

DELETE FROM QUESTIONS_AND_ANSWERS LIMIT 1;
ALTER TABLE QUESTIONS_AND_ANSWERS
ADD COLUMN ID BIGINT AUTO_INCREMENT PRIMARY KEY AFTER QUESTION;
select * from QUESTIONS_AND_ANSWERS;
