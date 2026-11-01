---
title: "작업 영역 백업"
description: "작업 영역 폴더, 데스크톱 백업, 저장된 레이아웃과 브러시 설정 복원."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

데스크톱에서 `workspaces` 폴더를 복사하여 {appName}의 작업 영역, 도구 모음, 팔레트, 브러시 설정을 백업할 수 있습니다. `.capy` 파일로 저장한 그림은 이 폴더와 별도로 보관됩니다. 환경설정, 가져온 종이 질감, 색상 프로파일도 별도로 보관됩니다.

## 저장 위치

다음은 설치된 {appName} 정식 버전의 폴더입니다. `~`는 홈 폴더입니다.

| 설치 방식 | 작업 영역 폴더 |
| --- | --- |
| Windows 설치 프로그램 또는 ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | `%LOCALAPPDATA%\Packages`에서 이름이 `CapyAtelier.CapyCanvas_`로 시작하는 폴더를 연 다음 `LocalState\workspaces`를 엽니다. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | 앱 내부. |
| iPad | 앱 내부. |
| Web | 브라우저 내부. |

Android, iPad, 웹에서는 {appName}에서 이 폴더들을 복사할 수 없습니다.

## 백업 만들기

폴더 전체의 사본을 다른 위치에 보관할 수 있습니다.

폴더를 백업하려면:

1. 실행 중인 모든 {appName}을 종료합니다.
2. 위에 나열된 `workspaces` 폴더의 상위 폴더를 엽니다.
3. `workspaces` 폴더 전체를 백업 위치에 복사합니다.

## 백업 복원

현재 작업 영역 폴더를 백업으로 바꿀 수 있습니다. 백업 이후 작업 영역, 도구 모음, 팔레트, 브러시 설정에 적용한 변경 내용이 대체됩니다.

폴더를 복원하려면:

1. 실행 중인 모든 {appName}을 종료합니다.
2. 현재 `workspaces` 폴더를 다른 위치로 옮깁니다.
3. 백업을 원래 위치에 `workspaces`라는 폴더 이름으로 복사합니다.
4. {appName}을 엽니다.

## 자동 사본

{appName}은 다른 앱 버전이 변경 내용을 저장하기 전에 작업 영역, 도구 모음, 팔레트, 브러시 설정의 자동 사본을 만듭니다. 최근 사본을 최대 열 개까지 보관합니다. 사본이 크면 보관 수가 줄어들지만, 사본이 세 개 이상 만들어진 뒤에는 가장 최근 세 개를 보관합니다. Android, iPad, 웹에서는 사본이 앱이나 브라우저 내부에 보관됩니다.

이전 버전의 {appName}이 작업 영역을 재설정한 경우, 다음에 열 때 {appName}이 **작업 영역을 복원할까요?** 대화 상자에서 **복원** 또는 **현재 상태 유지**를 제공합니다.

손상된 작업 영역 파일은 `workspaces.damaged.<id>.sqlite3`로 보관되며 {appName}은 새 작업 영역으로 시작합니다.

## 자동 사본 복원

데스크톱에서 사본은 `workspaces` 폴더에 있는 `workspaces.<version>.<id>.sqlite3`라는 이름의 파일입니다. 이름에 포함된 버전은 해당 설정을 마지막으로 저장한 앱 버전을 나타냅니다. `earlier`는 버전이 기록되지 않았다는 뜻입니다. 복원하면 사본을 만든 이후의 작업 영역 변경 내용이 대체됩니다.

자동 사본을 복원하려면:

1. 실행 중인 모든 {appName}을 종료합니다.
2. 위에 나열된 `workspaces` 폴더를 엽니다.
3. `workspaces.sqlite3`와, 존재하는 경우 `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm`, `last-version` 파일을 다른 폴더로 옮깁니다.
4. 복원할 자동 사본을 선택합니다.
5. 선택한 파일을 `workspaces.sqlite3`라는 이름으로 `workspaces`에 복사합니다.
6. {appName}을 엽니다.
