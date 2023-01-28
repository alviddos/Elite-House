import './Section4.css'
import leftArrow from '../../../img/leftArrow.png'
import media1 from '../../../img/media1.png'
import media2 from "../../../img/media2.png"
import media3 from '../../../img/media3.png'
import rightArrow from '../../../img/rightArrow.png'

// const media = [
//     {
//         id: 1,
//         title: 'Новые офисы',
//         text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...',
//         data: '22.10.2020',
//     },
//     {
//         id: 2,
//         title: 'Новые офисы',
//         text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...',
//         data: '22.10.2020',
//     },
//     {
//         id: 3,
//         title: 'Новые офисы',
//         text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...',
//         data: '22.10.2020',
//     },
// ]
const Media = () => {
    return (
        <section className='containerHeader'>
            <h2 className='mediaH2'>Медиа</h2>
            <div className='cardMedia'>
                <img src={leftArrow} alt="leftArrow" />
                <div>
                    <img src={media1} alt="mediaImg1" />
                    <div className='mediaInfo' >
                        <h3>Новые офисы</h3>
                        <div className='c_o_n_t_e_n_t'></div>
                        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                        <h6>22.10.2020</h6>
                    </div>

                </div>
                <div>
                    <img src={media2} alt="mediaImg2" />
                    <div className='mediaInfo' >
                        <h3>Новые офисы</h3>
                        <div className='c_o_n_t_e_n_t'></div>
                        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                        <h6>22.10.2020</h6>
                    </div>
                </div>
                <div>
                    <img src={media3} alt="media3Img" />
                    <div className='mediaInfo'>
                        <h3>Новые офисы</h3>
                        <div className='c_o_n_t_e_n_t'></div>
                        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                        <h6>22.10.2020</h6>
                    </div>
                </div>
                <img src={rightArrow} alt="rightArrow" />
            </div>
        </section>
    )
}

export default Media