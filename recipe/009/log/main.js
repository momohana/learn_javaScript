console.log('鈴木' == '鈴木'); // 値が等しいので。true
console.log(10 < 30); // true
console.log(20 >= 30) // false

/*
配列、オブジェクトなどのオブジェクト型を比較する場合は、参照先が同じ
場合のみ等しくなります。
*/

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2);  // false。参照先が異なる。

const array3 = [1, 2, 3];
const array4 = array3;
console.log(array3 == array4); // true。参照先が同じ。
