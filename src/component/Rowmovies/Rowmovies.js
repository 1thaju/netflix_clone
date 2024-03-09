import React, { useEffect, useState } from 'react';
import './Rowmovies.css';
import axios from '../axios/axios'
import {  API_KEY, ImageUrl } from '../constants/constants';
import YouTube from 'react-youtube';
function Rowmovies(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  
  const [urlId,setUrlId] = useState()
  const [movies,setMovies] = useState([])
  useEffect (()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results);
    },[])
    
  })
  const handleclick = async (id)=> {
    try{
      await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }
      })
    }
    catch(error){
      console.log('props.url:', props.url);
      console.log("error while fetching",error)
    }
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movies.map((obj)=>{
        return(
          <div>
            <img className={props.isSmall?'smaller':'poster'} src={obj.backdrop_path && `${ImageUrl+obj.backdrop_path}`} alt='poster'></img>
            <div className='playlist'>
            <h4>{obj.title?obj.title:obj.name}</h4>
            <button className='button' onClick={()=>handleclick(obj.id)}>Play</button>
            </div>
          {urlId && <YouTube videoId="uQCM613pqY4" opts={opts}/>}
          </div>
        )
      } 
      )}   
      </div>
     <h3>{movies.title}</h3>
    </div>
  )
}

export default Rowmovies
