import { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import moviedata from '../Components/DataMovie'

const SingleMovieCard = ({movie}) => {

  const navigate = useNavigate();
  let {id} = useParams()
 const [film,setFilm]=useState({})
console.log(film)
useEffect((movie)=>{
    const movieDetails = moviedata.find((el)=>el.id==id)
    setFilm(movieDetails)

}
,[id]
)
  return (
    <div>
    {/* <div>
        <p>{film.description}</p>
        <iframe src={film.trailer}></iframe>
        <button onClick={()=>navigate('/')}>Go Back</button>
    </div> */}

    
{/* <div class="container">
  
  <div class="content">
    <a href={film.trailer} target="_blank">
      <div class="content-overlay"></div>
      
      <iframe class="content-image" src={film.trailer}></iframe>
      <div class="content-details fadeIn-bottom">
        <p class="content-title">{film.description}</p>
        <button onClick={()=>navigate('/')}>Home</button>
      </div>
    </a>
  </div>
</div> */}

<div>
<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet"/>

<div id="title">
<h1> {film.title} Movie trailer</h1>
</div>
  
<div id="center">
<img src="https://jpsentry.net/wp-content/uploads/2018/01/487619252.jpg"/>
</div>

<div id="video">
<iframe width="220" height="120" src={film.trailer} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  
  

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<button onClick={()=>navigate('/')}>Home</button>
    </div>
</div>

</div>

  )
}

export default SingleMovieCard