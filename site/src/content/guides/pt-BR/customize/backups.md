---
title: "Backup de áreas de trabalho"
description: "Pastas de áreas de trabalho, backups no computador e restauração de layouts e configurações de pincel salvos."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

No computador, você pode copiar a pasta `workspaces` para fazer backup das áreas de trabalho, barras de ferramentas, paletas e configurações de pincel do {appName}. Desenhos salvos como arquivos `.capy` ficam separados dessa pasta. Preferências, texturas de papel importadas e perfis de cor também são guardados separadamente.

## Locais de armazenamento

Estas são as pastas da versão publicada do {appName} instalada. `~` é sua pasta pessoal.

| Instalação | Pasta de áreas de trabalho |
| --- | --- |
| Instalador ou ZIP do Windows | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | Em `%LOCALAPPDATA%\Packages`, abra a pasta cujo nome começa com `CapyAtelier.CapyCanvas_` e depois `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Dentro do aplicativo. |
| iPad | Dentro do aplicativo. |
| Web | Dentro do navegador. |

No Android, no iPad e na web, você não pode copiar essas pastas pelo {appName}.

## Criar um backup

Você pode guardar uma cópia da pasta inteira em outro local.

Para fazer backup da pasta:

1. Encerre todas as cópias do {appName} em execução.
2. Abra a pasta que contém a pasta `workspaces` indicada acima.
3. Copie a pasta `workspaces` inteira para o local do backup.

## Restaurar um backup

Você pode substituir a pasta atual de áreas de trabalho por um backup. A restauração substitui as alterações feitas nas áreas de trabalho, barras de ferramentas, paletas e configurações de pincel desde o backup.

Para restaurar uma pasta:

1. Encerre todas as cópias do {appName} em execução.
2. Mova a pasta `workspaces` atual para outro local.
3. Copie o backup para o local original com o nome de pasta `workspaces`.
4. Abra o {appName}.

## Cópias automáticas

O {appName} faz cópias automáticas das áreas de trabalho, barras de ferramentas, paletas e configurações de pincel antes que outra versão do aplicativo salve alterações. São guardadas até dez cópias recentes. Cópias grandes reduzem essa quantidade, mas as três mais recentes são mantidas quando já existem três cópias. No Android, no iPad e na web, as cópias ficam dentro do aplicativo ou do navegador.

Se uma versão anterior do {appName} redefinir suas áreas de trabalho, o {appName} oferece **Restaurar** ou **Manter atuais** na caixa de diálogo **Restaurar áreas de trabalho?** na próxima vez que for aberto.

Um arquivo de áreas de trabalho danificado é guardado como `workspaces.damaged.<id>.sqlite3`, e o {appName} inicia novas áreas de trabalho.

## Restaurar uma cópia automática

No computador, as cópias são arquivos chamados `workspaces.<version>.<id>.sqlite3` na pasta `workspaces`. A versão no nome identifica o aplicativo que salvou essas configurações pela última vez. `earlier` indica que nenhuma versão foi registrada. A restauração substitui as alterações nas áreas de trabalho feitas desde a cópia.

Para restaurar uma cópia automática:

1. Encerre todas as cópias do {appName} em execução.
2. Abra a pasta `workspaces` indicada acima.
3. Mova `workspaces.sqlite3` e os arquivos `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm` e `last-version`, se existirem, para outra pasta.
4. Selecione a cópia automática que deseja restaurar.
5. Copie o arquivo selecionado para `workspaces` com o nome `workspaces.sqlite3`.
6. Abra o {appName}.
