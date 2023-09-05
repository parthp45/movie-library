import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";
import MovieList from "./components/MovieList";
import appStore from "./utills/appStore";

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
    <div className="app">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
