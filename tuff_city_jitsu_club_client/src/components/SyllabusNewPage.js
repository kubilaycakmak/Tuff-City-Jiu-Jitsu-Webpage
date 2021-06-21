import React, { Component } from "react";

import { Syllabus } from "../requests";
import NewTechniqueForm from "./NewTechniqueForm";

export default class SyllabusNewPage extends Component {
  state = {
    errors: []
  };
  createAuction = params => {
    Auction.create(params).then(auction => {
      if (auction.errors) {
        this.setState({ errors: auction.errors });
      } else {
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  };

  render() {
    return (
      <main>
        <div className="central">
          <h1>CREATE AN AUCTION</h1>
        </div>
        <br />
        <NewAuctionForm
          key={this.state.id}
          onSubmit={this.createAuction}
          errors={this.state.errors}
        />
      </main>
    );
  }
}