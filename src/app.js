import React from "react";
// import Q from "./lib/subscriber.js";
// const database = new Q("database");
import Dashboard from "./dashboard";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   database.subscribe("create", () => {});
  // }

  render() {
    return (
      <React.Fragment>
        <h2>Database Actions</h2>
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;
