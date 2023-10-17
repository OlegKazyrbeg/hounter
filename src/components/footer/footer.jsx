import FooterNav from "./footerNav";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-text">
              <div className="footer-text__logo"><img src="./img/logo.svg" alt="" />Hounter</div>
              <div className="footer-text__text">We provide information about properties such as houses, villas and apartments to help people find their dream home</div>
              <ul className="footer-text__social">
                <li className="footer-text__social__item"><a href="##"><img src="./img/facebook.svg" alt="" /></a></li>
                <li className="footer-text__social__item"><a href="##"><img src="./img/twitter.svg" alt="" /></a></li>
                <li className="footer-text__social__item"><a href="##"><img src="./img/inst.svg" alt="" /></a></li>
              </ul>
            </div>
            <FooterNav/>
        </div>
     );
}
 
export default Footer;