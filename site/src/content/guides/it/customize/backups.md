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

## Copie automatiche

{appName} crea copie automatiche delle aree di lavoro, barre degli strumenti, tavolozze e impostazioni dei pennelli prima che un’altra versione dell’app salvi modifiche. Vengono conservate fino a dieci copie recenti. Le copie grandi ne riducono il numero, ma le tre più recenti vengono mantenute una volta che esistono tre copie. Su Android, iPad e sul web, le copie restano dentro l’app o il browser.

Se una versione precedente di {appName} reimposta le aree di lavoro, {appName} offre **Ripristina** o **Mantieni le attuali** nella finestra **Ripristinare le aree di lavoro?** alla prossima apertura.

Un file delle aree di lavoro danneggiato viene conservato come `workspaces.damaged.<id>.sqlite3` e {appName} avvia nuove aree di lavoro.

## Ripristino di una copia automatica

Su computer, le copie sono file chiamati `workspaces.<version>.<id>.sqlite3` nella cartella `workspaces`. La versione nel nome identifica l’app che ha salvato quelle impostazioni per ultima. `earlier` indica che non è stata registrata alcuna versione. Il ripristino sostituisce le modifiche alle aree di lavoro apportate dopo la copia.

Per ripristinare una copia automatica:

1. Esci da tutte le copie di {appName} in esecuzione.
2. Apri la cartella `workspaces` indicata sopra.
3. Sposta `workspaces.sqlite3` e i file `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm` e `last-version`, se presenti, in un’altra cartella.
4. Seleziona la copia automatica da ripristinare.
5. Copia il file selezionato in `workspaces` con il nome `workspaces.sqlite3`.
6. Apri {appName}.
