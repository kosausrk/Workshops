import React, { useState } from "react";
import { Character } from "../main";

interface CardProps {
    character: Character,
    removeCharacter(name: string): void
  }

function Card({ character, removeCharacter }: CardProps) {
    return (
        <div className="card bg-base-100 w-80 h-[28rem] shadow-xl text-left">
            <figure className="w-full h-48 overflow-hidden">
                <img className="w-full h-full object-cover"
                src={character.image}
                alt={character.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <p className="font-bold">HP: {character.hp}</p>
                <p className="mt-2 text-sm">{character.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => removeCharacter(character.name)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Card;