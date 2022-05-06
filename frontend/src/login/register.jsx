import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { baseUrl } from "../Components/config";
import style from "./login.module.css"

export default function Register(e) {
    // e.preventDefault();
    const navigate = useNavigate()
    const [name, setname] = React.useState("")
    const [email, setemail] = React.useState("")
    const [contact, setcontact] = React.useState(Number)
    const [password, setpassword] = React.useState("")

    function googlelogin(e) {
        e.preventDefault()
        fetch(`${baseUrl}/google`)
        .then((res) => {
            console.log(res)
            // if (res.status === 201) {
            //     alert("You are Registered")
            //     // navigate('/login')
            // } else {
            //     alert("Some Error occured")
            // }
        })
    }

    function add(e) {
        if (name.length < 3) {
            alert("Add a proper Name")
            return;
        }
        if (contact.length < 10) {
            alert("Add correct Contact Number")
            return;
        }
        if (email.length < 3) {
            alert("Add a proper Email")
            return;
        }
        if (password.length < 6) {
            alert("Password must have 6 characters")
            return;
        }
        e.preventDefault();
        var obj = {
            name: name,
            contact: contact,
            email: email,
            password: password
        }
        fetch(`${baseUrl}/register`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 201) {
                alert("You are Registered")
                navigate('/login')
            } else {
                alert("Some Error occured")
            }
        })
    }

    function showhide() {
        var show = document.getElementById('password')
        var btn = document.querySelector('#showhide')
        if (show.type === "password") {
            show.type = "text"
            btn.textContent = "Hide"
        } else {
            show.type = "password"
            btn.textContent = "Show"
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
                    <p>Name</p>
                    <div className={style.inputs}>
                        <input type="text" value={name} placeholder="name" onInput={e => setname(e.target.value)} />
                    </div>
                    <p>Email</p>
                    <div className={style.inputs}>
                        <input type="text" value={email} placeholder="email" onInput={e => setemail(e.target.value)} />
                    </div>
                    <p>Contact Number</p>
                    <div className={style.inputs}>
                        <input type="number" value={contact} placeholder="contact" onInput={e => setcontact(e.target.value)} />
                    </div>
                    <p>Password (6 or more characters)</p>
                    <div className={style.inputs}>
                        <input type="password" id="password" value={password} placeholder="password" onInput={e => setpassword(e.target.value)} autoComplete="true" />
                        <p className={style.show} id="showhide" onClick={showhide}>Show</p>
                    </div>
                    <p className={style.privacy}>By clicking Agree & Join, you agree to the LinkedIn <span> User Agreement </span>, <span> Privacy Policy </span>, and <span> Cookie Policy</span>. </p>
                    <button onClick={add}>Agree & Join</button>
                    <p style={{textAlign : "center"}}>OR</p>
                    <button onClick={googlelogin}>Continue with Google</button>
                    <p className={style.signinline}>Alredy on LinkedIn? <Link to="/login">Log in</Link></p>
                </form>
            </div>
        </>
    )
}



