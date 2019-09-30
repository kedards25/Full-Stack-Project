import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {userName => {
          return (
            <div>
              <h1>Welcome {userName}</h1>;
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
