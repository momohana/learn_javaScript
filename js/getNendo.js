/*
日付文字列(YYYYMMDD)から年度を求める
*/
function getNendo(val){
  var result = "日付文字列が不正です";
  try {
    var y = Number(val.substr(0, 4));
    var m = Number(val.substr(4, 2));
    var d = Number(val.substr(6, 2));
    var dt = new Date(y, m-1, d);
    if (dt.getFullYear()==y &&
        dt.getMonth()==m-1 &&
        dt.getDate()==d){
      if(m<4){
        result = y-1;
      }else{
        result = y;
      }
    }
    return result;
  }catch(ex){
    return result;
  }
}
