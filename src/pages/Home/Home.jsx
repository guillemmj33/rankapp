import React from 'react';
import { FilterBtnPopular, FilterBtnMedium, FilterBtnWorst } from '../../components/Buttons/Filter/FilterBtn';
import { DevicesBtnMobile, DevicesBtnTablet, DevicesBtnDesktop } from '../../components/Buttons/Devices/DevicesBtn';
import { useState, useEffect } from 'react';
import data from '../../data/data.json';
import imatge from '../../assets/Logos/adidas.jpg'

const Home = () => {

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
        data.map( element => {
          return (
            <div className="popularFilter">
              <h3>{element.id}</h3>
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <h4>{element.rating}</h4>
              <p>{element.description}</p>
            </div>
          )
        })
       } 
      </div>
    </main>
  )
};

export default Home;