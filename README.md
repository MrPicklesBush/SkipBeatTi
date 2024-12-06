# SkipBeatTi

# How to create local mySQL Database
The **sql_statement** folder contains all the SQL statements. 

To populate the DB, only execute the statements in the following files, in-order:
1. createTable.sql
2. insertData.sql
3. indexData.sql

Additionally, in order to run the database in the backend, you **must replace the name of the DB host, user, and password with your local DB information**.  Instructions are as follows:
1. Navigate to /backend/src/server.js
2. Replace code on lines 23-25 with your local DB host, user, and password information

# How to run project
In order to run this project, you must install the appropriate depdencies in both the **backend** & **frontend** folders. Additionally, make sure to set up the mySQL DB prior to running the project. 
Instructions are as follows:

1. cd backend
2. npm install
3. npm run dev
4. cd ..
5. cd frontend
6. npm install
7. npm start

Additionally, since our project utilizes Node.js, you should have SQL version 8.0.4 or below to be compatible. 

# Member Contributions
**Lisa Yu**: coded features for displaying songs, albums, & playlists, & wrote Goals & Description in final report

**Lani Do**: coded SQL statements & wrote Database Normalization in final report

**Kevin Cui**: coded song playback feature connected to Spotify API, & wrote Design & Implentation Details in final report

**Bush Nguyen**: coded user login feature & wrote Functional Requirements in final report

**Shakshi Sharma**: coded SQL statements & wrote Conclusion in final report
