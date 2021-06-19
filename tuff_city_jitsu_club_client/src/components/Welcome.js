import React from "react";
import tuff_logo from '../img/tuff_logo.jpg'
export class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <main className="Welcome">
          <h1 className="ml-a">
            Tuff City Jitsu Club
            <br />
            Learn self defence and make some new friends
          </h1>
          <span style={{ marginLeft: "20rem" }}>
            <img src={tuff_logo} alt="clublogo"  />
          </span>
        </main>
      );
    }
  }