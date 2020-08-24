import React, { useState, useContext } from 'react';
import { MovieContext } from './context/MovieContext';
const AddMovies = () => {
   const [name, setName] = useState('');
   const [price, setPrice] = useState();
   const [movies, setMovies] = useContext(MovieContext);
   const handleSubmit = (event) => {
      event.preventDefault();
      setMovies((prevMovies) => [...prevMovies, { name, price }]);
   };
   return (
      <form>
         <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
         <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} /> <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} />
         <button onClick={(event) => handleSubmit(event)}>Submit</button>
      </form>
   );
};
export default AddMovies;
