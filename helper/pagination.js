/**
 * Function generate pagination
 * @param {*} data
 * @param {*} total
 * @param {*} page
 * @param {*} limit
 * @returns
 */
const paginate = async function (data, total, page, limit) {
  let countData = total || 0;
  if (countData > limit) {
    var totalPage = Math.ceil(countData / limit);
  } else {
    var totalPage = 1;
  }

  return {
    data: data,
    meta: {
      total: parseInt(countData),
      total_page: totalPage,
      count: limit,
      page: page,
    },
  };
};

module.exports = {
  paginate
};
