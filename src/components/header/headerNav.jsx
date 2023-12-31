import { useState } from "react";

function HeaderNav(){

    const [activeList, setActiveList] = useState(false)

    return(
        <div>
            <nav className="header-container__nav">
                <ul className="header-container__nav__list">
                    <li className="header-container__nav__item"><a href="##">About Us</a></li>
                    <li className="header-container__nav__item"><a href="##">Article</a></li>
                    <li onClick={() => setActiveList(!activeList)} className="header-container__nav__item">
                        Property 
                        <button className="header-container__nav__button"><img src="./img/arrowmore.svg" alt="" /></button>

                        <ul className={`header-container__nav__more__list ${activeList ? "active" : " "}`}>
                            <li className="header-container__nav__more__item"><a href="##">link</a></li>
                            <li className="header-container__nav__more__item"><a href="##">link</a></li>
                            <li className="header-container__nav__more__item"><a href="##">link</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default HeaderNav