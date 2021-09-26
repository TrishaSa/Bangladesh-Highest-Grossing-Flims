import React, {useEffect, useState} from 'react'
import Movielist from '../Movielist/Movielist';
import Cart from '../Cart/Cart';
import './Movie.css'
const Movie = () => {
 const [movies, setMovies] = useState([])    
 const[cart, setCart] = useState([]);

 useEffect(() => {
      fetch('./movielist.js')
      .then(res => res.json())
      .then(data => {
         setMovies(data)
      })
   }, [])

 const handleToAdd = (movie) => {
  const newCart = [...cart, movie]
  setCart(newCart)  
}


	return(
         <div className= "web-container">
             <div className= "movie-container">
                {
                  movies.map(movie => <Movielist
                      key={movie.Year}
                      movie={movie}
                      handleToAdd={handleToAdd}>
                     </Movielist>)
                }
             </div>
             <div className= "cart-container">
               <Cart cart={cart}></Cart>
              </div>
          </div>
		);
};

export default Movie