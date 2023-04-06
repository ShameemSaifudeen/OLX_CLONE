import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AuthContext, FirebaseContext } from "./store/context";
import Post from "./store/PostContest";
import EditUserData from "./store/EditUserContest";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import Admin from "./Pages/Admin";
import EdituserPage from "./Pages/EditUser";
import AdminLogin from "./Pages/AdminLogin";
import Profile from "./Pages/Profile";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        // If user is logged in, set user data in AuthContext
        setUser(user);
      } else {
        // If user is not logged in, clear user data in AuthContext
        setUser(null);
      }
    });
  }, []);
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            {user ? <Create /> : <Redirect to="/login" />}
          </Route>
          <Route path="/view">
            {user ? <ViewPost /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile">
            {user ? <Profile /> : <Redirect to="/login" />}
          </Route>

          {/* Admin */}

          <Route exact path="/admin">
            <AdminLogin />
          </Route>
          <EditUserData>
            <Route exact path="/admin/home">
              <Admin />
            </Route>
            <Route exact path="/admin/editUser">
              <EdituserPage />
            </Route>
          </EditUserData>
        </Router>
      </Post>
    </div>
  );
}

export default App;
