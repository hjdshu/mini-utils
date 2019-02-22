/**
 * 时间格式化
 * @param {date} time 时间对象
 * @param {string} cFormat 格式化方式，y年 m月 d日 h小时 i分钟 s秒
 */
function parseTime (time, cFormat, numMonth) {
  if (arguments.length === 0 || time === null) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (!numMonth) {
      if (result.length > 0 && value < 10) {
        value = `0${value}`
      }
    }
    return value || 0
  })
}

// 倒计时输出，传递秒数， 返回时间字符串(xx:xx:xx)
function createTimeString (second, haveDay) {
  let h = 0
  let m = 0
  let s = 0
  let d = 0 // 天数

  if (!haveDay) {
    let number = parseInt(second)
    h = Math.floor((number) / 3600)
    m = Math.floor((number - h * 3600) / 60)
    s = Math.floor(number - h * 3600 - m * 60)
  } else {
    let number = parseInt(second)
    d = Math.floor(number / (3600 * 24))
    h = Math.floor((number - d * 3600 * 24) / 3600)
    m = Math.floor((number - d * 3600 * 24 - h * 3600) / 60)
    s = Math.floor(number - d * 3600 * 24 - h * 3600 - m * 60)
  }

  let string = (d ? d + 'day ' : '') + h + ':' + (String(m).length >= 2 ? m : '0' + m) + ':' + (String(s).length >= 2 ? s : '0' + s)
  let zh_string = ''
  if (haveDay) {
    zh_string = d + '天' + h + '小时' + (String(m).length >= 2 ? m : '0' + m) + '分钟' + (String(s).length >= 2 ? s : '0' + s ) + '秒'
  } else {
    zh_string = h + '小时' + (String(m).length >= 2 ? m : '0' + m) + '分钟' + (String(s).length >= 2 ? s : '0' + s ) + '秒'
  }
  return {
    string: string,
    zh_string: zh_string,
    json: {
      d: d,
      h: h,
      m: m,
      s: s
    }
  }
}

module.exports = {
  parseTime,
  createTimeString
}