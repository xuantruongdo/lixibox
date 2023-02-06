import Slider from '../components/slider/Slider'
import HotDeal from '../components/hotdeal/Hotdeal'
import BestSeller from '../components/bestseller/Bestseller'
import Magazine from '../components/magazine/Magazine'
import MostSearch from '../components/mostSearch/MostSearch'
import Promotion from '../components/promotion/Promotion'

const Home = () => {
    return ( 
        <div>
            <Slider/>
            <HotDeal/>
            <BestSeller/>
            <Magazine/>
            <MostSearch/>
            <Promotion/>
        </div>
     );
}
 
export default Home;