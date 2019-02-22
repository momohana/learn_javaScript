// 関数の宣言
function calcFunction(price, tax) {
  const result = price + price * tax;
  return result;
}

// 関数を実行し、戻り値をmyResultに代入する
const myResult = calcFunction(100, 0.1);
console.log(myResult); // 結果： 110
