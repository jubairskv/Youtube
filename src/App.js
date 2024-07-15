import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="">
          <Header />
          <Body />
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
