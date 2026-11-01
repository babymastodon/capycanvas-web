---
title: "備份工作區"
description: "工作區資料夾、桌面備份，以及恢復已儲存的版面配置和筆刷設定。"
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

在桌面上，可以複製`workspaces`資料夾來備份{appName}的工作區、工具列、調色盤和筆刷設定。儲存為`.capy`檔案的作品與此資料夾分開存放。偏好設定、匯入的紙張紋理和色彩描述檔也另行存放。

## 儲存位置

以下是已安裝的{appName}正式版使用的資料夾。`~`表示個人專屬資料夾。

| 安裝方式 | 工作區資料夾 |
| --- | --- |
| Windows安裝程式或ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | 在`%LOCALAPPDATA%\Packages`中開啟名稱以`CapyAtelier.CapyCanvas_`開頭的資料夾，再開啟其中的`LocalState\workspaces`。 |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | 在應用程式內部。 |
| iPad | 在應用程式內部。 |
| Web | 在瀏覽器內部。 |

在Android、iPad和網頁版中，無法從{appName}複製這些資料夾。

## 建立備份

可以將整個資料夾的複本儲存在其他位置。

備份資料夾：

1. 結束所有正在執行的{appName}。
2. 開啟上方所列`workspaces`資料夾的上層資料夾。
3. 將整個`workspaces`資料夾複製到備份位置。

## 恢復備份

可以用備份取代目前的工作區資料夾。備份之後對工作區、工具列、調色盤和筆刷設定所做的變更會被取代。

恢復資料夾：

1. 結束所有正在執行的{appName}。
2. 將目前的`workspaces`資料夾移至其他位置。
3. 將備份複製到原位置，資料夾名稱為`workspaces`。
4. 開啟{appName}。

## 自動複本

{appName}會在不同版本的應用程式儲存變更之前，自動複製工作區、工具列、調色盤和筆刷設定。最多保留十個近期複本。複本較大時保留數量會減少，但建立了至少三個複本後，會保留最新的三個。在Android、iPad和網頁版中，複本存放在應用程式或瀏覽器內部。

如果舊版本的{appName}重設了工作區，下次開啟時，{appName}會在「**還原工作區？**」對話框中提供**恢復**或**保留目前設定**選項。

損壞的工作區檔案會保留為`workspaces.damaged.<id>.sqlite3`，{appName}會啟用新的工作區。

## 恢復自動複本

在桌面上，複本是`workspaces`資料夾中名為`workspaces.<version>.<id>.sqlite3`的檔案。名稱中的版本表示最後儲存這些設定的應用程式版本。`earlier`表示未記錄版本。恢復會取代建立複本之後對工作區所做的變更。

恢復自動複本：

1. 結束所有正在執行的{appName}。
2. 開啟上方所列的`workspaces`資料夾。
3. 將`workspaces.sqlite3`和存在的`workspaces.sqlite3-wal`、`workspaces.sqlite3-shm`、`last-version`檔案移至其他資料夾。
4. 選取要恢復的自動複本。
5. 將選取的檔案以`workspaces.sqlite3`為名稱複製到`workspaces`中。
6. 開啟{appName}。
