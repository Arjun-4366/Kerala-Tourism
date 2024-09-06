const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Set the directory for uploads
const uploadPath = path.join(__dirname, '../../client/src/images/');

// Ensure the directory exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage }).single('image');

module.exports = upload;
