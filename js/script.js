'use strict';
//...........................................Lesson №2.........................................

// const persone = {
//    name: "Alex",
//    tel: '+11111111',
//    parent: {
//       mom: 'olga',
//       dad: 'dad'
//    }
// };
// const clopy = JSON.parse(JSON.stringify(persone));

// clopy.parent.mom = 'natasha';

// console.log(clopy);
// console.log(persone);

//...........................................Lesson №3.........................................

// const inputRub = document.querySelector('#rub'),
//    inputUSD = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//    const request = new XMLHttpRequest();

//    request.open('GET', 'js/currenet.json');
//    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
//    request.send();

//    request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status === 200) {
//          console.log(request.response);
//          const data = JSON.parse(request.response);
//          inputUSD.value = (data.current.usd * +inputRub.value).toFixed(2);
//       } else {
//          inputUSD.value = "Что-то пошло не так"
//       }
//    });
// });

//...........................................Lesson №6.........................................

// console.log('Запрос даных...');

// const seq = new Promise(function (resolve, reject) {
//    setTimeout(() => {
//       console.log('Подготовка данных');

//       const prod = {
//          name: 'VTV',
//          price: 2000
//       };

//       resolve(prod);
//    }, 2000);
// });

// seq.then((prod) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          prod.status = 'order';
//          reject(prod);
//       }, 2000);
//    }).then(data => {
//       data.modyfy = '123';
//       return data;
//    }).then(data => {
//       console.log(data);
//    }).catch(() => {
//       console.error('Произошла ошибка');
//    });
// });
// const test = time => {
//    return new Promise(resolve => {
//       setTimeout(() =>
//          resolve(), time);
//    });
// };
// // test(1000).then(() => {
// //    console.log('100 ms');
// // });
// // test(2000).then(() => {
// //    console.log('200 ms');
// // });
// Promise.all([test(1000), test(2000)]).then(() => {
//    console.log('All is ready');
// });

//...........................................Lesson №7.........................................

// fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: "POST",
//       body: JSON.stringify({
//          name: ' Alex'
//       }),
//       headers: {
//          'Context-type': 'application/json'
//       }

//    })
//    .then(response => response.json())
//    .then(json => console.log(json));