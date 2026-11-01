---
title: "Copias de seguridad de espacios de trabajo"
description: "Carpetas de espacios de trabajo, copias de seguridad en el escritorio y restauración de distribuciones y ajustes de pincel guardados."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

En el escritorio, puedes copiar la carpeta `workspaces` para guardar una copia de seguridad de los espacios de trabajo, barras de herramientas, paletas y ajustes de pincel de {appName}. Los dibujos guardados como archivos `.capy` están separados de esta carpeta. Las preferencias, las texturas de papel importadas y los perfiles de color también se guardan por separado.

## Ubicaciones de almacenamiento

Estas son las carpetas de la versión publicada de {appName} instalada. `~` es tu carpeta personal.

| Instalación | Carpeta de espacios de trabajo |
| --- | --- |
| Instalador o ZIP de Windows | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | En `%LOCALAPPDATA%\Packages`, abre la carpeta cuyo nombre empieza por `CapyAtelier.CapyCanvas_` y después `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Dentro de la aplicación. |
| iPad | Dentro de la aplicación. |
| Web | Dentro del navegador. |

En Android, iPad y la web, no puedes copiar estas carpetas desde {appName}.

## Crear una copia de seguridad

Puedes guardar una copia de toda la carpeta en otra ubicación.

Para hacer una copia de seguridad de la carpeta:

1. Cierra todas las copias de {appName} en ejecución.
2. Abre la carpeta que contiene la carpeta `workspaces` indicada arriba.
3. Copia toda la carpeta `workspaces` en la ubicación de la copia de seguridad.

## Restaurar una copia de seguridad

Puedes sustituir la carpeta de espacios de trabajo actual por una copia de seguridad. La restauración sustituye los cambios hechos en los espacios de trabajo, barras de herramientas, paletas y ajustes de pincel desde la copia de seguridad.

Para restaurar una carpeta:

1. Cierra todas las copias de {appName} en ejecución.
2. Mueve la carpeta `workspaces` actual a otra ubicación.
3. Copia la copia de seguridad en la ubicación original con el nombre de carpeta `workspaces`.
4. Abre {appName}.

## Copias automáticas

{appName} crea copias automáticas de los espacios de trabajo, barras de herramientas, paletas y ajustes de pincel antes de que otra versión de la aplicación guarde cambios. Se conservan hasta diez copias recientes. Las copias grandes reducen esa cantidad, pero las tres más recientes se conservan cuando ya existen tres copias. En Android, iPad y la web, las copias se guardan dentro de la aplicación o del navegador.

Si una versión anterior de {appName} restablece tus espacios de trabajo, {appName} ofrece **Restaurar** o **Mantener actuales** en el diálogo **¿Restaurar espacios de trabajo?** la próxima vez que se abra.

Un archivo de espacios de trabajo dañado se conserva como `workspaces.damaged.<id>.sqlite3` y {appName} inicia espacios de trabajo nuevos.

## Restaurar una copia automática

En el escritorio, las copias son archivos con el nombre `workspaces.<version>.<id>.sqlite3` en la carpeta `workspaces`. La versión del nombre identifica la aplicación que guardó esos ajustes por última vez. `earlier` indica que no se registró ninguna versión. La restauración sustituye los cambios hechos en los espacios de trabajo desde la copia.

Para restaurar una copia automática:

1. Cierra todas las copias de {appName} en ejecución.
2. Abre la carpeta `workspaces` indicada arriba.
3. Mueve `workspaces.sqlite3` y los archivos `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm` y `last-version`, si existen, a otra carpeta.
4. Selecciona la copia automática que quieras restaurar.
5. Copia el archivo seleccionado en `workspaces` con el nombre `workspaces.sqlite3`.
6. Abre {appName}.
