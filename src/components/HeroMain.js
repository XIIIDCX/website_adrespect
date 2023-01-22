import './HeroMain.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from '../constants/images';

const HeroMain = () => {
  return (
    <Container fluid>
      <Row className='main_row'>

        {/* MAIN TEXT  */}
        <Col className='col-12 ml-2 my-5 col-sm-10 col-md-8 ml-sm-5 pl-md-5 col-lg-5 ml-lg-0 pl-lg'>                    
          <h1 className='display-1 mb-5 ml-5 pl-2 ml-sm-0 pl-sm-0'><strong>Headline awesome</strong></h1>
          <p className='mb-5 mx-5 mx-sm-0 pr-md-5'>Billions upon billions bits of moving fluff invent the universe science rogue Rig Veda. Orion's sword rich in heavy atoms vanquish the network of wormholes.</p>

          {/* BUTTONS */}
          <div className='ml-5 pl-3 ml-sm-0 pl-sm-0'>
            
            <button 
              type="button" 
              id='hero_btn' 
              className="btn btn-dark btn-lg px-5 mr-3">Button
            </button>
            
            <button 
              type="button" 
              id='hero_btn_arrow' 
              className="btn btn-outline-dark btn-lg mt-4 mt-sm-0">Learn more 
              
              <svg  
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="m-1 bi bi-arrow-right" 
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>              
        </Col>
        
        {/* GALLERY */}
        <Col className='col-11 mt-sm-5 ml-2 col-sm-12 mt-2 mx-sm-4 px-sm-4 pl-md-5 ml-md-5 col-lg-3 mx-lg-0 px-lg-0 mt-lg-0'>
            {/* foto 1 */}            
              <img 
                src={images.foto1} 
                alt='1'
                className="img-fluid mb-2 mb-sm-5 mb-lg-4 "
              />
                        
            {/* foto 2 */}           
              <img 
                src={images.foto3} 
                alt='2'
                className="img-fluid mt-2"  
              />
          </Col>
          
          <Col className='col-11 mt-sm-5 ml-2 col-sm-12 mt-3 mx-sm-4 px-sm-4 pl-md-5 ml-md-5 col-lg-3 mt-lg-0 px-lg-0'>
            
              {/* foto 3  */}
              <img 
                src={images.foto4} 
                alt='3'
                className="img-fluid mb-2 mb-sm-5 mb-lg-4"  
                />
            
              {/* foto 4  */}
              <img 
                src={images.foto2} 
                alt='Responsive'
                className="img-fluid mt-2 mb-sm-5 mt-lg-2"  
              />          
        </Col>
      </Row>
    </Container>
  )
}

export default HeroMain