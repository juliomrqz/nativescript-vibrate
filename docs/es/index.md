---
title: Información general
description: Un plugin para NativeScript que facilita la vibración de dispositivos Android e iOS
order: 1
dateCreated: 2015-04-11T12:25:00-04:30
dateModified: 2017-09-04T14:36:00-04:00
datePublished: 2018-02-27
---

# NativeScript Vibrate

Un plugin para NativeScript que facilita la vibración de dispositivos Android e iOS

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

## Uso

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

Si prefiere usar un patrón de vibración, puedes intentar:

```js
// my-page.js
vibrator.vibrate([1000, 300, 500, 2000]);
```

### Notas

#### iOS

No hay una API para vibrar durante una **cantidad de tiempo** o un **patrón de vibración**, por lo que vibrará durante el período de tiempo predeterminado no importa lo que pase.
