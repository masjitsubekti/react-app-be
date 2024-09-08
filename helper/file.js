const fs = require('fs');

/**
 * Function helper upload file
 * @param {*} base64
 * @param {*} folder
 * @param {*} namafile
 */
const upload = (base64, dir, fileName) => {
  const base64Data = base64.split(",").pop();
  const buff = new Buffer.from(base64Data, "base64");
  // Buffer.from(base64Data)   
  console.log("FILE :", dir + fileName);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dir + fileName, buff);
};

/**
 * Function remove file in direktori
 * @param {*} file 
 */
const removeFile = (file) => {
  fs.access(file, (error) => {
    if (!error) {
      fs.unlink(file, function (error) {
        console.log("REMOVE FILE :", file);
      });
    } else {
      console.log(error);
    }
  });
};

module.exports = {
  upload,
  removeFile,
};
