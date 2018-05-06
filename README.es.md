[![Proyecto Bazzite](https://img.shields.io/badge/Proyecto-Bazzite-blue.svg)](https://www.bazzite.com/es/docs/nativescript-vibrate?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate)
[![Codacy Badge](https://img.shields.io/codacy/grade/a40541d66db746bcb6669b7f30fd498d.svg)](https://www.codacy.com/app/bazzite/nativescript-vibrate?utm_source=github.com&utm_medium=referral&utm_content=bazzite/nativescript-vibrate&utm_campaign=badger)
[![Travis](https://img.shields.io/travis/bazzite/nativescript-vibrate/master.svg)](https://travis-ci.org/bazzite/nativescript-vibrate)
[![version](https://img.shields.io/npm/v/nativescript-vibrate.svg)](https://www.npmjs.com/package/nativescript-vibrate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.bazzite.com/es/docs/nativescript-vibrate/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate)

# NativeScript Vibrate

Un plugin para NativeScript que facilita la vibración de dispositivos Android e iOS

*Read this in other languages: [English](README.md), [Español](README.es.md)*

## Instalación

Ejecuta el siguiente comando desde la raíz de tu proyecto:

```bash
$ tns plugin add nativescript-vibrate
```

Este comando instala automáticamente los archivos necesarios, así como almacena **nativescript-vibrate** como una dependencia en el archivo **package.json** de tu proyecto.

## Permisos

### Android

Para usar la funcionalidad de vibración en Android, tu aplicación debe solicitar permiso para acceder al vibrador del dispositivo. El plugin agrega automáticamente los permisos necesarios que se muestran a continuación para que no tenga que preocuparse por editar el Manifiesto de Android.

```xml
<uses-permission android:name="android.permission.VIBRATE" />
```

## Ejemplo de uso

Para usar el módulo de vibración debes primero importarlo usando `require()`:

```js
var Vibrate = require('nativescript-vibrate').Vibrate;
var vibrator = new Vibrate();
```

Si usas Typescript, puedes importarlo de esta manera:

```typescript
import { Vibrate } from 'nativescript-vibrate';
let vibrator = new Vibrate();
```

Después de tener una referencia al módulo, puede llamar a su método `vibrate(milliseconds)`.

```js
// my-page.js
vibrator.vibrate(2000);
```

Si prefieres usar un patrón de vibración, puedes intentar:

```js
// my-page.js
vibrator.vibrate([1000, 300, 500, 2000]);
```

### Notas

#### iOS

No hay una API para vibrar durante una **cantidad de tiempo** o un **patrón de vibración**, por lo que vibrará durante el período de tiempo predeterminado no importa lo que pase.

## API

Solo hay un método disponible: `vibrate()`, con las siguientes propiedades:

| Propiedad | Valor Predeterminado | Descripción | Android | iOS |
| :-: | :-: | :-: | :-: | :-: |
| time | 300 | La cantidad en milisegundos para hacer vibrar el dispositivo. También puede ser un arreglo de ***longs*** para activar o desactivar el vibrador. | ✔︎ | ✘ |
| repeat | -1 | El índice que indica cuantas veces se debe repetir la vibración, o -1 si no deseas repetir. | ✔︎ | ✘ |

## Documentación y Soporte

Si deseas detalles extras acerca de como configurar y usar este plugin, la documentación completa está disponible en [https://www.bazzite.com/es/docs/nativescript-vibrate][documentation].

Para preguntas y soporte, usa la [seción de Problemas (Issues)][issues].

Quizás quieras [seguir en Twitter a la compañía que soporta este proyecto][twitter].

### Soporte Comercial

Este proyecto está patrocinado por [Bazzite][bazzite-website]. Si necesita ayuda en tu(s) proyecto(s), contáctanos en [https://www.bazzite.com/es/contact][contact-page].

## Contribución

Por favor, asegúrate de leer la [Guía de Contribución][contributing] antes de hacer un pull request.

## Código de Conducta

Se espera que todos los que participen en este proyecto acepten acatar [Código de Conducta][code-of-conduct].

## Licencia
Código publicado bajo la [Licencia MIT][license-page].


[documentation]: https://www.bazzite.com/es/docs/nativescript-vibrate?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[contributing]: https://www.bazzite.com/es/docs/nativescript-vibrate/contributing?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[code-of-conduct]: https://www.bazzite.com/es/open-source/code-of-conduct?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[issues]: https://github.com/bazzite/nativescript-vibrate/issues
[twitter]: https://twitter.com/BazziteES
[bazzite-website]: https://www.bazzite.com/es?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[contact-page]: https://www.bazzite.com/es/contact?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[license-page]: https://www.bazzite.com/es/docs/nativescript-vibrate/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
