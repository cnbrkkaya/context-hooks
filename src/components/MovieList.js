import React, { useState } from 'react';

const MovieList = () => {
   const [movie, setMovie] = useState([
      {
         name: 'Harry Potter',
         price: '$10',
         id: 1,
      },
      {
         name: 'Passenger',
         price: '$20',
         id: 2,
      },
      {
         name: 'Gravity',
         price: '$5',
         id: 3,
      },
   ]);
   return <div></div>;
};
export default MovieList;
