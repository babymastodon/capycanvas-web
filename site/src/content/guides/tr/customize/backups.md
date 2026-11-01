---
title: "Çalışma alanlarını yedekleme"
description: "Çalışma alanı klasörleri, masaüstü yedekleri ve kaydedilen düzenlerle fırça ayarlarını geri yükleme."
related: ["customize/workspaces", "customize/toolbars", "color/palettes", "brushes/reset"]
---

Masaüstünde `workspaces` klasörünü kopyalayarak {appName} çalışma alanlarını, araç çubuklarını, paletlerini ve fırça ayarlarını yedekleyebilirsiniz. `.capy` dosyaları olarak kaydedilen çizimler bu klasörden ayrı tutulur. Tercihler, içe aktarılan kâğıt dokuları ve renk profilleri de ayrı saklanır.

## Depolama konumları

Bunlar, yüklü {appName} yayımlanmış sürümünün klasörleridir. `~` ev klasörünüzdür.

| Kurulum | Çalışma alanı klasörü |
| --- | --- |
| Windows yükleyicisi veya ZIP | `%LOCALAPPDATA%\CapyAtelier\CapyCanvas\workspaces` |
| Windows MSIX | `%LOCALAPPDATA%\Packages` altında adı `CapyAtelier.CapyCanvas_` ile başlayan klasörü, ardından `LocalState\workspaces` klasörünü açın. |
| macOS | `~/Library/Containers/art.capycanvas.CapyCanvas/Data/Library/Application Support/art.capycanvas.CapyCanvas/workspaces` |
| Linux | `~/.local/share/capycanvas/workspaces` |
| Flatpak | `~/.var/app/art.capycanvas.CapyCanvas/data/capycanvas/workspaces` |
| Android | Uygulamanın içinde. |
| iPad | Uygulamanın içinde. |
| Web | Tarayıcının içinde. |

Android, iPad ve web üzerinde bu klasörleri {appName} içinden kopyalayamazsınız.

## Yedek oluşturma

Klasörün tamamının bir kopyasını başka bir konumda saklayabilirsiniz.

Klasörü yedeklemek için:

1. Çalışan tüm {appName} kopyalarından çıkın.
2. Yukarıda belirtilen `workspaces` klasörünün üst klasörünü açın.
3. `workspaces` klasörünün tamamını yedekleme konumunuza kopyalayın.

## Yedekten geri yükleme

Geçerli çalışma alanı klasörünü bir yedekle değiştirebilirsiniz. Geri yükleme, yedekten sonra çalışma alanlarında, araç çubuklarında, paletlerde ve fırça ayarlarında yapılan değişikliklerin yerini alır.

Klasörü geri yüklemek için:

1. Çalışan tüm {appName} kopyalarından çıkın.
2. Geçerli `workspaces` klasörünü başka bir konuma taşıyın.
3. Yedeği özgün konuma `workspaces` klasör adıyla kopyalayın.
4. {appName} uygulamasını açın.
