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

export default function getRandomOption() {
    const index = Math.round(Math.random())
    return options[index]
}