import AboutUs from "../Sections/Section1"
import Objects from "../Sections/Section2"
import Stocks from "../Sections/Section3"
import Media from '../Sections/Section4'
import OurOffices from '../Sections/Section5'
import Partners from '../Sections/Section6'

import './Main.css'

const Main = () => {
    return (
        <main>
            <AboutUs />
            <Objects />
            <Stocks />
            <Media />
            <OurOffices />
            <Partners />
        </main>
    )
}
export default Main