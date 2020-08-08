# format-fast

Hi, I'm [`Yoni Calsin`](https://twitter.com/yonicalsin), I'd love you to give format-fast a chance, to shine inside your project, and to format a text string in a wonderful way, and of course with less code.

`Format-fast` is a function that allows you to replace certain words to make a string dynamically, and very easily !

<a href="https://github.com/yonicalsin/format-fast"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/format-fast" target="_blank">
<img src="https://img.shields.io/npm/v/format-fast" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/format-fast" target="_blank">
<img src="https://img.shields.io/npm/l/format-fast" alt="Package License" /></a>
<a href="https://www.npmjs.com/format-fast" target="_blank">
<img src="https://img.shields.io/npm/dm/format-fast" alt="NPM Downloads" /></a>
<a href="https://github.com/yonicalsin/format-fast" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonicalsin/format-fast"><img src="https://img.shields.io/badge/Github%20Page-format.fast-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>

## 🍉 Installation

> First we will have to install, in order to use this wonderful package.

```bash
# Using npm
npm install --save format-fast

# Using yarn
yarn add format-fast
```

## 🌎 Usage

`Format-fast` use `is-all-utils` to validate the format of different characteristics !

First we import the function, as follows !

To use `format-fast` you can use the `formatFast` or `f` function, they are practically the same, only `f` is very short !

```ts
// For Typescript
import formatFast from 'format-fast';
// Or
import { f } from 'format-fast';

// Javascript
const formatFast = require('format-fast');
// or
const { f } = require('format-fast');
```

### Individually

If you want to send just one piece of information !

```ts
const msg = "Hello, I'm '$0' years old";
f(msg, 20);
//=> Hello, I'm '20' years old
```

#### Array

The time has come to use **format-parse**, using an array

```js
const msg = "The '$0' of user '$1' is not defined within the object '$2";

f(msg, ['name', 20, 'users']);
//=> The 'name' of user '20' is not defined within the object 'users
```

### Object

Soon we will use it with an object !

```ts
const msg =
   "The '$property' of the user '$id' is not defined within the object '$data'";

f(msg, {
   property: 'name',
   id: 20,
   data: 'users',
});
//=> The 'name' of the user '20' is not defined within the object 'users'
```

### Iteration function!

Function to modify the value, and the key when each object is iterated !

```ts
const msg = "Hi, I'm '$fullname', I'm '$age' years old";

const iterateItem = (value, key) => {
   console.log(value, key);
   // 0: Yoni Calsin, fullname
   // 1: age, age

   if (key == 'age') {
      if (value > 18) {
         value = 40;
      } else {
         value = 5;
      }
   }

   if (key == 'fullname') {
      value = `🎉 ${value}`;
   }

   return value;
};

f(
   msg,
   {
      fullname: 'Yoni Calsin',
      age: 20,
   },
   iterateItem,
);
// => Hi, I'm '🎉 Yoni Calsin', I'm '40' years old

f(
   msg,
   {
      fullname: 'Samuel Calsin',
      age: 10,
   },
   iterateItem,
);
// => Hi, I'm '🎉 Samuel Calsin', I'm '5' years old
```

Returning the `iterateItem` function, as an array, if you return an array of two values, you will be replacing the key, and the

```ts
const iterateItem = (value, key) => {
   // This will replace the values
   // this works if you return two values
   return [
      // For value
      value,
      // For key
      key,
   ];
};
```

### Brackets

-  `%s` is the value of the key

```ts
const msg = "Hi, I'm '{0}'.";

f(msg, ['Yoni Calsin'], '{%s}');

// => Hi, I'm 'Yoni Calsin'.
```

Otro ejemplo

```ts
const msg = "Hi, I'm '[[0]]'.";

f(msg, ['Yoni Calsin'], '[[%s]]');

// => Hi, I'm 'Yoni Calsin'.
```

```ts
f(msg, replaces, brackets);
// Or
f(msg, replaces, iterateFunction, brackets);
```

## ⭐ Support for

`format-fast` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Github [@yonicalsin](https://github.com/yonicalsin)
-  Twitter [@yonicalsin](https://twitter.com/yonicalsin)
-  Instagram [@yoni_calsin](https://instagram.com/yoni_calsin)
-  Medium [@yonicalsin](https://medium.com/@yonicalsin)
-  Dev [@yonicalsin](https://dev.to/yonicalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`format-fast` under [License MIT.](LICENSE)
