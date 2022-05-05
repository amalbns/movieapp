import React, { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import MovieList from './Components/MovieList/MovieList';
import  {moviesData}   from './Contants/Data';
import FilterByRate from './Components/Rating/Rating';
import NavBar from './Components/NavBar/NavBar';
import Cass from './Components/NavBar/Cass';


function App() {
  const [movies, setMovies] = useState(moviesData )
  const [inputSearch, setInputSearch] = useState("")
  const [rating, setRating] = useState(1)
  const add = (newMovie) => {
    setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
      <NavBar/>
      
      
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <Cass/>
      <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/>
      <MovieList movies ={movies}  inputSearch={inputSearch} rating={rating}/>
      <AddMovie add={add}/>
      
    </div>
  );
}

export default App;
