import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Explanation from "./containers/Explanation/Explanation";
import SelectCompetition from "./containers/SelectCompetition/SelectCompetition";

import HeaderBar from "./components/HeaderBar/HeaderBar";
import LandingPage from "./containers/LandingPage/LandingPage";
import Dashboard from "./containers/SGonksPlatform/Dashboard/Dashboard";

import Layout from "./hoc/Layout/Layout";
export const AuthContext = React.createContext();
import {
  signInWithGoogle,
  signOut,
  onAuthStateChange,
} from "./services/firebase";

const NO_COMPETITION = 0;

function App() {
  const [user, setUser] = useState({ signedIn: false });
  const [compId, setCompId] = useState(0);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    const parsedCompId = Number(localStorage.getItem("compId") || 0);
    setCompId(parsedCompId);
  }, []);

  if (user.signedIn && !user.id) {
    //TODO: fetch for id... with useremail param... once backend is ready
    //for now id hardcoded to 123
    setUser((prevState) => {
      return {
        ...prevState,
        id: 123,
      };
    });
  }

  const auth = {
    authedUser: user,
    handleAuth: signInWithGoogle,
    clearAuth: signOut,
  };

  let pageRoute = !user.signedIn ? (
    <Switch>
      <Route path="/signin" component={LandingPage}></Route>
      <Redirect to="/signin"></Redirect>
    </Switch>
  ) : compId == NO_COMPETITION ? (
    <Switch>
      <Route
        path="/compselect"
        render={(props) => (
          <SelectCompetition
            {...props}
            compIdChanged={setCompId}
          ></SelectCompetition>
        )}
      ></Route>
      <Redirect to="/compselect"></Redirect>
    </Switch>
  ) : (
    <Switch>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/placeholder" component={Explanation}></Route>
      <Redirect to="/dashboard"></Redirect>
    </Switch>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <AuthContext.Provider value={auth}>
          <HeaderBar
            loggedIn={user.signedIn}
            innerNav={compId != 0}
          ></HeaderBar>
          <Layout>{pageRoute}</Layout>
        </AuthContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
