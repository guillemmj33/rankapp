import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataAPI from '../../data/dataAPI.json';
import SearchBar from '../../components/SearchBar/Searchbar';

const SingleApp = () => {
  const data = dataAPI.data;

  //utilizamos useParams para que el localhost reconozca los datos provinientes de la API, en este caso el :app_name
  let { app_name } = useParams();

  //filtramos para que nos devuelva solamente los que tengan el nombre app.name == :app_name
  let filterData = data.filter(el => (
      app_name === ":" + el.app_name
    )
  );
  
  //creamos los state para los botones de like y dislike
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  function addLike() {
    if(likeActive) {
      setLikeActive(false)
      setLike(like-1)
    } else {
      setLikeActive(true)
      setLike(like+1)

      if(dislikeActive) {
        setDislikeActive(false)
        setLike(like+1)
        setDislike(dislike-1)
      }
    }
    console.log("like", like);
  }

  function addDislike() {
    if(dislikeActive) {
      setDislikeActive(false)
      setDislike(dislike-1)
    } else {
      setDislikeActive(true)
      setDislike(like+1)

      if(likeActive) {
        setLikeActive(false)
        setDislike(dislike+1)
        setLike(like-1)
      }
    }

    console.log("dislike", dislike);    
  }

  return (
    <div className="container" key={filterData[0].app_name}>
      <SearchBar />
      <div className="box__1">
        <img src={filterData[0].app_icon} width="100" alt="app icon" />
        <h2>{filterData[0].app_name}</h2>
        <div className="btn__likeDislike">
          <button type="submit" onClick={addLike} className={[likeActive ? 'btn__likeActive' : null, 'button'].join(' ')}>
            <i className="fa-regular fa-thumbs-up"></i>
          </button>

          <button type="submit" onClick={addDislike} className={[dislikeActive ? 'btn__dislikeActive' : null, 'button'].join(' ')}>
            <i className="fa-regular fa-thumbs-down"></i>
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
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>

      <div className="box__2_2">
        <p>Leave us your comment:</p>
        <textarea  
          rows="4" 
          cols="50" 
          name="comment" 
          form="usrform" 
          defaultValue="Enter your comment here...">
        </textarea>
        <button type="submit">Save</button>
      </div>

      <div className="box__2_3">
        <p>What do you think?</p>
        <div className="box__2_3--1">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  </div>
  )
};

export default SingleApp;