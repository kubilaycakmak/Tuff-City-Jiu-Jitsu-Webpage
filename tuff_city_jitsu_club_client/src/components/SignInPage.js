import React, { Component } from "react";
import { Session } from "../requests";
import "../App.css";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(data => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: "Wrong email or password" }]
        });
      } else {
        this.setState({
          errors: []
        });
        this.props.history.push("/");

        if (typeof this.props.onSignIn === "function") {
          this.props.onSignIn();
        }
      }
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <main>
        <div className="ui header">Sign In</div>
        <form className="ui form" onSubmit={this.createSession}>
          {errors.length > 0 ? (
            <div className="ui negative message FormErrors">
              <div className="header">Error Signing in...</div>
              <p>{errors.map(err => err.message).join(",")}</p>
            </div>
          ) : null}
          <div className="field">
            <label htmlFor="email">Email</label>
            <div className="input">
            <input type="email" name="email" id="email" placeholder="yourname@usermail.com"/>
            </div>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="input">
            <input type="password" name="password" id="password" placeholder="Enter password here"/
            ></div>
          </div>
          <button className="ui black button" type="submit">
            Sign In
          </button>
        </form>
      </main>
    );
  }
}

export default SignInPage;