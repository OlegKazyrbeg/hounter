function heroInput(){
    return(
        <div className="input-block">
            <img src="./img/heropoint.svg" alt="" className="input-block__img" />
            <input type="text" className="input-block__input" placeholder="Search for the location you want!" />
            <button className="input-block__button">Search<img src="./img/Vector.svg" alt="" /></button>
        </div>
    )
}
export default heroInput