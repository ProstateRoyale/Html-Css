// function sayHi() {
//     alert("Hi");
// }
  
// console.log(sayHi.name);


// function ask(question, ...handlers) {
//     let isYes = confirm(question);
  
//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }
  
//   }
  
//   // для положительных ответов вызываются оба типа обработчиков
//   // для отрицательных - только второго типа
// ask("Вопрос?", 
// () => alert('Вы ответили да'), 
// result => alert(result),
// () => alert('Вы ответили DA'));

// let sayHi = function(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Ошибка: sayHi не является функцией
//     }
//   };
  
//   let welcome = function(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Ошибка: sayHi не является функцией
//     }
//   };
//   sayHi = null;
  
//   welcome(); // Ошибка, вложенный вызов sayHi больше не работает!

// let sum = new Function(prompt(), prompt(), prompt());

// sum(1, 2);

// function sayHi(){
//     alert('Hi')
// }

// let timerId = setTimeout(sayHi, 2000)
// let timerId2 = setTimeout(sayHi, 6000)
// let timerId3 = setTimeout(sayHi, 10000)
// console.log(timerId);
// console.log(timerId2);
// console.log(timerId3);

// alert("Hello!")
// clearTimeout(timerId2)

// let timerId = setInterval(sayHi, 2000)


// let worker = {
//     someMethod() {
//       return 1;
//     },
  
//     slow(x) {
//       alert("WORKER Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }
//       let result = func.call(this, x); // теперь 'this' передаётся правильно
//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
  
//   alert( worker.slow(2) ); // работает
//   alert( worker.slow(2) );

//   let test = {
//     someMethod() {
//         return 2;
//       },
    
//       slow(x) {
//         alert("Called with TEST " + x);
//         return x * this.someMethod(); // (*)
//       }
//   }
//   test.slow(1)
//   test.slow = cachingDecorator(worker.slow)
//   test.slow(1)


// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   }
// };

// function asd (){
//   user.sayHi()
// }

// setTimeout(user.sayHi, 1000)

// let name = user.sayHi
// name()

// setTimeout(function(){
//   user.sayHi();
// }, 2000)
// delete user.firstName

// let name = function(){
//   user.sayHi();
// }
// name()

// setTimeout(()=>user.sayHi(), 2000)

// let user = {
//   firstName: "Вася"
// };

// function func() {
//   console.log(this);
//   console.log(this.firstName);
// }

// func()
// let funcUser = func.bind(user);
// funcUser(); // Вася
// func()

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(()=>user.sayHi())

// setTimeout(user.sayHi.bind(user), 1000);

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function(student) {
//       // Error: Cannot read property 'title' of undefined
//       console.log(this.title + ': ' + student)
//     }.bind(this));
//   }
// };

// group.showList();


// let user = {
//   name : 'user'
// }

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
// console.log(descriptor);

// user = {};

// Object.defineProperty(user, "name", {
//   value: "John"
// });

// console.log(user);
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// let user = {
//   name: "John"
// };

// Object.defineProperty(user, "name", {
//   writable: false
// });

// user.name = "Pete";
// console.log(user.name);


// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ')
//   }
// };


// console.log(user.fullName); // John Smith

// let user = {
//   name : 'user',
//   secretQuestion: 'Rex',
//   _password: '123456',
//   get password(){
//     if (prompt('Enter your first dog name: ') === this.secretQuestion){
//       return this._password
//     } else {
//       return 'Wrong answer. Access denied'
//     }
//   },
//   set password(value){
//     if (value.length >= 6) {
//       this._password = value
//     } else {
//       alert("Пароль должен быть длинной более 6 символов!")
//     }
//   }
// }

// console.log(user.password); //getter
// user.password = '1233' //setter
// console.log(user.password);


let obj = {
  name: 'asd'
}
Object.entries(obj)