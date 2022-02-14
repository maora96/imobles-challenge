import React, {useState} from 'react'
import { fetchWithBody } from '../utils/fetch'
import toast, { Toaster } from 'react-hot-toast';

export default function Newsletter() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        fetchWithBody(
            'https://api.jungledevs.com/api/v1/challenge-newsletter/', 'POST', 
            {"name": name, "email": email})
        .then((res) => res.json())
        .then(resJson => {
            console.log(resJson)
            if (resJson.detail === "Ok.") {
                toast('Sua inscrição foi realizada com sucesso!')
            } else if (resJson.email[0] === "Enter a valid email address.") {
                toast('Endereço de email inválido.')
            }
            
        })
        .catch((err) => {
            console.log(err)
            toast('Algo deu errado. Por favor, cheque seu endereço de email.')
        })


    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

  return (
    <section className="newsletter">
        <h2>Are you a parent without a nanny and looking to share?</h2>
        <span>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</span>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" onChange={handleNameChange} />
          <input type="email"placeholder="Your email" onChange={handleEmailChange}/>
          <button type="submit">Send</button>
        </form>
        <Toaster />
    </section>
  )
}
