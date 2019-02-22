for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    // indexが偶数(2で割った余りが0)の場合は、これ以降の処理はスキップされる
    continue;
  }

  // 奇数のみが出力される
  console.log(index);
}

// ループが終了したら実行される
console.log('ループ終了');
