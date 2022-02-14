import React from 'react'

export default function Newsletter() {

    const handleSubmit = () => {
        
    }


  return (
    <section className="newsletter">
        <h2>Are you a parent without a nanny and looking to share?</h2>
        <span>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</span>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name"/>
          <input type="email"placeholder="Your email"/>
          <button type="submit">Send</button>
        </form>
      
    </section>
  )
}
