# String Sorter API — Technical Documentation

## Overview

This project is a simple web server that receives a word, breaks it into individual letters, sorts those letters from A to Z, and sends them back. It is built with Node.js and Express, and is deployed on Railway so anyone on the internet can use it.

---

## How It Works — In Simple Terms

Imagine you send the word **"example"** to the server. Here is what happens step by step:

```
1. You send:        { "data": "example" }

2. Server splits:   ["e", "x", "a", "m", "p", "l", "e"]

3. Server sorts:    ["a", "e", "e", "l", "m", "p", "x"]

4. Server returns:  { "word": ["a", "e", "e", "l", "m", "p", "x"] }
```

That's the entire job of this API.

---

## Project Components

### 1. `index.js` — The Server

This is the brain of the project. It does four things:

- **Starts a web server** that listens for incoming requests
- **Handles the POST /sort-string route** — this is where the sorting logic lives
- **Serves the frontend** — when someone visits the website URL, it shows the HTML form
- **Handles errors** — if someone sends bad data, it returns a helpful error message

### 2. `package.json` — Project Config

This file tells Node.js what the project is called, how to start it (`npm start`), and what external packages it needs (Express and CORS).

### 3. `Procfile` — Deployment Instruction

A one-line file that tells Railway/Heroku/Render how to start the server:
```
web: node index.js
```

### 4. `public/index.html` — The Frontend

A simple webpage with a form where you can type in an email and a URL to test the validation endpoint. It shows the response directly on the page.

---

## The API Endpoint

| Property | Detail |
|----------|--------|
| Method | POST |
| URL | `/sort-string` |
| Input | JSON body with a `"data"` field |
| Output | JSON object with a `"word"` field |

### Request Format
```json
{
  "data": "hello"
}
```

### Success Response
```json
{
  "word": ["e", "h", "l", "l", "o"]
}
```

### Error Response (when input is missing or wrong)
```json
{
  "error": "Missing or invalid 'data' field"
}
```

---

## What is CORS and Why It's Used

CORS stands for **Cross-Origin Resource Sharing**. In simple terms, it's a browser security rule that blocks websites from calling APIs on different domains unless the API explicitly allows it.

This project enables CORS for **all origins**, meaning any website or tool can send requests to this API without being blocked.

---

## What is a Webhook?

A webhook is just a way for one system to send data to another automatically over the internet. In this project, the validator tool acts as the "sender" — it sends a POST request with a string to your API, just like knocking on a door and passing a note through.

---

## Deployment

The project is hosted on **Railway**, a cloud platform that runs Node.js apps. Railway automatically:

- Detects the `Procfile` and knows how to start the server
- Assigns a `PORT` environment variable so the server knows which port to listen on
- Provides a public URL so the API is accessible from anywhere

---

## Validation Flow

Once deployed, the endpoint is tested by an external validator:

```
1. You submit your API URL + email to the validator

2. The validator sends a POST request with a test string to your /sort-string endpoint

3. Your server sorts the string and returns the result

4. The validator checks if the result is correct

5. If correct, you receive a link to the application form
```

---

## Tech Stack Summary

| Technology | Role |
|------------|------|
| Node.js | Runtime environment — runs JavaScript on the server |
| Express.js | Web framework — handles routes and HTTP requests |
| CORS | Middleware — allows cross-origin requests |
| Railway | Cloud hosting — makes the server publicly accessible |
| HTML/CSS | Frontend — simple form for testing the API |
