import React from "react";

export class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <main className="Welcome">
          <h1 className="ml-4a">
            Tuff City Jitsu Club
            <br />
            Learn self defence and make some new friends
          </h1>
        </main>
      );
    }
  }