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

## 自動コピー

{appName}は、異なるバージョンのアプリが変更を保存する前に、ワークスペース、ツールバー、パレット、ブラシ設定の自動コピーを作成します。最近のコピーを最大10個保持します。コピーが大きいと保持数は減りますが、3個以上作成された後は最新の3個を保持します。Android、iPad、Webでは、コピーはアプリ内またはブラウザー内に保存されます。

古いバージョンの{appName}でワークスペースがリセットされた場合、{appName}は次の起動時に「**ワークスペースを復元しますか？**」ダイアログで**復元**または**現在の状態を保持**を提示します。

破損したワークスペースのファイルは`workspaces.damaged.<id>.sqlite3`として保持され、{appName}は新しいワークスペースで起動します。

## 自動コピーの復元

デスクトップでは、コピーは`workspaces`フォルダー内の`workspaces.<version>.<id>.sqlite3`という名前のファイルです。名前に含まれるバージョンは、その設定を最後に保存したアプリのバージョンを表します。`earlier`はバージョンが記録されていないことを表します。復元すると、コピー後に行ったワークスペースの変更が置き換えられます。

自動コピーを復元するには：

1. 起動中の{appName}をすべて終了します。
2. 上記の`workspaces`フォルダーを開きます。
3. `workspaces.sqlite3`と、存在する場合は`workspaces.sqlite3-wal`、`workspaces.sqlite3-shm`、`last-version`の各ファイルを別のフォルダーに移動します。
4. 復元する自動コピーを選択します。
5. 選択したファイルを`workspaces.sqlite3`という名前で`workspaces`内にコピーします。
6. {appName}を開きます。
