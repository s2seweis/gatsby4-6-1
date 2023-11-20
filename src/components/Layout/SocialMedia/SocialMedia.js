import React from 'react'
import {FaFacebookSquare, FaInstagram, FaYoutube} from 'react-icons/fa';


export default function SocialMedia() {
  return (
    <div className="social-media-left-side" 
      >
        <a
          aria-label="link"
          href="https://www.instagram.com/"
          className="link-social-left1"
          style={{}}
        >
          <span><FaInstagram /></span>
        </a>
        <a
          aria-label="link"
          href="https://www.facebook.com"
          className="link-social-left2"
        >
          <span><FaFacebookSquare /></span>
        </a>
        <a
          aria-label="link"
          href="https://www.youtube.com"
          className="link-social-left3"
        >
          <span><FaYoutube /></span>
        </a>
      </div>
  )
}
