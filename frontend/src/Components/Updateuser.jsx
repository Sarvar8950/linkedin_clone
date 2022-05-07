import React from 'react'
import "./updateuser.css"
// import {   }
export default function Updateuser({setupdateuser}) {
    return (
        <>
            <section className="updateuser" >
                <div className="update">
                    <div className="d1">
                        <p>Profile photo</p>
                        <i className="fa-solid fa-xmark" onClick={() => setupdateuser(false)}></i>
                    </div>
                    <div className="profile">
                        <img src="./images/profileimage.jpeg" alt="profile" />
                    </div>
                    <div className="d2">
                        <i className="fa-solid fa-eye"></i>
                        Public
                    </div>
                    <hr />
                    <div className="d3">
                        <div className="d31">
                            <div className="p1">
                                <i className="fa-solid fa-pen"></i>
                                <p>Edit</p>
                            </div>
                            <div className="p1">
                                <i className="fa-solid fa-camera"></i>
                                <p>Add photo</p>
                            </div>
                            <div className="p1">
                                <i className="fa-solid fa-image"></i>
                                <p>Frames</p>
                            </div>
                        </div>
                        <div className="d32">
                            <div className="p1">
                                <i className="fa-solid fa-trash-can"></i>
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
