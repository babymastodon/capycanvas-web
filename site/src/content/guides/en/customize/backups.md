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

## Automatic copies

{appName} makes automatic copies of workspaces, toolbars, palettes, and brush settings before a different app version saves changes. Up to ten recent copies are kept. Large copies reduce that number, but the three newest remain once three copies exist. On Android, iPad, and the web, the copies stay inside the app or browser.

If an older version of {appName} resets your workspaces, {appName} offers **Restore** or **Keep Current** in a **Restore Workspaces?** dialog the next time it opens.

A damaged workspace file is kept as `workspaces.damaged.<id>.sqlite3`, and {appName} starts new workspaces.

## Restoring an automatic copy

On desktop, the copies are files named `workspaces.<version>.<id>.sqlite3` in the `workspaces` folder. The version in the name identifies the app that last saved those settings. `earlier` means no version was recorded. Restoring replaces workspace changes made since the copy.

To restore an automatic copy:

1. Quit every running copy of {appName}.
2. Open the `workspaces` folder listed above.
3. Move `workspaces.sqlite3` and any `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm`, and `last-version` files to another folder.
4. Select the automatic copy you want to restore.
5. Copy the selected file into `workspaces` with the name `workspaces.sqlite3`.
6. Open {appName}.
