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

//...........................................Lesson №8.........................................


//-------------МЕТОД FILTER

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];


//------------Фильтрация через обычную функцию
// const shortNames = names.filter(function(name) {
//    return name.length < 5;
// });


//-----------Фильтрация через call back функцию 
// const shortNames = names.filter((name) => {
//    return name.length < 5;
// });

// console.log(shortNames);

//-------------МЕТОД MAP

// const answer = ['IvAn', 'AnnA', 'Hello'];

// const result = answer.map((item) => {
//    return item.toLowerCase();
// });

// console.log(result);

 //-------------МЕТОД SOME/EVERY

//  const some = [4, 'ble', 'blu'];

//  console.log(some.every(item => {
//     return typeof(item) === 'number';
//  }));

//------------МЕТОД REDUCE С ЧИСЛАМИ

// const arr = [4, 5, 1, 3, 2, 6];
//                         0     4
//                         4     5
//                         9     1
//                         10    3
// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

//------------МЕТОД REDUCE СО СТРОКАМИ

// const arr = ['APPLT', 'Beer', 'Carrot'];

// const res = arr.reduce((sum, current) => sum + ',' + current);

// console.log(res);

// const arr = ['APPLT', 'Beer', 'Carrot'];

// const res = arr.map(item => item.toLowerCase())
//                .reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


//...........................................Lesson №12 Регулярные выражения.........................................

// new RegExp('pattern', 'flags')

// /pattern/flags

//  const ans = prompt('введите ваше имя');

// const reg = /\d/g;

// console.log(ans.match(reg));

//  console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('ggg')

// console.log(pass.replace(/\./g,'1'));

// console.log('12-34-36'.replace(/-/g, ':'));

// const str = "My name is R2D2";
// console.log(str.match(/\D/ig));

