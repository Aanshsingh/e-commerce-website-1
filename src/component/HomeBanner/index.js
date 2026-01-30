import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {

  const settings = {
 dots: true,
  arrows: false,        // ❌ remove arrows
  infinite: true,
  speed: 600,           // slide animation speed
  slidesToShow: 1,
  slidesToScroll: 1,

  autoplay: true,       // ✅ enable autoplay
  autoplaySpeed: 3000,  // ✅ 4 seconds
  pauseOnHover: true,   // pause when mouse is over banner
  pauseOnFocus: false
  };

  return (
    <div className="HomescreenBanner">
      <Slider {...settings}>

        <div className="banner banner1">
          <img
            src="https://cmsimages.shoppersstop.com/Homestop_web_215ce8f42f/Homestop_web_215ce8f42f.png"
          />
        </div>

        <div className="banner banner2">
          <img
            src="https://cmsimages.shoppersstop.com/Libas_web_9228765378/Libas_web_9228765378.png"
            alt="Secondary banner"
          />
        </div>

        <div className="banner banner3">
         
         <img 
         src="https://cmsimages.shoppersstop.com/EOSS_preview_sale_web_5860fecc3d/EOSS_preview_sale_web_5860fecc3d.png"
         alt="Third banner"

         />


        </div>
        {/* <div className="banner banner4">

            <img src="" 
            alt="Fourth banner"/>
        </div> */}
     

      </Slider>
    </div>
  );
};

export default HomeBanner;
