import React from "react";
import Q from "./lib/subscriber.js";
const client = new Q("database");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
    };

    client.subscribe("create", payload => {
      this.updateActions(payload);
    });
    client.subscribe("update", payload => {
      this.updateActions(payload);
    });
    client.subscribe("delete", payload => {
      this.updateActions(payload);
    });
  }

  updateActions = data => {
    this.setState({ actions: [...this.state.actions, data] });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.actions.map((action, idx) => (
            <li key={idx}>
              {action.collection} : {action.action} : {action.id}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
