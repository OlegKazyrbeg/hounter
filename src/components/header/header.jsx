import HeaderNav from "./headerNav"
import './header.scss'

function header(){
    return(
        <>
        <div className="header-container__logo">
            <a href="##"><img src="./img/logo.svg" alt="" /></a>
            <div className="header-container__text">Hounter</div>
        </div>
        <div className="header-container__right">
            <HeaderNav/>
            <button className="header-container__button__sign">Sign Up!</button>
        </div>
        </>
    )
}
export default header