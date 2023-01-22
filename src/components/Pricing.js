import "./Pricing.css";
import { useState } from 'react'; 

const Pricing = () => {
  const [toggle, setToggle] = useState(true)

  const Domains = [
    { name: "Single domain" },
    { name: "Single domain" },
    { name: "Single domain" },
    { name: "Single domain" },
    { name: "Single domain" },
  ];

  const Variants = [
    { name: "Starter", monthly: "320", yearly: "3840" },
    { name: "Normal", monthly: "450", yearly: "5400" },
    { name: "Premium", monthly: "650", yearly: "7800" },
  ];

  return (
    <section className="pricing py-5">
      <div className="container ">
        <div className="row px-md-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 id="pricing">Pricing</h2>
            <h1 
              id="pricing_main_txt" 
              className="display-1 pb-3">
              Make it yours today
            </h1>
            <p className="pb-5">
              All packages come with a 30 day money back gurantee!
            </p>

            {/* TOGGLE BTN */}
            <div className="pb-5">
              <label className="switch">
                <input 
                  type="checkbox"
                  className='' 
                  onClick={() => setToggle(!toggle)}
                  />                
                <span 
                  id='btn_txt' 
                  className="slider round text-uppercase d-flex flex-row justify-content-between align-items-center p-4 z-2">Monthly<span></span>Yearly
                </span>               
              </label>
            </div>
          </div>

          {/* CARD MAP */}
          {Variants.map((variant) => (
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body p-4 px-sm-5 mx-sm-5 px-lg-1 mx-lg-4 ">
                  
                  {/* TEXT */}
                  <div className="ms-3">
                    <h5 className="card-title text-muted pb-2 ">
                      {variant.name}
                    </h5>
                    <h1 className="card-price display-5">
                      {toggle ? `${variant.monthly} PLN` : `${variant.yearly} PLN`}
                    </h1>
                    <p className="pb-4 text-muted">miesięcznie</p>
                  </div>

                  {/* LIST */}
                  <ul class="fa-ul">
                    {Domains.map((domain) => (
                      <div>
                        <li>
                          <span className="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          Single domain
                        </li>
                        <hr />
                      </div>
                    ))}
                    <li>
                      <span className="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Single domain
                    </li>
                  </ul>

                  {/* BUTTON */}
                  <div className="d-grid pt-5 pb-3">
                    <a
                      href="#1"
                      id="card_btn"
                      className="btn btn-dark mx-3 py-3 "
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* INFO */}
        <p className="d-flex flex-column justify-content-center align-items-center mt-lg-4">
        Prices above do not include VAT
        </p>      
      </div>
      {/* TEXT */}
      <div className="ml-5 mt-5 pt-5">
        <h5 id="gallery_txt_sm" className="mb-3">
          Amet is samet
        </h5>
        <h3 id="gallery_txt_lg">Gallery</h3>
      </div>
    </section>
  );
};

export default Pricing;
