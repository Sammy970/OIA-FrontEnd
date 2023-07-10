import styles from "./App.module.css";

import Data from "./components/Data";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.bg}>
      <Profile />
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <LogoutButton />
          <Data />
        </>
      )}
    </div>
  );
}

export default App;
