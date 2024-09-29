import React, { useState } from "react";
import { CharacterType } from "../main";

interface NewCardModalProps {
    setNewCardModalOpen(open: boolean): void;
    addCharacter(name: string, image: string, type: CharacterType, hp: number, description: string): void;
}

function NewCardModal({ setNewCardModalOpen, addCharacter }: NewCardModalProps) {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedType, setSelectedType] = useState<CharacterType | null>(null);
    const [hp, setHp] = useState<number | ''>('');
    const [description, setDescription] = useState('');

    const handleSelect = (type: CharacterType) => {
        setSelectedType(type);
    };

    const handleAddCard = () => {
        if (!name || !imageUrl || !selectedType || !hp || !description) {
          alert('Please fill out all fields!');
          return;
        }
    
        addCharacter(name, imageUrl, selectedType, hp, description)
    
        setName('');
        setImageUrl('');
        setSelectedType(null);
        setHp('');
        setDescription('');
    };
  
    return (
        <div className="my-4 flex flex-col items-center justify-content-center">
            <div className="w-96 items-center space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                Name
                <input
                    type="text"
                    className="grow"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Image URL
                <input
                    type="text"
                    className="grow"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Type
                <div className="dropdown ml-auto">
                    <label tabIndex={0} className="btn m-1">
                    {selectedType ? selectedType : 'Select Type'}
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {Object.values(CharacterType).map((type) => (
                        <li key={type}>
                        <a onClick={() => handleSelect(type)}>{type}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                HP
                <input
                    type="number"
                    className="grow"
                    value={hp}
                    onChange={(e) => setHp(Number(e.target.value))}
                />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                Description
                <input
                    type="text"
                    className="grow"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </label>
            </div>

            <div className="space-x-2">
                <button className="btn my-4 btn-primary" onClick={handleAddCard}>
                Add
                </button>
                <button className="btn my-4 btn-neutral" onClick={() => setNewCardModalOpen(false)}>
                Hide
                </button>
            </div>
            </div>
    )
}

export default NewCardModal;