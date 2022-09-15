function CharacterRaM(props) {
    let {character} = props;
    let classNameItem = 'card';
    return (
        <div className={classNameItem}>
            <h2>{character.id}. {character.name}</h2>
            <p>
                Status - {character.status} <br/>
                Species - {character.species} <br/>
                Gender - {character.gender}
            </p>
            <img src={character.image} alt={'Character'}/>
        </div>
    )
}

export default CharacterRaM;