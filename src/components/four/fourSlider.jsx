import FourItem from "./fourItem";

const FourSlider = () => {

    const slider = [
        {
            image: './img/four3.jpg',
            title: 'My house sold out fast!',
            paragraph: 'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
            whoImage: './img/human.svg',
            whoName: 'Courtney Henry',
            whoWork: 'CEO Andarafish',
            grade: '4.3'
        },
        {
            image: './img/four2.jpg',
            title: 'Best! I got the house I wanted through Hounter',
            paragraph: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
            whoImage: './img/human.svg',
            whoName: 'Dianne Russell',
            whoWork: 'Manager Director',
            grade: '4.6'
        },
        {
            image: './img/four1.jpg',
            title: 'Through the Hounter, I can get a house for my self',
            paragraph: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
            whoImage: './img/human.svg',
            whoName: 'Esther Howard',
            whoWork: 'Head of Marketing',
            grade: '4.6'
        },
    ]

    return (
        <div className="four-slider">
            {slider.map((el) =>
            <FourItem
                image={el.image}
                title={el.title}
                paragraph={el.paragraph}
                whoImage={el.whoImage}
                whoName={el.whoName}
                whoWork={el.whoWork}
                grade={el.grade}/>
        )}
        </div>

     );
}
 
export default FourSlider;