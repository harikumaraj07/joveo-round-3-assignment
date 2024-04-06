import React from "react";
import "./MovieCard.css"

export const MovieCard = ({name, image, overview}) => {
    return (
        <div className="movie-card">
            <img className="movie-card-image" src={"https://image.tmdb.org/t/p/w500/" + image}/>
            <p>{name}</p>
            <p className="movie-card-overview">
                {overview}
            </p>
        </div>
    )
}