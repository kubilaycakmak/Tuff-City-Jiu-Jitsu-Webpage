import React from "react";
import new_students from '../img/new_students.jpg';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Table from "react-bootstrap/Table";
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export class WhatIsJiuJitsu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    
    render() {
      return (
          <>
          <Card style={{backgroundColor: "gray", color: "white"}}>
            <img src={new_students} alt="newstudents"></img>
              <Card.Header id="capitalised-header" style={{textTransform: 'uppercase'}}>Beginner's Information for New Students</Card.Header>
              <br />
              <Card.Link href="#" style={{textDecorationLine: 'underline', color: 'red', fontSize: 14, paddingLeft: 20}} activeClass="active" to="equipment" spy={true} smooth={true}>Equipment Requirements</Card.Link>
              <Card.Link href="#" style={{textDecorationLine: 'underline', color: 'red', fontSize: 14}}  to="expect" spy={true} smooth={true}>What to Expect When Training</Card.Link>
              <Card.Link href="#" style={{textDecorationLine: 'underline', color: 'red', fontSize: 14}} to="etiquette" spy={true} smooth={true}>Dojo Etiquette</Card.Link>
              <Card.Link href="#" style={{textDecorationLine: 'underline', color: 'red', fontSize: 14}} to="belts" spy={true} smooth={true}>Belt System</Card.Link>
              <Card.Link href="#" style={{textDecorationLine: 'underline', color: 'red', fontSize: 14}} to="terminology" spy={true} smooth={true}>Terminology</Card.Link>
              <br />
              <div id="home" style={{height: 500}}>
            <Card.Header id="capitalised-header" style={{textTransform: 'uppercase'}}>Equipment Requirements</Card.Header>
            <br />

            <Card.Text style={{paddingLeft: 15, paddingRight: 15, fontSize: 14}} >To try jiu jitsu, all you need is comfortable loose clothing without buckles, or buttons.
            A pair of track pants and a t-shirt are appropriate. If you decide to continue in jiu jitsu, to start you will require: A plain white judo gi
            with association badge, (no manufacturer's logos, embroidery, etc) and a pair of ‘zori’ sandals for off the mat wear. Prices vary by size however
            this should cost approximately $85. Please contact the instructor for details on how to purchase the uniform.
            <br />
            <br />


            As you progress in your Jiu Jitsu training, you may wish to purchase other equipment. You can discuss these options with your instructor.</Card.Text>
            </div>
            <Card.Header id="capitalised-header" style={{textTransform: 'uppercase'}}>What To Expect When Training</Card.Header>
            <br />

            <Card.Text style={{paddingLeft: 15, paddingRight: 15, fontSize: 14}} >
            Although all sessions are varied, techniques are usually taught by demonstration to the group by the instructor followed by training with a partner
            while the instructor circulates giving individual attention. All sessions start with a thorough warm-up, followed by break-falling practice (this
            teaches the participant to land with safety). All sessions finish with a brief review and cool-down. 
            <br />
            <br />

            During the first three months, students will practice:
            </Card.Text>
            <Card.Text style={{paddingLeft: 30, fontSize: 14}} >  

            • Break-falling techniques
            <br />
            <br />
            • Basic body movements, blocks and strikes:
            <br />
            <br />
            • Evading the attack
            <br />
            <br />
            • Blocking the attack
            <br />
            <br />
            • Taking control of the other person
            <br />
            <br />
            • Basic defence techniques from various body grabs            
            <br />
            <br />
            • Basic defences against punches and kicks
            <br />
            <br />
            • Basic defences against weapons such as bottle attacks </Card.Text>

            <Card.Text style={{paddingLeft: 15,paddingRight: 15, fontSize: 14}} >
            Grading examinations for rank belts are every three months, although, as the participants progress through the grading structure, the time between
            grading examinations increases to allow them to develop a deeper understanding of the more advanced techniques.
            <br />
            <br />
            Participants will also have the opportunity to meet and train with members of our other clubs as Jitsu Canada schedules regional events throughout
            the year. This allows participants to train with new people, receive instruction from different instructors, and benefit from the social aspects of
            meeting other jiu jitsu students.
            <br />
            <br />
            Participants do not need a gi (uniform) to start with (track pants and T-shirt will do) but if the student is interested in pursuing jiu jitsu for
            an extended period, a gi is required.
            <br />
            <br />
            </Card.Text>

            <Card.Header id="capitalised-header" style={{textTransform: 'uppercase'}}>Dojo Etiquette</Card.Header>
            <br />

            <Card.Text style={{paddingLeft: 15, paddingRight: 15, fontSize: 14}} >
            To learn jiu jitsu it is essential to accept the etiquette and customs of the dojo (training hall). These assist both learning and safety.
            <br />
            <br />
            A rei (bow) should be made on entering the dojo to signify mental preparation for training. A rei should also be made before leaving the dojo.
            <br />
            A rei should be made to the highest grade on the mat before stepping onto the mat. Likewise, the highest grade should be asked before leaving the mat,
            and a rei should be made before stepping off the mat.
            <br />
            Students should rei to each other before training together and similarly should rei when they finish.
            <br />
            Alcohol must not be consumed before training.
            <br />
            Gi (uniforms) are to be kept clean and tidy and the belt tied correctly.
            <br />
            Fingernails and toenails should be short and clean.
            <br />
            All jewellery must be removed before training.
            <br />
            Changing is not permitted in the dojo.
            <br />
            Club instructors and dan grades (black belts) are to be addressed as "sensei", senior grades as "sempai".
            <br />
            The correct way to stand when being taught is with the back of the left hand resting on the knot of the belt and the back of the right hand resting on the palm of the left.
            <br />
            Swearing, or loosing one's temper, is not permitted in the dojo.
            <br />
            When training, a student should always be mindful of the safety of those around him/her.
            <br />
            <br />
        </Card.Text>

        <CardGroup>
        <div class="col-md-8">
  <Card style={{backgroundColor: "gray", color: "white", paddingLeft: 0}}>
    <Card.Body >
    <br />
    <br />
    <Card.Header id="capitalised-header" style={{textTransform: 'uppercase', paddingLeft: 0}}>Belt System</Card.Header>
    <Card.Text  style={{paddingLeft: 0, paddingRight: 0, fontSize: 14}}>
    <br />
    <br />
    Advancement in jiu jitsu is recognised by a series of ranks. The student ranks are called "kyu" (meaning grade) and are differentiated by coloured belts. The ten black belt ranks
    are called "dan" (meaning degree or step).
    <br />
    <br />
    A new student wears a white belt until they pass their first grading. The first two student grades have sub divisions called "mon" (meaning junior grade). A person testing for 7th
    kyu may be awarded a yellow belt, a yellow belt with one mon, a yellow belt with two mon, or a yellow belt with three mon. The same system applies to the 6th kyu (orange belt) grade.
    Mon are designated by orange stripes on the yellow belt and green stripes on the orange belt.
    <br />
    <br />
    The student who trains regularly (at least twice a week) may initially progress fairly rapidly through the student grades. Progress from white belt to yellow belt takes a minimum of
    three months, from yellow to orange a minimum three months, from orange to green a minimum three months, and from green to purple a minimum three months. There is a minimum period
    of six months from purple to light blue, minimum six months from light blue to dark blue, and minimum six months from dark blue to brown.
    <br />
    <br />
    Progress through the black belts is much slower. There is a two year minimum between brown belt and 1st degree black belt, and several years between each level of dan grade. High
    degrees of black belt therefore involve a lifetime of study and are consequently rare.
    </Card.Text>
</Card.Body>
  </Card>
  </div>
  <Card style={{backgroundColor: "gray", color: "white", paddingLeft: 0}}>

    <Card.Body>
    <Table responsive>
  <thead>
    <tr>
      <th>Grade Level</th>
      <th>Belt Colour</th>
    </tr>
  </thead>
  <tbody>
  <tr bgcolor="yellow">
      <td>7th kyu</td>
      <td>yellow </td>
    </tr>
    <tr bgcolor="orange">
      <td>6th kyu</td>
      <td>orange </td>
    </tr>
    <tr bgcolor="green">
      <td>5th kyu</td>
      <td>green </td>
    </tr>
    <tr bgcolor="purple">
      <td>4th kyu</td>
      <td>purple </td>
    </tr>
    <tr bgcolor="#add8e6">
      <td>3rd kyu</td>
      <td>light blue </td>
    </tr>
    <tr bgcolor="#00008b">
      <td className="whiteText">2nd kyu</td>
      <td className="whiteText">dark blue </td>
    </tr>
    <tr bgcolor ="#b5651d">
      <td>1st kyu</td>
      <td>brown </td>
    </tr>
    <tr bgcolor ="black">
      <td className="whiteText">1st dan to 6th dan</td>
      <td className="whiteText">black </td>
    </tr>
    <tr bgcolor ="D61517">
      <td className="whiteText">6th dan to 8th dan</td>
      <td className="whiteText">red and white </td>
    </tr>
    <tr bgcolor ="red">
      <td>9th dan to 10th dan</td>
      <td>red</td>
    </tr>

  </tbody>
</Table>
    </Card.Body>

  </Card>
</CardGroup>
<Card style={{backgroundColor: "gray", color: "white", paddingLeft: 15}}>
<Card.Header id="capitalised-header" style={{textTransform: 'uppercase', paddingLeft: 0}}>Terminology</Card.Header>
<Card.Body>
    <Table responsive>
  <thead>
    <tr bgcolor="#b5651d">
      <th>Japanese Terms</th>
      <th>English Translation</th>
    </tr>
  </thead>
  <tbody>
  <tr bgcolor="orange">
      <td>Instructions</td>
      <td></td>
    </tr>  
  <tr bgcolor="yellow">
      <td>kiyotske</td>
      <td>attention/listen </td>
    </tr>
    <tr bgcolor="orange">
      <td>yoi</td>
      <td>get ready</td>
    </tr>
    <tr bgcolor="yellow">
      <td>hajime</td>
      <td>begin</td>
    </tr>
    <tr bgcolor="orange">
      <td>matte</td>
      <td>pause</td>
    </tr>
    <tr bgcolor="yellow">
      <td>yoshi</td>
      <td>continue</td>
    </tr>
    <tr bgcolor ="orange">
      <td>yamae!</td>
      <td>stop!</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>Other Terms</td>
      <td></td>
    </tr>
    <tr bgcolor ="orange">
      <td>dojo</td>
      <td>training hall</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>gi</td>
      <td>uniform</td>
    </tr>
    <tr bgcolor ="orange">
      <td>kata</td>
      <td>set form of techniques or movements</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>mokuso</td>
      <td>meditation</td>
    </tr>
    <tr bgcolor ="orange">
      <td>obi</td>
      <td>belt</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>rei</td>
      <td>bow</td>
    </tr>
    <tr bgcolor ="orange">
      <td>seiza</td>
      <td>kneeling position</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>sempai</td>
      <td>senior</td>
    </tr>
    <tr bgcolor ="orange">
      <td>sensei</td>
      <td>teacher</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>tatame</td>
      <td>mat</td>
    </tr>
    <tr bgcolor ="orange">
      <td>tori</td>
      <td>person performing the defensive technique</td>
    </tr>
    <tr bgcolor ="yellow">
      <td>uke</td>
      <td>person on whom the technique is performed against</td>
    </tr>
    <tr bgcolor ="orange">
      <td>ukemi</td>
      <td>break-falling</td>
    </tr>

  </tbody>
</Table>
    </Card.Body>
</Card> 
    <Card.Text style={{paddingLeft: 90, fontSize: 14}} >
        Reproduced With Permission. All Contents Copyright © Jitsu Canada 1999-2018 
    </Card.Text>
        </Card>


</>

        
      );
    }
  }