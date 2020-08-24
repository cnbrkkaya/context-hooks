import React, { useContext } from 'react';
import { MovieContext } from './context/MovieContext';
const Nav = () => {
   const [movies, setMovies] = useContext(MovieContext);
   return (
      <div style={{ backgroundColor: 'grey' }}>
         <h3>Movies App</h3>
         <p># of Movies :{movies.length} </p>
      </div>
   );
};
export default Nav;
