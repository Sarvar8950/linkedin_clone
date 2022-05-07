import React,{useState} from 'react'
import style from "./login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import {baseUrl} from '../Components/config'
// import { NotiFicationMess } from '../Utility/NotiFicationMess'
// import { useDispatch } from 'react-redux';
// import { login, logout } from "../Redux/action"

export default function Login({ setlogedin, islogedin }) {
    const navigate = useNavigate();
    // const dispatch = useDispatch()
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("");
    const [data, setData]=useState([])
    // const [token, setToken] = React.useState("")
   
    
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
        fetch(`${baseUrl}/login`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                setData(res)
                console.log('dddd', data)
                // if()
                if(res?.[0]?.token?.length > 1) {
                    // setToken(res[0].token)
                    // if(JSON.parse(localStorage.getItem('userdata'))==null){
                    //     localStorage.setItem('userdata', JSON.stringify(res?.[0]?.userdata));
                    // }
                    localStorage.setItem('userdata', JSON.stringify(res?.[0]));
                    localStorage.setItem('res', JSON.stringify(res));
                    localStorage.setItem('userdata', JSON.stringify(res?.[0]?.userdata));
                    localStorage.setItem('tokenIs', res[0].token);
                    // dispatch(login())
                    alert("You are loged in")
                    // setlogedin(res[0].token)
                    // localStorage.setItem("token" , islogedin)
                    navigate("/home")
                    // window.location.redirect("/home")
                    window.location.reload();
                } else {
                    // dispatch(logout())
                    alert("Invalid credantial")
                    localStorage.setItem('tokenIs', "");
                    localStorage.setItem('userdata', "");
                    // setlogedin("")
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
console.log('ffff', data)
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
