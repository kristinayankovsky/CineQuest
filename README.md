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

<<<<<<< HEAD
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
=======
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# CineQuest 🎬
**CineQuest** is a modern, responsive movie discovery dashboard designed to help users find their next favorite film. Users can browse trending titles, search for specific movies, read professional New York Times critic reviews, and manage a personal "Watchlist."

### 🚀 [Live Demo Link Here] | [GitHub Repository](https://github.com/kristinayankovsky/CineQuest)

---

## ✨ Key Features
- **Trending Dashboard:** Real-time "Now Playing" and "Trending" movies fetched from the TMDB API.
- **Advanced Search:** Dynamic search functionality with genre and year filtering.
- **Critic's Corner:** Integration with the New York Times API to provide professional reviews for selected films.
- **Personal Watchlist (CRUD):** Full Create, Read, Update, and Delete functionality for user-saved movies.
- **Responsive Design:** Optimized layouts for Mobile (320px), Tablet (768px), and Desktop (1024px+).
- **User Authentication:** Secure login/signup with protected routes for the user dashboard.

---

## 🛠️ Technical Stack
- **Framework:** React.js (Vite)
- **Routing:** React Router v6
- **State Management:** React Context API & Hooks (`useState`, `useEffect`, `useContext`)
- **Styling:** Modern CSS (Grid & Flexbox)
- **APIs Integrated:** 
  - [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)
  - [New York Times Movie Reviews API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview)

---

## 📂 Project Architecture
```text
src/
 ├── components/
 │     ├── Navbar.jsx       # Global navigation & branding
 │     ├── MovieCard.jsx    # Reusable movie poster component
 │     ├── Button.jsx       # Styled action buttons
 │     ├── LoadingGrid.jsx  # Skeleton loading states for UX
 │     └── ErrorState.jsx   # API error handling UI
 ├── pages/
 │     ├── Home.jsx         # Hero section & Trending grid
 │     ├── Search.jsx       # Search results & filter logic
 │     ├── MovieDetails.jsx # Dynamic movie info & NYT reviews
 │     ├── Profile.jsx      # User Watchlist (Protected Route)
 │     └── Login.jsx        # Authentication forms
 ├── styles/
 │     ├── global.css       # Base styles & responsive layout
 │     └── theme.css        # Design system (colors, typography)
 ├── App.jsx               # Main routing & Global State provider
 └── main.jsx              # Application entry point
>>>>>>> 5ea1929b1b81290659b121d64bd58d1c107b53dd
