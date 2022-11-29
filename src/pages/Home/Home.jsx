import React from 'react';
import { FilterBtnPopular, FilterBtnMedium, FilterBtnWorst } from '../../components/Buttons/Filter/FilterBtn';
import { DevicesBtnMobile, DevicesBtnTablet, DevicesBtnDesktop } from '../../components/Buttons/Devices/DevicesBtn';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dataAPI from '../../data/dataAPI.json';
import { orderData } from '../../functions/functions';

const Home = () => {
  const data = dataAPI.data;

  const [dataAPIOrder, setdataAPIOrder] = useState(null);

  useEffect(() => {
    orderData(setdataAPIOrder);
  }, [])
  
  return (
    <main className="container">
      {/* aquí va la search bar de mario */}
      <section className="homeBtn">
        <div className="filterBtn">
          <FilterBtnPopular><i className="fa-regular fa-face-laugh fa-lg"></i>Populares</FilterBtnPopular>
          <FilterBtnMedium><i className="fa-regular fa-face-meh fa-lg"></i>Intermedias</FilterBtnMedium>
          <FilterBtnWorst><i className="fa-regular fa-face-frown fa-lg"></i>Peores</FilterBtnWorst>
        </div>
        <div className="devicesBtn">
          <DevicesBtnMobile><i className="fa-solid fa-mobile-screen-button fa-lg"></i>Móvil</DevicesBtnMobile>
          <DevicesBtnTablet><i className="fa-solid fa-tablet-screen-button fa-lg"></i>Tablet</DevicesBtnTablet>
          <DevicesBtnDesktop><i className="fa-solid fa-desktop fa-lg"></i>Escritorio</DevicesBtnDesktop> 
        </div>
      </section>
      <div id="data" className="data">
       {
        data.map(element => {
          return (
            <div className="data__card" key={dataAPI.id}>
              <img src={element.app_icon} width="50" height="50" alt={element.app_name} />
              <div className="data__info">
                <h4>{element.app_name}</h4>
                <div className="data__rating">
                  <h5>
                    <i class="fa-solid fa-star"></i>
                    {element.rating}
                  </h5>
                  <h6>{element.app_category}</h6>
                </div>
              </div>
              <div className="data__btn">
                <a href={element.app_page_link} target="_blank" rel="noreferrer"><button>Download</button></a>
              </div>
            </div>
          )
        })
       } 
      </div>
    </main>
  )
};

export default Home;