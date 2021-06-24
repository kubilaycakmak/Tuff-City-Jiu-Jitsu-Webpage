// Fetch all syllabus data and render here, not on the show page(s)

import React, {useState} from 'react';
import { Technique } from '../requests';
import { Syllabus } from '../requests';
import { Link } from 'react-router-dom';
import moment from "moment";
import Button from "react-bootstrap/Button";
import {confirm} from 'react-bootstrap-confirmation';
import "../App.css";


export class SyllabusIndexPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Populate the list of techniques through fetching them from the server and allow the page to load
        techniques: [],
        isLoading: true,
        technique_types: []
      };
    }

    componentDidMount() {
        Technique.all().then(techniques => {
            // console.log(techniques)
          this.setState({
            techniques: techniques,
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


    render() {
        const currentUser = this.props.currentUser;
        const { showAll = false} = this.props;
        
        this.state.techniques.forEach(t => console.log(t))

        const filteredTechnique = showAll ? this.state.techniques : this.state.techniques.filter((t, i) => i < 40);

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

                            {this.state.technique_types.map(type => {
                                return(
                                    <>
                                    {type.category}
                                    {type.sub_category}
                                    </>
                                )
                            })}
                                                        <br />
                            {technique.summary}
                            <br />

                            {technique.videos_id}
                            {technique.is_different ? (
                             <>
                             <br />
                             {technique.difference_content}
                             </>
                            ) : (

                            <p>Posted on {moment(technique.created_at ).format("MMM Do, YYYY")}</p>
                            )}
                                 <Button variant="danger" type="danger" onClick={id => this.deleteTechnique(technique.id)}>
                                    Delete
                                  </Button>
                            </>

                            )})}
                            
                    </div>
            </main>
        );
    }
}

/* Or is it the next one /technique/${technique.id}?*/

// First fix this page and then adapt it to React Bootstrap