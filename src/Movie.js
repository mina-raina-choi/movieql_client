import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, title, rating, poster }) =>
{
    const divStyle = {
        backgroundImage: `url(${poster})`
    }

    return (
        <Link to={`/details/${id}`}>
            <div className="card" style={divStyle}>
                <span className="title">
                    {title} / {rating}⭐ ️
                </span>
            </div>
        </Link>
    )
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;