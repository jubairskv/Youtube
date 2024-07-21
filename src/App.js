import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="">
          <Header />
          <RouterProvider router={appRouter} />
        </h1>
        {/**
         *
         *Head
         *Body
         *sidebar
         *MenuItem
         *MainContainer
         *ButtonList
         *VideoConatiner
         *videoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
