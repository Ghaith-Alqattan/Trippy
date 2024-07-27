import Form from "../Components/Form/Form";
import Hero from "../Components/Hero/Hero";

export default function Signup() {
    return (
        <>
            <Hero
                height="70vh"
                img="../public/img/Contact.jpg"
                title="Sign up"
                btn={{ show: false, content: '' }}
            />
            <Form
                title="Create an account"
                nameInp="Your Name"
                nameDisplay="block"
                emailInp="Your Email"
                typeOfThirdInp="password"
                thirdInp="password"
                textAreaDisplay="none"
                passwordRepeatDisp="block"
                submit="Register"
                loginSuggest="block"
            />
        </>
    )
}
