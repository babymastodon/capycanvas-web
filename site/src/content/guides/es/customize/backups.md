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
