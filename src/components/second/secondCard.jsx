import SecondCardItem from "./secondCardItem";

const secondCardItem = () => {

    const secondCard = [
        {
            image: './img/imagecard.svg',
            categoryName: 'Popular',
            categoryImage: './img/popular.svg',
            categoryColor: '#FEE2E2',
            nameColor: '#EF4444',
            title: 'Roselands House',
            price: '$ 35.000.000',
    
            whoImage: './img/human.svg',
            whoName: 'Dianne Russell',
            whoCity: 'Manchester, Kentucky'
        },
    
        {
            image: './img/imagecard2.svg',
            categoryName: 'New house',
            categoryImage: './img/newhouse.svg',
            categoryColor: '#DBEAFE',
            nameColor: '#1D4ED8',
            title: 'Woodlandside',
            price: '$ 20.000.000',
    
            whoImage: './img/human2.svg',
            whoName: 'Robert Fox',
            whoCity: 'Dr. San Jose, South Dakota'
        },
    
        {
            image: './img/imagecard3.svg',
            categoryName: 'Best Deals',
            categoryImage: './img/bestdeals.svg',
            categoryColor: '#D1FAE5',
            nameColor: '#047857',
            title: 'The Old Lighthouse',
            price: '$ 44.000.000',
    
            whoImage: './img/human3.svg',
            whoName: 'Ronald Richards',
            whoCity: 'Santa Ana, Illinois'
        },
    
        {
            image: './img/imagecard.svg',
            categoryName: 'Popular',
            categoryImage: './img/popular.svg',
            categoryColor: '#FEE2E2',
            nameColor: '#EF4444',
            title: 'Roselands House',
            price: '$ 35.000.000',
    
            whoImage: './img/human4svg.svg',
            whoName: 'Dianne Russell',
            whoCity: 'Manchester, Kentucky'
        },
    
    ]

    return ( 
        <div className="second-main__row">
        { secondCard.map((el) =>
            <SecondCardItem 
            image={el.image}
            categoryName={el.categoryName}
            categoryImage={el.categoryImage}
            categoryColor={el.categoryColor}
            nameColor={el.nameColor}
            title={el.title}
            price={el.price}

            whoImage={el.whoImage}
            whoName={el.whoName}
            whoCity={el.whoCity}
            />
            )
        }
        </div>
     );
}
 
export default secondCardItem;