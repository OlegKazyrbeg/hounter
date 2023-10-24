const FourItem = (props) => {
    return ( 
        <article className="four-slider__item">
            <div className="four-slider__image"><img src={props.image} alt="" /></div>
            <div className="four-slider__text">
                <h1 className="four-slider__text__title">{props.title}</h1>
                <p className="four-slider__text__text">{props.paragraph}</p>
                <div className="four-slider__who">
                    <div className="four-slider__who__image"><img src={props.whoImage} alt="" /></div>
                    <div className="four-slider__who__name">{props.whoName}<div className="four-slider__who__work">{props.whoWork}</div></div>
                    <div className="four-slider__who__grade">
                        <img src="./img/star.jpg" alt="" />
                        <div className="four-slider__who__grade__grade">{props.grade}</div>
                    </div>
                </div>
            </div>
        </article>
     );
}
 
export default FourItem;