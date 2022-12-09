import React, { useState } from 'react';
import { NavContainer, MediaContainer, RankingContainer, PlusContainer } from './NavbarStyle';
import { FaUserFriends, FaPlus, FaTrophy } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Medias from '../Medias/Medias';


const Navbar = () => {
  const [stateMedia, openMedia] = useState(false);

  return (
    <>
      <NavContainer>

        <MediaContainer>
          <div onClick= {() => openMedia(!stateMedia)} type="button">
            <Medias
            state = {stateMedia}>
            </Medias>
            <h3>Redes</h3>
            <FaUserFriends>
            </FaUserFriends>
          </div>
        </MediaContainer>
        
        <Link to='/'>
          <RankingContainer>
            <FaTrophy>
            </FaTrophy>
            <span className="dot-ranking"></span>
            <h3>Ranking</h3>
          </RankingContainer>
        </Link>

        <Link to='/addapp'>
          <PlusContainer>
              <span className="dot-plus"></span>
              <h3>Add App</h3>
              <FaPlus>
              </FaPlus>
          </PlusContainer>
        </Link>
      </NavContainer>
    </>
  )
};

export default Navbar;