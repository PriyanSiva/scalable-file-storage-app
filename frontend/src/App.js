// App.js
import React from "react";
import { useAuth } from "react-oidc-context";
import Dashboard from "./components/Dashboard";

function App() {
  const auth = useAuth();

  const signInRedirect = () => auth.signinRedirect();

  const signOutRedirect = () => {
    const clientId = "36fk9vns52pbma5n0brs54c2vc";
    const logoutUri = "http://localhost:3000/";
    const cognitoDomain =
      "https://us-east-2z3stzqaet8.auth.us-east-2.amazoncognito.com";

    window.location.href =
      `${cognitoDomain}/logout?client_id=${encodeURIComponent(
        clientId
      )}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return (
      <div style={centerStyle}>
        <p>Loading...</p>
      </div>
    );
  }

  if (auth.error) {
    return (
      <div style={centerStyle}>
        <h2>Authentication error</h2>
        <p>{auth.error.message}</p>
        <button onClick={signInRedirect}>Try again</button>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div style={centerStyle}>
        <h1>Scalable File Storage App</h1>
        <p>You are not signed in.</p>
        <button onClick={signInRedirect}>Sign in</button>
      </div>
    );
  }

  // Authenticated
  return (
    <Dashboard
      auth={auth}
      onHostedLogout={signOutRedirect}
    />
  );
}

const centerStyle = {
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
};

export default App;
