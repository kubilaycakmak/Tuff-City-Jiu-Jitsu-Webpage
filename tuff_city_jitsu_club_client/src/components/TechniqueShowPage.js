// Show an individual technique here, including it's video, and allow for an edit function
// Work in progress

import React, { Component } from "react";


import { Technique, Syllabus } from "../requests";
import moment from "moment";
import Button from "react-bootstrap/Button";


class TechniqueShowPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        technique: {},
        technique_type: [],
        isLoading: true,
        errors: []
      };
    }


    componentDidMount() {
        console.log(this.props)
        Technique.one(this.props.match.params.id).then(technique=> {
            this.setState({
                technique: technique,
                isLoading: false
            });
        });

        Syllabus.one(2).then(syllabus => { // This is hardcoded for Canada in this version of the database, fine as it is the only syllabus we are showing
            this.setState({
            technique_types: syllabus.technique_types,
            isLoading: false
            });
        });
    }

    deleteTechnique() {
        this.setState({
            technique: null
        });
    }

    // Modify this block to delete comments

    // deleteBid(id) {
    // this.setState({
    //     auction: {
    //     ...this.state.auction,
    //     bids: this.state.auction.bids.filter(a => a.id !== id)
    //     }
    // });
    // }
    // const technique = this.state.technique;
    render() {

        const currentUser = this.props.currentUser;
        console.log(currentUser)

        console.log(this.state);

        return (
            <main className="TechniqueShowPage">
            <br />
            <div className="central">
            <h2>TECHNIQUE</h2>
            </div>
            <br />
                <div
                    className="ui list"
                    style={{
                        listStyle: "none",
                        paddingLeft: 0
                    }}
                    >
                        
                            <>
                        {/* <Link to={`/syllabus/${technique.id}`} className="item" href="">
                            {technique.title}
                        </Link> */}
                        {/* {this.state.belts.map(belt => {
                        console.log("Testing 1 2 3");
                        console.log("LHS " + belt.id + "RHS " + technique.belt_id);
                         if(belt.id === technique.belt_id) 
                         return(
                             <>
                                {belt}
                             </>
                            )
                         })} */}
                        {/* {this.state.technique_types.map(type => {
                         if(type.id === this.state.technique.technique_type_id) 
                         return(
                             <>
                             style={{backgroundColor:"yellow"}}
                             <option className="gradecoloroption" style={{backgroundColor:"yellow"}} value={7}>Yellow </option>


                                {<text style={{fontWeight:"italics"}}>type.category</text> }
                                <br />
                                {type.sub_category}
                                </>
                           )
                        })} */}
                        <br />
                        {this.state.technique.summary}
                        <br />

                        {this.state.technique.videos_id}
                        <br />
                        {this.state.technique.is_different ? (
                         <>
                         <br />
                         {this.state.technique.difference_content}
                         </>
                        ) : (
                        <>
                        { this.state.technique?.created_at? 

                        <>
                            <p>Posted on {moment(this.state.technique.created_at ).format("MMM Do, YYYY")}</p>
                            <Button variant="danger" type="danger" onClick={id => this.deleteTechnique(this.state.technique.id)}>
                            Delete
                          </Button>
                          <br />
                          <br />
                          <br />
                          </>
                        : ""
                        }
                        </>
                        )}



                        </>
              </div>
        </main>
    );}
                        

            // <main>
            //     <AuctionDetails {...this.state.auction} />
            
            //     {currentUser ? (
            //         <>
            //             <NewBidForm
            //                 auction={this.state.auction}
            //                 onSubmit={this.createBid}
            //                 errors={this.state.errors}
            //             />
            //         </>
            //     ) : (
            //         <React.Fragment></React.Fragment>
            //     )}
            //     <br />
            //      <p><u>Previous Bids</u> {userIsOwner()}</p>

            //         <BidList bids={bids} onBidDeleteClick={id => this.deleteBid(id)} />
            // </main>

}


export default TechniqueShowPage;