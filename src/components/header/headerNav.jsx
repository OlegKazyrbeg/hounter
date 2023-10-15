// import { useState } from "react";

function headerNav(){

    // const [moreList, setMoreList] = useState(1)

    // const addMoreListHandle = () =>{
    //     setMoreList(moreList)
    //     console.log(moreList + 1)
    // }

    return(
        <div>
            <nav className="header-container__nav">
                <ul className="header-container__nav__list">
                    <li className="header-container__nav__item"><a href="##">About Us</a></li>
                    <li className="header-container__nav__item"><a href="##">Article</a></li>
                    <li className="header-container__nav__item">
                        Property 
                        <button className="header-container__nav__button"><img src="./img/arrowmore.svg" alt="" /></button>

                        <ul className="header-container__nav__more__list">
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
export default headerNav