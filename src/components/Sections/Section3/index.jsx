import './Section3.css'
import leftArrow from '../../../img/leftArrow.png'
import carousel from '../../../img/carousel.png'
import rightArrow from '../../../img/rightArrow.png'

const Stocks = () => {
    return (
        <section className='containerHeader'>
            <h2 className='stocksH2'>Акции</h2>
            <div className='carousel'>
                <img className='arrow' src={leftArrow} alt="leftArrow" />
                <img src={carousel} alt="carousel" />
                <img className='arrow' src={rightArrow} alt="rightArrow" />
            </div>
            <div className='roundDiv5'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Stocks