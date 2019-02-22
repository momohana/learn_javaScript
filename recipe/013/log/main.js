/*
* 税込みの値段を返す関数
* @param price 価格
* @param tax   税率
*/

function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

// taxの引数を省略すると、初期値の0.08が使用される
const result1 = calcFunction(100);
console.log(result1); // 結果：108

// taxの引数を指定すると、その値が使用される
const result2 = calcFunction(100, 0.1);
console.log(result2); // 結果：110
