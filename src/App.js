
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import Pricing from './components/Pricing';
import Slider from './components/Slider';



function App() {
  return (
    <div>
      <Hero/>
      <Pricing/>      
      <Slider >
        <div style={{ 
            maxWidth: 1200, 
            marginLeft: 'auto', 
            marginRight: 'auto' 
        }}>
          <Carousel show={2}/>
        </div>
      </Slider>
      <Footer/>
    </div>
  );
}

export default App;
