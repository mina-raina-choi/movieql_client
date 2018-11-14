import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS} from './queries';
import Movie from "./Movie";

const Details = ({ match: {
    params: {movieId}
}}) =>  
    <Query query={MOVIE_DETAILS} variables={{movieId}}>
        {
            ({loading, data, error}) => {
                if(loading) return "loading"
                if(error) return "error"
                console.log("dat", data)
                return (
                   
                    <React.Fragment>
                        <div className="container">
                            <img src={data.movie.medium_cover_image}/>
                            <span>
                                <h1>{data.movie.title}</h1>
                                <p>{data.movie.rating}</p>
                                <p>{data.movie.description_intro}</p>
                            </span>
                        </div>
                        <h2>suggestions</h2>
                        <div className="movie-container">
                            {
                                data.suggestions.map(movie => (
                                    <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.rating}
                                    poster={movie.medium_cover_image}
                                    />
                                ))
                            }
                        </div>
                    </React.Fragment>
                )
            }
        }
    </Query>


export default Details;