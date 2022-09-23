const Launch = ({launch}) => {

    return (
        <div className={'card'}>
            <h2>{launch.mission_name}</h2>
            <p>Launch year: {launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
        </div>
    )

}

export {Launch}