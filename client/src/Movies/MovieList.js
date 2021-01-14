import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
export default function MovieList({movieList}) {
console.log("props passed to movieList: ",{movieList})

const { url } = useRouteMatch();

return (
<div className="movie-list">
{ movieList.map(movie => {

return <MovieDetails key={movie.id} movie={movie} />
})}
</div>
);
}


function MovieDetails(props) {
const {movie} = props;
const { title, director, metascore } = props.movie;
const history = useHistory();

return (
      <div  onClick={(evt) => history.push(`/movies/${movie.id}`)} className="movie-card">
         <h2>{title}</h2>
         <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
      </div>
);
}