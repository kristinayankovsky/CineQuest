# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

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
