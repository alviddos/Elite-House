import './Section2.css'
import Fasad_object_1 from '../../../img/Fasad_object_1.png'
import Fasad_object_2 from '../../../img/Fasad_object_2.png'
import Fasad_object_3 from '../../../img/Fasad_object_3.png'
import Fasad_object_4 from '../../../img/Fasad_object_4.png'
import Fasad_object_5 from '../../../img/Fasad_object_5.png'
import Fasad_object_6 from '../../../img/Fasad_object_6.png'
import fasad1_6 from '../../../img/fasad1_6.png'
import fasad2_3 from '../../../img/fasad2_3.png'
import fasad4 from '../../../img/fasad4.png'
import fasad5 from '../../../img/fasad5.png'
import fasadMarker from '../../../img/fasadMarker.png'

const Objects = () => {
    return (
        <section className='container'>
            <div className='object'>
                <h2>Объекты</h2>
                <p>Новые</p> <p>Строящиеся</p> <p>Завершенные</p>
            </div>
            <div className='objectFasads'>
                <div className='fasad1 card'>
                    <img className='Fasad_object' src={Fasad_object_1} alt="fasad1" />
                    <div className='cardInfo'>
                        <div className='h4Img'>
                            <h4>Александрия</h4>
                            <img className='miniImg' src={fasad1_6} alt="fasad1_6" />
                        </div>
                        <div className='content_'></div>
                        <div className='imgP'>
                            <img className='marker' src={fasadMarker} alt="marker" />
                            <p>ул.Токтогула/Исанова</p>
                        </div>

                    </div>
                </div>
                <div className='fasad2 card'>
                    <img className='Fasad_object' src={Fasad_object_2} alt="fasad2" />
                    <div className='cardInfo'>
                        <div className='h4Img'>
                            <h4>Эль Классик</h4>
                            <img className='miniImg2_3' src={fasad2_3} alt="fasad2_3" /></div>
                        <div className='content_'></div>
                        <div className='imgP'>
                            <img className='marker' src={fasadMarker} alt="marker" />
                            <p>ул. Коенкозова/ул. Чуйкова</p>
                        </div>

                    </div>
                </div>
                <div className='fasad3 card'>
                    <img className='Fasad_object' src={Fasad_object_3} alt="fasad3" />
                    <div className='cardInfo'>
                        <div className='h4Img'>
                            <h4>Эль Классик Плюс</h4>
                            <img className='miniImg2_3' src={fasad2_3} alt="fasad2_3" /></div>
                        <div className='content_'>

                        </div>
                        <div className='imgP'>
                            <img className='marker' src={fasadMarker} alt="marker" />
                            <p>ул.Коенкозова/Чуйкова</p>
                        </div>
                    </div>
                </div>
                <div className='fasad4 card'>
                    <img className='Fasad_object' src={Fasad_object_4} alt="fasad4" />
                    <div className='cardInfo'>
                        <div className='h4Img'>
                            <h4>Итальянский квартал</h4>
                            <img className='miniImg' src={fasad4} alt="fasad4" />
                        </div>
                        <div className='content_'></div>
                        <div className='imgP'>
                            <img className='marker' src={fasadMarker} alt="marker" />
                            <p>ул.С.Батора/А.Токомбаева</p>
                        </div>

                    </div>
                </div>
                <div className='fasad5 card'>
                    <img className='Fasad_object' src={Fasad_object_5} alt="fasad5" />
                    <div className='cardInfo'>
                        <div className='h4Img'>
                            <h4>Асанбай ордо</h4>
                            <img className='miniImg' src={fasad5} alt="fasad5" />
                        </div>
                        <div className='content_'></div>
                        <div className='imgP'>
                            <img className='marker' src={fasadMarker} alt="marker" />
                            <p>ул.С.Батора/А.Токомбаева</p>
                        </div>
                    </div>
                </div>
                <div className='fasad6 card'>
                    <img className='Fasad_object' src={Fasad_object_6} alt="fasad6" />
                    <div className='cardInfo'>
                        <div className='h4Img'>
                            <h4>Континенталь</h4>
                            <img className='miniImg' src={fasad1_6} alt="fasad1_6" />
                        </div>
                        <div className='content_'></div>
                        <div className='imgP'>
                            <img className='marker' src={fasadMarker} alt="marker" />
                            <p>ул. Элебаева/Кулатова</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Objects