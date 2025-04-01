const multer = require("multer");
const { cloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const cloudinaryStorage = new cloudinaryStorage({
      cloudinary: cloudinary,
      params: {
          folder: "upload",
          format: async (req, file) => file.mimetype, 
        //   Multipurpose Internet Mail Extensions
          public_id: (req, file) => file.originalname + "-" + Date.now() 
      }
});



const upload = multer({
      storage: cloudinaryStorage
})