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
        color = "white"; // This makes the dark blue's or purple's header text display better
        return color;
    } else {
        color = "black";
        return color;
    }
}

 let finishKyuNumber = function(integer) {
    let suffix = "";
    //console.log("This is the integer", integer)
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
    // "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~",
    let orderArray = ["Waza (techniques)", "Ukemi (breakfalling)", "Atemi (striking)", "Kansetsu (locks)", "Ne-Waza (groundwork)", "Nage-waza (throwing)", "Henka-waza (transition techniques)", "Kaeshi-waza (counter techniques)", "Bunkai (application)", "(Misc)"];
    console.log("These are the props", props)
    console.log("We need to shorthand this", props.item)
    let beltShortHand = props.item.belts[0];
    let techniqueTypeShortHand = props.item.technique_types[0];
    console.log("This is the belt shorthand aka 'Xth belt'", beltShortHand)
    console.log("This is the technique type shorthand aka 'Xth technique type'", techniqueTypeShortHand)


    //console.log("This is the Kyu number", beltShortHand.id)
    // const htmlContent = "<i>Kyu</i>"
    const groupedEntries = _.groupBy(props.item, "category")
    let sortedArray = [];
    // orderArray.forEach(item => {
    //     if(groupedEntries[item]) 
    //     {sortedArray.push(groupedEntries[item])}
    // })
    const sortedArrayTwo = Object.entries(groupedEntries).sort((a, b) => {
        return orderArray.indexOf(a[0]) - orderArray.indexOf(b[0])
    }).forEach(item => {
        sortedArray.push(item[1])
    })
    
    console.log("This is the second sorted array", sortedArrayTwo)
    console.log("Grouped entries are", groupedEntries);
    console.log("Sorted entries are", sortedArray);
    return(

        <>
{/* <option className="gradecoloroption" style={{backgroundColor:belt.colour, pointerEvents:"none"}}>{belt.id + "th kyu (" + belt.colour.charAt(0).toUpperCase() + belt.colour.slice(1) + ")"} </option> */}

    <h1 style={{fontWeight:"bold", display: "flex", justifyContent:'center', backgroundColor:beltShortHand.colour.replace(/ +/g, ""), color:textColour(beltShortHand.id), pointerEvents:"none"}}>{beltShortHand.id  + finishKyuNumber(beltShortHand.id) + " Kyu (" + capitaliseTheFirstLetterOfEachWord(beltShortHand.colour) + ")"}</h1>
    {/* {JSON.stringify(_.groupBy(props.item, "category"))} */}

    {sortedArray.map((key, index) => 
    <div key = {index}>
    <div style={{fontWeight:"bold", fontStyle:"italic"}}>{key[0].category + ":"}</div> 
        {key.map(techniqueTypeShortHand => {
        //console.log("This is of interest", item.category)
        console.log("Does this part exist?", techniqueTypeShortHand.belt)
    
        return(
            <div key = {techniqueTypeShortHand.id}>
             {techniqueTypeShortHand.techniques.map(element => {
                return(
                <div key = {element.id}>
                <div>{techniqueTypeShortHand.sub_category}</div>

                {element.is_different ? (
                    <>
                    {<p style={{fontWeight:"bold"}}>What's different to the UK syllabus?</p> }
                    <br />
                    {element.difference_content}
                    <br />
                    </>
                    ) : (
                    // Adjust the next line so it's absent (don't need redundant p-tags)
                    <></>
                    )}
                    </div>
                )
            })}
            <br />
            {/* Test that the following date is for the correct thing, i.e. the technique creation date */}
            <p>Posted on {moment(techniqueTypeShortHand.created_at ).format("MMM Do, YYYY")}</p>

            {/* Need to sort category according to this pattern:
             Waza, Ukemi, Atemi, Kansetsu, Ne-waza, Nage-Waza, ------. Henka-Waza, Kaeshi-Waza Bunkai, (Misc)*/}
            <div>{techniqueTypeShortHand.techniques_id}</div>
            <br />
            </div>
        )
    })}</div>)}
    
    </>
    )
}

export default Belts;