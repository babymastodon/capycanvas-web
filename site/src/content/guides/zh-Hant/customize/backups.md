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
