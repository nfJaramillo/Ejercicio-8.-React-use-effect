import { useState, useEffect } from 'react';
import './App.scss';
import { Card } from './Card';


function App() {


  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);


  return (
    <>
      <h1>Rick and morty</h1>
      
      
      <div className='gallery-card'>
      {characters.map((elm, index)=> <Card key={index} title={elm.name} url={elm.image} description1={"Gender:"+elm.gender} description2={"Status:"+elm.status}></Card>)}
      </div>
    </>
  )


}

export default App;
