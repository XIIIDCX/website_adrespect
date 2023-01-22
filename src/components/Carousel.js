import images from '../constants/images';
import Slider from './Slider';
import './Carousel.css';

const Carousel = () => {
  return (
    <Slider show={2}>
      <div>
        <div style={{ padding: 8 }}>
          <img 
            src={images.fotoa} 
            alt="placeholder"
            id='carousel' 
            style={{ width: "100%" }} 
          />
        </div>
      </div>
      <div>
        <div style={{ padding: 8 }}>
          <img 
            src={images.fotob} alt="placeholder" 
            style={{ width: "100%"}} 
            id='carousel'   
          />
        </div>
      </div>
      <div>
        <div style={{ padding: 8 }}>
          <img 
            src={images.fotoc} alt="placeholder" 
            style={{ width: "100%" }} 
            id='carousel'   
          />
        </div>
      </div>
      <div>
        <div style={{ padding: 8 }}>
          <img 
            src={images.fotod} alt="placeholder" 
            style={{ width: "100%" }} 
            id='carousel'   
          />
        </div>
      </div>
      <div>
        <div style={{ padding: 8 }}>
          <img
            src={images.fotoe}
            alt="placeholder"
            style={{ width: "100%" }}
            id='carousel' 
          />
        </div>
      </div>
      <div>
        <div style={{ padding: 8 }}>
          <img
            src={images.fotof}
            alt="placeholder"
            style={{ width: "100%" }}
            id='carousel' 
          />
        </div>
      </div>
      <div>
        <div style={{ padding: 8 }}>
          <img
            src={images.fotog}
            alt="placeholder"
            style={{ width: "100%" }}
            id='carousel' 
          />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
