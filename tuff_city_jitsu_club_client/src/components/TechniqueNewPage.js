import React, { Component } from "react";

import { Technique } from "../requests";
import NewTechniqueForm from "./NewTechniqueForm";

export default class TechniqueNewPage extends Component {
  state = {
    errors: []
  };
  createTechnique = params => {
    Technique.create(params).then(technique => {
      if (Technique.errors) {
        this.setState({ errors: technique.errors });
      } else {
        this.props.history.push(`/syllabus`);
      }
      console.log(params);
    });
  };

  render() {
    return (
      <main>
        <div className="central">
          <h1>CREATE A TECHNIQUE</h1>
        </div>
        <br />
        <NewTechniqueForm
          key={this.state.id}
          onSubmit={this.createTechnique}
          errors={this.state.errors}
        />
      </main>
    );
  }
}