import React, {useEffect, useState} from 'react'
import Badge from "../assets/badge.png";
import PlayButton from "../assets/play-button.png";
import HeaderImage from "../assets/header-image.png";
import getRandomOption from '../utils/randomOption';

import "../styles/header.css";

export default function Header() {

    const [firstLine, setFirstLine] = useState("")
    const [secondLine, setSecondLine] = useState("")
    const [description, setDescription] = useState("")
    const [descriptionSecond, setDescriptionSecond] = useState("")

    useEffect(() => {
        let choice = getRandomOption()
        setFirstLine(choice.first_line)
        setSecondLine(choice.second_line)
        setDescription(choice.description)
        setDescriptionSecond(choice.description_second)
        console.log(choice)
    }, [])


  return (
    <header>
        <img src={Badge} className="badge"/>
        <nav>
            <div className="menu">
              <a href="">Create Your Nanny Share</a>
              <a href="">Browse Shares</a>
              <a href="">Our Story</a>
            </div>


            <div className="call-to-action">
                <img src={Badge} className="badge-mobile"/>
              <a href="" className="call">Become a Nanny Share</a>
              <a href="" className="sign-in">Sign In</a>
            </div>
          </nav>

          <section className="hero">
            <div className="content-left">
              <h1>{firstLine} <br/> {secondLine}</h1>
              <span>{description} <br/> {descriptionSecond}</span>

              <div className="video">
              <img src={PlayButton}/>
                See hapu in action (27 seconds)
              </div>
            </div>

            <div className="content-right">
              <img src={HeaderImage}/>
            </div>

          </section>
       
      </header>
  )
}
