import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBr from './Components/NavBr';
import Contact from './Page/Contact';
import Login from './Page/Login';
import Register from './Page/Register';
import MovieList from './Components/MovieList';
import moviedata from './Components/DataMovie';
import { useState } from 'react';
// import NetFli from './NetFli';
import SingleMovieCard from './Page/SingleMovieCard';


function App() {
  const [movie,setMovie]=useState(moviedata)
  const [inputsearch,setInputSearch]=useState("")
  const [inputstars,setInputStars]=useState(0)

  return (
    <div className="App">
      
        {/* <NetFli /> */}
        <NavBr setInputSearch={setInputSearch} setInputStars={setInputStars}/>
       
        
      <Routes>
        <Route path='/' element={<MovieList movie={movie} inputsearch={inputsearch} inputstars={inputstars}/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/movie/:id" element={<SingleMovieCard movie={movie}/>}/>
      </Routes>
    </div>
  );
}

export default App;
