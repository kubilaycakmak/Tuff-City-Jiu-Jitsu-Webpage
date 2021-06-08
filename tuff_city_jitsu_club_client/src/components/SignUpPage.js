import React from "react";
import { User } from "../requests";

export function SignUpPage(props) {
  const { onSignUp } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const signUpParams = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation"),
      // New elements: check that these make sense
      belt_grade_id: formData.get("belt_grade_id"),
      owns_gi: formData.get("owns_gi")
    };

    User.create(signUpParams).then(res => {
      if (res.id) {
        onSignUp();
        props.history.push("/");
      }
    });
  }

  return (
    <main>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="first_name">First Name</label>
          <div className="input">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            required
          />
          </div>
        </div>
        <div className="field">
          <label htmlFor="last_name">Last Name</label>
          <div className="input">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required
          />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <div className="input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@usermail.com"
            required
          />
          </div>
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
         </div>
        </div>
        <div className="field">
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <div className="input">
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Enter your password again"
            required
          />
          </div>
        </div>
        <div className="field">
          <label htmlFor="belt_grade_id">What is your grade?</label>
          <div className="input">
          <input
            type="belt_grade_id"
            name="belt_grade_id"
            id="belt_grade_id"
            placeholder="Choose a colour!"
            required
          />
          {/* Rework the above into a dropdown menu with all grades as options */}
          </div>
        </div>
        <div className="field">
          <label htmlFor="owns_gi">Do you own a gi?</label>
          <div className="input">
          <input
            type="owns_gi"
            name="owns_gi"
            id="owns_gi"
            placeholder="Yes, or no?"
            required
          />
          {/* Rework the above into a dropdown menu with yes/no */}
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}