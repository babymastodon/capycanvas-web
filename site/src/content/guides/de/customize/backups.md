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

## Automatische Kopien

{appName} erstellt automatische Kopien von Arbeitsbereichen, Werkzeugleisten, Paletten und Pinseleinstellungen, bevor eine andere App-Version Änderungen speichert. Bis zu zehn aktuelle Kopien werden aufbewahrt. Große Kopien verringern diese Zahl, aber die drei neuesten bleiben erhalten, sobald drei Kopien vorhanden sind. Unter Android, auf dem iPad und im Web bleiben die Kopien innerhalb der App oder des Browsers.

Wenn eine ältere Version von {appName} Ihre Arbeitsbereiche zurücksetzt, bietet {appName} beim nächsten Öffnen im Dialog **Arbeitsbereiche wiederherstellen?** die Optionen **Wiederherstellen** und **Aktuelle behalten** an.

Eine beschädigte Arbeitsbereichsdatei bleibt als `workspaces.damaged.<id>.sqlite3` erhalten, und {appName} startet mit neuen Arbeitsbereichen.

## Eine automatische Kopie wiederherstellen

Auf dem Desktop liegen die Kopien als Dateien mit dem Namen `workspaces.<version>.<id>.sqlite3` im Ordner `workspaces`. Die Version im Namen bezeichnet die App, die diese Einstellungen zuletzt gespeichert hat. `earlier` bedeutet, dass keine Version aufgezeichnet wurde. Die Wiederherstellung ersetzt Änderungen an Arbeitsbereichen seit dem Erstellen der Kopie.

So stellen Sie eine automatische Kopie wieder her:

1. Beenden Sie alle laufenden Kopien von {appName}.
2. Öffnen Sie den oben angegebenen Ordner `workspaces`.
3. Verschieben Sie `workspaces.sqlite3` und die Dateien `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm` und `last-version`, sofern vorhanden, in einen anderen Ordner.
4. Wählen Sie die automatische Kopie aus, die Sie wiederherstellen möchten.
5. Kopieren Sie die ausgewählte Datei unter dem Namen `workspaces.sqlite3` in `workspaces`.
6. Öffnen Sie {appName}.
