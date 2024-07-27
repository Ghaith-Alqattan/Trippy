import { Link } from 'react-router-dom'
import './Form.css'
export default function Form({
    title,
    nameInp,
    nameDisplay,
    emailInp,
    typeOfThirdInp,
    thirdInp,
    textAreaDisplay,
    passwordRepeatDisp,
    submit,
    loginSuggest,
}) {
    return (
        <>
            <div className="formContainer">
                <div className="formCard">
                    <h1 className="title">{title}</h1>
                    <form>
                        <input
                            type="text"
                            placeholder={nameInp}
                            id="name"
                            style={{ display: nameDisplay }}
                        />
                        <input type="email" placeholder={emailInp} id="email" />
                        <input type={typeOfThirdInp} placeholder={thirdInp} id="subject" />
                        <textarea
                            placeholder="Message"
                            id="message"
                            style={{ display: textAreaDisplay }}
                        ></textarea>
                        <input
                            type="password"
                            placeholder="Repeat Your Password Here"
                            style={{ display: passwordRepeatDisp }}
                        />
                        <button type="submit">{submit}</button>
                        <div className="suggest" style={{ display: loginSuggest }}>
                            <p>have already an account? </p>
                            <Link to="/Login">login here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
