// Fetch all syllabus data and render here, not on the show page(s)

import React, {useState} from 'react';
import { Technique, Syllabus, Belt } from '../requests';
// import { Link } from 'react-router-dom';
import moment from "moment";
import Button from "react-bootstrap/Button";
// import {confirm} from 'react-bootstrap-confirmation';
import "../App.css";


export class SyllabusIndexPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Populate the list of techniques through fetching them from the server and allow the page to load
        techniques: [],
        technique_types: [],
        belts : [],
        isLoading: true

      };
    }

    componentDidMount() {
        Technique.all().then(techniques => {
            // console.log(techniques)
          this.setState({
            techniques: techniques,
          });
        });

        Belt.all().then(belts => {
          this.setState({
            belts: belts,
          });
        });

        Syllabus.one(2).then(syllabus => { // This is hardcoded for Canada in this version of the database, fine as it is the only syllabus we are showing
            this.setState({
            technique_types: syllabus.technique_types,
            isLoading: false
            });
        });
      }
    
    deleteTechnique(id) {
        Technique.destroy(id).then(() => {
            this.setState({
            techniques: this.state.techniques.filter(q => q.id !== id)
            });
        });

    }

    string_to_array = function (str) {
      return str.trim().split(" ");
 };


    render() {
        const currentUser = this.props.currentUser;
        const { showAll = false} = this.props;
        
        this.state.techniques.forEach(t => console.log(t))
        // this.state.belts.forEach(b => console.log(b))
        console.log("These are the belts" + Belt.all())
        console.log(Array.isArray(this.state.belts))

        const filteredTechnique = showAll ? this.state.techniques : this.state.techniques.filter((t, i) => i < 40);
        let previousBeltId = 0;

        return (
            <main className="SyllabusIndexPage">
                <br />
                <div className="central">
                <h2>SYLLABUS</h2>
                </div>
                <br />
                    <div
                        className="ui list"
                        style={{
                            listStyle: "none",
                            paddingLeft: 0
                        }}
                        >
                        {filteredTechnique.map(technique => {
                            <li className="ui segment" key={technique.id}></li>
                            return(
                                <>
                            {/* <Link to={`/syllabus/${technique.id}`} className="item" href="">
                                {technique.title}
                            </Link> */}

                            {this.state.belts.map(belt => {
                             if(belt.id === technique.belt_id) // Here we need to match the main belt.id with the technique.belt_id which has many different values based on which technique it is
                              if(belt.id === 3){ // Special case for light blue belt with "rd" as a suffix
                                // Store previous belt id (define it first) and only put a new header up if and when the belt id changes for the next colour.
                                if(previousBeltId != belt.id){
                                  previousBeltId = belt.id;
                                return(
                                  <>
                                  <option className="gradecoloroption" style={{backgroundColor:"lightblue", pointerEvents:"none"}}>3rd kyu (Light Blue) </option>
                                  </>
                                )}}
                              else if(belt.id === 2){ // Special case for dark blue belt with "nd" as a suffix
                                if(previousBeltId != belt.id){
                                  previousBeltId = belt.id;
                                return(
                                  <>
                                  <option className="gradecoloroption" style={{backgroundColor:"#00008b", color:"white", pointerEvents:"none"}}>2nd kyu (Dark Blue) </option>
                                  </>
                                )}}

                              else if(belt.id === 1){ // Special case for brown belt with "st" as a suffix
                                if(previousBeltId != belt.id){
                                  previousBeltId = belt.id;
                                return(
                                  <>
                                  <option className="gradecoloroption" style={{backgroundColor:belt.colour, pointerEvents:"none"}}>{belt.id + "st kyu (" + belt.colour.charAt(0).toUpperCase() + belt.colour.slice(1) + ")"} </option>
                                  </>
                                )}}
                              else{
                              console.log("This is the previous belt id: " + previousBeltId)
                              console.log("This is the current belt id: " + belt.id)
                                if(previousBeltId != belt.id){
                                  previousBeltId = belt.id;

                                  return(
                                    <>
                                    <option className="gradecoloroption" style={{backgroundColor:belt.colour, pointerEvents:"none"}}>{belt.id + "th kyu (" + belt.colour.charAt(0).toUpperCase() + belt.colour.slice(1) + ")"} </option>
                                    </>

                                  )}
                                  
                              }}
                             )}
                            {this.state.technique_types.map(type => {
                             if(type.id === technique.technique_type_id) 
                             return(
                                 <>


                                    {<text style={{fontStyle:"italic"}}>{type.category}</text> }
                                    <br />
                                    {type.sub_category}
                                    </>
                               )
                            })}
                            <br />
                            {technique.summary}
                            <br />

                            {/* {technique.videos_id} */}
                            <br />
                            {technique.is_different ? (
                             <>
                             {<text style={{fontWeight:"bold"}}>What's different to the UK syllabus?</text> }
                             <br />
                             {technique.difference_content}
                             <br />
                             <br />
                             <p>Posted on {moment(technique.created_at ).format("MMM Do, YYYY")}</p>

                             </>
                            ) : (

                            <p>Posted on {moment(technique.created_at ).format("MMM Do, YYYY")}</p>
                            )}
   
                                 <Button variant="danger" type="danger" onClick={id => this.deleteTechnique(technique.id)}>
                                    Delete
                                  </Button>
                                  <br />
                                  <br />
                                  <br />

                            </>

                            )})}
                            
                    </div>
            </main>
        );
    }
}

// First fix this page and then adapt it to React Bootstrap