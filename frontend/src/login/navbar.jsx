import React from 'react'
import style from "./navbar.module.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <section className={style.s0}>
                <nav>
                    <Link to="/">
                        <img src="./images/Linkedin_Logo.png" alt="logo" />
                    </Link>
                    <div className={style.navbar}>
                        <div className={style.navs}>
                            <div className={style.discover}>
                                <i className="fa-solid fa-compass"></i>
                                <p>Discover</p>
                            </div>
                            <div className={style.discover}>
                                <i className="fa-solid fa-user-group"></i>
                                <p>People</p>
                            </div>
                            <div className={style.discover}>
                                <i className="fa-brands fa-youtube"></i>
                                <p>Learning</p>
                            </div>
                            <div className={style.discover}>
                                <i className="fa-solid fa-briefcase"></i>
                                <p>Jobs</p>
                            </div>
                        </div>
                        <div className={style.navs2}>
                            <Link to="/register">join now</Link>
                            <Link to="/login" className={style.button}>Sign in</Link>
                        </div>
                    </div>
                </nav>
            </section>
            <div className={style.loginbody}>
                <div className={style.loginbody1}>
                    <div className={style.left}>
                        <h1 className={style.welcome}>
                            Welcome to your professional community
                        </h1>
                        <div className={style.d1}>
                            <p>Search for a job</p>
                            <p><i className="fa-solid fa-chevron-right"></i></p>
                        </div>
                        <div className={style.d1}>
                            <p>Find a person you know</p>
                            <p><i className="fa-solid fa-chevron-right"></i></p>
                        </div>
                        <div className={style.d1}>
                            <p>Learn a new skill</p>
                            <p><i className="fa-solid fa-chevron-right"></i></p>
                        </div>
                    </div>
                    <div className={style.right}>
                        <img src="./images/login1.svg" alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}
