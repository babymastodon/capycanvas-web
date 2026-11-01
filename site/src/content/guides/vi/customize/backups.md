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

## Bản sao tự động

{appName} tạo bản sao tự động của không gian làm việc, thanh công cụ, bảng màu và thiết lập cọ trước khi một phiên bản ứng dụng khác lưu thay đổi. Tối đa mười bản sao gần đây được giữ lại. Bản sao lớn làm giảm số lượng này, nhưng ba bản mới nhất vẫn được giữ khi đã có ba bản sao. Trên Android, iPad và web, các bản sao nằm bên trong ứng dụng hoặc trình duyệt.

Nếu một phiên bản cũ của {appName} đặt lại không gian làm việc của bạn, {appName} sẽ đưa ra lựa chọn **Khôi phục** hoặc **Giữ hiện tại** trong hộp thoại **Khôi phục không gian làm việc?** vào lần mở tiếp theo.

Tệp không gian làm việc bị hỏng được giữ lại dưới tên `workspaces.damaged.<id>.sqlite3` và {appName} bắt đầu với các không gian làm việc mới.

## Khôi phục bản sao tự động

Trên máy tính, các bản sao là tệp có tên `workspaces.<version>.<id>.sqlite3` trong thư mục `workspaces`. Phiên bản trong tên cho biết ứng dụng đã lưu các thiết lập đó lần cuối. `earlier` có nghĩa là không có phiên bản nào được ghi lại. Việc khôi phục thay thế các thay đổi về không gian làm việc kể từ lúc tạo bản sao.

Để khôi phục bản sao tự động:

1. Thoát mọi bản {appName} đang chạy.
2. Mở thư mục `workspaces` nêu trên.
3. Chuyển `workspaces.sqlite3` và các tệp `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm`, `last-version`, nếu có, sang thư mục khác.
4. Chọn bản sao tự động muốn khôi phục.
5. Sao chép tệp đã chọn vào `workspaces` với tên `workspaces.sqlite3`.
6. Mở {appName}.
