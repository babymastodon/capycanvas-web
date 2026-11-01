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
