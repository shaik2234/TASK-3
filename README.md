# Books REST API

A simple RESTful API built with Node.js and Express to manage a list of books stored in memory (no database).

## Features

- Get all books
- Add a new book
- Update a book by ID
- Delete a book by ID

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (version 14 or higher recommended)  
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shaik2234/TASK-3.git
   ```
   
2. Install dependencies:
    ```bash
    npm install
    ```
3. Running the Server:
    Start the Express server on port 3000:
    ```
    node index.js
    ```
    The server will be running at: http://localhost:3000

## API Endpoints
| Method | Endpoint     | Description         | Request Body Example                                 |
| ------ | ------------ | ------------------- | ---------------------------------------------------- |
| GET    | `/books`     | Get all books       | N/A                                                  |
| POST   | `/books`     | Add a new book      | `{ "title": "Book Title", "author": "Author Name" }` |
| PUT    | `/books/:id` | Update a book by ID | `{ "title": "New Title", "author": "New Author" }`   |
| DELETE | `/books/:id` | Delete a book by ID | N/A                                                  |

## Testing
You can use Postman or any REST client to test the endpoints.

## Notes
- Books are stored in-memory, so data resets when the server restarts.
- No database is used in this project.

