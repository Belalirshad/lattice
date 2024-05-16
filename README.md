# Lattice Innvoations

## Selection Test

This is a simple backend project that contains a RESTful API for getting information about a platform where psychiatrists can register their patients through a mobile/ web portal where each psychiatrist belongs to a hospital.
The project is developed with Node.js and Express.js, and the database used for managing the hospital, psychiatrist and patient data is MySQL.

## Application Folder Structure

1. [../server.js] -> For handling requests and responses.

2. [../.env] -> Contains PORT ,

3. [src/config/db.js] -> To create and connect database on MySQL.

4. [src/controllers] ->

5. [src/models/] ->

6. [src/routes] ->

7. [src/services] ->

8. [src/utils] ->

9. [src/validators] ->

10. [src/view/] ->

```
├── src/
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── model
│   ├── routes
│   ├── services
│   ├──utils
│   ├── validators
│   ├──view
│   └── models/
│       ├── subscribers.js
├── .env
├── .gitignore
├── {} package-lock.json
├── {}package.json
├── README.md
└── server.js
```

## Installation

You'll need to have **Node.js** and **MySQL Workbench** installed on your computer in order to begin working on the project.

Once installed, Clone this repository to your **local** machine.

```sh
git clone https://github.com/Belalirshad/lattice.git
```

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **npm run dev**

## Environment Configuration

Duplicate `.env.example` to `.env` and configure the environment variables:

- `MySQL_CONNECTION_STRING`: MySQL connection string.
- `PORT` : Your PORT number
- `ACCESS_TOKEN_SECRET`: Secret key for JWT token generation and verification.

## Dependencies

Following dependencie are needed to run this application:

1. Express

2. Json Web Token

3. MySQL

4. Nodemon
