import React, {useState} from 'react';
import {NavContainer, MediaContainer,RankingContainer, PlusContainer} from './NavbarStyle';
import { FaUserFriends, FaPlus, FaTrophy } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logo from './Logo.jsx';
import Medias from '../Medias/Medias';


const Navbar = () => {
    const [stateMedia, openMedia] = useState(false);
  return (
    <>
    <Logo></Logo>
    <NavContainer>
      <MediaContainer>
        <div onClick= {() => openMedia(!stateMedia)}type="button">
          <Medias
          state = {stateMedia}>
          </Medias>
          <h3>Redes</h3>
          <FaUserFriends>
          <Link to=''></Link>
          </FaUserFriends>
        </div>
      </MediaContainer>
      <RankingContainer>
          <h3>Ranking</h3>
          <FaTrophy>
            <Link to=''></Link>
          </FaTrophy>
      </RankingContainer>
      <PlusContainer>
          <h3>Add App</h3>
          <FaPlus>
            <Link to=''></Link>
            </FaPlus>
      </PlusContainer>
    </NavContainer>
    </>
  )
};

export default Navbar;