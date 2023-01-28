import './Section6.css'
import partners from '../../../img/Group138.png'

const Partners = () => {
    return (
        <section className='container'>
            <h2>Партнёры</h2>
            <div className='cardPartners'>
                <div id="barter" data-name="Подробнее"><img src={partners} alt="" /></div>
                <div id="barter" data-name="Подробнее"><img src={partners} alt="" /></div>
                <div id="barter" data-name="Подробнее"><img src={partners} alt="" /></div>
                <div id="barter" data-name="Подробнее"><img src={partners} alt="" /></div>
                <div id="barter" data-name="Подробнее"><img src={partners} alt="" /></div>
                <div id="barter" data-name="Подробнее"><img src={partners} alt="" /></div>
            </div>
        </section>
    )
}
export default Partners