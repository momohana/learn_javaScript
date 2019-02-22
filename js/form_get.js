document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click',function() {
    var datalist = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      sex: document.getElementById("sex").value,
      memo: document.getElementById("memo").value,
    };
  localStorage.setItem("datalist", JSON.stringify(datalist));
  }, false);
}, false);
