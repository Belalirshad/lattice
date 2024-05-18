# Lattice Innvoations

## Selection Test

This is a simple backend project that contains a RESTful API for getting information about a platform where psychiatrists can register their patients through a mobile/ web portal where each psychiatrist belongs to a hospital.
The project is developed with Node.js and Express.js, and the database used for managing the hospital, psychiatrist and patient data is MySQL.

## Application Folder Structure

1. [../server.js] -> For handling requests and responses.

2. [../.env] -> Contains PORT , SECRET, SALT

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
│   ├── config/
│       ├──db.js
│   ├── controllers/
│       ├──auth.controller.js
│       ├──patient.controller.js
│   ├── middlewares/
│       ├──checkIfPatientExists.js
│       ├──checkIfUserExists.js
│       ├──index.js
│   ├── routes/
│       ├──auth.routes.js
│       ├──patient.routes.js
│   ├── services
│   ├──utils/
│       ├──token.utils.js
│       ├──cloudinary.utils.js
│       ├──multer.utils.js
│   ├── validators/
│       ├──auth.validators.js
│   └──view
│
├── .env
├── .env.example
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

Install the required dependencies as mentioned below by using

```sh
npm install <packageName>
```

Start the server by

```sh
npm run dev
```

## Environment Configuration

Duplicate `.env.example` to `.env` and configure the environment variables:

- `PORT`: Your Port Number.
- `SECRET`: Token Secret
- `SALT`: Bcrypt JS

## Dependencies

Following dependencie are needed to run this application:

1. Express

2. Json Web Token

3. MySQL

4. Nodemon

## Postman API Documentation

```sh
url: https://documenter.getpostman.com/view/33307695/2sA3JT4eQK
```