import ThirdList from "./thirdList";
import ThirdCall from "./thirdCall";
import ThirdVid from "./thirdVid";

const third = () => {
    return (
        <section className="third pad">
            <div className="container">
                <div className="third-container">
                    <div className="third__row">
                        <div className="third-container__info">
                            <div className="third-top__names">
                                <h3 className="third-top__title"><img src="./img/titleline.svg" alt="" />Ready to Sell!</h3>
                                <h2 className="third-top__name">Let’s tour and see our house!</h2>
                            </div>
                            <div className="third-container-cont">
                                <p className="third-container__text">Houses recommended by our partners that have been <br /> curated to become the home of your dreams!</p>
                                <ThirdList/>
                                <ThirdCall/>
                            </div>
                        </div>
                        <ThirdVid/>
                    </div>
                </div>
            </div>
        <img className='yellow' src="./img/thirdback1.svg" alt="" />
        <img className='red' src="./img/thirdback2.svg" alt="" />
      </section> 
     );
}
 
export default third;