import "./App.css"
import About from "./componets/about/about";
import Footer from "./componets/footer/footer";
import Home from "./componets/home/home";
import LatestNews from "./componets/latestNews/latestNews";
import Navba from "./componets/navbar/nav";
import Spectrum from "./componets/spectrum/spectrum";
import Testimonial from "./componets/testimonial/testimonial";
import Video from "./componets/video/video";
function App() {
  return (
  
     <>

     {/* Adding Navigation Bar Component */}
     <Navba />  
     {/* Adding HomePage */}
     <Home />
     {/* Adding About Component */}
     <About />
       {/* Adding Spectrum section */}
       <Spectrum />
     {/* Adding LatestNews section */}
     <LatestNews />
     <Video />
     {/* Adding Testimonial Section */}
     <Testimonial />
     {/* Adding Footer Section */}

    
     <Footer />
   
     </>
  );
}

export default App;