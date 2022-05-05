import React from 'react'
import style from "./login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login, logout } from "../Redux/action"

export default function Login({ setlogedin }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")
    
    function loginfun(e) {
        e.preventDefault();
        if (email.length < 3 || password.length < 6) {
            alert("Invalid data")
            return;
        }
        var obj = {
            email: email,
            password: password
        }
        fetch(`http://localhost:8001/login`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res[0].token)
                if (res[0].token.length > 1) {
                    dispatch(login())
                    alert("You are loged in")
                    setlogedin(res[0].token)
                    navigate("/home")
                } else {
                    dispatch(logout())
                    alert("Invalid credantial")
                    setlogedin("")
                }
            })
    }

    function showhide() {
        var show = document.getElementById('password')
        var btn = document.querySelector('#showhide')
        if (show.type === "password") {
            show.type = "text"
            btn.innerText = "Hide"
        } else {
            show.type = "password"
            btn.innerText = "Show"
        }
    }

    return (
        <>
            <div className={style.loginpage}>
                <Link to="/">
                    <img src="./images/Linkedin_Logo.png" alt="logo" />
                </Link>
                <h1>Make the most of your professional life</h1>
                <form>
                    <p>Email or phone number</p>
                    <div className={style.inputs}>
                        <input type="text" onInput={e => setemail(e.target.value)} />
                    </div>
                    <p>Password (6 or more characters)</p>
                    <div className={style.inputs}>
                        <input id='password' type="password" onInput={e => setpassword(e.target.value)} autoComplete="true" />
                        <p className={style.show} id="showhide" onClick={showhide}>Show</p>
                    </div>
                    <p className={style.privacy}>By clicking Agree & Join, you agree to the LinkedIn <span> User Agreement </span>, <span> Privacy Policy </span>, and <span> Cookie Policy</span>. </p>
                    <button onClick={loginfun}>Agree & Join</button>
                    <p className={style.signinline}>Don't have any Account yet <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        </>
    )
}
