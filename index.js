const parseTime = require('./lib/parseTime.js')
const wxTool =  require('./lib/wxTool.js')
module.export = {
  parseTime: parseTime.parseTime,
  createTimeString: parseTime.createTimeString,
  wxAlert: wxTool.wxAlert,
  wxToast: wxToast.wxToast,
  wxCheckNewVersRload: wxTool.wxCheckNewVersRload,
  compareVersion: wxTool.compareVersion
}