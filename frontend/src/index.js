// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const isLocal = window.location.hostname === "localhost";

const redirectUri = isLocal
  ? "http://localhost:3000/"
  : window.location.origin + "/";
  
const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_3sTzqaET8",
  client_id: "36fk9vns52pbma5n0brs54c2vc",
  redirect_uri: redirectUri,
  post_logout_redirect_uri: redirectUri, 
  response_type: "code",
  scope: "phone openid email",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
