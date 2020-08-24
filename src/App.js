import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import { MovieProvider } from './components/context/MovieContext';
import AddMovies from './components/AddMovies';
function App(props) {
   return (
      <MovieProvider>
         <div className="App">
            <Nav />
            <MovieList />
            <AddMovies />
         </div>
      </MovieProvider>
   );
}

export default App;
