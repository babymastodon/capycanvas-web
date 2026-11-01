---
title: "Backup delle aree di lavoro"
description: "Cartelle delle aree di lavoro, backup su computer e ripristino dei layout e delle impostazioni dei pennelli salvati."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

Su computer puoi copiare la cartella `workspaces` per eseguire il backup delle aree di lavoro, barre degli strumenti, tavolozze e impostazioni dei pennelli di {appName}. I disegni salvati come file `.capy` sono separati da questa cartella. Anche le preferenze, le texture di carta importate e i profili colore sono conservati separatamente.

## Posizioni di archiviazione

Queste sono le cartelle della versione pubblicata di {appName} installata. `~` è la cartella personale.

| Installazione | Cartella delle aree di lavoro |
| --- | --- |
| Programma di installazione o ZIP Windows | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | In `%LOCALAPPDATA%\Packages`, apri la cartella il cui nome inizia con `CapyAtelier.CapyCanvas_`, poi `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Dentro l’app. |
| iPad | Dentro l’app. |
| Web | Dentro il browser. |

Su Android, iPad e sul web non puoi copiare queste cartelle da {appName}.

## Creazione di un backup

Puoi conservare una copia dell’intera cartella in un’altra posizione.

Per eseguire il backup della cartella:

1. Esci da tutte le copie di {appName} in esecuzione.
2. Apri la cartella che contiene la cartella `workspaces` indicata sopra.
3. Copia l’intera cartella `workspaces` nella posizione del backup.

## Ripristino di un backup

Puoi sostituire la cartella attuale delle aree di lavoro con un backup. Il ripristino sostituisce le modifiche apportate alle aree di lavoro, barre degli strumenti, tavolozze e impostazioni dei pennelli dopo il backup.

Per ripristinare una cartella:

1. Esci da tutte le copie di {appName} in esecuzione.
2. Sposta la cartella `workspaces` attuale in un’altra posizione.
3. Copia il backup nella posizione originale con il nome di cartella `workspaces`.
4. Apri {appName}.
