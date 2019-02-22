// API等が出力するユーザーデータ一覧
const userList = [
  { id: 1, name: '田中', address: '東京'},
  { id: 2, name: '鈴木', address: '宮城'},
  { id: 1, name: '高橋', address: '福岡'}
];

// コンテナ
const container = document.querySelector('.container');
// userListの配列の各要素についてループ
userList.forEach(userData) => {
  // 各要素を書き出す
  container.innerHTML += `
    <div class="card">
      <h2>${userData.name}</h2>
      <p>出身地： ${userData.address}</p>
    </div>
  `;
};
