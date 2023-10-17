import HeroInput from './heroInput';
import Back from '../header/back'

function hero(){
    return(
        <>
        <section className="hero pad">
            <div className='hero-con'>
                <h1 className="hero__title">find the place to <br /> live your dreams <br /> easily here</h1>
                <p className="hero__text">Everything you need about finding your place to live will be here,<br /> where it will be easier for you</p>
                <HeroInput/>
                <div className="hero-partner">
                    <div className="hero-partner__text">Our Partnership </div>
                    <ul className="hero-partner__list">
                        <li className="hero-partner__item"><img src="./img/traveloka_logo 2.svg" alt="" /></li>
                        <li className="hero-partner__item"><img src="./img/traveloka_logo 5.svg" alt="" /></li>
                        <li className="hero-partner__item"><img src="./img/traveloka_logo 3.svg" alt="" /></li>
                        <li className="hero-partner__item"><img src="./img/traveloka_logo 4.svg" alt="" /></li>
                    </ul>
                </div> 
            </div>
        </section>
        <Back className="back-hero"></Back>
        </>
    )
}
export default hero