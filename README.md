Introduction:

For the S8 submission, I have built a RESTful API using Node.js, Express, and SQLite. The API allows users to manage a simple list of todo items. My goal was to build a consistent and well-structured API that adheres to the RFC 2616 standards and provides a good developer experience.

Technical Overview:

The API is built using the following technologies:

Express.js: A fast, unopinionated, minimalist web framework for Node.js.

SQLite3: A lightweight, disk-based database for storing todo items.

Node.js: The JavaScript runtime for executing the server-side code.


API Principles and Design:

I have implemented several key API principles to ensure the API is robust and easy to use:

Consistent Naming: Endpoints follow a clear and predictable naming convention (e.g., /todos).

Standard HTTP Methods: I've used appropriate HTTP methods (GET, POST, DELETE) for different operations.

Proper Status Codes: The API returns meaningful HTTP status codes to communicate the outcome of each request.


Endpoints and Status Codes:

To aim for the Pass with Distinction (VG) criteria, I have implemented 3 different HTTP methods and 5 different status codes.

1. GET /todos
Description: Returns all todos from the database.

Status Codes:

200 OK: Successfully retrieved the list of todos.

500 Internal Server Error: An error occurred while querying the database.

2. POST /todos
Description: Creates a new todo item.

Status Codes:

201 Created: Successfully created the new todo.

500 Internal Server Error: An error occurred while inserting the new todo.

3. DELETE /todos/:id
Description: Deletes a todo item by its ID.

Status Codes:
204 No Content: Successfully deleted the todo.

404 Not Found: The todo with the specified ID does not exist.

500 Internal Server Error: An error occurred while deleting the todo.


How to Run Locally

1. Clone the repository: git clone https://github.com/fredrikejdling-arch/fed27-course4-api.git

2. Install dependencies: npm install

3. Start the server: node index.js

4. The API will be available at: http://localhost:3000


Reflection:

Building this API has helped me understand the importance of consistent naming and proper status codes. I've also learned how to integrate a database into an Express application. By implementing 3 methods and 5 status codes, I've tried to go beyond the basic requirements and build something that is more robust and professional.

