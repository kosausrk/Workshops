import React, { useState } from 'react';
import { addCharacter, characters, CharacterType, removeCharacter } from './main'; // Assuming characters are imported correctly
import Card from './components/Card';
import NewCardModal from './components/NewCardModal';

const App: React.FC = () => {
  const [ cards, setCards ] = useState(characters);
  const [ newCardModalOpen, setNewCardModalOpen ] = useState(false);

  const addCard = (name: string, image: string, type: CharacterType, hp: number, description: string) => {
    addCharacter(name, image, type, hp, description)
    let characterCopy = [...characters]
    setCards(characterCopy)
  }

  const removeCard = (name: string) => {
    removeCharacter(name)
    let characterCopy = [...characters]
    setCards(characterCopy)
  }

  return (
    <div className="bg-blue-200 p-4 min-h-screen text-center">
      <h1 className="text-3xl font-bold my-8 text-black">Card Collection</h1>
      <button className="btn" onClick={() => setNewCardModalOpen(true)}>Add New Character</button>
      {newCardModalOpen && (
        <NewCardModal setNewCardModalOpen={setNewCardModalOpen} addCharacter={addCard}/>
      )}
      <div className=" my-8 flex flex-wrap justify-center items-center gap-4">
        {cards.map((character, index) => (
          <Card key={index} character={character} removeCharacter={removeCard} />
        ))}
      </div>
    </div>
  );
};

export default App;