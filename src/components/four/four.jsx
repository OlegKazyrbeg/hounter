import FourSlider from "./fourSlider";

const Four = () => {
    return ( 
        <section className="four">
            <div className="container">
                <h3 className="four__title"><img src="./img/titleline.svg" alt="" />See Our Review</h3>
                <h2 className="four__name">What Our User Say About Us</h2>
                <FourSlider/>
            </div>
        </section>
     );
}
 
export default Four;