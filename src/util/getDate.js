var getDate = function (time) {
  let oDate = new Date(parseInt(time))
  let oYear = oDate.getFullYear()
  let oMonth = oDate.getMonth() + 1
  let oDay = oDate.getDate()
  let oHour = oDate.getHours()
  let oMin = oDate.getMinutes()
  let oSen = oDate.getSeconds()
  let oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
      addZero(oMin) + ':' + addZero(oSen)
  return oTime
}

var addZero = function (num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}

export { getDate }
