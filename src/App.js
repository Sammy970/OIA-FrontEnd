import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <br />
        <LogoutButton />
        <Profile />
      </header>
    </div>
  );
}

export default App;
