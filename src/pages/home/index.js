import HomeBanner from "../../component/HomeBanner";
import lowerbanner1 from "../../assests/images/lowerbanner1.png"
import lowerbanner2 from "../../assests/images/lowerbanner2.png"

import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Productlist from "../../component/Product list";
import HomeCat from "../../component/HomeCat";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat/>

      <section>
<div className="home_lower">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
     <div className="banner">
           <img
        src={lowerbanner1}
            className="lowerbanner1"
        />

        <img
        src={lowerbanner2}
        className="lowerbanner2 mt-2 postion-sticky"/>


     </div>
      </div>
      <div className="col-md-9 productrow">
              <div className="d-flex align-items-center  justify-content-between">
                      <div className="info mb-0 w-75">
                          <h3 className="mb-0 hd">Best Sellers</h3>
                           <p className="mb-0 text_light text-small">Do not miss the current offers until the end of March.</p>

      </div>
        <Button className="viewall">View All <FaArrowRightLong /> </Button>
        
     </div>
           
      <div className="product_row m-auto pt-2 pb-2">
             <Swiper
        slidesPerView={4}
        spaceBetween={0}
        dot={false}
        loop={true}
     
          navigation={false}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Productlist />
          </SwiperSlide>

  <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>
     

        
        
      </Swiper>
        </div>     
              <div className="d-flex align-items-center  justify-content-between">
                      <div className="info mb-0 w-75 mt-5">
                          <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                           <p className="mb-0 text_light text-small">New products with updated stocks.</p>

      </div>
        <Button className="viewall ">View All <FaArrowRightLong /> </Button>
        
     </div>
           
      <div className="product_row m-auto pt-2 pb-0">
             <Swiper
        slidesPerView={4}
        spaceBetween={0}
        dot={false}
        loop={true}
     
          navigation={false}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Productlist />
          </SwiperSlide>

  <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>
     

        
        
      </Swiper>
        </div>   
<div className="product_row m-auto pt-0 pb-2">
             <Swiper
        slidesPerView={4}
        spaceBetween={0}
        dot={false}
        loop={true}
     
          navigation={false}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Productlist />
          </SwiperSlide>

  <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>
     

        
        
      </Swiper>
        </div>   
      </div>
      
      </div> 

  </div>
</div>


      </section>

      <section className="newslatersection">
        <div className="container">
          <div className="row col-md-6">



          </div>


        </div>


      </section>
    </>
  );
};

export default Home;
