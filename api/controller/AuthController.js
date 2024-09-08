require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const UserService = require("../services/User.service");

/**
 * Function login web
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
exports.login = async function (req, res, next) {
  try {
    const data = req.body;
    let username = data.username;
    let password = data.password;

    const cekUser = await UserService.getUserByUsername(username);
    const countRow = parseInt(cekUser.length);
    if (countRow > 0) {
      const dataUser = cekUser[0];
      await bcrypt
        .compare(password, dataUser.password)
        .then(async (isAuthenticated) => {
          if (!isAuthenticated) {
            res.json({
              success: false,
              message: "Password Salah !",
            });
          } else {
            const dataJwt = {
              id_user: dataUser.id,
              id_role: dataUser.id_role,
            };
            const jwtToken = jwt.sign(dataJwt, process.env.API_SECRET, {
              expiresIn: "1h",
            });

            res.json({
              success: true,
              user: {
                id: dataUser.id,
                nama: dataUser.nama,
                username: dataUser.username,
                email: dataUser.email,
                foto: dataUser.foto,
                id_role: dataUser.id_role,
              },
              token: jwtToken,
            });
          }
        });
    } else {
      res.json({
        success: false,
        message: "Username atau Email tidak ditemukan !",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
