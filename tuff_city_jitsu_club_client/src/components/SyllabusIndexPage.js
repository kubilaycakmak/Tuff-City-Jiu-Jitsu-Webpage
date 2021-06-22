// Fetch all syllabus data and render here, not on the show page(s)



import React from "react";

import { Auction } from '../requests';
import { Link } from 'react-router-dom';
import moment from "moment";
import "../App.css";


export class AuctionIndexPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Populate the list of auctions through fetching them from the server and allow the page to load
        auctions: [],
        isLoading: true
      };
    }

    componentDidMount() {
        Auction.all().then(auctions => {
          this.setState({
            auctions: auctions,
            isLoading: false
          });
        });
      }
    
    deleteAuction(id) {
        Auction.destroy(id).then(() => {
            this.setState({
            auctions: this.state.auctions.filter(q => q.id !== id)
            });
        });

    }

    render() {
        const { showAll = false} = this.props;
        const filteredAuction = this.state.auctions.filter((q, index) => {
            if (showAll || index < 40) {
                return true;
            }
            return false;
        });
        return (
            <main className="AuctionIndexPage">
                <br />
                <div className="central">
                <h2>AUCTIONS</h2>
                </div>
                <br />
                    <div
                        className="ui list"
                        style={{
                            listStyle: "none",
                            paddingLeft: 0
                        }}
                        >
                        {filteredAuction.map(auction => (
                            <li className="ui segment" key={auction.id}>
                            <Link to={`/auctions/${auction.id}`} className="item" href="">
                                {auction.title}
                            </Link>
                            <p>Posted on {moment(auction.created_at ).format("MMM Do, YYYY")}</p>
                            </li>
                        ))}
                    </div>
            </main>
        );
    }
}