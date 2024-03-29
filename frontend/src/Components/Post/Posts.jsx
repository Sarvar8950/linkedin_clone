import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
// import { baseUrl } from "../config";
import {baseUrl} from '../config'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { dateDiffrance } from "../utility";
import { dateDiffrance } from '../../Utility/utility'
import { NotiFicationMess } from '../../Utility/NotiFicationMess'
// import { GetAllPost } from "../ApiServices/ApiFetch";
// import { ShowComments } from "./ShowComments";

// import {
//   getAllPost2, deleteCommet, deletPost, show1posttypeAllComment,
//   showCommentInputBox, upadtePostLike, addComentToPost
// } from "../Redux/AllPost/allPostAction";

import {   getAllPost2,    deleteCommet, deletPost, show1posttypeAllComment,
  showCommentInputBox, upadtePostLike, addComentToPost } from '../../Redux/AllPost/allPostAction'
import { useAuth0 } from '@auth0/auth0-react';


export const Posts = () => {
  // const [allPost, setAllPost] = useState([]);
  const [check,setcheck] = useState(true)
  // console.log('allPost',allPost);
  const [sendComment, setSendComment] = useState("");
  // const [viewComment, setViewComment] = useState(false)
  let postIs = useSelector((store) => store.allPost.allPost);
  //   console.log("postIs postIs.allPost *****  ", postIs);
  const dispatch = useDispatch();
  const {user, } = useAuth0()


  useEffect(() => {
    const postData = () => {
      axios.get(`${baseUrl}/get-all-post`).then((res) => {
        // console.log("res allpost", res);
        if (res?.data?.length > 0) {
          // console.log("dispatch  action ");
          dispatch(getAllPost2(res?.data));
          // setAllPost(res.data);
        }
      });
    };
    postData()
  }, [dispatch]);

  // const handleDispatch = () => {
  //   dispatch(getAllPost2(allPost));
  // };

  // const sendPost = () => {
  //   const postData = {
  //     id: uuid(),
  //     commentStatus: false,
  //     showCommentInput: false,
  //     commentMessage: [
  //       {
  //         id: uuid(),
  //         userProfilePic: "https://picsum.photos/200/150",
  //         userName: "shahjad ",
  //         userPosition: "flutter developer at amazon",
  //         commentTime: "2022-05-06",
  //         commentDecription: "own created for testing"
  //       }
  //     ],
  //     userCreatedPostName: "first post of days",
  //     totalLike: 0,
  //     postDescription: "hiring for java developer",
  //     nameOfOrganization: "masai school",
  //     postCreatedTime: new Date(),
  //     share: 0,
  //     totalComment: 0,
  //   };
  //   axios
  //     .post(`${baseUrl}/allpost`, postData)
  //     .then((res) => {
  //       //   dispatch(addsinglePost([postData, ...postIs]))
  //       console.log("post api data after posting ", res);
  //       if (res.status === 200) {
  //         postData()
  //       }
  //     })
  //     .catch((er) => {
  //       console.log("post api error ", er);
  //     });
  // };

  const handlePostLike = (id) => {
    const updatedData = postIs.map((item) =>
      item.id !== id ? item : { ...item, totalLike: +item?.totalLike + 1 }
    );
    dispatch(upadtePostLike(updatedData));
    console.log('updatedData', updatedData)
  };
  const handleComment = (e) => {
    setSendComment(e.target.value);
  };
  const name = JSON.parse(localStorage.getItem('res'))
    // [0].userdata.name
    let userName = name?.[0]?.userdata?.name;
  const sendcommentOnPost = (id) => {
    // console.log('idd comment', id)
    const c = {
      userProfilePic: "",
      id: uuid(),
      userName: userName||'User Name',
      userPosition: "working at google",
      userActivityTrack: '',
      commentTime: new Date(),
      commentDecription: sendComment,
    };
    const updatedComment = postIs.map((item) => {
      return (item.id !== id ? item : { ...item, commentMessage: [c, ...item?.commentMessage], commentStatus: true })
    }
    );
    // console.log('updatedComment', updatedComment)
    dispatch(addComentToPost(updatedComment))
    setSendComment("");
  };
  const showComments = (id) => {
    const updatedCommentShow = postIs.map((item) =>
      item.id !== id ? item : {
        ...item,
        commentStatus: !item?.commentStatus
      }
    );
    dispatch(show1posttypeAllComment(updatedCommentShow))
  }

  const showCommetInput = (id) => {
    const data = postIs.map((item) =>
      item.id !== id ? item : {
        ...item, showCommentInput: !item?.showCommentInput
      })
    dispatch(showCommentInputBox(data))
  }
  const handleDeletComm = (id2, msg) => {
    // dispatch(deleteCommet(data))
    const data = postIs.map((item) =>
      item.id !== id2 ? item : { ...item, commentMessage: item?.commentMessage.filter((val) => val.commentDecription !== msg) })
    console.log('deleted comment', data,);
    dispatch(deleteCommet(data))

  }
  const handleDeletePost = (id) => {
    // delete1(id)
    // console.log(id)
    axios.delete(`${baseUrl}/delete/${id}`)
        .then((res)=>{
            console.log('delete api res is ', res);
        }).catch((er)=>{
            console.log('delete api error is  ', er);

        })

    // console.log("handleDeletePost", id)
    const updatedData = postIs.filter((item) => item.id !== id)
    dispatch(deletPost(updatedData))
  }
  // function deletepostshowhide() {
  //   var deletebtn = document.querySelector(".deletebtn")
  //   if(deletebtn.style.display === "none") {
  //     deletebtn.style.display = "block"
  //   } else {
  //     deletebtn.style.display = "none"
  //   }
  // }
  const commentinput = {
    fontSize : "15px",
    marginBottom : "5px",
    outline : "none",
    border : `1px solid #ccc`,
    background : "none",
    width : "100%",
    color : "#fff",
    borderRadius : "25px",
    padding : "10px"
  }
  const commentbtn = {
    padding : "3px 10px",
    cursor : "pointer",
    marginLeft : "4px",
    marginBottom : "5px",
    background : "#70b5f9",
    color : "#1d2226",
    borderRadius : "25px",
    border : "none",
    outline : "none",
    fontSize : "18px",
    left : "0px"
  }

  return (
    <div>
      {/* <button onClick={sendPost}>Post data</button> */}
      {
      postIs?.map((item) => {
        return (
          <div key={item.id} className="post" style={{ marginBottom: "20px" }}>
            {/* <button onClick={handleDispatch}>submit allPost</button> */}
            <div className="p1">
              <div className="postdata">
                <div className="left">
                  <div className="l1">
                    <img src="/images/profileimage.jpeg" alt="User Profile" />
                  </div>
                  <div className="l2">
                    {/* <p>{item.userCreatedPostName}</p> */}
                    <p className="">{item.nameOfOrganization}</p>
                    <p className="small">
                      {dateDiffrance(new Date(), item.postCreatedTime)} ago
                    </p>
                    {/* <button 
                    onClick={() => { handleDeletePost(item?.id) }}>
                      delete item
                    </button>
                    */}
                   {/* <button className="deletebtn" style={{position:"absolute",right:0 ,border: "1px solid #fff", background: "#1b2226", display:"none" }} 
                    onClick={() => { handleDeletePost(item?.id) }}>
                      <NotiFicationMess msg={" Post Delete Succesfully !"} btn={"Delete"} />
                    </button> */}
                    <p style={{ marginBottom: "20px" }}> {item.postDescription} </p>
                  </div>
                </div>
                <p className="righttext">
                  <i className="fa-solid fa-bookmark"></i>
                  {!check && <NotiFicationMess msg={" Post Delete Succesfully !"} btn={""} />}
                  <i className="fa-solid fa-ellipsis" onClick={() => { handleDeletePost(item?.id); setcheck(true) }}></i>
                  {/* <i className="fa-solid fa-trash" onClick={() => { handleDeletePost(item?.id); setcheck(true) }}></i> */}
                  {/* <i class="fa-solid fa-ellipsis" onClick={deletepostshowhide}></i> */}
                </p>
              </div>
            </div>
            <div className="p2">
              {!item.image ? (
                <h1>Loading .......</h1>
              ) : (
                <img
                  width="100%"
                  height="100%"
                  src={`${item.image}`}
                  // src={`https://picsum.photos/200/150`}
                  alt="PostImage"
                />
              )}
            </div>
            <div className="p3">
              <div className="reactions">
                <p className="small link">
                  <i class="fa-solid fa-heart i1"></i>
                  <i class="fa-solid fa-lightbulb i2"></i>
                  <i class="fa-solid fa-hands-clapping i3"></i>
                  <span> {item.totalLike} Likes</span>
                </p>
                <p onClick={() => { showComments(item.id) }} className="small">
                  {item.commentMessage?.length} Comments b . 15 Shares
                </p>
              </div>
              <hr />
              <div className="btns">
                <button
                  className="likebtn"
                  onClick={() => {
                    handlePostLike(item.id);
                  }}
                >
                  <i class="fa-solid fa-thumbs-up"></i> Like
                </button>
                <button onClick={() => { showCommetInput(item.id) }} className="commentbtn">
                  <i class="fa-solid fa-comment-dots"></i> Comments
                </button>
                <button className="sharebtn">
                  <i class="fa-solid fa-share"></i> Share
                </button>
                <button className="sendbtn">
                  <i class="fa-solid fa-paper-plane"></i> Send
                </button>
              </div>
            </div>

            <div>
              {item?.showCommentInput && (
              <div className="input-comment-main">
                <input
                  type="text"
                  style={commentinput}
                  value={sendComment}
                  onChange={handleComment}
                  clasName="inputComment"
                  placeholder="Add a comment..."
                />
                {sendComment !== "" && (
                  <button style={commentbtn} onClick={() =>{sendcommentOnPost(item?.id)}}>Post </button>
                )}
              </div>)
              }
              {
                item?.commentStatus && item?.commentMessage?.length !== 0 ? item?.commentMessage?.map((val) => {
                  return (
                    <>
                      <hr />
                      <br />
                    
                      {
                        user?.nickname===val.userName ?  <button onClick={() => {
                          handleDeletComm(
                            item.id || item.commentDecription, val.commentDecription)
                        }}>
                          <NotiFicationMess msg={"Delete this Comment"} btn={"deletd comment"} />
                        </button>
                        : null
                      }
                     
                      <div
                        className="comment-main"
                        style={{textAlign:"left" ,width: "100%", border: "1px solid white !important", display: "flex", flexDirection: "row", marginTop : "10px" }}
                      >
                        <div style={{ margin: "6px 0 0 0" }}>
                          {user?.nickname===val.userName ? 
                            <img
                            width="40px"
                            height="40px"
                            style={{ borderRadius: "50%" }}
                            src={user?.picture}
                            alt="userProfile"
                          />
                          :
                         
                          <img
                            width="40px"
                            height="40px"
                            style={{ borderRadius: "50%" }}
                            src="/images/profileimage3.jpeg"
                            alt="userProfile"
                          />
                          }
                        </div>
                        <div style={{marginLeft : "10px", display : "flex" , flexDirection : "column", background:"#3c4345", padding : "10px", borderRadius : "0 6px 6px 6px", width : "100%"}}>
                          <p className="userName"> {val.userName} </p>
                          <p className="small"> {val.userPosition} </p>
                          <p className="small"> {dateDiffrance(val.commentTime, new Date())} </p>
                          <div className="congratulactions">
                            {val.commentDecription}
                          </div>
                        </div>
                      </div>
                      <div style={{ backgroundColor: 'blue !important' }}> <br /></div>
                    </>
                  )
                })
                  : null
              }

            </div>

          </div>
        );
      })}
    </div>
  );
};

// //     <div>
// <ShowComments/>
// </div>
