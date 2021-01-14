import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory, useParams } from 'react-router-dom';

export default function Movie(props) {
  const [movie, setMovie] = useState();
  console.log("Props from Movie: ", props);
  // const { id } = props
  // console.log("id: ", id);

  const { movieId } = useParams();
  console.log("movieId: ", movieId); // returns an integer
  // const { path, url } = useRouteMatch(); // gets url & path, don't need
  // console.log("url: ", url); // returns /movies/4
  // console.log("path: ", path); // returns /movies/:movieId

//  const movie = movieList.find(item => item.id == itemId);
  
  // let id = 1;
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        console.log("Response from Movie useEffect: ", response);
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time the `id` changes... How could we do this?
  }, [movieId]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}