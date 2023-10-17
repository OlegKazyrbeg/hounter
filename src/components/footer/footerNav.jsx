const FooterNav = () => {
    return ( 
        <div className="footer-lists">
            <nav className="footer-nav">
              <ul className="footer-nav___property">
                <div className="footer-nav__title">Property</div>
                <li className="footer-nav__item"><a href="##">House</a></li>
                <li className="footer-nav__item"><a href="##">Apartment</a></li>
                <li className="footer-nav__item"><a href="##">Villa</a></li>
              </ul>
              <ul className="footer-nav__article">
                <div className="footer-nav__title">Article</div>
                <li className="footer-nav__item"><a href="##">New Article</a></li>
                <li className="footer-nav__item"><a href="##">Popular Article</a></li>
                <li className="footer-nav__item"><a href="##">Most Read</a></li>
                <li className="footer-nav__item"><a href="##">Tips & Tricks</a></li>
              </ul>
              <ul className="footer-nav__contact">
                <div className="footer-nav__title">Contact</div>
                <li className="footer-nav__item"><a href="##">2464 Royal Ln. Mesa, New Jersey 45463</a></li>
                <li className="footer-nav__item"><a href="##">(671) 555-0110</a></li>
                <li className="footer-nav__item"><a href="##">info@hounter.com</a></li>
              </ul>
            </nav>
        </div>
     );
}
 
export default FooterNav;