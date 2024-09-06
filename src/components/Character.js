// src/components/Character.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('http://18.209.46.254:8080/api/character/50/90');
        setCharacters(response.data); // La respuesta ahora es un array
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchCharacters();
  }, []);

  if (characters.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="general">
      {characters.map(character => (
        <div key={character.id} className="cuadros">
          <div className='titulo'>
            <h1>{character.name}</h1>
          </div>
          <div className='imagen'>
            <img className='taimagen' src={character.image} alt={character.name} />
          </div>
          <div className='texto'>
            <div className='texto-int'>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Type: {character.type}</p>
              <p>Gender: {character.gender}</p>
            </div>  
            
          </div>
          
          <div></div>
          
          
          
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
