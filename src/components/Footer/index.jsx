import './Footer.css'
import icons from '../../img/icons.png'
import group from '../../img/GroupFooter.png'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='footer'>
                    <div className='footerInfo1'>
                        <ul>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Объекты</a></li>
                            <li><a href="">Онлайн-камеры</a></li>
                            <li><a href="">Новости</a></li>
                            <li><a href="">Медиа</a></li>
                            <li><a href="">Вакансии</a></li>
                            <li><a href="">Забота о клиентах</a></li>
                        </ul>
                    </div>
                    <div className='footerInfo2'>
                        <ul>
                            <li><a href="">Управляющая компания</a></li>
                            <li><a href="">Агентская программа</a></li>
                            <li><a href="">Способы оплаты</a></li>
                            <li><a href="">Barter.kg</a></li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Офисы продаж</a></li>
                        </ul>
                    </div>
                    <div className='addressImg'>
                        <p>Адрес:
                            г.Бишкек, ул. Абдрахманова, 170/1, бизнес-центр «Ордо»,
                            7 этаж</p>
                        <div>
                            <img src={icons} alt="icons" />
                        </div>
                    </div>
                    <div className='numberE-mail'>
                        <div className='footernumber'>
                            <p>Телефон:
                                0 (555) 555 - 555
                                0 (312) 463 - 434</p>
                        </div>
                        <p>E-mail:
                            elithouse@gmail.com</p>
                    </div>
                    <div className='Group'>
                        <img src={group} alt="Group" />
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer