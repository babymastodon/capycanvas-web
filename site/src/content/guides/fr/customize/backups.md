---
title: "Sauvegarde des espaces de travail"
description: "Dossiers des espaces de travail, sauvegardes sur ordinateur et restauration des dispositions et réglages de pinceau enregistrés."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

Sur ordinateur, vous pouvez copier le dossier `workspaces` pour sauvegarder les espaces de travail, barres d’outils, palettes et réglages de pinceau de {appName}. Les dessins enregistrés en fichiers `.capy` sont séparés de ce dossier. Les préférences, les textures de papier importées et les profils colorimétriques sont également conservés séparément.

## Emplacements de stockage

Voici les dossiers de la version publiée de {appName} installée. `~` désigne votre dossier personnel.

| Installation | Dossier des espaces de travail |
| --- | --- |
| Programme d’installation ou ZIP Windows | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | Dans `%LOCALAPPDATA%\Packages`, ouvrez le dossier dont le nom commence par `CapyAtelier.CapyCanvas_`, puis `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Dans l’application. |
| iPad | Dans l’application. |
| Web | Dans le navigateur. |

Sur Android, iPad et le web, vous ne pouvez pas copier ces dossiers depuis {appName}.

## Création d’une sauvegarde

Vous pouvez conserver une copie du dossier entier à un autre emplacement.

Pour sauvegarder le dossier :

1. Quittez toutes les copies de {appName} en cours d’exécution.
2. Ouvrez le dossier contenant le dossier `workspaces` indiqué ci-dessus.
3. Copiez le dossier `workspaces` entier à l’emplacement de votre sauvegarde.

## Restauration d’une sauvegarde

Vous pouvez remplacer le dossier actuel des espaces de travail par une sauvegarde. La restauration remplace les modifications apportées aux espaces de travail, barres d’outils, palettes et réglages de pinceau depuis la sauvegarde.

Pour restaurer un dossier :

1. Quittez toutes les copies de {appName} en cours d’exécution.
2. Déplacez le dossier `workspaces` actuel à un autre emplacement.
3. Copiez la sauvegarde à l’emplacement d’origine avec le nom de dossier `workspaces`.
4. Ouvrez {appName}.

## Copies automatiques

{appName} crée des copies automatiques des espaces de travail, barres d’outils, palettes et réglages de pinceau avant qu’une autre version de l’application enregistre des modifications. Jusqu’à dix copies récentes sont conservées. Les copies volumineuses réduisent ce nombre, mais les trois plus récentes sont conservées dès que trois copies existent. Sur Android, iPad et le web, les copies restent dans l’application ou le navigateur.

Si une ancienne version de {appName} réinitialise vos espaces de travail, {appName} propose **Restaurer** ou **Conserver les actuels** dans la boîte de dialogue **Restaurer les espaces de travail ?** à la prochaine ouverture.

Un fichier d’espaces de travail endommagé est conservé sous le nom `workspaces.damaged.<id>.sqlite3`, et {appName} démarre avec de nouveaux espaces de travail.

## Restauration d’une copie automatique

Sur ordinateur, les copies sont des fichiers nommés `workspaces.<version>.<id>.sqlite3` dans le dossier `workspaces`. La version dans le nom indique l’application qui a enregistré ces réglages en dernier. `earlier` signifie qu’aucune version n’a été enregistrée. La restauration remplace les modifications des espaces de travail effectuées depuis la copie.

Pour restaurer une copie automatique :

1. Quittez toutes les copies de {appName} en cours d’exécution.
2. Ouvrez le dossier `workspaces` indiqué ci-dessus.
3. Déplacez `workspaces.sqlite3` et les fichiers `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm` et `last-version`, s’ils existent, dans un autre dossier.
4. Sélectionnez la copie automatique à restaurer.
5. Copiez le fichier sélectionné dans `workspaces` sous le nom `workspaces.sqlite3`.
6. Ouvrez {appName}.
