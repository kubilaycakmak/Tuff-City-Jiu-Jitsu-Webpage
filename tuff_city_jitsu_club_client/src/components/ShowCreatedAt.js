import React from "react";
import moment from "moment";

function ShowCreatedAt(props) {
    return <small>Created at {moment(props.created_at).format("MMM Do, YYYY")}</small>;

}

export default ShowCreatedAt;