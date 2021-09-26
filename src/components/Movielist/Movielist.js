import React from 'react'
import './Movielist.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Movielist = (props) => {
	const {Title, img, Producer, Director, Year, Profit} = props.movie;
  const icon = <FontAwesomeIcon icon={faShoppingCart} />

  return (
          <div className="movie-list">
            <div className="image">
               <img src={img} alt=""/>
            </div>
            <div className="movie-details">
            <h4 className= "movie-name">{Title}</h4>
            <p>Producer: {Producer}</p>
            <p>Director: {Director}</p> 
            <p>Relase Year: {Year}</p>
            <p><small>Profit: {Profit}</small></p>
            <button onClick={() => props.handleToAdd(props.movie)} 
            className="btn">{icon}Select Your Movie List</button>
            </div>
           </div>
		)
}

export default Movielist;