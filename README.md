# format-fast

Hola, soy [`Yoni Calsin`](https://twitter.com/yoicalsin), me encantaria que una oportunidad a format-fast, para que brille dentro de tu projecto, y para formatear una cadena de texto de manera maravillosa, y por supuesto con menos codigo.

`Format-fast` es una funcion que te permite remplazar ciertas palabras para hacer una cadena de texto de manera dinamica, y muy facil !

<a href="https://github.com/yoicalsin/format-fast"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/format-fast" target="_blank">
<img src="https://img.shields.io/npm/v/format-fast" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/format-fast" target="_blank">
<img src="https://img.shields.io/npm/l/format-fast" alt="Package License" /></a>
<a href="https://www.npmjs.com/format-fast" target="_blank">
<img src="https://img.shields.io/npm/dm/format-fast" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/format-fast" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/format-fast"><img src="https://img.shields.io/badge/Github%20Page-format.fast-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

## 🍉 Installation

> Primero tendremos que instalar, para poder utilizar este maravilloso paquete.

```bash
# Using npm
npm install --save format-fast

# Using yarn
npm add --save format-fast
```

## 🌎 Usage

`Format-fast` utilizar `is-all-utils` para validar el formato de diferentes caracteristicas !

Primeramente importaremos la funcion, de la siguiente manera !

```ts
// For Typescript
import fmf from 'format-fast';

// Javascript
const fmf = require('format-fast');
```

## 🎁 Using Typescript

```ts
import fmf from 'format-fast';
// or
import { fmf } from 'format-fast';
```

### Individualmente

Si desea enviar solo un dato !

```ts
const msg = "Hola, tengo '$0' años";
fmf(msg, 20);
//=> Hola, tengo '20' años
```

#### Array

Llegó el momento de utilizar `format-parse`, mediante un array

```js
const msg =
   "El '$0' de el usuario '$1' no esta definido dentro de el objeto '$2'";

fmf(msg, ['nombre', 20, 'usuarios']);
//=> El 'nombre' de el usuario '20' no esta definido dentro de el objeto 'usuarios'
```

### Objeto

Enseguida utilizaremos con un objeto !

```ts
const msg =
   "El '$property' de el usuario '$id' no esta definido dentro de el objeto '$data'";

fmf(msg, {
   property: 'nombre',
   id: 20,
   data: 'usuarios',
});
//=> El 'nombre' de el usuario '20' no esta definido dentro de el objeto 'usuarios'
```

### Iterate function

Funcion para midificar el valor, y la llave cuando es iterado cada objeto !

```ts
const msg = "Hola, soy '$fullname', tengo '$age' años de edad";

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

fmf(
   msg,
   {
      fullname: '🎉 Yoni Calsin',
      age: 20,
   },
   iterateItem,
);
// => Hola, soy '🎉 Yoni Calsin', tengo '40' años de edad

fmf(
   msg,
   {
      fullname: '🎉 Samuel Calsin',
      age: 10,
   },
   iterateItem,
);
// => Hola, soy '🎉 Samuel Calsin', tengo '5' años de edad
```

Retorno de la function de `iterateItem`, como un array, si usted retorna un array de dos valores, estara remplazando la llave, y el valor

```ts
const iterateItem = (value, key) => {
   // Esto remplazara los valores
   // esto funciona si retorna dos valores
   return [
      // For value
      value,
      // For key
      key,
   ];
};
```

### Brackets

-  `%s` es el valor de la llave

```ts
const msg = "Hola, soy '{0}'";

fmf(msg, ['Yoni Calsin'], '{%s}');

// => Hola soy 'Yoni Calsin'
```

Otro ejemplo

```ts
const msg = "Hola, soy '[[0]]'";

fmf(msg, ['Yoni Calsin'], '[[%s]]');

// => Hola soy 'Yoni Calsin'
```

```ts
fmt(msg, replaces, brackets);
// Or
fmt(msg, replaces, iterateFunction, brackets);
```

## ⭐ Support for

`format-fast` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`format-fast` under [License MIT.](LICENSE)
