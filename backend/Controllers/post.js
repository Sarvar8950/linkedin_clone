const postModals = require("../schema/post");

async function createUserData(req, res, next) {
  console.log("ffffff", req.body);
  try {
    let data = req.body;
    const obj = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      image: req.body.image,
      comments: req.body.comments,
    };
    const response = await postModals.insertMany([obj]);
    res.json(response);
    console.log("data is", data);
  } catch {
    console.log("er", er);
  }
}
const getAllPost = async (req, res, next) => {
  try {
    const response =  await postModals.find();
    res.json(response)
  } catch {
    console.log("err", er);
  }
};
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
  // saveImageLocal,
  // saveImage
};
