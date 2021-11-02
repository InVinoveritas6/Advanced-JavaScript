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

//...........................................Lesson №4.........................................