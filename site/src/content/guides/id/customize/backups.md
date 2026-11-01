---
title: "Mencadangkan ruang kerja"
description: "Folder ruang kerja, cadangan di desktop, serta pemulihan tata letak dan pengaturan kuas yang tersimpan."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

Di desktop, Anda dapat menyalin folder `workspaces` untuk mencadangkan ruang kerja, bilah alat, palet, dan pengaturan kuas {appName}. Gambar yang disimpan sebagai file `.capy` terpisah dari folder ini. Preferensi, tekstur kertas yang diimpor, dan profil warna juga disimpan terpisah.

## Lokasi penyimpanan

Berikut adalah folder untuk versi rilis {appName} yang terpasang. `~` adalah folder beranda Anda.

| Pemasangan | Folder ruang kerja |
| --- | --- |
| Pemasang atau ZIP Windows | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | Di `%LOCALAPPDATA%\Packages`, buka folder yang namanya diawali `CapyAtelier.CapyCanvas_`, lalu `LocalState\workspaces`. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Di dalam aplikasi. |
| iPad | Di dalam aplikasi. |
| Web | Di dalam browser. |

Di Android, iPad, dan web, Anda tidak dapat menyalin folder ini dari {appName}.

## Membuat cadangan

Anda dapat menyimpan salinan seluruh folder di lokasi lain.

Untuk mencadangkan folder:

1. Tutup semua salinan {appName} yang sedang berjalan.
2. Buka folder induk dari folder `workspaces` yang tercantum di atas.
3. Salin seluruh folder `workspaces` ke lokasi cadangan Anda.

## Memulihkan cadangan

Anda dapat mengganti folder ruang kerja saat ini dengan cadangan. Pemulihan mengganti perubahan pada ruang kerja, bilah alat, palet, dan pengaturan kuas sejak cadangan dibuat.

Untuk memulihkan folder:

1. Tutup semua salinan {appName} yang sedang berjalan.
2. Pindahkan folder `workspaces` saat ini ke lokasi lain.
3. Salin cadangan ke lokasi semula dengan nama folder `workspaces`.
4. Buka {appName}.

## Salinan otomatis

{appName} membuat salinan otomatis ruang kerja, bilah alat, palet, dan pengaturan kuas sebelum versi aplikasi yang berbeda menyimpan perubahan. Hingga sepuluh salinan terbaru disimpan. Salinan yang besar mengurangi jumlah tersebut, tetapi tiga salinan terbaru tetap disimpan setelah ada tiga salinan. Di Android, iPad, dan web, salinan tetap berada di dalam aplikasi atau browser.

Jika versi lama {appName} mengatur ulang ruang kerja Anda, {appName} menawarkan **Pulihkan** atau **Pertahankan Saat Ini** dalam dialog **Pulihkan Ruang Kerja?** saat berikutnya dibuka.

File ruang kerja yang rusak disimpan sebagai `workspaces.damaged.<id>.sqlite3`, dan {appName} memulai ruang kerja baru.

## Memulihkan salinan otomatis

Di desktop, salinan berupa file bernama `workspaces.<version>.<id>.sqlite3` di dalam folder `workspaces`. Versi pada nama menunjukkan aplikasi yang terakhir menyimpan pengaturan tersebut. `earlier` berarti tidak ada versi yang tercatat. Pemulihan mengganti perubahan ruang kerja yang dibuat sejak salinan tersebut.

Untuk memulihkan salinan otomatis:

1. Tutup semua salinan {appName} yang sedang berjalan.
2. Buka folder `workspaces` yang tercantum di atas.
3. Pindahkan `workspaces.sqlite3` beserta file `workspaces.sqlite3-wal`, `workspaces.sqlite3-shm`, dan `last-version`, jika ada, ke folder lain.
4. Pilih salinan otomatis yang ingin dipulihkan.
5. Salin file yang dipilih ke `workspaces` dengan nama `workspaces.sqlite3`.
6. Buka {appName}.
