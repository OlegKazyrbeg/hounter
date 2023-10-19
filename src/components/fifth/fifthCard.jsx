
const FifthCard = (props) => {
    return ( 
        <div className="fifth-card">
            <div className="fifth-card__image">
                <img src={props.image} alt="" />
            </div>
            <div className="fifth-card__info">
                <div className="fifth-card__info__who">
                    <img src={props.whoImage} alt=""/>
                    <div className="fifth-card__info__name">{props.whoName}</div>
                </div>
                <h2 className="fifth-card__info__title">{props.title}</h2>
                <div className="fifth-card__info__time"><img src={props.timeImage} alt="" />{props.time}</div>
            </div>
        </div>
     );
}
 
export default FifthCard ;