// Fetch all syllabus data and render here, not on the show page(s)



import React from "react";

import { Technique } from '../requests';
import { Link } from 'react-router-dom';
import moment from "moment";
import "../App.css";


export class SyllabusIndexPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Populate the list of techniques through fetching them from the server and allow the page to load
        techniques: [],
        isLoading: true
      };
    }

    componentDidMount() {
        Technique.all().then(techniques => {
          this.setState({
            techniques: techniques,
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
        const { showAll = false} = this.props;
        const filteredTechnique = this.state.techniques.filter((q, index) => {
            if (showAll || index < 40) {
                return true;
            }
            return false;
        });
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
                        {filteredTechnique.map(technique => (
                            <li className="ui segment" key={technique.id}>
                            /* Or is the next one /technique/${technique.id}?*/
                            <Link to={`/syllabus/${technique.id}`} className="item" href="">
                                {technique.title}
                            </Link>
                            <p>Posted on {moment(technique.created_at ).format("MMM Do, YYYY")}</p>
                            </li>
                        ))}
                    </div>
            </main>
        );
    }
}