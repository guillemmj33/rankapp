import React from 'react';
import { useParams } from 'react-router-dom';
import dataAPI from '../../data/dataAPI.json';

const SingleApp = () => {
  const data = dataAPI.data;

  //utilizamos useParams para que el localhost reconozca los datos provinientes de la API, en este caso el :app_name
  let { app_name } = useParams();

  let filterData = data.filter(el => (
      app_name === ":" + el.app_name
    )
  );

  return (
    <div className="container" key={filterData[0].app_name}>
      <div className="box__1">
        <img src={filterData[0].app_icon} width="100" alt="app icon" />
        <h2>{filterData[0].app_name}</h2>
        <div className="btn__likeDislike">
          <button type="submit">
            <i class="fa-regular fa-thumbs-up"></i>
          </button>

          <button type="submit">
            <i class="fa-regular fa-thumbs-down"></i>
          </button>
        </div>
        <div className="description">
          <p>{filterData[0].app_description}</p>
        </div>
      </div>

      <div className="box__2">
      <div className="box__2_1">
        <div className="box__2_1--1">
          <h2>{filterData[0].rating}</h2>
          <h5>Out of 5</h5>
        </div>
        <div className="box__2_1--2">
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>

      <div className="box__2_2">
        <p>Leave us your comment:</p>
        <textarea rows="4" cols="50" name="comment" form="usrform">
          Enter your comment here...
        </textarea>
        <button type="submit">Save</button>
      </div>

      <div className="box__2_3">
        <p>What do you think?</p>
        <div className="box__2_3--1">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  </div>
  )
};

export default SingleApp;