import Badge from "./assets/badge.png";
import PlayButton from "./assets/play-button.png";
import HeaderImage from "./assets/header-image.png";

import ProfilePic from "./assets/profile-pic.png";
import Section1Image from "./assets/section1-image.png";
import Section3Image from "./assets/section3-image.png"
import Section4Image from "./assets/section4-image.png"
import Section5Image from './assets/section5-image.png'

import Icon from "./assets/icon.svg"
import Logo from "./assets/logo.svg"
import Instagram from "./assets/instagram.png"
import Twitter from "./assets/twitter.png"
import Facebook from "./assets/facebook.png"
import "./App.css";


function App() {
  return (
    <div className="App">
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
              <h1>Easily create or join a local<br/> nanny share with Hapu</h1>
              <span>Hapu is Airbnb for nanny share. Share your home, nanny and costs <br/>and create new flexible, affordable solutions in childcare.</span>

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


      <section className="notice">
        <div className="container">
          <img src={ProfilePic}/>
          <a href="">Sarah’s day care available now in North Sydney</a> 
          <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>Share your home, <br/>nanny and costs</h2>
          <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
          <a href="">Ready to get started?</a>
        </div>

        <img src={Section1Image}/>
      </section>

      <section className="newsletter">
        <h2>Are you a parent without a nanny and looking to share?</h2>
        <span>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</span>

        <form>
          <input type="text" placeholder="Your name"/>
          <input type="email"placeholder="Your email"/>
          <button>Send</button>
        </form>
      
      </section>


      <section className="shared-payments">
        <img src={Section3Image}/>

        <div className="shared-payments-about">
          <h2>Shared payments made simple</h2>

          <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>

          <a href="">Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </section>


      <section className="framework">

        <div className="framework-content">
          <h2>A framework built for the long term</h2>

          <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>

          <a href="">Read how Hapu’s tribal background defines our app </a>
        </div>

        <div className="image">
          <img src={Section4Image}/>
        </div>
      </section>

      <section className="coming-soon">
        <img src={Section5Image}/>
        <h2>Coming soon: Nanny Share Daily Diary!</h2>
        <p>With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
      </section>

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
        <p class="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
      </footer>

    </div>
  );
}

export default App;
