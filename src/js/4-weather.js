/*
  Найти данные о текущей погоде в каком-то городе на weatherstack
  Написать функцию getWeather, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York 
    
  Документация по Git API:
    https://weatherstack.com/documentation
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch - "Your API request failed. Please try again or contact support." (сообщение приходит с АПИ)
  
  Результат запроса вывести в поле result в формате:
    Город, страна
    Дата время
    Темпереатура
    Описание погоды с картинкой
  
  Все необходимые данные есть в ответе от API.
  Переписать фетч-функцию, используя класс URLSearchParams.
  Проверять не пустой ли инпут.
*/

// const container = document.querySelector('#task-4');
// const refs = {
//   form: container.querySelector('.search-form'),
//   result: container.querySelector('.result'),
//   errorRef: container.querySelector('.error'),
// };

// const markupSample = `
// <div>
//   <h4>New York, United States of America</h4>
//   <p>2019-09-07 08:14</p>
//   <p>Current temperature: 13&degC</p>
//   <p>Sunny<img class="logo" src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" alt="Sunny" width="50"></p>
// </div>`;
