import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="dev-0giwgnx2.us.auth0.com"
    clientId="qi6IPeJlGGCfhEYG6L6Lhg3SaMTnaDaJ"
    redirectUri={window.location.origin}
    audience='https://dev-0giwgnx2.us.auth0.com/api/v2/'
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
