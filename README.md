# Todo API

Simple REST API for managing todos using Express and SQLite.

## Setup

Install dependencies and start the server:

npm init -y
npm install express sqlite3 cors
node index.js

The server will run at:
http://localhost:3000

## Endpoints

GET /todos  
Returns all todos.

POST /todos  
Creates a new todo.

DELETE /todos/:id  
Deletes a todo by ID.

## Example Base URL

http://localhost:3000
