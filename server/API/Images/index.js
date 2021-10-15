import express from "express";
import multer from "multer";

import { ImageModel } from "../../Database/allModels";

import { s3Upload } from "../../Utils/AWS/s3";

const router = express.Router();

// multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route       /
Des         Get Image details
Params      _id
Acess       Public
Method      get
*/
router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});
// router.get("/a/:123", async (req, res) => {
//   try {
//     const image = await ImageModel.find();

//     return res.json({ image });
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     });
//   }
// });


/*
Route       /
Des         Uploads given image to s3 bucket and saves file link to mongodb 
Params      none
Acess       Public
Method      Post
*/
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "akanaspro",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
