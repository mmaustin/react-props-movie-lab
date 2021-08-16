import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movies) => {
    return movies.map(m => <MovieCard title={m.title} IMDBRating={m.IMDBRating} genres={m.genres} poster={m.poster} ></MovieCard> )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
