import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import { Auction, Bid } from "../requests";
import { BidList } from "./BidList";
import NewBidForm from "./NewBidForm";

class AuctionShowPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        auction: null,
        isLoading: true,
        errors: []
      };
    }
    createBid = (id, params) => {
        Bid.create(id, params).then(bid => {
            if (bid.errors) {
                this.setState({ errors: bid.errors })      // When using a constructor in a class-based
                // component, you must call the 'Component' class
                // constructor with 'super' passing it props;
            }
        });
    };

    componentDidMount() {
        console.log(this.props.match.params.id)
        Auction.one(this.props.match.params.id).then(auction => {
            this.setState({
                auction: auction,
                isLoading: false
            });
        });
    }

    deleteAuction() {
        this.setState({
            auction: null
        });
    }

    deleteBid(id) {
    this.setState({
        auction: {
        ...this.state.auction,
        bids: this.state.auction.bids.filter(a => a.id !== id)
        }
    });
    }
    render() {

        const currentUser = this.props.currentUser;
        const { bids = [] } = this.state.auction?this.state.auction:[];

        const userIsOwner = () => {

        };
        return (
            <main>
                <AuctionDetails {...this.state.auction} />
            
                {currentUser ? (
                    <>
                        <NewBidForm
                            auction={this.state.auction}
                            onSubmit={this.createBid}
                            errors={this.state.errors}
                        />
                    </>
                ) : (
                    <React.Fragment></React.Fragment>
                )}
                <br />
                 <p><u>Previous Bids</u> {userIsOwner()}</p>

                    <BidList bids={bids} onBidDeleteClick={id => this.deleteBid(id)} />
            </main>
        );
    }
}

export default AuctionShowPage;