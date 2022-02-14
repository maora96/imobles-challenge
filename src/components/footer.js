import React from 'react'
import Icon from "../assets/icon.svg"
import Logo from "../assets/logo.svg"
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"
import Facebook from "../assets/facebook.png"

import "../styles/footer.css"

export default function Footer() {
  return (
    <footer>
    <h2>Become a nanny share host</h2>
    <p>Takes less than 5 minutes to get started</p>

    <div className="button">
      <img src={Icon}/>
      <div>
        <span>Create Your Nanny Share</span>
        <span>Takes less than 5 minutes</span>
      </div>
    </div>

    <a href="">Or browse local nanny-shares</a>

    <nav>
      <img src={Logo}/>

      <div className="menu">
        <a href="">Share Your Nanny</a>
        <a href="">Our Story</a>
        <a href="">Blog</a>
        <a href="">Terms & Privacy</a>
      </div>

      <div className="social-media-links">
        <a href=""><img src={Facebook}/></a>
        <a href=""><img src={Twitter}/></a>
        <a href=""><img src={Instagram}/></a>
      </div>
    </nav>
    <p className="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
  </footer>
  )
}
