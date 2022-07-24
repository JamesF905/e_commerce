<div style="background:#222; border: 4px outset #333; padding:20px; font-family:arial">
<div id="top"></div>
<div align="center">
<a href="https://gist.github.com/JamesF905">
<img src="assets/images/logo.png" alt="Logo" width="40%" style="border: 4px inset #444; background:#333; border-radius: 20px">
</a>

# E-Commerce Site

<p align="center">
A refactoring of an E-Commerce application<br><br>By: <a href="https://github.com/JamesF905" target="_blank"><strong>James Fidlin</strong></a><br/>July, 21, 2022
</p>
<br />

### Walkthrough Video Link

<p align="center">
    <a href="https://drive.google.com/file/d/1qyD3J-7_5o8_TAtI_zTxV4d-E7PTEnfx/view"><strong>https://drive.google.com/file/d/1qyD3J-7_5o8_TAtI_zTxV4d-E7PTEnfx/view</strong></a>
</p>

### Repo Link

<p align="center">
    <a href="https://github.com/JamesF905/e_commerce"><strong>https://github.com/JamesF905/e_commerce</strong></a>
</p>
<br />
</div>

## About The Project

[![e_commerce][product-screenshot]](https://github.com/JamesF905/e_commerce)

This challenge requires me to refactor starter code for an e-commerce backend using Sequelize, Node.js, dotenv, MySql and javascript. 
<br /><br />

## Contents
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Technology Used](#Technology-Used)
* [Installation](#Installation-Instructions)
* [About the Author](#About-the-Author)
<br/><br/>

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Technology Used 

* [Javascript](https://www.javascript.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MySql Server](https://dev.mysql.com/downloads/mysql/)
* [Git Hub](https://github.com/)
* [Git Bash](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [insomnia](https://insomnia.rest/)
* [sequelize](https://sequelize.org/)
* [npm mysql2](https://www.npmjs.com/package/mysql2)
* [npm dotenv](https://www.npmjs.com/package/dotenv)

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## Installation Instructions 

1) Install GitBash

2) Install MySql server

3) Install Insomnia

4) Clone this repo

5) Run GitBash from your cloned folder

6) In bash, type in the command ``mysql -u root -p``, then enter your database's password

7) Once connected type in the command ``source db/schema.sql`` to create the database

6) Type ``npm i`` in GitBash to install dependencies

7) Type ``npm run seed`` to build the database

8) Type ``npm start`` to run the application

9) Use insomnia to play with the routes

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## About the Author

James Fidlin is a Junior Full Stack Web Developer, studying at the University of Toronto's School for Continuing Education, in the Full Stack Web Development Program. You can connect with James, using any of the links below.
<br/><br/>

[![LinkedIn][linkedin-shield]][linkedin-url] [![Gmail][gmail-shield]][Gmail-url] [![Github][Github-shield]][Github-url]

<br/>

<p align="center"><a href="#contents">(back to top)</a></p>
</div>



[Gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:jameslfidlin@gmail.com?

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/james-fidlin-98853a239/

[Github-shield]: https://img.shields.io/badge/Github-white?style=for-the-badge&logo=Github&logoColor=222
[Github-url]: https://github.com/JamesF905

[product-screenshot]: assets/images/Project_Screenshot.png