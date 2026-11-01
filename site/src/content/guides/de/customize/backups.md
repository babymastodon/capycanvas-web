---
title: "Arbeitsbereiche sichern"
description: "Ordner für Arbeitsbereiche, Sicherungen auf dem Desktop und das Wiederherstellen gespeicherter Layouts und Pinseleinstellungen."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

Auf dem Desktop können Sie den Ordner `workspaces` kopieren, um Arbeitsbereiche, Werkzeugleisten, Paletten und Pinseleinstellungen von {appName} zu sichern. Als `.capy`-Dateien gespeicherte Zeichnungen liegen außerhalb dieses Ordners. Voreinstellungen, importierte Papiertexturen und Farbprofile werden ebenfalls getrennt gespeichert.

## Speicherorte

Dies sind die Ordner der installierten veröffentlichten Version von {appName}. `~` steht für Ihren persönlichen Ordner.

| Installation | Ordner für Arbeitsbereiche |
| --- | --- |
| Windows-Installationsprogramm oder ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | Öffnen Sie unter `%LOCALAPPDATA%\Packages` den Ordner, dessen Name mit `CapyAtelier.CapyCanvas_` beginnt, und darin `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Innerhalb der App. |
| iPad | Innerhalb der App. |
| Web | Innerhalb des Browsers. |

Unter Android, auf dem iPad und im Web können Sie diese Ordner nicht aus {appName} kopieren.

## Eine Sicherung erstellen

Sie können eine Kopie des gesamten Ordners an einem anderen Ort aufbewahren.

So sichern Sie den Ordner:

1. Beenden Sie alle laufenden Kopien von {appName}.
2. Öffnen Sie den übergeordneten Ordner des oben angegebenen Ordners `workspaces`.
3. Kopieren Sie den gesamten Ordner `workspaces` an den Sicherungsort.

## Eine Sicherung wiederherstellen

Sie können den aktuellen Ordner für Arbeitsbereiche durch eine Sicherung ersetzen. Dabei werden die seit der Sicherung vorgenommenen Änderungen an Arbeitsbereichen, Werkzeugleisten, Paletten und Pinseleinstellungen ersetzt.

So stellen Sie einen Ordner wieder her:

1. Beenden Sie alle laufenden Kopien von {appName}.
2. Verschieben Sie den aktuellen Ordner `workspaces` an einen anderen Ort.
3. Kopieren Sie die Sicherung unter dem Ordnernamen `workspaces` an den ursprünglichen Ort.
4. Öffnen Sie {appName}.
