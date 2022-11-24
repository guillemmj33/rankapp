import React from 'react';
import {NavContainer, HomeContainer,RankingContainer, PlusContainer} from './Navbar';
import { FaHome, FaPlus, FaTrophy } from "react-icons/fa";
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <NavContainer>
      <HomeContainer>
        <h3>Home</h3>
        <FaHome>
        <Link to=''></Link>
        </FaHome>
      </HomeContainer>
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