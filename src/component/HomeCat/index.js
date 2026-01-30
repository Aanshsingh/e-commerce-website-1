import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomeCat = () =>{ return( 

<div className="homecat">
            <div className="item">
                    
      <div className="m-auto ">
        <h1 className="catheading">categories</h1>
             <Swiper
        slidesPerView={10}
        spaceBetween={10}
        dot={false}
        loop={true}
       Navigation={true}
     
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                className="text-center"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>
              <SwiperSlide>
          <div className="catcard">
              
                <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"

                
                />
                <h6 className="font-weight-bold">Biscuits & Snacks</h6>


          </div>
          </SwiperSlide>

          </Swiper>
        
                </div>

      </div>
    </div>
)}

   
       

export default HomeCat