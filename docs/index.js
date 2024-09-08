const basicInfo = require('./basicInfo');
const jabatan = require('./schema/jabatan')

module.exports = {
    ...basicInfo,
    ...jabatan
};