// Fetch all syllabus data and render here, not on the show page(s)

import React, {useState} from 'react';
import { Technique, TechniqueType, Syllabus, Belt } from '../requests';
// import { Link } from 'react-router-dom';
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Nav } from 'react-bootstrap'
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
        belts_group : [],
        rendered_techniques : [],
        rendered_technique_types : [],
        formatted_techniques : [],
        isLoading: true

      };
    }

    componentDidMount() {
      Belt.all().then(belts => {
        this.setState({
          belts: belts,
        });
      });

      // Technique.all().then(techniques => {
      //     // console.log(techniques)
      //   this.setState({
      //     techniques: techniques,
      //     belts_group: this.group_techniques_belts[techniques]
      //   });
      //   console.log("techniques", this.state.techniques)
      // });


      //   Syllabus.one(2).then(syllabus => { // This is hardcoded for Canada in this version of the database, fine as it is the only syllabus we are showing
      //       this.setState({
      //       technique_types: syllabus.technique_types,
      //       isLoading: false
      //       });
      //   });

        Technique.find().then(techniques => {
          // console.log("Found anything yet?")
          this.setState({
            rendered_techniques: [...techniques],
          })
      });
      
      TechniqueType.find().then(technique_types => {
        let result = [];
        result = technique_types.reduce(function (r, a) {
          r[a.belt_id] = r[a.belt_id] || [];
          r[a.belt_id].push(a);
          return r;
      }, Object.create(null))

      console.log("This is the result", result);
        // technique_types.map(item)
        // console.log("There!")
        // console.log("These are the types", technique_types)
        this.setState({
          // rendered_technique_types: [...technique_types],
          result: Object.values(result),
          rendered_technique_types: 
          technique_types.sort((belt1, belt2) => belt2.belt_id - belt1.belt_id),
          isLoading: false
        })


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
    });
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

        const filteredTechnique = showAll ? this.state.techniques : this.state.techniques.filter((t, i) => i < 400);
        let previousBeltId = 0;
        let previousTechniqueTypeId = 0;
        let technique_types_array = [];
        // console.log("these are the rendered techniques", this.state.rendered_techniques)
        console.log("these are the rendered technique types", this.state.rendered_technique_types)
        // console.log("these are the formatted techniques", this.state.formatted_techniques)


        return (
            <main className="SyllabusIndexPage">
                <br />
                <div className="central">
                <h2>SYLLABUS</h2>

                {/* <div>{this.state.formatted_techniques.map(all => {
                  return(
                    <>
                    {all}
                    </>
                  )
                })}

                </div> */}
                
                <div>{this.state.rendered_technique_types?
                this.state.result.map(type => {
                return(
                <>
                {type.belt.colour}
                <br />
                {type.category}
                <br />
                {type.sub_category}
                <br />
                {type.techniques.map(technique => 
                  (<> 
                  {technique.summary} 
                  </>))}
                <br />
                <br />

                {/* {this.state.rendered_techniques.map(tech => {
                  return(
                  <>
                    {tech.technique_type.id === type.id ? tech.summary:""}
                    <br />
                  </>
                  )
                })} */}
                </>
                )
                })
              : ""}
                </div>       
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
                          {console.log(technique)}
                            <li className="ui segment" key={technique.id}></li>
                            return(
                                <>
                            {this.state.belts.map(belt => {
                             if(belt.id === technique.belt_id) // Here we need to match the main belt.id with the technique.belt_id which has many different values based on which technique it is
                              if(belt.id === 3){ // Special case for light blue belt with "rd" as a suffix
                                // Store previous belt id (define it first) and only put a new header up if and when the belt id changes for the next colour.
                                if(previousBeltId !== belt.id){
                                  previousBeltId = belt.id;
                                return(
                                  <>
                                  <option className="gradecoloroption" style={{backgroundColor:"lightblue", pointerEvents:"none"}}>3rd kyu (Light Blue) </option>
                                  </>
                                )}}
                              else if(belt.id === 2){ // Special case for dark blue belt with "nd" as a suffix
                                if(previousBeltId !== belt.id){
                                  previousBeltId = belt.id;
                                return(
                                  <>
                                  <option className="gradecoloroption" style={{backgroundColor:"#00008b", color:"white", pointerEvents:"none"}}>2nd kyu (Dark Blue) </option>
                                  </>
                                )}}

                              else if(belt.id === 1){ // Special case for brown belt with "st" as a suffix
                                if(previousBeltId !== belt.id){
                                  previousBeltId = belt.id;
                                return(
                                  <>
                                  <option className="gradecoloroption" style={{backgroundColor:belt.colour, pointerEvents:"none"}}>{belt.id + "st kyu (" + belt.colour.charAt(0).toUpperCase() + belt.colour.slice(1) + ")"} </option>
                                  </>
                                )}}
                              else{
                              console.log("This is the previous belt id: " + previousBeltId)
                              console.log("This is the current belt id: " + belt.id)
                                if(previousBeltId !== belt.id){
                                  previousBeltId = belt.id;
                                  return(
                                    <>
                                    <option className="gradecoloroption" style={{backgroundColor:belt.colour, pointerEvents:"none"}}>{belt.id + "th kyu (" + belt.colour.charAt(0).toUpperCase() + belt.colour.slice(1) + ")"} </option>
                                    </>
                                  )}
                              }}
                             )}
                            <br />
                            {this.state.techniques.map(technique => {
                              // Check if grouped, loop through the belts group and render each group of techniques for a belt
                             if(technique.id && technique.belt_id === previousBeltId){ 
                              const type = this.state.technique_types.filter(item => item.id === technique.technique_type_id)
                              console.log("this is the type", type)
                              console.log("This is the previous technique type id: " + previousTechniqueTypeId)
                              console.log("This is the current technique type id: " + technique.technique_type_id)
                               if(previousTechniqueTypeId !== technique.technique_type_id){ // Attempting here to only print the technique type once per belt; not currently working, but why?
                                  previousTechniqueTypeId = technique.technique_type_id;
                                  console.log("Have we achieved success?" + previousTechniqueTypeId + technique.technique_type_id)
                                  return(
                                      <>
                                        {<text style={{fontStyle:"italic"}}>{type?.length ? type[0].category : ""}</text> }
                                        <br />
                                        {type?.length ? type[0].sub_category : ""}
                            {/* Need to wrap the following line over subsequent code, very carefully */}
                              {/* {this.state.techniques.map(technique => { return})} */}
                              <br />
                              <Nav.Link style={{ paddingLeft: 0, paddingTop: 0 }} href={`/techniques/${technique.id}`}>{technique.summary}</Nav.Link>
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
                               )}}
                            })}

                            </>

                            )}
                            )}
                            
                    </div>
            </main>
        );
    }
}

 {/* First fix this page and then adapt it to React Bootstrap */}