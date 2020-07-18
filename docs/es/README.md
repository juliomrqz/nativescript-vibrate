---
title: "Información general"
description: "Un plugin para NativeScript que facilita la vibración de dispositivos Android e iOS"
created: "2015-04-11T12:25:00Z"
published: "2018-02-27T16:27:00Z"
modified: "2020-07-17T21:52:22Z"
position: 1
category: "Primeros Pasos"
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

<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th style="text-align:center">Propiedad</th>
        <th style="text-align:center">Valor Predeterminado</th>
        <th style="text-align:center">Descripción</th>
        <th style="text-align:center">Android</th>
        <th style="text-align:center">iOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center">time</td>
        <td style="text-align:center">300</td>
        <td style="text-align:center">La cantidad en milisegundos para hacer vibrar el dispositivo. También puede ser un arreglo de
          <em>
            <strong>longs</strong>
          </em> para activar o desactivar el vibrador.</td>
        <td style="text-align:center">✔︎</td>
        <td style="text-align:center">✘</td>
      </tr>
      <tr>
        <td style="text-align:center">repeat</td>
        <td style="text-align:center">-1</td>
        <td style="text-align:center">El índice que indica cuantas veces se debe repetir la vibración, o -1 si no deseas repetir.</td>
        <td style="text-align:center">✔︎</td>
        <td style="text-align:center">✘</td>
      </tr>
    </tbody>
  </table>
</div>
