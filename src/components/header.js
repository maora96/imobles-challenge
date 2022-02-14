import React, {useEffect, useState} from 'react'
import Badge from "../assets/badge.png";
import PlayButton from "../assets/play-button.png";
import HeaderImage from "../assets/header-image.png";

export default function Header() {

    const options = [
        {
            first_line: "Easily create or join a local",
            second_line: "nanny share with Hapu",
            description: "Hapu is Airbnb for nanny share. Share your home, nanny and costs",
            description_second: "and create new flexible, affordable solutions in childcare."
        }, 
        {
            first_line: "Create the childcare you need",
            second_line: "at a price you can afford",
            description: "Connect with other local families to share a nanny from as low as",
            description_second: "$10.00/hr each. Create your family profile today to get started."
        }
    ]


    const getRandomOption = () => {
        const index = Math.round(Math.random())
        return options[index]
    }

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
              <a href="" className="call">Become a Nanny Share</a>
              <a href="">Sign In</a>
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
