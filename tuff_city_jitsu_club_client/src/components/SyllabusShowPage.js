// Fetch all syllabus data and render here, not on the show page(s)

import React, {useState} from 'react';
import { Technique, TechniqueType, Syllabus, Belt } from '../requests';
// import { Link } from 'react-router-dom';
import moment from "moment";
import Belts from "./Belts";
import Button from "react-bootstrap/Button";
import { Nav } from 'react-bootstrap'
// import {confirm} from 'react-bootstrap-confirmation';
import "../App.css";

export class SyllabusShowPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Populate the list of techniques through fetching them from the server and allow the page to load
        syllabus: [],
        techniques: [],
        technique_types: [],
        belts : [],
        belts_group : [],
        rendered_techniques : [],
        rendered_technique_types : [],
        formatted_techniques : [],
        isLoading: true

      };
    }

    componentDidMount() {

        Syllabus.one(1).then(syllabus => { // This is hardcoded for Canada in this version of the database, fine as it is the only syllabus we are showing currently
            this.setState({
            syllabus: [...syllabus],
            technique_types: syllabus.technique_types,
            techniques: syllabus.techniques,
            belts: syllabus.belts,
            isLoading: false
            });
        });

    //     Technique.find().then(techniques => {
    //       // console.log("Found anything yet?")
    //       this.setState({
    //         rendered_techniques: [...techniques],
    //       })
    //   });
      
    //   TechniqueType.find().then(technique_types => {
    //     let result = [];
    //     result = technique_types.reduce(function (r, a) {
    //       r[a.belt_id] = r[a.belt_id] || [];
    //       r[a.belt_id].push(a);
    //       return r;
    //   }, Object.create(null))

    //   console.log("This is the result", result);
    //   console.log("Final result", Object.values(result))
    //     // technique_types.map(item)
    //     // console.log("There!")
    //     // console.log("These are the types", technique_types)
    //     this.setState({
    //       // rendered_technique_types: [...technique_types],
    //       beltColors: result,
    //       result: Object.values(result),
    //       rendered_technique_types: 
    //       technique_types.sort((belt1, belt2) => belt2.belt_id - belt1.belt_id),
    //       isLoading: false
    //     })
    //     this.state.result.map(item => {
    //       item.map(element => {
    //         console.log("this is the element", element.belt_id)
    //       })
    //     })


          // Following block doesn't work
          // technique_types.forEach(type => {

          // let output = {};
          // this.state.rendered_techniques.forEach(tech => {
          //   console.log("Here")
          //   if(type.id === tech.technique_type.id) {
          //     output.technique = tech;
          //     output.technique_type = type;
          //   }
  
          // })
          // this.setState(previousState => ({
          //   formatted_techniques: [...previousState.formatted_techniques, output]
          // }))
    // });
    console.log("anything")
  }
  

      // this.state.rendered_technique_types.forEach(type => {
      //   let output = {};
      //   this.state.rendered_techniques.forEach(tech => {
      //     console.log("Here")
      //     if( type.id === tech.technique_type.id) {
      //       output.technique = tech;
      //       output.technique_type = type;
      //     }

      //   })
      //   this.setState({
      //     formatted_techniques: [...output],
      //   })
      // }


    
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

    // group_techniques_belts = function (techniques) {
    //   const output = [];
    //   const belt_array = this.state.belts.map(belt => belt.id);
    //   const j = 0;
    //   // First belt id's technique id should be the first technique's belt id
    //   // Then keep comparing the belt id with the next belt id, and keep reassigning it 
    //   let belt = this.state.techniques[0].belt_id;
    //   this.state.techniques.forEach(technique => {
    //     let group = [];
    //     if(belt === technique.belt_id){
    //       group.push(technique)

    //     }
    //     belt = technique.belt_id;
    //     output.push(group);
    //     // Loop through each technique
    //     // Push all the techniques that have the same belt id into the belt array
    //     // When displaying at the bottom take everything from the belt array, hence grouping them by the belt id
    //   })
    //   return output;
    // };


    render() {
        const currentUser = this.props.currentUser;
        const { showAll = false} = this.props;
        
        // this.state.techniques.forEach(t => console.log(t))
        // this.state.belts.forEach(b => console.log(b))
        // console.log("These are the belts" + Belt.all())
        // console.log(Array.isArray(this.state.belts))

        // const filteredTechnique = showAll ? this.state.techniques : this.state.techniques.filter((t, i) => i < 400);
        let previousBeltId = 0;
        let previousTechniqueTypeId = 0;
        let technique_types_array = [];
        // console.log("these are the rendered techniques", this.state.rendered_techniques)
        console.log("these are the rendered technique types", this.state.rendered_technique_types)
        console.log("this is the syllabus", this.state.syllabus)
        console.log("these are the belts", this.state.belts) // Undefined so not being triggered
        // console.log("these are the formatted techniques", this.state.formatted_techniques)


        return (
            <main className="SyllabusShowPage">
                <br />
                <div className="central">
                <h2 style={{display: "flex", justifyContent:'center'}}>SYLLABUS</h2>
                <br />


                {/* {this.state.syllabus && this.state.syllabus.reverse().map(item)}
                return(
                    <div>{this.state.syllabus.reverse()}</div>
 
                ) */}


                {this.state.syllabus && this.state.syllabus.reverse().map((item, i) => { // Reverse causes it to sort the list from yellow to brown, scrolling down
                  return(
                    <Belts item={item} key={i} />
                  )
                  })}     


                </div>
                <br />
                    <div
                        className="ui list"
                        style={{
                            listStyle: "none",
                            paddingLeft: 0
                        }}
                        >

                    </div>
            </main>
        );
    }
}

 {/* First fix this page and then adapt it to React Bootstrap */}