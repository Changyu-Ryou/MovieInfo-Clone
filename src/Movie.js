import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <table>
                <tbody>
                <tr>
                    <td className="posterimg">
                        <img src={poster} alt={title} title={title} />
                    </td>
                    <td className="data">
                        <div className="movie__data">
                            <p className="movie__title" >{title}</p>
                            <p className="movie__year">{year}</p>
                            <ul className="genres">
                                {genres.map((genre, index) => (

                                    <li key={index} className="genres__genre">{genre}</li>
                                ))}
                            </ul>
                            
                            <p className="movie__summary">{summary}</p>

                        </div>
                    </td>
                </tr>
                </tbody>
            </table>


        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;