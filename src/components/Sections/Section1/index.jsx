import './Section1.css'
import Group1000 from '../../../img/Group1000.png'
import Group1 from '../../../img/Group1.png'
import Group7 from '../../../img/Group7.png'
const AboutUs = () => {
    return (
        <section className="container">
            <div className='AboutUsInfo'>
                <div className="AboutUsText">
                    <h2> О нас</h2>
                    <p>Строительная компания Elite House была основана в 2013 году и является одним из лидеров строительной отрасли Кыргызстана. Компания Elite House не привлекает займы и работает исключительно на собственные средства.</p>
                    <p>По итогам 2019 года компания Elite House была признана «Лучшей компанией по строительству многоэтажных домов премиум-класса в Кыргызстане</p>
                </div>
                <div className="AboutUsImages">
                    <div className='AboutUsImages1'>
                        <img src={Group1000} alt="1000" />
                        <h2>1000</h2>
                        <p>И БОЛЕЕ ДОЛЬЩИКОВ</p>
                    </div>
                    <div className='AboutUsImages2'>
                        <img src={Group1} alt="1" />
                        <h2>#1</h2>
                        <p>ВЫБОР ГОДА 2019</p>
                    </div>
                    <div className='AboutUsImages3'>
                        <img src={Group7} alt="7" />
                        <h2>7</h2>
                        <p>ЛЕТ НА РЫНКЕ</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default AboutUs