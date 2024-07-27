import Hero from '../Components/Hero/Hero'
import Form from '../Components/Form/Form'
export default function Contact() {
    return (
        <>
            <Hero
                height="70vh"
                img="../../public/img/Contact.jpg"
                title="Contact"
                btn={{ show: false, content: '' }}
            />
            <Form
                title="Send a message to us!"
                nameInp="Name"
                nameDisplay="block"
                emailInp="Email"
                typeOfThirdInp="text"
                thirdInp="Subject"
                textAreaDisplay="block"
                passwordRepeatDisp="none"
                submit="Send Message"
                loginSuggest="none"
            />
        </>
    )
}
