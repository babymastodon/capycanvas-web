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

## 自动副本

{appName}会在不同版本的应用保存更改之前，自动复制工作区、工具栏、调色板和画笔设置。最多保留十个近期副本。副本较大时保留数量会减少，但创建了至少三个副本后，会保留最新的三个。在Android、iPad和网页版中，副本存放在应用或浏览器内部。

如果旧版本的{appName}重置了工作区，下次打开时，{appName}会在“**恢复工作区？**”对话框中提供**恢复**或**保留当前设置**选项。

损坏的工作区文件会保留为`workspaces.damaged.<id>.sqlite3`，{appName}会启用新的工作区。

## 恢复自动副本

在桌面上，副本是`workspaces`文件夹中名为`workspaces.<version>.<id>.sqlite3`的文件。名称中的版本表示最后保存这些设置的应用版本。`earlier`表示未记录版本。恢复会替换创建副本之后对工作区所做的更改。

恢复自动副本：

1. 退出所有正在运行的{appName}。
2. 打开上方所列的`workspaces`文件夹。
3. 将`workspaces.sqlite3`和存在的`workspaces.sqlite3-wal`、`workspaces.sqlite3-shm`、`last-version`文件移至其他文件夹。
4. 选择要恢复的自动副本。
5. 将选中的文件以`workspaces.sqlite3`为名称复制到`workspaces`中。
6. 打开{appName}。
