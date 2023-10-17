import SecondTop from './secondTop'
import SecondCardItem from './secondCard';

const Second = () => {
    return ( 
        <section className="second pad">
            <div className="container">
              <div className="second-top">
                <SecondTop/>
              </div>
              <div className="second-main">
                <SecondCardItem/>
              </div>
            </div>
      </section>
     );
}
 
export default Second;