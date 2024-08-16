import ControlledCarousel from "../components/Carousel"
import Categories from "../components/Categories"
import Trending from "../components/Trending"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import Benefits from "../components/Benefits"


const Home = () => {
    return (

        <>
            <NavigationBar/>
            <ControlledCarousel/>
            <Categories/>
            <Trending/>
            <Benefits/>
            <Footer/>
        </>
    )
}

export default Home