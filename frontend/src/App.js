import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Scalable File Storage App</h1>
      <p>Welcome, <strong>{user?.attributes?.email || user?.username}</strong></p>

      <hr />

      <p>Authenticated area – we’ll add file upload here later.</p>

      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
