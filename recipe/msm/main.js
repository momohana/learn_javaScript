const requestTime = document.querySelector('#requestTime').value;
const completedTime = document.querySelector('#completedTime').value;
const request = requestTime.split(/-|:|T/);
const completed = completedTime.split(/-|:|T/);


// yyyy/mm/dd hh:mm:ss -> yyyymmddhhmmss
function change_str(date) {
  var dateTime = date
  var year = dateTime[0]
  var month = dateTime[1]
  var day = dateTime[2]
  var hour = dateTime[3]
  var minute = dateTime[4]
  var date_t = year + month + day + hour + minute;

  return date_t
}

var request_t = change_str(request);

console.log(typeof requestTime);
console.log(typeof request);
console.log(request);
console.log(request_t);
console.log(typeof completedTime);
console.log(typeof completed);