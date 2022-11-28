import React from 'react';
import Redes from './RedesStyle';
import { BsFacebook, BsInstagram, BsTwitter, BsReddit } from "react-icons";
import {Link} from 'react-router-dom';

const RedesArq = () => {
  return (
    <><BsFacebook>
          <a href='https://facebook.com/'></a>
      </BsFacebook><BsInstagram>
              <a href='https://instagram.com/'></a>
          </BsInstagram><BsTwitter>
              <a href='https://twitter.com/'></a>
          </BsTwitter><BsReddit>
              <a href='https://reddit.com/'></a>
          </BsReddit></>
  );
}

export default RedesArq