import ControlledCarousel from "../components/Carousel"
import Categories from "../components/Categories"
import Trending from "../components/Trending"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"


const Home = () => {
    return (

        <>
            <NavigationBar/>
            <ControlledCarousel/>
            <Categories/>
            <Trending/>
            <Footer/>
        </>
    )
}

export default Home