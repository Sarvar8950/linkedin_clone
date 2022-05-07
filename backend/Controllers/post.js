const postModals = require("../schema/post");

async function createUserData(req, res, next) {
  console.log("ffffff", req.body);
  try {
    let data = req.body;
    // const obj = {
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   image: req.body.image,
    //   comments: req.body.comments,
    // };
    const response = await postModals.insertMany([data]);
    res.json(response);
    console.log("data is", data);
  } catch(er){
    console.log("er", er);
  }
}
const getAllPost = async (req, res, next) => {
  try {
    const response =  await postModals.find();
    res.json(response)
  } catch(er){
    console.log("err", er);
  }
};

async function deletePost(req, res, next) {
  let userId = req.params.id;
  console.log(userId, 'userId')
  // let response = await postModals.deleteOne({ id: userId });
  // res.json(response);
}
function saveImage(req, res, next) {
  console.log("Request file", req);
  res.json({
    message: "Image saved",
    path: req.file,
  });
}
module.exports = {
  createUserData,
  saveImage,
  getAllPost,
  deletePost,
  // saveImageLocal,
  // saveImage
};
