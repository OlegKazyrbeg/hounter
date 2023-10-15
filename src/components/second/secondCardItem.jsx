const secondCardItem = (props) => {

    return ( 
        <article className="second-main__card">
            <div className="second-main__card__image">
                <img src={props.image} alt="" />
                <div className="second-main__card__category"><img src={props.categoryImage} alt="" />{props.categoryName}</div>
            </div>
            <h1 className="second-main__card__title">{props.title}</h1>
            <div className="second-main__card__price">{props.price}</div>
            <div className="second-main__card__who">
                <div className="second-main__card__who__image">
                    <img src={props.whoImage} alt="" />
                </div>
                <div className="second-main__card__who__info">
                    <div className="second-main__card__who__name">{props.whoName}</div>
                    <div className="secons-main__card__who__city">{props.whoCity}</div>
                </div>
            </div>
        </article>
     );
}
 
export default secondCardItem;