const knex = require("../../db/knex");

/**
 * Function get user by username
 * @param {*} username
 * @returns
 */
const getUserByUsername = async function (username) {
  let q = await knex.raw(`
            select u.id,u.nama,u.username,u.email,u.password,u.status,u.id_role from auth_user u
            where (u.username = '${username}' or u.email = '${username}')
            limit 1
        `);
  let data = q.rows;
  return data;
};

module.exports = {
  getUserByUsername,
};
