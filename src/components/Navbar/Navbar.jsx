import React from 'react';
import { NavContainer, RedesContainer,RankingContainer, PlusContainer} from './Navbar';
import { FaUserFriends, FaPlus, FaTrophy } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logo from './Logo.jsx';


const Navbar = () => {
  return (
    <>
    <Logo></Logo>
    <NavContainer>
      <RedesContainer>
        <h3>Redes</h3>
        <FaUserFriends>
        <Link to=''></Link>
        </FaUserFriends>
      </RedesContainer>
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