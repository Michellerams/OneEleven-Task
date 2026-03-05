🚀 String Sorter API

A lightweight REST API that receives a string, splits it into individual characters, sorts them alphabetically, and returns the result as an array.



📌 Features

-✅ POST /sort-string — Accepts a string and returns alphabetically sorted characters

-🌍 CORS enabled for all origins

-🖥️ Bonus frontend UI for endpoint validation

-☁️ Ready for deployment on Railway, Render, or Heroku



🛠️ Tech Stack

-Runtime: Node.js

-Framework: Express.js

-Middleware: CORS


📂 Project Structure
oneeleven/
├── index.js
├── package.json
├── Procfile
└── public/
    └── index.html
    
🚀 Getting Started
✅ Prerequisites

Node.js (v14 or higher recommended)

Check your version:

node -v
📦 Installation

1️⃣ Clone the repository:

git clone https://github.com/USERNAME/oneeleven.git
cd oneeleven

2️⃣ Install dependencies:

npm install

3️⃣ Start the server:

npm start

The server will run at:

http://localhost:3000
📡 API Usage
🔹 POST /sort-string

Sorts characters alphabetically from the provided string.

Request Body
{
  "data": "example"
}
Success Response (200)
{
  "word": ["a", "e", "e", "l", "m", "p", "x"]
}
Error Response (400)
{
  "error": "Missing or invalid 'data' field"
}
🔎 Example Using curl
curl -X POST http://localhost:3000/sort-string \
  -H "Content-Type: application/json" \
  -d '{"data":"example"}'
🌐 Testing the Deployed Endpoint

After deployment, validate your API using:

https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=YOUR_API_ENDPOINT_URL&email=YOUR_EMAIL_ADDRESS

Replace:

YOUR_API_ENDPOINT_URL → Your live API URL (e.g. https://your-app.railway.app/sort-string)

YOUR_EMAIL_ADDRESS → Your email address

☁️ Deployment

This project includes a Procfile for easy deployment:

web: node index.js

The application automatically uses the PORT environment variable provided by hosting platforms like:

Railway

Render

Heroku

🖥️ Frontend (Bonus)

A simple frontend UI is available at:

GET /

It allows you to:

Enter your email

Enter your API endpoint URL

Submit to the validation endpoint

View the full JSON response

📁 .gitignore

Make sure your .gitignore includes:

node_modules/
