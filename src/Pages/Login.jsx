import Form from "../Components/Form/Form";
import Hero from "../Components/Hero/Hero";
import loginHero from "../assets/img/3.jpg"
export default function Login() {
    return (
        <>
            <Hero
                height="70vh"
                img={loginHero}
                title="Log in"
                btn={{ show: false, content: '' }}
            />
            <Form
                title="Log in My Account"
                nameDisplay="none"
                emailInp="Your Email"
                typeOfThirdInp="password"
                thirdInp="password"
                textAreaDisplay="none"
                passwordRepeatDisp="block"
                submit="Login"
                loginSuggest="none"
            />
        </>
    )
}
