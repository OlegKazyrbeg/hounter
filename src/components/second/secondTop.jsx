import SecondNav from "./secondNav"

function second(){
    return(
        <>
            <div className="second-top__names">
                <h3 className="second-top__title"><img src="./img/titleline.svg" alt="" />Our Recommendation</h3>
                <h2 className="second-top__name">Featured House</h2>
            </div>
            <SecondNav/>
            <div className="second-top__scroll">
                <button className="second-top__scroll__button">prev</button>
                <button className="second-top__scroll__button">next</button>
            </div>
        </>
    )
}
export default second