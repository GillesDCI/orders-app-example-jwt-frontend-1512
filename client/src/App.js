import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ListUsers from "./components/ListUsers";
import Navigation from "./components/Navigation/indexPrevious";
import Greeting from "./components/Greeting";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import Header from "./components/Partials/Header";

export const AppContext = createContext({
  username: "",
  loggedIn: false,
  handleLogin: () => {},
});

function App() {
  const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
    username: "",
    loggedIn: false,
  };

  const [username, setUsername] = useState(loginSession["username"]);
  const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);

  const handleLogin = (_username) => {
    if (_username) {
      setUsername(_username);
      setLoggedIn(true);
    } else {
      setUsername("");
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    sessionStorage.setItem(
      "login",
      JSON.stringify({ username: username, loggedIn: loggedIn })
    );
  }, [username, loggedIn]);

  return (
    <AppContext.Provider value={{ username, loggedIn, handleLogin }}>
      <div className="App">
        <BrowserRouter>
          <Header loggedIn={loggedIn} />
          {/* <Navigation /> */}
          {loggedIn ? <Greeting /> : null}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/list-users" element={<ProtectedRoute auth={loggedIn}><ListUsers /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
