function format (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

/**
 * 格式化时间
 * @param time
 * @returns {string}
 */
function formatDate (time,fmt) {
    if(!time){
        return ''
    }
    let date = new Date(time)
    return format(date,fmt ||  'yyyy-MM-dd')
}

function filterPlanEnumStatus(val) {
    const obj = {
        REVIEW: '待审核',
        PASS: '通过',
        REJECT: '驳回',
		END: '已结束'
    }
    if(val){
        return obj[val]
    } else {
        return '未知'
    }
}
export {formatDate,filterPlanEnumStatus}
