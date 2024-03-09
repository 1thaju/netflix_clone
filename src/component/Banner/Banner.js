import React, { useEffect, useState} from 'react'
import './Banner.css'
import axios from '../axios/axios'
import { API_KEY, ImageUrl } from '../constants/constants'

function Banner() {
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  const random = Math.random(numbers)
  console.log(random)
  const [movie,setMovie] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results[0])
    });
    
  }, []);
  return (
    <div 
    style={{backgroundImage: `url(${movie?ImageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      <h1>{movie? movie.title:''}</h1>
      <p>{movie?movie.overview:''}</p>
      <div className='buttons'>
        <button className='button1'>Play</button>
        <button className='button1'>Watch Later</button>
      </div>
      <div className='fade'></div>
    </div>
  )
}

export default Banner
