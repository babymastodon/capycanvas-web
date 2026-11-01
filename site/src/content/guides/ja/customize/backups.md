---
title: "ワークスペースのバックアップ"
description: "ワークスペースの保存先、デスクトップでのバックアップ、保存したレイアウトやブラシ設定の復元。"
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

デスクトップでは、`workspaces`フォルダーをコピーして、{appName}のワークスペース、ツールバー、パレット、ブラシ設定をバックアップできます。`.capy`ファイルとして保存した作品は、このフォルダーとは別に保存されます。環境設定、読み込んだ紙のテクスチャ、カラープロファイルも別に保存されます。

## 保存先

以下は、インストールした製品版の{appName}が使うフォルダーです。`~`はホームフォルダーを表します。

| インストール方法 | ワークスペースのフォルダー |
| --- | --- |
| WindowsのインストーラーまたはZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | `%LOCALAPPDATA%\Packages`内で、名前が`CapyAtelier.CapyCanvas_`で始まるフォルダーを開き、その中の`LocalState\workspaces`を開きます。 |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | アプリ内。 |
| iPad | アプリ内。 |
| Web | ブラウザー内。 |

Android、iPad、Webでは、{appName}からこれらのフォルダーをコピーすることはできません。

## バックアップの作成

フォルダー全体のコピーを別の場所に保存できます。

フォルダーをバックアップするには：

1. 起動中の{appName}をすべて終了します。
2. 上記の`workspaces`フォルダーの親フォルダーを開きます。
3. `workspaces`フォルダー全体をバックアップ先にコピーします。

## バックアップの復元

現在のワークスペースのフォルダーをバックアップで置き換えることができます。バックアップ後に行ったワークスペース、ツールバー、パレット、ブラシ設定の変更は置き換えられます。

フォルダーを復元するには：

1. 起動中の{appName}をすべて終了します。
2. 現在の`workspaces`フォルダーを別の場所に移動します。
3. バックアップを元の場所に、`workspaces`というフォルダー名でコピーします。
4. {appName}を開きます。
