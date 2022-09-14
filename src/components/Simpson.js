function Simpson(props) {
    let {itemName, photo} = props;
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={photo} alt={'Simpson'}/>
        </div>
    )
}

export default Simpson;