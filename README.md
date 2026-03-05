String Sorter API
A lightweight REST API that receives a string, splits it into characters, sorts them alphabetically, and returns the result as a word array.

Features

POST /sort-string — Accepts a string and returns alphabetically sorted characters
CORS enabled for all origins
Bonus frontend UI for testing the validation endpoint
Ready for deployment on Railway, Render, or Heroku


Tech Stack

Runtime: Node.js
Framework: Express.js
Middleware: CORS


Project Structure
oneeleven/
├── index.js
├── package.json
├── Procfile
└── public/
    └── index.html

Getting Started
Prerequisites

Node.js installed on your machine

Installation

Clone the repository:

bashgit clone https://github.com/YOUR_USERNAME/oneeleven.git
cd oneeleven

Install dependencies:

bashnpm install

Start the server:

bashnpm start
The server will run on http://localhost:3000

API Usage
POST /sort-string
Request Body:
json{
  "data": "example"
}
Response:
json{
  "word": ["a", "e", "e", "l", "m", "p", "x"]
}
Error Response (400):
json{
  "error": "Missing or invalid 'data' field"
}
Example with curl
bashcurl -X POST http://localhost:3000/sort-string \
  -H "Content-Type: application/json" \
  -d '{"data":"example"}'

  Deployment
This project is configured for easy deployment on Railway, Render, or Heroku via the included Procfile.
web: node index.js
The server automatically uses the PORT environment variable provided by the platform.

Frontend (Bonus)
A simple frontend is served at GET / that allows you to:

Enter your email and API endpoint URL
Submit to the validation endpoint
View the full JSON response on the page


.gitignore
node_modules/
