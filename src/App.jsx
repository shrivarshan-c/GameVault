import { useState } from 'react'

import Home from './Components/Home';

import Header from './Components/Header';
import About from './Components/About';
import GenreList from './Components/GenreList';
import MostPopular from './mostpopular/MostPopular';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <About/>
     
      <MostPopular/>
       <GenreList/>  
      
   
       
    </>
  )
}

export default App
