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
