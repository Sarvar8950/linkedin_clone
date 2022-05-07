import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { baseUrl } from "../config";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addsinglePost } from '../../Redux/AllPost/allPostAction'
// import {ImgTOBase64} from './Images/ImgTOBase64';
// import { useAuth0 } from '@auth0/auth0-react';
// import { NotiFicationMess } from './NotiFicationMess'
import { NotiFicationMess } from '../../Utility/NotiFicationMess'
import { ImgTOBase64 } from '../../Utility/ImgTOBase64'


export function CreatePostBtn({ startpost }) {
    const userdata = JSON.parse(localStorage.getItem("userdata"))
    const [imgData, setImgData] = useState('');
    const [postDescription, setPosDescription] = useState('');
    //   let postIs = useSelector((store) => store.allPost.allPost);
    const dispatch = useDispatch();
    //   console.log("postIs postIs.allPost *****  ", postIs);
    // const dispatch = useDispatch();
    // const {user, } = useAuth0()
    function exit() {
        startpost(false)
    }
    let xx = "868236b9-4a0b-44dd-818f-d063887be0cb";
    xx = "391e4ca0-3ba5-4d8c-b237-0ce1710a8590";
    console.log('xx', xx)
    const postDelete = () => {
        axios.delete(`${baseUrl}/allpost/${xx}`)
            .then((res) => {
                console.log('delete api res is ', res);
            }).catch((er) => {
                console.log('delete api error is  ', er);

            })
    }
    const name = JSON.parse(localStorage.getItem('res'))
    // [0].userdata.name
    let userName = name?.[0]?.userdata?.name;
    console.log('postDelete', postDelete)
    const sendPost = () => {
        const obj = {
            firstName: userName,
            id: uuid(),
            postDescription: postDescription !== null ? postDescription : '',
            image: imgData,
            comments: [{
                userProfilePic: "",
                id: "xxx",
                userName: "test-user",
                userPosition: "working at google",
                userActivityTrack: "",
                commentTime: "Sat May 07 2022 01:35:57 GMT-0700",
                commentDecription: "first test comm"
            }],
            nameOfOrganization: userName,
            share: 0,
            totalComment: 0,
            totalLike: 0,
            commentStatus: false,
            showCommentInput: false,
            userCreatedPostName: userName,
            postCreatedTime: new Date(),
        }
        axios
            .post(`${baseUrl}/createPost`, obj)
            .then((res) => {
                //   dispatch(addsinglePost([postData, ...postIs]))
                // console.log("post api data after posting ", res);
                exit();
                setPosDescription('')
                dispatch(addsinglePost(obj))

            })
            .catch((er) => {
                console.log("post api error ", er);
            });
    };

    if (imgData?.length > 2) {
        console.log('iiiiiiiiii ', imgData)
    }
    return (
        <section className="s7" style={{ textAlign: "left" }}>
            <div className="s77">
                <div className="d1">
                    {/* <button onClick={postDelete}>delete p</button> */}
                    <p>Create a Post</p>
                    <i onClick={exit} className="fa-solid fa-xmark"></i>
                </div>
                <hr />
                <div className="d2">
                    <div className="d20">
                        {/* <ImgTOBase64 setImgData={setImgData} /> */}
                        <img src="./images/profileimage.jpeg" alt="profileimage" />
                        <div className="d21">
                            <p>{userdata?.name} </p>
                            <p className="anymore">
                                <i className="fa-solid fa-earth-americas"></i>
                                Anyone
                                <i className="fa-solid fa-caret-down"></i>
                            </p>
                        </div>
                    </div>
                    <div className="d22">
                        <textarea onChange={(e) => setPosDescription(e.target.value)} placeholder="What do you want to talk about?"></textarea>
                        <ImgTOBase64 setImgData={setImgData} />

                    </div>
                    <div className="d23">
                        <p className="hastag">Add Hastag</p>
                    </div>
                </div>
                <div className="d3">
                    <div className="d31">
                        <i className="fa-solid fa-image"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-solid fa-file"></i>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                        <i className="fa-solid fa-ellipsis"></i>
                        &nbsp; | &nbsp;
                        <p>
                            <i className="fa-solid fa-earth-africa"></i>
                            Anyone
                        </p>
                    </div>
                    <div className="d32">
                        <button onClick={sendPost} >
                            <NotiFicationMess msg={"Post Created Succesfully !"} btn={"Post"} />
                            {/* <NotiFicationMess msg={" Post Created Succesfully ! "} btn={"Post"} /> */}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}