document.addEventListener('DOMContentLoaded', function() {
  var datalist = JSON.parse(localStorage.getItem("datalist"));
  document.getElementById("name").value = datalist.name;
  document.getElementById("age").value = datalist.age;
  document.getElementById("sex").value = datalist.sex;
  document.getElementById("memo").value = datalist.memo;
}, false);
