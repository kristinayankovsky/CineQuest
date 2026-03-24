Project Overview:
CineQuest is a full-stack web application that allows users to browse movies, manage accounts, and interact with movie-related content. The project uses a React frontend and a Node.js backend to deliver a dynamic user experience.

Project Setup instructions:
1.
git clone https://github.com/kristinayankovsky/CineQuest
cd CineQuest

Install dependencies:
2.
npm install

Run the application:
3.
npm run dev

Features: 
-User authentication (login/register)
-Browse and search movies
-Save favorite movies
-API integration for movie data
-Responsive UI with React

Technologies Used:
Frontend:
-React
-Vite
-JavaScript (ES6+)
-CSS

Backend:
-Node.js

Other:
-Git & Github
-npm
-APIS

APIS used:
-The Movie Database (TMDB) API
-https://www.postman.com/api-evangelist/rotten-tomatoes/folder/iinnb20/lists?sideView=agentMode

Auth Routes:
POST /login

-Logs in a user

Request Body:

{
  "username": "user",
  "password": "password"
}

Response:

{
  "token": "jwt_token"
}

POST /register

-registers a new user

Movie Routes:
GET /movies

-Fetch all movies

GET /movies/

-Fetch a specific movie by ID

Known Limitations / Bugs:
-Some components may not fully handle edge cases (e.g., empty API responses)
-Authentication may not persist after refresh (if token handling is incomplete)
-UI styling may not be fully responsive on all screen sizes
-Error handling for API failures can be improved

Code Notes/ Complex Logic:
-Custom hooks (e.g., useAuthToken) manage authentication state using localStorage
-API calls are handled using async/await for cleaner asynchronous code
-Backend uses middleware for authentication and request validation

Code Formatting:
-Consistent use of ES6 syntax
-Functional React components with hooks
-Clear and readable variable/function naming
-Organized folder structure (client/server separation)

Contributors:
-Kristina Yankovsky
-Nataly Glushak
Salem Hernandez