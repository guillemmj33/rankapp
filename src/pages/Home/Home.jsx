import React from 'react';
import { FilterBtnPopular, FilterBtnMedium, FilterBtnWorst } from '../../components/Buttons/Filter/FilterBtn';
import { DevicesBtnMobile, DevicesBtnTablet, DevicesBtnDesktop } from '../../components/Buttons/Devices/DevicesBtn';
import { NavContainer, RedesContainer,RankingContainer, PlusContainer } from '../../components/Navbar/NavbarStyle';
import { FaUserFriends, FaPlus, FaTrophy } from "react-icons/fa";

const Home = () => {
  return (
    <main className="container">
      {/* aquí va la search bar de mario */}
      <section className="homeBtn">
        <div className="filterBtn">
          <FilterBtnPopular><i class="fa-regular fa-face-laugh fa-lg"></i>Populares</FilterBtnPopular>
          <FilterBtnMedium><i class="fa-regular fa-face-meh fa-lg"></i>Intermedias</FilterBtnMedium>
          <FilterBtnWorst><i class="fa-regular fa-face-frown fa-lg"></i>Peores</FilterBtnWorst>
        </div>
        <div className="devicesBtn">
          <DevicesBtnMobile><i class="fa-solid fa-mobile-screen-button fa-lg"></i>Móvil</DevicesBtnMobile>
          <DevicesBtnTablet><i class="fa-solid fa-tablet-screen-button fa-lg"></i>Tablet</DevicesBtnTablet>
          <DevicesBtnDesktop><i class="fa-solid fa-desktop fa-lg"></i>Escritorio</DevicesBtnDesktop> 
        </div>
      </section>
      {/* importaremos la data en el siguiente div */}
      <div className="app-data"></div>
        <NavContainer>
          <RedesContainer>
            <h3>Redes</h3>
            <FaUserFriends>
           {/*  <Link to=''></Link> */}
            </FaUserFriends>
          </RedesContainer>
          <RankingContainer>
              <h3>Ranking</h3>
              <FaTrophy>
               {/*  <Link to=''></Link> */}
              </FaTrophy>
          </RankingContainer>
          <PlusContainer>
              <h3>Add App</h3>
              <FaPlus>
                {/* <Link to=''></Link> */}
                </FaPlus>
          </PlusContainer>
        </NavContainer>
    </main>
  )
};

export default Home;