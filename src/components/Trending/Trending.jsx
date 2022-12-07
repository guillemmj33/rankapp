import React from 'react';
import { TrendingContainer } from './TrendingStyle';
import dataAPI from '../../data/dataAPI.json';

const Trending = () => {
  const data = dataAPI.data;

  const resultTrending = data
    .sort((a, b) => (a.num_downloads_exact < b.num_downloads_exact ? 1 : -1))
  ;

  return (
    <>
      <TrendingContainer>
          <h3>Trending</h3>
          {
            resultTrending.map(data => {
              return (
                <div className="trending__card">
                    <img src={data.app_icon} width="50" height="50" alt={data.app_name} />
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
                </div>
              )
            })
          }
      </TrendingContainer>
    </>
  )
}

export default Trending;