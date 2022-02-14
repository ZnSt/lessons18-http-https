/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users 

  Написать функцию getUsers, которая по нажатию кнопки посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 3-х столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город 
    Имя | Почта | Город 
    и так далее для каждого пользователя...
*/

const container = document.querySelector('#task-1');
const refs = {
  getBtn: container.querySelector('button'),
  userTable: container.querySelector('.users-table'),
};

const tableHead = `
   <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
    </tr>
  </thead>`;

const userRawExample = `
<tr>
  <td>Leanne Graham</td>
  <td>Sincere@april.biz</td>
  <td>Gwenborough</td>
</tr>`;

