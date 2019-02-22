const parseTime = require('./lib/parseTime.js')
const wxTool =  require('./lib/wxTool.js')
module.exports = {
  parseTime: parseTime.parseTime,
  createTimeString: parseTime.createTimeString,
  wxAlert: wxTool.wxAlert,
  wxToast: wxTool.wxToast,
  wxCheckNewVersRload: wxTool.wxCheckNewVersRload,
  compareVersion: wxTool.compareVersion
}