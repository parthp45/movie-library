import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";
import appStore from "./utills/appStore";
import Offline from "./components/Offline";
import useOnlineStatus from "./hooks/useOnlineStatus";
import Movies from "./components/Movies";

function App() {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <Offline />;
  }
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <Movies />,
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
