---
title: "Contribución"
description: "Para facilitar el desarrollo y la depuración, continúe con los siguientes pasos."
created: "2015-04-11T12:25:00Z"
published: "2018-02-27T22:09:31Z"
modified: "2020-07-17T21:52:22Z"
position: 2
category: "Primeros Pasos"
---

## Configuración de desarrollo

Para facilitar el desarrollo y la depuración, sigue los siguientes pasos:

1. Abra el símbolo del sistema/terminal, vaya a la carpeta `src` y ejecute `npm run demo.ios` o `npm run demo.android` para ejecutar la demo.
2. Abra otro símbolo del sistema/terminal, vaya a la carpeta `src` y ejecute `npm run plugin.tscwatch` para ver los cambios de archivos en el plugin.

Ahora vaya y haga un cambio en el plugin. Se aplicará automáticamente al proyecto demo.

### Pruebas unitarias
Abre `demo/app/tests/tests.js` y ajusta su contenido para que las pruebas tengan sentido en el contexto del plugin y sus características.

Puede leer más sobre este tema [aquí](https://docs.nativescript.org/tooling/testing).

Una vez que esté listo para probar la API del plugin, ve a la carpeta `src` y ejecuta uno de estos comandos:

```bash
npm run test.ios
npm run test.android
```

### Limpia el plugin y los archivos demo

A veces puedes que necesites borrar las carpetas `node_modules` y `demo/platforms` para volver a instalarlas.

1. Corre `npm run clean` para limpiarlos, puedes ejecutar `npm i` para instalar nuevas dependencias.

## Envíos de Pull Requests

**Siga estos pasos básicos para simplificar las revisiones de los pull request; si no lo hace, probablemente se lo pidan de todos modos.**

* Por favor rebase tu rama contra la rama maestro actual
* Haga referencia a posibles [problemas](https://github.com/bazzite/nativescript-vibrate/issues) en el comentario del PR

## Envío de reportes de errores

* Por favor detalle la plataforma afectada y la versión de ésta
* Asegúrese de indicar qué versión de node, npm y NativeScript está utilizando
