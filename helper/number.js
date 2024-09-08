const formatPrice = (value) => {
  if (!value) {
    return "";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = {
  formatPrice,
};
