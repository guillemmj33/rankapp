import React from 'react';
import { FilterBtnPopular, FilterBtnMedium, FilterBtnWorst } from '../../components/Buttons/Filter/FilterBtn';
import { DevicesBtnMobile, DevicesBtnTablet, DevicesBtnDesktop } from '../../components/Buttons/Devices/DevicesBtn';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import dataAPI from '../../data/dataAPI.json';
import SearchBar from '../../components/SearchBar/Searchbar';
import logoTablet from '../../assets/Images/logo-tablet.png';

const Home = () => {
  const data = dataAPI.data;

  /******************** PAGINATION ********************/
  //hacemos que solo aparezcan 10 apps, de 0 a 10, el 10 no incluido
  const [apps, setApps] = useState(data.slice(0,50));
  //creamos paginación
  const [pageNumber, setPageNumber] = useState(0);

  const appsPerPage = 10;
  const pagesVisited = pageNumber * appsPerPage;

  const displayApps = apps
    .slice(pagesVisited, pagesVisited + appsPerPage)
    .map((app) => {
      return (
        <div className="data__card">
          <img src={app.app_icon} width="50" height="50" alt={app.app_name} />
          <div className="data__info">
            <h4>{app.app_name}</h4>
            <div className="data__rating">
              <h5>
                <i className="fa-solid fa-star"></i>
                {app.rating}
              </h5>
              <h6>{app.app_category}</h6>
            </div>
          </div>
          <div className="data__btn">
            <a href={app.app_page_link} target="_blank" rel="noreferrer">
              <button>Download</button>
            </a>
          </div>
        </div>
      );
    });

    const pageCount = Math.ceil(apps.length / appsPerPage);

    const changePage = ( {selected} ) => {
      setPageNumber(selected);
    };

    /******************** FILTERS ********************/
    const asignDevice = () => {
      for (let i = 0; i < data.length; i++) {
        let randomDevice = Math.round(Math.random() * 2);
        if (randomDevice === 2) {
          data[i].device = "mobile";
        } else if (randomDevice === 1) {
          data[i].device = "tablet";
        } else {
          data[i].device = "desktop";
        }
        console.log(randomDevice);
      }
      console.log(data);
    }
    asignDevice();

    /******************** POPULAR ********************/
    const filterPopularApps = () => {
      const result = data.filter((element) => {
        return element.chart_rank <= 1;
      });
      setApps(result);
    }
    
    /******************** MEDIUM ********************/
    const filterMediumApps = () => {
      const result = data.filter((element) => {
        return element.chart_rank >= 2 && element.chart_rank <= 4;
      });
      setApps(result);
    }
    
    /******************** WORST ********************/
    const filterWorstApps = () => {
      const result = data.filter((element) => {
        return element.chart_rank === 5;
      });
      setApps(result);
    }
    
    /******************** MOBILE APP ********************/
    const filterMobileApp = () => {
      const result = data.filter((element) => {
        return element.device === "mobile";
      });
      setApps(result);
    }
    
    /******************** TABLET APP ********************/
    const filterTabletApp = () => {
      const result = data.filter((element) => {
        return element.device === "tablet";
      });
      setApps(result);
    }
    
    /******************** DESKTOP APP ********************/
    const filterDesktopApp = () => {
      const result = data.filter((element) => {
        return element.device === "desktop";
      });
      setApps(result);
    }

  return (
    <main className="container">
      <img className="logoTablet" src={logoTablet} alt="logo tablet" />
      <SearchBar></SearchBar>
      <section className="homeBtn">
        <div className="filterBtn">
          <FilterBtnPopular onClick={filterPopularApps}><i className="fa-regular fa-face-laugh fa-lg"></i>Populares</FilterBtnPopular>
          <FilterBtnMedium onClick={filterMediumApps}><i className="fa-regular fa-face-meh fa-lg"></i>Intermedias</FilterBtnMedium>
          <FilterBtnWorst onClick={filterWorstApps}><i className="fa-regular fa-face-frown fa-lg"></i>Peores</FilterBtnWorst>
        </div>
        <div className="devicesBtn">
          <DevicesBtnMobile onClick={filterMobileApp}><i className="fa-solid fa-mobile-screen-button fa-lg"></i>Móvil</DevicesBtnMobile>
          <DevicesBtnTablet onClick={filterTabletApp}><i className="fa-solid fa-tablet-screen-button fa-lg"></i>Tablet</DevicesBtnTablet>
          <DevicesBtnDesktop onClick={filterDesktopApp}><i className="fa-solid fa-desktop fa-lg"></i>Escritorio</DevicesBtnDesktop> 
        </div>
      </section>
      <div id="data" className="data">
        {/* aplicamos la función de paginado */}
        {displayApps}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />  
      </div>
    </main>
  )
};

export default Home;