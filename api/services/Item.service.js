const knex = require("../../db/knex");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const ItemModel = require("../models/Item");
const { PAGE_SIZE } = require("../../constant/global");
const pagination = require("../../helper/pagination");

/**
 * Function get all data with pagination
 * @param {*} req
 * @returns
 */
const getDataPagination = async function (req = {}) {
  let sortby = req.sortby ? req.sortby : "created_at";
  let sorttype = req.sorttype ? req.sorttype : "desc";
  let search = req.q ? req.q : "";
  let page = req.page ? parseInt(req.page) : 1;
  let limit = req.count ? parseInt(req.count) : PAGE_SIZE;
  let offset = limit * page - limit;

  let q = `
          select * from m_item
          where is_deleted = false
          and concat(nama, kode, keterangan) ilike '%${search}%'
      `;

  // Count Data
  let qCount = `select count (*) as jml from (${q})x`;
  let count = await knex.raw(qCount);
  let countData = count.rows[0].jml || 0;

  // Result Data
  q += ` order by ${sortby} ${sorttype} `;
  q += ` limit ${limit} offset ${offset} `;
  let query = await knex.raw(q);
  let result = query.rows || [];

  // Pagination
  let resultData = pagination.paginate(result, countData, page, limit);
  return resultData;
};

/**
 * Function Get all item
 * @param {*} data
 * @returns
 */
const getAll = async function () {
  let q = await ItemModel.query()
    .select(
      "id",
      "kode",
      "nama",
      "harga",
      "keterangan",
      "created_at",
      "updated_at",
      "created_by",
      "updated_by",
      "is_deleted"
    )
    .where("is_deleted", "false");

  let data = q;
  return data;
};

/**
 * Function get by id item
 * @param {*} id
 * @returns
 */
const getById = async function (id) {
  let q = await ItemModel.query()
    .select(
      "id",
      "kode",
      "nama",
      "harga",
      "keterangan",
      "created_at",
      "updated_at",
      "created_by",
      "updated_by",
      "is_deleted"
    )
    .findById(id);

  let data = q;
  return data;
};

/**
 * Function Save item
 * @param {*} data
 * @returns
 */
const save = async function (req) {
  const id = uuidv4();
  await ItemModel.query()
    .insert({
      id: id,
      kode: req.kode,
      nama: req.nama,
      harga: req.harga,
      keterangan: req.keterangan,
      created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      created_by: req.created_by,
      is_deleted: false,
    })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log("error", e);
    });
};

/**
 * Function update item
 * @param {*} id
 * @param {*} req
 */
const update = async function (id, req) {
  await ItemModel.query()
    .where("id", id)
    .update({
      kode: req.kode,
      nama: req.nama,
      harga: req.harga,
      keterangan: req.keterangan,
      updated_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      updated_by: req.updated_by,
    })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log("error", e);
    });
};

/**
 * Function delete item
 * @param {*} req
 */
const softDelete = async function (req) {
  await ItemModel.query()
    .where("id", req.id)
    .update({
      is_deleted: true,
      updated_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      updated_by: req.updated_by,
    })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log("error", e);
    });
};

module.exports = {
  getDataPagination,
  getAll,
  getById,
  save,
  update,
  softDelete,
};
