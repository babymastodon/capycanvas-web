---
title: "备份工作区"
description: "工作区文件夹、桌面备份，以及恢复已保存的布局和画笔设置。"
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

在桌面上，可以复制`workspaces`文件夹来备份{appName}的工作区、工具栏、调色板和画笔设置。保存为`.capy`文件的作品与此文件夹分开存放。偏好设置、导入的纸张纹理和颜色配置文件也另行存放。

## 存储位置

以下是已安装的{appName}正式版使用的文件夹。`~`表示主文件夹。

| 安装方式 | 工作区文件夹 |
| --- | --- |
| Windows安装程序或ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | 在`%LOCALAPPDATA%\Packages`中打开名称以`CapyAtelier.CapyCanvas_`开头的文件夹，再打开其中的`LocalState\workspaces`。 |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | 在应用内部。 |
| iPad | 在应用内部。 |
| Web | 在浏览器内部。 |

在Android、iPad和网页版中，无法从{appName}复制这些文件夹。

## 创建备份

可以将整个文件夹的副本保存在其他位置。

备份文件夹：

1. 退出所有正在运行的{appName}。
2. 打开上方所列`workspaces`文件夹的上级文件夹。
3. 将整个`workspaces`文件夹复制到备份位置。

## 恢复备份

可以用备份替换当前的工作区文件夹。备份之后对工作区、工具栏、调色板和画笔设置所做的更改会被替换。

恢复文件夹：

1. 退出所有正在运行的{appName}。
2. 将当前的`workspaces`文件夹移至其他位置。
3. 将备份复制到原位置，文件夹名称为`workspaces`。
4. 打开{appName}。
