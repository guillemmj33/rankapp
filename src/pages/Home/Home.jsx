import React from 'react';
import { FilterBtnPopular, FilterBtnMedium, FilterBtnWorst } from '../../components/Buttons/Filter/FilterBtn';
import { DevicesBtnMobile, DevicesBtnTablet, DevicesBtnDesktop } from '../../components/Buttons/Devices/DevicesBtn';

const Home = () => {
  return (
    <main>
      <div className="filterBtn">
        <FilterBtnPopular><i class="fa-regular fa-face-laugh"></i>Populares</FilterBtnPopular>
        <FilterBtnMedium><i class="fa-regular fa-face-meh"></i>Intermedios</FilterBtnMedium>
        <FilterBtnWorst><i class="fa-regular fa-face-frown"></i>Peor Valorados</FilterBtnWorst>
      </div>
      <div className="devicesBtn">
        <DevicesBtnMobile><i class="fa-solid fa-mobile-screen-button"></i>Versión móvil</DevicesBtnMobile>
        <DevicesBtnTablet><i class="fa-solid fa-tablet-screen-button"></i>Versión tablet</DevicesBtnTablet>
        <DevicesBtnDesktop><i class="fa-solid fa-desktop"></i>Versión escritorio</DevicesBtnDesktop> 
      </div>
    </main>
  )
};

export default Home;