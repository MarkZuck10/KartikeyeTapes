import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./reducers/store";
import "bulma/bulma.sass";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "bulma/css/bulma.css";
import "../src/assets/main.css";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#2e3794",
              colorPrimaryActive: "#2e3794",
              colorPrimaryBg: "#2e3794",
              colorPrimaryHover: "#2e3794",
              colorPrimaryBgHover: "#2e3794",
            },
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
