import FifthCards from "./fifthCards";


const Fifth = () => {
    return ( 
        <section className="fifth pad">
            <div className="container">
                <h3 className="fifth__title"><img src="./img/titleline.svg" alt="" />See tips and trick from our partnership</h3>
                <div className="fifth__name">Find out more about <br /> selling and buying homes</div>
                <button className="fifth__button">More Artikel</button>
                <FifthCards/>
            </div>
            <img src="./img/fifthback.jpg" alt="" className="fifth-back" />
        </section>
     );
}
 
export default Fifth;