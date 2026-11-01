---
title: "Sao lưu không gian làm việc"
description: "Thư mục không gian làm việc, bản sao lưu trên máy tính và cách khôi phục bố cục cùng thiết lập cọ đã lưu."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

Trên máy tính, bạn có thể sao chép thư mục `workspaces` để sao lưu không gian làm việc, thanh công cụ, bảng màu và thiết lập cọ của {appName}. Các bản vẽ lưu dưới dạng tệp `.capy` nằm riêng ngoài thư mục này. Tùy chọn, vân giấy đã nhập và cấu hình màu cũng được lưu riêng.

## Vị trí lưu trữ

Đây là các thư mục của bản phát hành {appName} đã cài đặt. `~` là thư mục nhà của bạn.

| Cách cài đặt | Thư mục không gian làm việc |
| --- | --- |
| Trình cài đặt hoặc ZIP Windows | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | Trong `%LOCALAPPDATA%\Packages`, mở thư mục có tên bắt đầu bằng `CapyAtelier.CapyCanvas_`, rồi mở `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Bên trong ứng dụng. |
| iPad | Bên trong ứng dụng. |
| Web | Bên trong trình duyệt. |

Trên Android, iPad và web, bạn không thể sao chép các thư mục này từ {appName}.

## Tạo bản sao lưu

Bạn có thể giữ bản sao của toàn bộ thư mục ở một vị trí khác.

Để sao lưu thư mục:

1. Thoát mọi bản {appName} đang chạy.
2. Mở thư mục cha của thư mục `workspaces` nêu trên.
3. Sao chép toàn bộ thư mục `workspaces` vào vị trí sao lưu.

## Khôi phục bản sao lưu

Bạn có thể thay thư mục không gian làm việc hiện tại bằng bản sao lưu. Việc khôi phục thay thế các thay đổi về không gian làm việc, thanh công cụ, bảng màu và thiết lập cọ kể từ lúc sao lưu.

Để khôi phục thư mục:

1. Thoát mọi bản {appName} đang chạy.
2. Chuyển thư mục `workspaces` hiện tại sang vị trí khác.
3. Sao chép bản sao lưu về vị trí ban đầu với tên thư mục `workspaces`.
4. Mở {appName}.
