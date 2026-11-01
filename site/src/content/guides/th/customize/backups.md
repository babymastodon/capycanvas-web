---
title: "การสำรองพื้นที่ทำงาน"
description: "โฟลเดอร์พื้นที่ทำงาน การสำรองบนเดสก์ท็อป และการคืนค่าผังกับการตั้งค่าพู่กันที่บันทึกไว้"
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

บนเดสก์ท็อป คุณคัดลอกโฟลเดอร์ `workspaces` เพื่อสำรองพื้นที่ทำงาน แถบเครื่องมือ จานสี และการตั้งค่าพู่กันของ {appName} ได้ ภาพที่บันทึกเป็นไฟล์ `.capy` อยู่แยกจากโฟลเดอร์นี้ ค่ากำหนด พื้นผิวกระดาษที่นำเข้า และโปรไฟล์สีก็เก็บแยกกัน

## ตำแหน่งจัดเก็บ

ต่อไปนี้คือโฟลเดอร์ของ {appName} รุ่นเผยแพร่ที่ติดตั้งไว้ `~` คือโฟลเดอร์บ้านของคุณ

| การติดตั้ง | โฟลเดอร์พื้นที่ทำงาน |
| --- | --- |
| ตัวติดตั้ง Windows หรือ ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | ใน `%LOCALAPPDATA%\Packages` ให้เปิดโฟลเดอร์ที่ชื่อขึ้นต้นด้วย `CapyAtelier.CapyCanvas_` แล้วเปิด `LocalState\workspaces` |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | ภายในแอป |
| iPad | ภายในแอป |
| Web | ภายในเบราว์เซอร์ |

บน Android, iPad และเว็บ คุณไม่สามารถคัดลอกโฟลเดอร์เหล่านี้จาก {appName} ได้

## การสร้างข้อมูลสำรอง

คุณเก็บสำเนาของทั้งโฟลเดอร์ไว้ในตำแหน่งอื่นได้

การสำรองโฟลเดอร์:

1. ออกจาก {appName} ทุกชุดที่กำลังทำงาน
2. เปิดโฟลเดอร์แม่ของโฟลเดอร์ `workspaces` ที่ระบุไว้ด้านบน
3. คัดลอกทั้งโฟลเดอร์ `workspaces` ไปยังตำแหน่งสำรองของคุณ

## การคืนค่าข้อมูลสำรอง

คุณแทนที่โฟลเดอร์พื้นที่ทำงานปัจจุบันด้วยข้อมูลสำรองได้ การคืนค่าจะแทนที่การเปลี่ยนแปลงพื้นที่ทำงาน แถบเครื่องมือ จานสี และการตั้งค่าพู่กันที่ทำหลังจากสำรองข้อมูล

การคืนค่าโฟลเดอร์:

1. ออกจาก {appName} ทุกชุดที่กำลังทำงาน
2. ย้ายโฟลเดอร์ `workspaces` ปัจจุบันไปยังตำแหน่งอื่น
3. คัดลอกข้อมูลสำรองกลับไปยังตำแหน่งเดิมโดยใช้ชื่อโฟลเดอร์ `workspaces`
4. เปิด {appName}
