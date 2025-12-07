// components/Dashboard.jsx
import React from "react";
import UploadSection from "./UploadSection";
import FilesSection from "./FilesSection";

function Dashboard({ auth, onHostedLogout }) {
  const email = auth.user?.profile?.email || "Unknown user";

  const handleLocalSignOut = () => {
    auth.removeUser(); // clears local session only
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div>
          <h1 style={{ margin: 0 }}>Scalable File Storage App</h1>
          <span>
            Logged in as <strong>{email}</strong>
          </span>
        </div>
        <div>
          <button style={styles.secondaryButton} onClick={handleLocalSignOut}>
            Sign out (local)
          </button>
          <button style={styles.primaryButton} onClick={onHostedLogout}>
            Sign out (Cognito)
          </button>
        </div>
      </header>

      <main style={styles.main}>
        <UploadSection />
        <FilesSection />
      </main>
    </div>
  );
}

const styles = {
  app: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "1.5rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "0.75rem",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: "1rem",
    maxWidth: "900px",
  },
  primaryButton: {
    padding: "0.4rem 0.9rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#2563EB",
    color: "#fff",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "0.4rem 0.9rem",
    borderRadius: "4px",
    border: "1px solid #2563EB",
    backgroundColor: "#fff",
    color: "#2563EB",
    cursor: "pointer",
    marginRight: "0.5rem",
  },
};

export default Dashboard;
