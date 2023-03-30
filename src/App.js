import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Single from "./pages/single/Single";

function App() {
  // const userLoggedIn = true;
  return (
    <div className="App">
      <Router>
        <TopBar
        // userLoggedIn={userLoggedIn}
        />
        <Routes>
          {/* <Route path="/" element={userLoggedIn ? <Home/> : <Register/>}>Home</Route>
          <Route path="/register" element={userLoggedIn ? <Home/> : <Register/>}>Register</Route>
          <Route path="/login" element={userLoggedIn ? <Home/> : <Login/>}>Login</Route>
          <Route path="/write" element={userLoggedIn ? <Write/> : <Login/>}>Write</Route>
          <Route path="/settings" element={userLoggedIn ? <Settings/> : <Login/>}>Settings</Route>
          <Route path="/post/:postId" element={userLoggedIn ? <Single/> : <Login/>}>Single</Route> */}

          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/register" element={<Register/>}>Register</Route>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/write" element={<Write/>}>Write</Route>
          <Route path="/settings" element={<Settings/>}>Settings</Route>
          <Route path="/post/:postId" element={<Single/>}>Single</Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
