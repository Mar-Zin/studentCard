import React from "react";
import { Switch, Route } from "react-router-dom";
import StudentPage from "./studentPage";
import EditStudentPage from "./editStudentPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={StudentPage} />
        <Route path="/:edit?" component={EditStudentPage} />
      </Switch>
    </>
  );
}

export default App;
