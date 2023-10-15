import SecondCardItem from "./secondCardItem";

const secondCardItem = () => {

    const secondCard = [
        {
            image: './img/imagecard.svg',
            categoryName: 'Popular',
            categoryImage: './img/popular.svg',
            title: 'Roselands House',
            price: '$ 35.000.000',
    
            whoImage: './img/human.svg',
            whoName: 'Dianne Russell',
            whoCity: 'Manchester, Kentucky'
        },
    
        {
            image: './img/imagecard.svg',
            categoryName: 'Popular',
            categoryImage: './img/popular.svg',
            title: 'Roselands House',
            price: '$ 35.000.000',
    
            whoImage: './img/human.svg',
            whoName: 'Dianne Russell',
            whoCity: 'Manchester, Kentucky'
        },
    
        {
            image: './img/imagecard.svg',
            categoryName: 'Popular',
            categoryImage: './img/popular.svg',
            title: 'Roselands House',
            price: '$ 35.000.000',
    
            whoImage: './img/human.svg',
            whoName: 'Dianne Russell',
            whoCity: 'Manchester, Kentucky'
        },
    
        {
            image: './img/imagecard.svg',
            categoryName: 'Popular',
            categoryImage: './img/popular.svg',
            title: 'Roselands House',
            price: '$ 35.000.000',
    
            whoImage: './img/human.svg',
            whoName: 'Dianne Russell',
            whoCity: 'Manchester, Kentucky'
        },
    
    ]
    
    const cards = () =>{
        secondCard.map((el) =>
        <SecondCardItem 
            image={el.image}
            categoryName={el.categoryName}
            categoryImage={el.categoryImage}
            title={el.title}
            price={el.price}

            whoImage={el.whoImage}
            whoName={el.whoName}
            whoCity={el.whoCity}
        />
        )
    }


    return ( 
        <>
        {cards}
        </>
     );
}
 
export default secondCardItem;