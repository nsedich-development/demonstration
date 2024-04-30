# REST API with JWT Authentication & Pagination

## Introduction
A robust RESTful API with JWT (JSON Web Token) authentication, ensuring secure and efficient communication between clients and the server. This application facilitates seamless data exchange and user access control, it also includes pagination for better performance when GET data from the server utilizing security best practices.

### Tech Stack 💻 :
- ExpressJS
- NodeJS
- Mysql
- Prisma
- JWT (JSON Web Token)

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

PORT=
REFRESH_TOKEN_SECRET=
ACCESS_TOKEN_SECRET=
DATABASE_URL=
```

### Generate prisma client

```bash
npx prisma generate
```
   
### Push the database schema

```bash
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |


## Test Postman Routes

```
localhost:81/auth/register
raw
{
    "name" : "Nicholas Sedich",
    "email" : "nsedich-development@outlook.com",
    "password" : "pa55w0rd",
    "confirmPassword" : "pa55w0rd"
}
```

```
localhost:81/auth/login
raw
{
    "email" : "nsedich-development@outlook.com",
    "password" : "pa55w0rd"
}
```

```
localhost:81/users/155dacc6-730d-4bd4-b0cf-ed6108bba00e
raw
{
	"name" : "Nicholas New",
	"email" : "nnew-development@outlook.com"
}
headers

Authorization Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTVkYWNjNi03MzBkLTRiZDQtYjBjZi1lZDYxMDhiYmEwMGUiLCJ1c2VyRW1haWwiOiJuc2VkaWNoLWRldmVsb3BtZW50QG91dGxvb2suY29tIiwidXNlck5hbWUiOiJOaWNob2xhcyBTZWRpY2giLCJpYXQiOjE3MTQ1MTg5MDIsImV4cCI6MTcxNDYwNTMwMn0.7ChbXXeGXDs4KjqzVr9QbALLLShw38bXtHpdMxQZyeI

```

