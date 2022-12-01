import React from 'react';
import {Box, FacebookContainer, TwitterContainer, InstagramContainer, MailContainer} from './MediasStyle';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaEnvelopeSquare} from "react-icons/fa";
import {Link} from 'react-router-dom';

const Medias = ({state}) => {
    return (
        <>
        {state &&
            <Box>
                <FacebookContainer>
                    <Link to="/"><FaFacebookSquare></FaFacebookSquare></Link>
                </FacebookContainer>
                <TwitterContainer>
                    <Link to="/"><FaTwitterSquare></FaTwitterSquare></Link>
                </TwitterContainer>
                <InstagramContainer>
                    <Link to="/"><FaInstagramSquare></FaInstagramSquare></Link>
                </InstagramContainer>
                <MailContainer>
                    <Link to="/"><FaEnvelopeSquare></FaEnvelopeSquare></Link>
                </MailContainer>
            </Box>
        }
        </>
    )
}

export default Medias