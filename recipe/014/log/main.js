/*
* 引数の合計値を返す関数
* @param prices
* @retruns {number}
*/

function calcSum(...prices) {
  let result = 0;
  for (const value of prices) {
    result += value;
  }
  return result;
}

const result1 = calcSum(10, 20);
console.log(result1); // 結果：30

const result2 = calcSum(5, 10, 15);
console.log(result2); // 結果：30
