import React from "react";
import './SwiperStyle.scss'
import dataAPI from '../../data/dataAPI.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    const data = dataAPI.data;
    const result = data.sort((a, b) => (a.num_downloads_exact < b.num_downloads_exact ? 1 : -1));
  return (
    <>
        <h1>Rankapp</h1>
        <h3>Trending</h3>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            result.map(data=>{
                return(
            <SwiperSlide>
                <img src={data.app_icon} alt={data.app_name}></img>
                <div className="trending__info">
                    <h4>{data.app_name}</h4>
                    <div className="trending__rating">
                        <h5>
                            <i className="fa-solid fa-star"></i>
                            {data.rating}
                        </h5>
                        <h6>{data.app_category}</h6>
                    </div>
                </div>
            </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}
