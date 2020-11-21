import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./config/ReactotronConfig";
import ReactGA from "react-ga";
import { toast } from "react-toastify";
import { store, persistor } from "./store";

import history from "./services/history";
import Routes from "./routes";
import ScrollFixer from "./ScrollFixer";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/swiper.css";

toast.configure();

ReactGA.initialize("UA-183663742-1");

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/2020">
          <GlobalStyle />
          <ScrollFixer />
          <Routes history={history} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
