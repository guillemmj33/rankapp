import React from 'react'
import {Box2, FacebookContainer2, TwitterContainer2, InstagramContainer2, MailContainer2} from './MediasDesktopStyle';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaEnvelopeSquare} from "react-icons/fa";
import {Link} from 'react-router-dom';

const MediasDesktop = () => {
    return (
        <>
            <Box2>
                <FacebookContainer2>
                    <Link to="/"><FaFacebookSquare></FaFacebookSquare></Link>
                </FacebookContainer2>
                <TwitterContainer2>
                    <Link to="/"><FaTwitterSquare></FaTwitterSquare></Link>
                </TwitterContainer2>
                <InstagramContainer2>
                    <Link to="/"><FaInstagramSquare></FaInstagramSquare></Link>
                </InstagramContainer2>
                <MailContainer2>
                    <Link to="/"><FaEnvelopeSquare></FaEnvelopeSquare></Link>
                </MailContainer2>
            </Box2>
        </>
    )
}

export default MediasDesktop