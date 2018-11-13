import React from "react";
import { Query } from "react-apollo";

const Details = ({ match: {
    params: {movieId}
}}) =>  {
    console.log(movieId)
    return <div>Details</div>
}


export default Details;