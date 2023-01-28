import './Header.css'
import Logo from '../../img/Group.png'
import Ru from '../../img/Polygon.png'
import FaceBook from '../../img/FaceBook.png'
import YouTube from '../../img/YouTube.png'
import instagram from '../../img/instagram.png'
import WhathApp from '../../img/WhathApp.png'
import Union from '../../img/Union.png'
import Btn from '../../img/Burger.png'

const Header = () => {
    return (
        <header>
            <div className='containerHeader'>
                <nav className='menu'>
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className='headerUl'>
                        <li className='headerLi'><a href="">О нас</a></li>
                        <li className='headerLi'><a href="">Объекты</a></li>
                        <li className='headerLi'><a href="">Новости</a></li>
                        <li className='headerLi'><a href="">Забота о клиентах</a></li>
                        <li className='headerLi'><a href="">Оплата</a></li>
                        <li className='headerLi'><a href="">Контакты</a></li>
                    </ul>
                    <div className='soc_media'>
                        <p>Ru</p>
                        <img src={Ru} alt="Ru" />
                        <img src={FaceBook} alt="FaceBook" />
                        <img src={YouTube} alt="Youtube" />
                        <img src={instagram} alt="instagram" />
                        <img src={WhathApp} alt="WhathApp" />
                        <p>0555 555 555</p>
                        <img src={Union} alt="Union" />
                    </div>
                </nav>
            </div>
            <button className='headerBtn'>
                <img src={Btn} alt="BurgerMenu" />Оставить заявку
            </button>
        </header>
    )
}
export default Header