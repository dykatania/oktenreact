import {useState} from "react";
import CharacterRaM from "./CharacterRaM";

function RaMs() {

    const [characters, setCharacters]= useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0,6));
        });

    return (
        <div>
            {
                characters.map(character => <CharacterRaM key={character.id}
                character={character}
                />)
            }
        </div>
    );
}

export default RaMs;