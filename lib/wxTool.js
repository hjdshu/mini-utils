// 对比小程序的版本号，返回值为1，说明1>2, 0为相等，-1 为1<2
// 也可用对比 2.1.3  2.0.5这种格式的版本号大小
function compareVersion (v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)
  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}

// 小程序toast
function wxToast (text, options) {
  if (!window.wx) {
    console.warn('请在小程序里使用该方法')
    return
  }
  wx.showToast({
    title: text,
    icon: (options && options.success) ? 'success' : 'none',
    duration: (options && options.time) || 2000,
    mask: true
  })
}

// 通用的小程序alert
function wxAlert (text, options) {
  if (!options) {
    wx.showModal({
      content: text,
      showCancel: false
    })
  } else {
    wx.showModal(options)
  }
}

/* 检查小程序的更新 */
function wxCheckNewVersRload () {
  if (!window.wx) {
    console.warn('请在小程序里使用该方法')
    return
  }
  let nowVesion = wx.getSystemInfoSync().SDKVersion
  if (compareVersion(nowVesion, '2.0.7') < 0) {
    return
  }
  const updateManager = wx.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
  })
  updateManager.onUpdateReady(function () {
    updateManager.applyUpdate()
  })
}

module.export = {
  compareVersion,
  wxToast,
  wxAlert,
  wxCheckNewVersRload
}
