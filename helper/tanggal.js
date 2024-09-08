const moment = require("moment");
let arrBulan = [
  "",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const formatDate = (date, format) => {
  if (!date) {
    return "";
  }
  return moment(date).format(format);
};

const formatTglIndonesia = (date) => {
  let tanggal_lengkap = date;
  let tanggal = tanggal_lengkap.split("-")[2];
  let bulan = tanggal_lengkap.split("-")[1];
  let tahun = tanggal_lengkap.split("-")[0];
  return tanggal + " " + arrBulan[Math.abs(bulan)] + " " + tahun;
};

const timestampToTglIndonesia = (date) => {
  let tanggal_lengkap = date ? moment(date).format("YYYY-MM-DD") : "-";
  let tgl = tanggal_lengkap.split("-")[2];
  let bulan = tanggal_lengkap.split("-")[1];
  let tahun = tanggal_lengkap.split("-")[0];
  return tgl + " " + arrBulan[Math.abs(bulan)] + " " + tahun;
};

const splitDate = (date) => {
  let tanggal_lengkap = date ? moment(date).format("YYYY-MM-DD") : "-";
  let tgl = tanggal_lengkap.split("-")[2];
  let bulan = tanggal_lengkap.split("-")[1];
  let tahun = tanggal_lengkap.split("-")[0];
  return {
    tanggal: tgl || "",
    bulan: bulan || "",
    namaBulan: arrBulan[Math.abs(bulan)] || "",
    tahun: tahun || "",
  };
};

module.exports = {
  formatDate,
  formatTglIndonesia,
  timestampToTglIndonesia,
  splitDate,
};
