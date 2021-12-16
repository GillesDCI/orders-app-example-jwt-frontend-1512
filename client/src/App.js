import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ListUsers from "./pages/ListUsers";
import Navigation from "./components/Navigation/indexPrevious";
import Greeting from "./components/Greeting";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import Header from "./components/Partials/Header";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

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
          {/* {loggedIn ? <Greeting /> : null} */}
          <Routes>
            <Route path="/" element={<Greeting />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/list-users" element={<ProtectedRoute auth={loggedIn}><ListUsers /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute auth={loggedIn}><Profile /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
