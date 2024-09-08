const ItemService = require("../services/Item.service");

/**
 * Function resolve all with pagination
 * @param {*} req
 * @param {*} res
 */
exports.getDataPagination = async function (req, res) {
  try {
    const data = req.query;
    await ItemService.getDataPagination({
      q: data.q,
      count: data.count,
      page: data.page,
      sortby: data.sortby,
      sorttype: data.sorttype,
    }).then((result) => {
      res.status(200).json(result);
    });
  } catch (e) {
    console.log("error", e);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Function Get all item
 * @param {*} data
 * @returns
 */
exports.getAll = async function (req, res) {
  try {
    let data = await ItemService.getAll();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    console.log("error", e);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Function get by ID item
 * @param {*} req
 * @param {*} res
 */
exports.getById = async function (req, res) {
  try {
    const params = req.params;
    let id = params.id;
    let data = await ItemService.getById(id);
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    console.log("error", e);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Function create item
 * @param {*} req
 * @param {*} res
 */
exports.create = async function (req, res) {
  try {
    const data = req.body;
    let dataObj = {
      nama: data.nama,
      kode: data.kode,
      harga: data.harga,
      keterangan: data.keterangan,
      // created_by: req.jwtClaims.id_user || null,
    };

    await ItemService.save(dataObj).then((resp) => {
      return res.status(200).json({
        success: true,
        message: "Data berhasil disimpan",
      });
    });
  } catch (e) {
    console.log("error", e);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Function update item
 * @param {*} req
 * @param {*} res
 */
exports.update = async function (req, res) {
  try {
    const data = req.body;
    const params = req.params;
    let id = params.id;

    await ItemService.update(id, {
      nama: data.nama,
      kode: data.kode,
      harga: data.harga,
      keterangan: data.keterangan,
      // updated_by: req.jwtClaims.id_user || null,
    }).then((resp) => {
      return res.status(200).json({
        success: true,
        message: "Data berhasil diubah",
      });
    });
  } catch (e) {
    console.log("error", e);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Function delete item
 * @param {*} req
 * @param {*} res
 */
exports.delete = async function (req, res) {
  try {
    const params = req.params;
    let id = params.id;
    await ItemService.softDelete({
      id: id,
      // updated_by: req.jwtClaims.id_user || null,
    }).then((resp) => {
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
      });
    });
  } catch (e) {
    console.log("error", e);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
