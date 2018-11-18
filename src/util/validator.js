function validatorName (inputVal) {
  if (!inputVal) {
    return '用户名不能少'
  } else if (inputVal.length < 6 || inputVal.length > 20) {
    return '用户名必须在5到20位之间'
  } else {
    return ''
  }
}

function validatorPass (inputVal) {
  if (!inputVal) {
    return '密码不能为空'
  } else {
    let reg = new RegExp(/^[0-9a-zA-Z]{6,20}$/)
    if (inputVal.length < 6 || inputVal.length > 20 || !reg.test(inputVal)) {
      return '密码长度必须为6-20位，只能包含字母或数字'
    } else {
      return ''
    }
  }
}

export {
  validatorName,
  validatorPass
}
