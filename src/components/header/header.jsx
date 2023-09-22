import Logo from '../../images/logo.png';
import Burger from '../../images/header__img.png'
import './header.css'


function Header() {
    return (
        <header className="header">
          <div className="container header__container">
            <div className='header__logo-container'>
               <img className="header__logo" src={Logo} alt="logo" />
            </div>
            <div className="header__content-container">
              <img className="header__img" src={Burger} alt="burger" />
              <div className="header__content">
                 <h1 className="header__title">The <span className='orange-span'>juiciest burgers</span> ever!</h1>
                 <p className="header__text">Free shipping from <span className='span-price'>$50</span></p>
              </div>
            </div>
         </div> 
        </header>
    )
}


export default Header;