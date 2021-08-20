// import Techniques from "./TechniqueSummary";
// import React from "react";
// import Text from React;
// import HTMLView from 'react-native-htmlview';
// import ReactHtmlParser from 'react-html-parser';
import moment from "moment";
import _ from "lodash";
// Consider making the following function it's own component if reused multiple times

function capitaliseTheFirstLetterOfEachWord(words) {
    let individualWord = words.toLowerCase().split(' ');
    for (var i = 0; i < individualWord.length; i++) {
        individualWord[i] = individualWord[i].charAt(0).toUpperCase() +
        individualWord[i].substring(1);
    }
    return individualWord.join(' ');
 }

 function textColour(integer) {
     let color = "";
     if (integer === 2 || integer === 4) {
         color = "white"; // This makes the dark blue header text display better
         return color;
     } else {
         color = "black";
         return color;
     }

 }

 let finishKyu = function(integer) {
    let suffix = "";
    console.log("This is the integer", integer)
    if (integer === 1) {
        suffix = "st";
        return suffix;
    } else if (integer === 2) {
        suffix = "nd";
        return suffix;
    } else if (integer === 3) {
        suffix  = "rd";
        return suffix;
    } else {
        suffix = "th";
        return suffix;
    }
}

function Belts(props) {
    let itemShorthand = props.item[0].belt

    console.log("This is the Kyu number", itemShorthand.id)
    // const htmlContent = "<i>Kyu</i>"
    const groupedEntries = _.keyBy(props.item, "category")
    console.log("Grouped entries are", groupedEntries);
    return(
        <>
{/* <option className="gradecoloroption" style={{backgroundColor:belt.colour, pointerEvents:"none"}}>{belt.id + "th kyu (" + belt.colour.charAt(0).toUpperCase() + belt.colour.slice(1) + ")"} </option> */}

    <h1 style={{fontWeight:"bold", display: "flex", justifyContent:'center', backgroundColor:itemShorthand.colour.replace(/ +/g, ""), color:textColour(itemShorthand.id), pointerEvents:"none"}}>{itemShorthand.id  + finishKyu(itemShorthand.id) + " Kyu (" + capitaliseTheFirstLetterOfEachWord(itemShorthand.colour) + ")"}</h1>
    {/* {JSON.stringify(_.keyBy(props.item, "category"))} */}
    {Object.keys(groupedEntries).map(key => <div key = {key}>{groupedEntries[key].map(item => {
        console.log("This is of interest", item.id)
        return(
            <div key = {item.id}>
            <br />
            {/* <div style={{fontWeight:"bold", fontStyle:"italic"}}>{item.category + ":"}</div>  */}
            <div>{key}</div>
            <br />
             {item.techniques.map(element => {
                return(
                <div key = {element.id}>
                <div>{element.summary}</div>
                {element.is_different ? (
                    <>
                    {<text style={{fontWeight:"bold"}}>What's different to the UK syllabus?</text> }
                    <br />
                    {element.difference_content}
                    <br />
                    <br />
                    <p>Posted on {moment(element.created_at ).format("MMM Do, YYYY")}</p>

                    </>
                    ) : (

                    <p>Posted on {moment(element.created_at ).format("MMM Do, YYYY")}</p>
                    )}
                    </div>
                )
            })}
            <div>{item.sub_category}</div>
            {/* Need to sort category according to this pattern:
             Waza, Ukemi, Atemi, Kansetsu, Ne-waza, Nage-Waza, ------. Henka-waza, Bunka, (Misc)*/}
            <div>{item.techniques_id}</div>
            <br />
            </div>
        )
    })}</div>)}
    
    </>
    )
}

export default Belts;