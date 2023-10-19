import FifthCard from "./fifthCard";

const fifthCards =[
    {
        image: './img/fifthimage1.svg',
        whoImage: './img/human.svg',
        whoName: 'Dianne Russell',
        title: 'The things we need to check when we want to buy a house',
        timeImage: './img/fifthtime.jpg',
        time: '4 min read | 25 Apr 2021'
    },
    {
        image: './img/fifthimage2.jpg',
        whoImage: './img/human.svg',
        whoName: 'Courtney Henry',
        title: '7 Ways to distinguish the quality of the house we want to buy',
        timeImage: './img/fifthtime.jpg',
        time: '6 min read | 24 Apr 2021'
    },
    {
        image: './img/fifthimage3.jpg',
        whoImage: './img/human.svg',
        whoName: 'Darlene Robertson',
        title: 'The best way to know the quality of the house we want to buy',
        timeImage: './img/fifthtime.jpg',
        time: '2 min read | 24 Apr 2021'
    }
]

const FifthCards = () => {
    return ( 
        <div className="fifth-row">
            <div className="fifth-row__50">
                {fifthCards.map((el) =>
                <FifthCard
                    image={el.image}
                    whoImage={el.whoImage}
                    whoName={el.whoName}
                    title={el.title}
                    timeImage={el.timeImage}
                    time={el.time}
                />)}
            </div>
            <div className="fifth-row__50">
                <div className="fifth-card__r">
                    <div className="fifth-card__r__image">
                        <img src="./img/fifthimage4.jpg" alt="" />
                    </div>
                    <div className="fifth-card__info">
                        <div className="fifth-card__info__who__r">
                            <img src="./img/human.svg" alt=""/>
                            <div className="fifth-card__info__name__r">Cameron Williamson</div>
                        </div>
                        <h2 className="fifth-card__info__title__r">12 Things to know before buying a house</h2>
                        <p className="fifth-card__info__text__r">Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                        <div className="fifth-card__info__time__r"><img src="./img/fifthtime.jpg" alt="" />8 min read | 25 Apr 2021</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FifthCards;