import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import Home from "./components/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <MovieList />,
    },
    {
      path: "/movie/:id",
      element: <MovieInfo />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
