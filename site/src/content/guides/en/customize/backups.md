---
title: "Backing up workspaces"
description: "Workspace folders, desktop backups, and restoring saved layouts and brush settings."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

You can back up {appName}'s workspaces, toolbars, palettes, and brush settings by copying the `workspaces` folder on desktop. Drawings saved as `.capy` files are separate from this folder. Preferences, imported paper textures, and color profiles are also kept separately.

## Storage locations

These are the folders for the installed release of {appName}. `~` is your home folder.

| Installation | Workspace folder |
| --- | --- |
| Windows installer or ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | Under `%LOCALAPPDATA%\Packages`, open the folder beginning with `CapyAtelier.CapyCanvas_`, then `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Inside the app. |
| iPad | Inside the app. |
| Web | Inside the browser. |

On Android, iPad, and the web, you can't copy these folders from {appName}.

## Making a backup

You can keep a copy of the whole folder in another location.

To back up the folder:

1. Quit every running copy of {appName}.
2. Open the parent of the `workspaces` folder listed above.
3. Copy the entire `workspaces` folder to your backup location.

## Restoring a backup

You can replace the current workspace folder with a backup. Restoring replaces changes made to workspaces, toolbars, palettes, and brush settings since the backup.

To restore a folder:

1. Quit every running copy of {appName}.
2. Move the current `workspaces` folder to another location.
3. Copy the backup into the original location with the folder name `workspaces`.
4. Open {appName}.
