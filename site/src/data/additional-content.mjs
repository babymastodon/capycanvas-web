// Static translations; no translation service is used at build time or in the browser.
import { pwaContent } from './pwa-content.mjs';
export const additionalContent = {
  "es": {
    "footer": {
      "madeBy": "Hecho por Capy Atelier"
    },
    "lang": "es",
    "locale": "es_ES",
    "name": "Español",
    "nav": {
      "privacy": "Privacidad",
      "webDemo": "Demo web",
      "download": "Descargar",
      "documentation": "Documentación",
      "home": "Inicio",
      "language": "Idioma",
      "main": "Navegación principal",
      "skip": "Saltar al contenido",
      "github": "{appName} en GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} es una aplicación multiplataforma para bocetos, ilustración y fotografía, con un potente motor de pintura acelerado por GPU.",
      "workspaces": "Espacio de trabajo",
      "slides": {
        "sketch": "Un dibujo a tinta de un tren debajo de un gran árbol en el espacio de trabajo Sketch, donde el dibujo llena la pantalla y algunas herramientas se ubican en los bordes.",
        "paint": "Una pintura al óleo de una casa junto al mar al atardecer en el espacio de trabajo Paint, con pinceles, colores y capas al lado del lienzo.",
        "photo": "Una fotografía de un pequeño terrario en el espacio de trabajo Photo, con el motivo guardado como capa de selección sobre la foto."
      },
      "meta": "{appName} es una aplicación multiplataforma para bocetos, ilustración y fotografía, con un potente motor de pintura acelerado por GPU."
    },
    "download": {
      "title": "Descargar",
      "intro": "{appName} está en fase beta. Puede tener algunos fallos. {feedback}.",
      "feedback": "Cuéntenos su opinión en GitHub",
      "status": "Próximamente",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Otras plataformas",
      "joinBeta": "Unirse a la beta",
      "downloadFor": "Descargar {version} · {platform}",
      "openWebApp": "Abrir la aplicación web",
      "meta": "Instale {appName} como una aplicación web para uso sin conexión. Las descargas nativas llegarán pronto.",
      "pwa": pwaContent["es"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Copiar",
      "copied": "Copiado",
      "pastVersions": "Versiones anteriores",
      "allReleases": "Versiones en GitHub",
      "notesLanguage": "Las notas de la versión están en inglés.",
      "metaReleased": "Descargue {appName} o instálelo como aplicación web para usarlo sin conexión."
    },
    "versions": {
      "title": "Versiones anteriores",
      "intro": "Si una actualización le da problemas, puede volver a una versión anterior.",
      "empty": "Todavía no se ha publicado ninguna versión.",
      "version": "Versión {version}",
      "released": "Publicada el {date}",
      "latest": "Más reciente",
      "upcoming": "Próximamente",
      "files": "Archivos",
      "github": "Todos los archivos en GitHub",
      "meta": "Todas las versiones publicadas de {appName}, con notas de la versión y enlaces de descarga."
    },
    "ipadBeta": {
      "title": "Beta para iPad",
      "intro": "Pruebe las nuevas versiones de {appName} en su iPad antes de que lleguen al App Store.",
      "steps": [
        "Instale la app TestFlight de Apple desde el App Store.",
        "En su iPad, abra la {invitation}.",
        "Acepte la invitación e instale {appName}."
      ],
      "links": {
        "invitation": "invitación a la beta de {appName}"
      },
      "meta": "Cómo instalar la beta de {appName} en su iPad con TestFlight."
    },
    "androidBeta": {
      "title": "Beta para tabletas Android",
      "intro": "Pruebe las nuevas versiones de {appName} en su tableta Android antes de su lanzamiento.",
      "note": "Inicie sesión con la cuenta de Google que usa en su tableta.",
      "steps": [
        "Únase al {group}.",
        "Abra la {test} y acepte la invitación.",
        "Instale {appName} desde Google Play en su tableta."
      ],
      "links": {
        "group": "grupo de la beta de {appName}",
        "test": "página de la beta en Google Play"
      },
      "meta": "Cómo instalar la beta de {appName} en su tableta Android desde Google Play."
    },
    "documentation": {
      "title": "Documentación",
      "meta": "Documentación de {appName}: espacios de trabajo, pinceles, color, capas, filtros, selecciones, edición de fotos y tutoriales de ilustración y fotografía."
    },
    "privacy": {
      "title": "Política de privacidad",
      "effectiveDate": "Fecha de vigencia",
      "meta": "Cómo maneja {appName} los datos de las aplicaciones, el alojamiento, los diagnósticos y las solicitudes de soporte."
    },
    "notFound": {
      "title": "Página no encontrada",
      "text": "La página solicitada no existe.",
      "action": "Inicio"
    }
  },
  "pt-BR": {
    "footer": {
      "madeBy": "Feito por Capy Atelier"
    },
    "lang": "pt-BR",
    "locale": "pt_BR",
    "name": "Português (Brasil)",
    "nav": {
      "privacy": "Privacidade",
      "webDemo": "Demonstração na Web",
      "download": "Baixar",
      "documentation": "Documentação",
      "home": "Página inicial",
      "language": "Idioma",
      "main": "Navegação principal",
      "skip": "Pular para o conteúdo",
      "github": "{appName} no GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} é um aplicativo multiplataforma para esboços, ilustração e fotografia, com um poderoso motor de pintura acelerado por GPU.",
      "workspaces": "Espaço de trabalho",
      "slides": {
        "sketch": "Um desenho a tinta de um trem sob uma grande árvore na área de trabalho Sketch, onde o desenho preenche a tela e algumas ferramentas ficam nas bordas.",
        "paint": "Pintura a óleo de uma casa à beira-mar ao pôr do sol na área de trabalho Paint, com pincéis, cores e camadas ao lado da tela.",
        "photo": "Uma fotografia de um pequeno terrário na área de trabalho Photo, com o tema salvo como camada de seleção acima da foto."
      },
      "meta": "{appName} é um aplicativo multiplataforma para esboços, ilustração e fotografia, com um poderoso motor de pintura acelerado por GPU."
    },
    "download": {
      "title": "Baixar",
      "intro": "O {appName} está em fase beta. Pode haver alguns problemas. {feedback}.",
      "feedback": "Envie sua opinião pelo GitHub",
      "status": "Em breve",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Outras plataformas",
      "joinBeta": "Participar do beta",
      "downloadFor": "Baixar {version} · {platform}",
      "openWebApp": "Abrir o aplicativo da web",
      "meta": "Instale {appName} como um aplicativo da web para uso offline. Os downloads nativos estarão disponíveis em breve.",
      "pwa": pwaContent["pt-BR"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Copiar",
      "copied": "Copiado",
      "pastVersions": "Versões anteriores",
      "allReleases": "Versões no GitHub",
      "notesLanguage": "As notas da versão estão em inglês.",
      "metaReleased": "Baixe o {appName} ou instale-o como aplicativo da web para uso offline."
    },
    "versions": {
      "title": "Versões anteriores",
      "intro": "Se uma atualização der problema, você pode voltar para uma versão anterior.",
      "empty": "Nenhuma versão foi lançada ainda.",
      "version": "Versão {version}",
      "released": "Lançada em {date}",
      "latest": "Mais recente",
      "upcoming": "Em breve",
      "files": "Arquivos",
      "github": "Todos os arquivos no GitHub",
      "meta": "Todas as versões lançadas do {appName}, com notas da versão e links para download."
    },
    "ipadBeta": {
      "title": "Beta para iPad",
      "intro": "Experimente as novas versões do {appName} no iPad antes de chegarem à App Store.",
      "steps": [
        "Instale o app TestFlight, da Apple, pela App Store.",
        "No iPad, abra o {invitation}.",
        "Aceite o convite e instale o {appName}."
      ],
      "links": {
        "invitation": "convite para o beta do {appName}"
      },
      "meta": "Como instalar a versão beta do {appName} no iPad com o TestFlight."
    },
    "androidBeta": {
      "title": "Beta para tablets Android",
      "intro": "Experimente as novas versões do {appName} no tablet Android antes do lançamento.",
      "note": "Entre com a conta do Google que você usa no tablet.",
      "steps": [
        "Participe do {group}.",
        "Abra a {test} e aceite o convite.",
        "Instale o {appName} pelo Google Play no tablet."
      ],
      "links": {
        "group": "grupo do beta do {appName}",
        "test": "página do beta no Google Play"
      },
      "meta": "Como instalar a versão beta do {appName} no tablet Android pelo Google Play."
    },
    "documentation": {
      "title": "Documentação",
      "meta": "Documentação do {appName}: áreas de trabalho, pincéis, cores, camadas, filtros, seleções, edição de fotos e tutoriais de ilustração e fotografia."
    },
    "privacy": {
      "title": "Política de Privacidade",
      "effectiveDate": "Data efetiva",
      "meta": "Como {appName} lida com dados de aplicativos, hospedagem, diagnósticos e solicitações de suporte."
    },
    "notFound": {
      "title": "Página não encontrada",
      "text": "A página solicitada não existe.",
      "action": "Página inicial"
    }
  },
  "id": {
    "footer": {
      "madeBy": "Dibuat oleh Capy Atelier"
    },
    "lang": "id",
    "locale": "id_ID",
    "name": "Bahasa Indonesia",
    "nav": {
      "privacy": "Privasi",
      "webDemo": "Demo Web",
      "download": "Unduh",
      "documentation": "Dokumentasi",
      "home": "Beranda",
      "language": "Bahasa",
      "main": "Navigasi utama",
      "skip": "Lewati ke konten",
      "github": "{appName} di GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} adalah aplikasi lintas platform untuk sketsa, ilustrasi, dan fotografi, dengan mesin lukis canggih yang dipercepat GPU.",
      "workspaces": "Ruang kerja",
      "slides": {
        "sketch": "Gambar tinta kereta api di bawah pohon besar di ruang kerja Sketch, tempat gambar memenuhi layar dan beberapa alat berada di tepinya.",
        "paint": "Lukisan cat minyak sebuah rumah di tepi laut saat matahari terbenam di ruang kerja Paint, dengan kuas, warna, dan lapisan di samping kanvas.",
        "photo": "Foto terarium kecil di ruang kerja Photo, dengan subjek tersimpan sebagai lapisan seleksi di atas foto."
      },
      "meta": "{appName} adalah aplikasi lintas platform untuk sketsa, ilustrasi, dan fotografi, dengan mesin lukis canggih yang dipercepat GPU."
    },
    "download": {
      "title": "Unduh",
      "intro": "{appName} masih dalam tahap beta. Mungkin masih ada sedikit kendala. {feedback}.",
      "feedback": "Sampaikan masukan Anda di GitHub",
      "status": "Segera hadir",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Platform lainnya",
      "joinBeta": "Ikuti beta",
      "downloadFor": "Unduh {version} · {platform}",
      "openWebApp": "Buka aplikasi web",
      "meta": "Instal {appName} sebagai aplikasi web untuk penggunaan offline. Unduhan asli akan segera hadir.",
      "pwa": pwaContent["id"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Salin",
      "copied": "Disalin",
      "pastVersions": "Versi sebelumnya",
      "allReleases": "Rilis di GitHub",
      "notesLanguage": "Catatan rilis tersedia dalam bahasa Inggris.",
      "metaReleased": "Unduh {appName}, atau instal sebagai aplikasi web untuk penggunaan offline."
    },
    "versions": {
      "title": "Versi sebelumnya",
      "intro": "Jika pembaruan menimbulkan masalah, Anda dapat kembali ke versi sebelumnya.",
      "empty": "Belum ada versi yang dirilis.",
      "version": "Versi {version}",
      "released": "Dirilis {date}",
      "latest": "Terbaru",
      "upcoming": "Mendatang",
      "files": "Berkas",
      "github": "Semua berkas di GitHub",
      "meta": "Semua versi {appName} yang telah dirilis, beserta catatan rilis dan tautan unduhan."
    },
    "ipadBeta": {
      "title": "Beta iPad",
      "intro": "Coba versi baru {appName} di iPad sebelum tersedia di App Store.",
      "steps": [
        "Instal aplikasi TestFlight dari Apple melalui App Store.",
        "Di iPad, buka {invitation}.",
        "Terima undangan, lalu instal {appName}."
      ],
      "links": {
        "invitation": "undangan beta {appName}"
      },
      "meta": "Cara menginstal versi beta {appName} di iPad dengan TestFlight."
    },
    "androidBeta": {
      "title": "Beta tablet Android",
      "intro": "Coba versi baru {appName} di tablet Android sebelum dirilis.",
      "note": "Masuk dengan akun Google yang Anda gunakan di tablet.",
      "steps": [
        "Bergabunglah dengan {group}.",
        "Buka {test} dan terima undangannya.",
        "Instal {appName} dari Google Play di tablet Anda."
      ],
      "links": {
        "group": "grup beta {appName}",
        "test": "halaman beta di Google Play"
      },
      "meta": "Cara menginstal versi beta {appName} di tablet Android dari Google Play."
    },
    "documentation": {
      "title": "Dokumentasi",
      "meta": "Dokumentasi {appName}: ruang kerja, kuas, warna, lapisan, filter, seleksi, pengeditan foto, serta tutorial ilustrasi dan foto."
    },
    "privacy": {
      "title": "Kebijakan Privasi",
      "effectiveDate": "Tanggal efektif",
      "meta": "Bagaimana {appName} menangani data aplikasi, hosting, diagnostik, dan permintaan dukungan."
    },
    "notFound": {
      "title": "Halaman tidak ditemukan",
      "text": "Halaman yang diminta tidak ada.",
      "action": "Beranda"
    }
  },
  "fr": {
    "footer": {
      "madeBy": "Fabriqué par Capy Atelier"
    },
    "lang": "fr",
    "locale": "fr_FR",
    "name": "Français",
    "nav": {
      "privacy": "Confidentialité",
      "webDemo": "Démo Web",
      "download": "Télécharger",
      "documentation": "Documentation",
      "home": "Accueil",
      "language": "Langue",
      "main": "Navigation principale",
      "skip": "Passer au contenu",
      "github": "{appName} sur GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} est une application multiplateforme pour le dessin, l'illustration et la photographie, dotée d'un puissant moteur de peinture accéléré par GPU.",
      "workspaces": "Espace de travail",
      "slides": {
        "sketch": "Un dessin à l'encre d'un train sous un grand arbre dans l'espace de travail Sketch, où le dessin remplit l'écran et quelques outils se trouvent sur les bords.",
        "paint": "Une peinture à l'huile d'une maison au bord de la mer au coucher du soleil dans l'espace de travail Paint, avec des pinceaux, des couleurs et des calques à côté de la toile.",
        "photo": "Une photographie d'un petit terrarium dans l'espace de travail Photo, avec le sujet enregistré comme calque de sélection au-dessus de la photo."
      },
      "meta": "{appName} est une application multiplateforme pour le dessin, l'illustration et la photographie, dotée d'un puissant moteur de peinture accéléré par GPU."
    },
    "download": {
      "title": "Télécharger",
      "intro": "{appName} est en version bêta. Quelques imperfections sont possibles. {feedback}.",
      "feedback": "Faites-nous part de vos remarques sur GitHub",
      "status": "Bientôt disponible",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Autres plateformes",
      "joinBeta": "Rejoindre la bêta",
      "downloadFor": "Télécharger {version} · {platform}",
      "openWebApp": "Ouvrir l'application Web",
      "meta": "Installez {appName} en tant qu'application Web pour une utilisation hors ligne. Les téléchargements natifs arrivent bientôt.",
      "pwa": pwaContent["fr"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Copier",
      "copied": "Copié",
      "pastVersions": "Versions précédentes",
      "allReleases": "Versions sur GitHub",
      "notesLanguage": "Les notes de version sont en anglais.",
      "metaReleased": "Téléchargez {appName} ou installez-le en tant qu'application Web pour une utilisation hors ligne."
    },
    "versions": {
      "title": "Versions précédentes",
      "intro": "Si une mise à jour vous pose problème, vous pouvez revenir à une version précédente.",
      "empty": "Aucune version n'a encore été publiée.",
      "version": "Version {version}",
      "released": "Publiée le {date}",
      "latest": "Dernière version",
      "upcoming": "À venir",
      "files": "Fichiers",
      "github": "Tous les fichiers sur GitHub",
      "meta": "Toutes les versions publiées de {appName}, avec leurs notes de version et leurs liens de téléchargement."
    },
    "ipadBeta": {
      "title": "Bêta pour iPad",
      "intro": "Essayez les nouvelles versions de {appName} sur votre iPad avant leur arrivée sur l'App Store.",
      "steps": [
        "Installez l'app TestFlight d'Apple depuis l'App Store.",
        "Sur votre iPad, ouvrez l'{invitation}.",
        "Acceptez l'invitation, puis installez {appName}."
      ],
      "links": {
        "invitation": "invitation à la bêta de {appName}"
      },
      "meta": "Comment installer la bêta de {appName} sur votre iPad avec TestFlight."
    },
    "androidBeta": {
      "title": "Bêta pour tablettes Android",
      "intro": "Essayez les nouvelles versions de {appName} sur votre tablette Android avant leur sortie.",
      "note": "Connectez-vous avec le compte Google que vous utilisez sur votre tablette.",
      "steps": [
        "Rejoignez le {group}.",
        "Ouvrez la {test} et acceptez l'invitation.",
        "Installez {appName} depuis Google Play sur votre tablette."
      ],
      "links": {
        "group": "groupe de la bêta {appName}",
        "test": "page de la bêta sur Google Play"
      },
      "meta": "Comment installer la bêta de {appName} sur votre tablette Android depuis Google Play."
    },
    "documentation": {
      "title": "Documentation",
      "meta": "Documentation {appName} : espaces de travail, pinceaux, couleurs, calques, filtres, sélections, retouche photo, et tutoriels d'illustration et de photo."
    },
    "privacy": {
      "title": "Politique de confidentialité",
      "effectiveDate": "Date d'entrée en vigueur",
      "meta": "Comment {appName} gère les données d'application, l'hébergement, les diagnostics et les demandes d'assistance."
    },
    "notFound": {
      "title": "Page introuvable",
      "text": "La page demandée n'existe pas.",
      "action": "Accueil"
    }
  },
  "de": {
    "footer": {
      "madeBy": "Hergestellt von Capy Atelier"
    },
    "lang": "de",
    "locale": "de_DE",
    "name": "Deutsch",
    "nav": {
      "privacy": "Privatsphäre",
      "webDemo": "Web-Demo",
      "download": "Herunterladen",
      "documentation": "Dokumentation",
      "home": "Startseite",
      "language": "Sprache",
      "main": "Hauptnavigation",
      "skip": "Zum Inhalt springen",
      "github": "{appName} auf GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} ist eine plattformübergreifende App für Skizzen, Illustration und Fotografie mit einer leistungsstarken GPU-beschleunigten Mal-Engine.",
      "workspaces": "Arbeitsbereich",
      "slides": {
        "sketch": "Eine Tuschezeichnung eines Zuges unter einem großen Baum im Sketch-Arbeitsbereich, wobei die Zeichnung den Bildschirm ausfüllt und an den Rändern einige Werkzeuge sitzen.",
        "paint": "Ein Ölgemälde eines Hauses am Meer bei Sonnenuntergang im Paint-Arbeitsbereich, mit Pinseln, Farben und Ebenen neben der Leinwand.",
        "photo": "Ein Foto eines kleinen Terrariums im Photo-Arbeitsbereich, mit dem Motiv als Auswahlebene über dem Foto gespeichert."
      },
      "meta": "{appName} ist eine plattformübergreifende App für Skizzen, Illustration und Fotografie mit einer leistungsstarken GPU-beschleunigten Mal-Engine."
    },
    "download": {
      "title": "Herunterladen",
      "intro": "{appName} befindet sich in der Betaphase. Es kann noch kleine Fehler geben. {feedback}.",
      "feedback": "Teilen Sie uns Ihr Feedback auf GitHub mit",
      "status": "Kommt bald",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Weitere Plattformen",
      "joinBeta": "Beta beitreten",
      "downloadFor": "{version} herunterladen · {platform}",
      "openWebApp": "Web-App öffnen",
      "meta": "Installieren Sie {appName} als Web-App für die Offline-Nutzung. Native Downloads folgen bald.",
      "pwa": pwaContent["de"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Kopieren",
      "copied": "Kopiert",
      "pastVersions": "Frühere Versionen",
      "allReleases": "Versionen auf GitHub",
      "notesLanguage": "Die Versionshinweise sind auf Englisch.",
      "metaReleased": "Laden Sie {appName} herunter oder installieren Sie es als Web-App für die Offline-Nutzung."
    },
    "versions": {
      "title": "Frühere Versionen",
      "intro": "Wenn ein Update Probleme macht, können Sie zu einer früheren Version zurückkehren.",
      "empty": "Bisher wurde noch keine Version veröffentlicht.",
      "version": "Version {version}",
      "released": "Veröffentlicht am {date}",
      "latest": "Neueste",
      "upcoming": "Demnächst",
      "files": "Dateien",
      "github": "Alle Dateien auf GitHub",
      "meta": "Alle veröffentlichten Versionen von {appName} mit Versionshinweisen und Download-Links."
    },
    "ipadBeta": {
      "title": "Beta für iPad",
      "intro": "Testen Sie neue Versionen von {appName} auf Ihrem iPad, bevor sie im App Store erscheinen.",
      "steps": [
        "Installieren Sie die App TestFlight von Apple aus dem App Store.",
        "Öffnen Sie auf Ihrem iPad die {invitation}.",
        "Nehmen Sie die Einladung an und installieren Sie {appName}."
      ],
      "links": {
        "invitation": "Einladung zur Beta von {appName}"
      },
      "meta": "So installieren Sie die Beta von {appName} mit TestFlight auf Ihrem iPad."
    },
    "androidBeta": {
      "title": "Beta für Android-Tablets",
      "intro": "Testen Sie neue Versionen von {appName} auf Ihrem Android-Tablet vor der Veröffentlichung.",
      "note": "Melden Sie sich mit dem Google-Konto an, das Sie auf Ihrem Tablet verwenden.",
      "steps": [
        "Treten Sie der {group} bei.",
        "Öffnen Sie die {test} und nehmen Sie die Einladung an.",
        "Installieren Sie {appName} über Google Play auf Ihrem Tablet."
      ],
      "links": {
        "group": "Gruppe für die Beta von {appName}",
        "test": "Beta-Seite bei Google Play"
      },
      "meta": "So installieren Sie die Beta von {appName} aus Google Play auf Ihrem Android-Tablet."
    },
    "documentation": {
      "title": "Dokumentation",
      "meta": "{appName}-Dokumentation: Arbeitsbereiche, Pinsel, Farben, Ebenen, Filter, Auswahlen, Fotobearbeitung sowie Illustrations- und Foto-Tutorials."
    },
    "privacy": {
      "title": "Datenschutzrichtlinie",
      "effectiveDate": "Datum des Inkrafttretens",
      "meta": "Wie {appName} App-Daten, Hosting, Diagnose und Supportanfragen verarbeitet."
    },
    "notFound": {
      "title": "Seite nicht gefunden",
      "text": "Die angeforderte Seite existiert nicht.",
      "action": "Startseite"
    }
  },
  "ru": {
    "footer": {
      "madeBy": "Сделано Capy Atelier"
    },
    "lang": "ru",
    "locale": "ru_RU",
    "name": "Русский",
    "nav": {
      "privacy": "Конфиденциальность",
      "webDemo": "Веб-демо",
      "download": "Скачать",
      "documentation": "Документация",
      "home": "Главная",
      "language": "Язык",
      "main": "Основная навигация",
      "skip": "Перейти к содержимому",
      "github": "{appName} на GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} — это кроссплатформенное приложение для создания эскизов, иллюстраций и фотографий с мощным механизмом рисования с ускорением GPU.",
      "workspaces": "Рабочая область",
      "slides": {
        "sketch": "Чернильный рисунок поезда под большим деревом в рабочем пространстве Sketch, где рисунок заполняет экран, а по краям расположено несколько инструментов.",
        "paint": "Картина маслом дома у моря на закате в рабочем пространстве Paint, с кистями, цветами и слоями рядом с холстом.",
        "photo": "Фотография небольшого террариума в рабочей области Photo; объект сохранён как слой выделения над фотографией."
      },
      "meta": "{appName} — это кроссплатформенное приложение для создания эскизов, иллюстраций и фотографий с мощным механизмом рисования с ускорением GPU."
    },
    "download": {
      "title": "Скачать",
      "intro": "{appName} сейчас в бета-версии. Возможны небольшие ошибки. {feedback}.",
      "feedback": "Делитесь отзывами на GitHub",
      "status": "Скоро",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Другие платформы",
      "joinBeta": "Стать тестером",
      "downloadFor": "Скачать {version} · {platform}",
      "openWebApp": "Открыть веб-приложение",
      "meta": "Установите {appName} как веб-приложение для автономного использования. Скоро появятся нативные загрузки.",
      "pwa": pwaContent["ru"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Копировать",
      "copied": "Скопировано",
      "pastVersions": "Предыдущие версии",
      "allReleases": "Выпуски на GitHub",
      "notesLanguage": "Примечания к выпуску на английском языке.",
      "metaReleased": "Скачайте {appName} или установите его как веб-приложение для автономного использования."
    },
    "versions": {
      "title": "Предыдущие версии",
      "intro": "Если обновление вызвало проблемы, можно вернуться к одной из прежних версий.",
      "empty": "Пока не выпущено ни одной версии.",
      "version": "Версия {version}",
      "released": "Выпущена {date}",
      "latest": "Последняя",
      "upcoming": "Скоро",
      "files": "Файлы",
      "github": "Все файлы на GitHub",
      "meta": "Все выпущенные версии {appName} с примечаниями к выпуску и ссылками для скачивания."
    },
    "ipadBeta": {
      "title": "Бета-версия для iPad",
      "intro": "Попробуйте новые версии {appName} на iPad до их появления в App Store.",
      "steps": [
        "Установите приложение Apple TestFlight из App Store.",
        "Откройте на iPad {invitation}.",
        "Примите приглашение и установите {appName}."
      ],
      "links": {
        "invitation": "приглашение в бета-тест {appName}"
      },
      "meta": "Как установить бета-версию {appName} на iPad через TestFlight."
    },
    "androidBeta": {
      "title": "Бета-версия для планшетов Android",
      "intro": "Попробуйте новые версии {appName} на планшете Android до их выхода.",
      "note": "Войдите в тот же аккаунт Google, что и на планшете.",
      "steps": [
        "Вступите в {group}.",
        "Откройте {test} и примите приглашение.",
        "Установите {appName} из Google Play на планшете."
      ],
      "links": {
        "group": "группу бета-тестирования {appName}",
        "test": "страницу бета-теста в Google Play"
      },
      "meta": "Как установить бета-версию {appName} на планшет Android из Google Play."
    },
    "documentation": {
      "title": "Документация",
      "meta": "Документация {appName}: рабочие пространства, кисти, цвет, слои, фильтры, выделение, обработка фотографий и уроки по иллюстрации и фотографии."
    },
    "privacy": {
      "title": "Политика конфиденциальности",
      "effectiveDate": "Дата вступления в силу",
      "meta": "Как {appName} обрабатывает данные приложений, хостинг, диагностику и запросы на поддержку."
    },
    "notFound": {
      "title": "Страница не найдена",
      "text": "Запрошенная страница не существует.",
      "action": "Главная"
    }
  },
  "th": {
    "footer": {
      "madeBy": "สร้างโดย Capy Atelier"
    },
    "lang": "th",
    "locale": "th_TH",
    "name": "ไทย",
    "nav": {
      "privacy": "ความเป็นส่วนตัว",
      "webDemo": "การสาธิตเว็บ",
      "download": "ดาวน์โหลด",
      "documentation": "เอกสารประกอบ",
      "home": "หน้าหลัก",
      "language": "ภาษา",
      "main": "การนำทางหลัก",
      "skip": "ข้ามไปที่เนื้อหา",
      "github": "{appName} บน GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} เป็นแอปข้ามแพลตฟอร์มสำหรับการสเก็ตช์ภาพ ภาพประกอบ และการถ่ายภาพ พร้อมด้วยกลไกการลงสีที่เร่งประสิทธิภาพ GPU อันทรงพลัง",
      "workspaces": "พื้นที่ทำงาน",
      "slides": {
        "sketch": "ภาพวาดหมึกของรถไฟใต้ต้นไม้ใหญ่ในพื้นที่ทำงาน Sketch โดยที่ภาพวาดนั้นเต็มหน้าจอและมีเครื่องมือสองสามชิ้นอยู่ที่ขอบ",
        "paint": "ภาพวาดสีน้ำมันของบ้านริมทะเลยามพระอาทิตย์ตกดินในพื้นที่ทำงาน Paint พร้อมด้วยพู่กัน สี และเลเยอร์ข้างผ้าใบ",
        "photo": "รูปถ่ายของตู้กระจกขนาดเล็กในพื้นที่ทำงาน Photo โดยบันทึกวัตถุหลักเป็นเลเยอร์พื้นที่เลือกไว้เหนือภาพถ่าย"
      },
      "meta": "{appName} เป็นแอปข้ามแพลตฟอร์มสำหรับการสเก็ตช์ภาพ ภาพประกอบ และการถ่ายภาพ พร้อมด้วยกลไกการลงสีที่เร่งประสิทธิภาพ GPU อันทรงพลัง"
    },
    "download": {
      "title": "ดาวน์โหลด",
      "intro": "{appName} อยู่ในช่วงเบต้า อาจมีข้อบกพร่องบ้าง {feedback}",
      "feedback": "แสดงความคิดเห็นได้ที่ GitHub",
      "status": "เร็วๆ นี้",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "แพลตฟอร์มอื่นๆ",
      "joinBeta": "เข้าร่วมเบต้า",
      "downloadFor": "ดาวน์โหลด {version} · {platform}",
      "openWebApp": "เปิดเว็บแอป",
      "meta": "ติดตั้ง {appName} เป็นเว็บแอปสำหรับการใช้งานออฟไลน์ การดาวน์โหลดแบบเนทีฟจะมาในเร็วๆ นี้",
      "pwa": pwaContent["th"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "คัดลอก",
      "copied": "คัดลอกแล้ว",
      "pastVersions": "เวอร์ชันก่อนหน้า",
      "allReleases": "รุ่นที่เผยแพร่บน GitHub",
      "notesLanguage": "บันทึกประจำรุ่นเป็นภาษาอังกฤษ",
      "metaReleased": "ดาวน์โหลด {appName} หรือติดตั้งเป็นเว็บแอปสำหรับการใช้งานออฟไลน์"
    },
    "versions": {
      "title": "เวอร์ชันก่อนหน้า",
      "intro": "หากอัปเดตแล้วเกิดปัญหา คุณกลับไปใช้เวอร์ชันก่อนหน้าได้",
      "empty": "ยังไม่มีเวอร์ชันที่เผยแพร่",
      "version": "เวอร์ชัน {version}",
      "released": "เผยแพร่เมื่อ {date}",
      "latest": "ล่าสุด",
      "upcoming": "เร็วๆ นี้",
      "files": "ไฟล์",
      "github": "ไฟล์ทั้งหมดบน GitHub",
      "meta": "{appName} ทุกเวอร์ชันที่เผยแพร่แล้ว พร้อมบันทึกประจำรุ่นและลิงก์ดาวน์โหลด"
    },
    "ipadBeta": {
      "title": "เบต้าสำหรับ iPad",
      "intro": "ลองใช้ {appName} เวอร์ชันใหม่บน iPad ก่อนเผยแพร่บน App Store",
      "steps": [
        "ติดตั้งแอป TestFlight ของ Apple จาก App Store",
        "เปิด{invitation}บน iPad",
        "ยอมรับคำเชิญ แล้วติดตั้ง {appName}"
      ],
      "links": {
        "invitation": "ลิงก์เชิญเข้าร่วมเบต้า {appName}"
      },
      "meta": "วิธีติดตั้ง {appName} เวอร์ชันเบต้าบน iPad ด้วย TestFlight"
    },
    "androidBeta": {
      "title": "เบต้าสำหรับแท็บเล็ต Android",
      "intro": "ลองใช้ {appName} เวอร์ชันใหม่บนแท็บเล็ต Android ก่อนเปิดตัว",
      "note": "ลงชื่อเข้าใช้ด้วยบัญชี Google เดียวกับที่ใช้บนแท็บเล็ต",
      "steps": [
        "เข้าร่วม{group}",
        "เปิด{test} แล้วยอมรับคำเชิญ",
        "ติดตั้ง {appName} จาก Google Play บนแท็บเล็ต"
      ],
      "links": {
        "group": "กลุ่มเบต้า {appName}",
        "test": "หน้าเบต้าบน Google Play"
      },
      "meta": "วิธีติดตั้ง {appName} เวอร์ชันเบต้าบนแท็บเล็ต Android จาก Google Play"
    },
    "documentation": {
      "title": "เอกสารประกอบ",
      "meta": "เอกสาร {appName}: พื้นที่ทำงาน พู่กัน สี เลเยอร์ ฟิลเตอร์ พื้นที่เลือก การแก้ไขภาพถ่าย และบทเรียนการวาดภาพประกอบและภาพถ่าย"
    },
    "privacy": {
      "title": "นโยบายความเป็นส่วนตัว",
      "effectiveDate": "วันที่มีผลบังคับใช้",
      "meta": "{appName} จัดการข้อมูลแอป โฮสติ้ง การวินิจฉัย และคำขอการสนับสนุนอย่างไร"
    },
    "notFound": {
      "title": "ไม่พบหน้า",
      "text": "ไม่มีหน้าที่ร้องขอ",
      "action": "หน้าหลัก"
    }
  },
  "vi": {
    "footer": {
      "madeBy": "Được thực hiện bởi Capy Atelier"
    },
    "lang": "vi",
    "locale": "vi_VN",
    "name": "Tiếng Việt",
    "nav": {
      "privacy": "Quyền riêng tư",
      "webDemo": "Bản demo web",
      "download": "Tải xuống",
      "documentation": "Tài liệu",
      "home": "Trang chủ",
      "language": "Ngôn ngữ",
      "main": "Điều hướng chính",
      "skip": "Chuyển đến nội dung",
      "github": "{appName} trên GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} là một ứng dụng đa nền tảng để phác thảo, minh họa và chụp ảnh, với công cụ vẽ tăng tốc GPU mạnh mẽ.",
      "workspaces": "Không gian làm việc",
      "slides": {
        "sketch": "Bản vẽ bằng mực về một chiếc xe lửa bên dưới một cái cây lớn trong không gian làm việc Sketch, nơi bản vẽ lấp đầy màn hình và một vài công cụ nằm ở các cạnh.",
        "paint": "Bức tranh sơn dầu về một ngôi nhà bên bờ biển lúc hoàng hôn trong không gian làm việc Paint, với bút vẽ, màu sắc và các lớp bên cạnh khung vẽ.",
        "photo": "Ảnh chụp một hồ cạn nhỏ trong không gian làm việc Photo, với chủ thể được lưu thành lớp vùng chọn phía trên ảnh."
      },
      "meta": "{appName} là một ứng dụng đa nền tảng để phác thảo, minh họa và chụp ảnh, với công cụ vẽ tăng tốc GPU mạnh mẽ."
    },
    "download": {
      "title": "Tải xuống",
      "intro": "{appName} đang trong giai đoạn beta. Có thể còn vài lỗi nhỏ. {feedback}.",
      "feedback": "Hãy góp ý cho chúng tôi trên GitHub",
      "status": "Sắp có",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Nền tảng khác",
      "joinBeta": "Tham gia beta",
      "downloadFor": "Tải xuống {version} · {platform}",
      "openWebApp": "Mở ứng dụng web",
      "meta": "Cài đặt {appName} làm ứng dụng web để sử dụng ngoại tuyến. Bản tải xuống gốc sắp ra mắt.",
      "pwa": pwaContent["vi"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Sao chép",
      "copied": "Đã sao chép",
      "pastVersions": "Các phiên bản trước",
      "allReleases": "Các bản phát hành trên GitHub",
      "notesLanguage": "Ghi chú phát hành bằng tiếng Anh.",
      "metaReleased": "Tải {appName} xuống hoặc cài đặt làm ứng dụng web để sử dụng ngoại tuyến."
    },
    "versions": {
      "title": "Các phiên bản trước",
      "intro": "Nếu bản cập nhật gây lỗi, bạn có thể quay lại phiên bản trước.",
      "empty": "Chưa có phiên bản nào được phát hành.",
      "version": "Phiên bản {version}",
      "released": "Phát hành ngày {date}",
      "latest": "Mới nhất",
      "upcoming": "Sắp ra mắt",
      "files": "Tệp",
      "github": "Tất cả tệp trên GitHub",
      "meta": "Mọi phiên bản {appName} đã phát hành, kèm ghi chú phát hành và liên kết tải xuống."
    },
    "ipadBeta": {
      "title": "Bản beta cho iPad",
      "intro": "Dùng thử các phiên bản mới của {appName} trên iPad trước khi có trên App Store.",
      "steps": [
        "Cài đặt ứng dụng TestFlight của Apple từ App Store.",
        "Trên iPad, mở {invitation}.",
        "Chấp nhận lời mời rồi cài đặt {appName}."
      ],
      "links": {
        "invitation": "lời mời tham gia bản beta {appName}"
      },
      "meta": "Cách cài đặt bản beta của {appName} trên iPad bằng TestFlight."
    },
    "androidBeta": {
      "title": "Bản beta cho máy tính bảng Android",
      "intro": "Dùng thử các phiên bản mới của {appName} trên máy tính bảng Android trước khi phát hành.",
      "note": "Đăng nhập bằng tài khoản Google bạn dùng trên máy tính bảng.",
      "steps": [
        "Tham gia {group}.",
        "Mở {test} và chấp nhận lời mời.",
        "Cài đặt {appName} từ Google Play trên máy tính bảng."
      ],
      "links": {
        "group": "nhóm beta {appName}",
        "test": "trang beta trên Google Play"
      },
      "meta": "Cách cài đặt bản beta của {appName} trên máy tính bảng Android từ Google Play."
    },
    "documentation": {
      "title": "Tài liệu",
      "meta": "Tài liệu {appName}: không gian làm việc, cọ, màu, lớp, bộ lọc, vùng chọn, xử lý ảnh, cùng các hướng dẫn về minh họa và ảnh."
    },
    "privacy": {
      "title": "Chính sách bảo mật",
      "effectiveDate": "Ngày có hiệu lực",
      "meta": "Cách {appName} xử lý dữ liệu ứng dụng, lưu trữ, chẩn đoán và yêu cầu hỗ trợ."
    },
    "notFound": {
      "title": "Không tìm thấy trang",
      "text": "Trang được yêu cầu không tồn tại.",
      "action": "Trang chủ"
    }
  },
  "tr": {
    "footer": {
      "madeBy": "Capy Atelier tarafından yapılmıştır"
    },
    "lang": "tr",
    "locale": "tr_TR",
    "name": "Türkçe",
    "nav": {
      "privacy": "Gizlilik",
      "webDemo": "Web Demosu",
      "download": "İndir",
      "documentation": "Dokümantasyon",
      "home": "Ana sayfa",
      "language": "Dil",
      "main": "Ana gezinme",
      "skip": "İçeriğe atla",
      "github": "GitHub üzerinde {appName}"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName}, güçlü bir GPU hızlandırmalı boyama motoruna sahip, eskiz, illüstrasyon ve fotoğrafçılık için çapraz platformlu bir uygulamadır.",
      "workspaces": "Çalışma alanı",
      "slides": {
        "sketch": "Sketch çalışma alanındaki büyük bir ağacın altındaki bir trenin mürekkepli çizimi; burada çizim ekranı dolduruyor ve kenarlarda birkaç araç bulunuyor.",
        "paint": "Paint çalışma alanında, tuvalin yanında fırçalar, renkler ve katmanlar bulunan, gün batımında deniz kenarındaki bir evin yağlıboya tablosu.",
        "photo": "Photo çalışma alanında küçük bir teraryumun fotoğrafı; konu, fotoğrafın üstünde seçim katmanı olarak kaydedilmiş."
      },
      "meta": "{appName}, güçlü bir GPU hızlandırmalı boyama motoruna sahip, eskiz, illüstrasyon ve fotoğrafçılık için çapraz platformlu bir uygulamadır."
    },
    "download": {
      "title": "İndir",
      "intro": "{appName} şu anda beta aşamasında. Küçük sorunlar olabilir. {feedback}.",
      "feedback": "Görüşlerinizi GitHub'da paylaşın",
      "status": "Yakında",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Diğer platformlar",
      "joinBeta": "Betaya katıl",
      "downloadFor": "{version} sürümünü indir · {platform}",
      "openWebApp": "Web uygulamasını aç",
      "meta": "{appName}'yu çevrimdışı kullanım için bir web uygulaması olarak yükleyin. Yerel indirmeler yakında geliyor.",
      "pwa": pwaContent["tr"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Kopyala",
      "copied": "Kopyalandı",
      "pastVersions": "Önceki sürümler",
      "allReleases": "GitHub'daki sürümler",
      "notesLanguage": "Sürüm notları İngilizcedir.",
      "metaReleased": "{appName} uygulamasını indirin veya çevrimdışı kullanım için web uygulaması olarak yükleyin."
    },
    "versions": {
      "title": "Önceki sürümler",
      "intro": "Bir güncelleme sorun çıkarırsa önceki bir sürüme dönebilirsiniz.",
      "empty": "Henüz yayımlanmış bir sürüm yok.",
      "version": "Sürüm {version}",
      "released": "{date} tarihinde yayımlandı",
      "latest": "En yeni",
      "upcoming": "Yakında",
      "files": "Dosyalar",
      "github": "GitHub'daki tüm dosyalar",
      "meta": "{appName} uygulamasının yayımlanan tüm sürümleri, sürüm notları ve indirme bağlantılarıyla."
    },
    "ipadBeta": {
      "title": "iPad beta sürümü",
      "intro": "{appName} uygulamasının yeni sürümlerini App Store'a gelmeden önce iPad'inizde deneyin.",
      "steps": [
        "App Store'dan Apple'ın TestFlight uygulamasını yükleyin.",
        "iPad'inizde {invitation} açın.",
        "Daveti kabul edin ve {appName} uygulamasını yükleyin."
      ],
      "links": {
        "invitation": "{appName} beta davetini"
      },
      "meta": "{appName} beta sürümünü TestFlight ile iPad'inize yükleme."
    },
    "androidBeta": {
      "title": "Android tablet beta sürümü",
      "intro": "{appName} uygulamasının yeni sürümlerini yayımlanmadan önce Android tabletinizde deneyin.",
      "note": "Tabletinizde kullandığınız Google hesabıyla oturum açın.",
      "steps": [
        "{group} katılın.",
        "{test} açın ve daveti kabul edin.",
        "{appName} uygulamasını tabletinizde Google Play'den yükleyin."
      ],
      "links": {
        "group": "{appName} beta grubuna",
        "test": "Google Play beta sayfasını"
      },
      "meta": "{appName} beta sürümünü Google Play'den Android tabletinize yükleme."
    },
    "documentation": {
      "title": "Dokümantasyon",
      "meta": "{appName} belgeleri: çalışma alanları, fırçalar, renk, katmanlar, filtreler, seçimler, fotoğraf düzenleme ile illüstrasyon ve fotoğraf eğitimleri."
    },
    "privacy": {
      "title": "Gizlilik Politikası",
      "effectiveDate": "Geçerlilik tarihi",
      "meta": "{appName}'nun uygulama verilerini, barındırmayı, tanılamayı ve destek isteklerini nasıl ele aldığı."
    },
    "notFound": {
      "title": "Sayfa bulunamadı",
      "text": "İstenilen sayfa mevcut değil.",
      "action": "Ana sayfa"
    }
  },
  "it": {
    "footer": {
      "madeBy": "Prodotto da Capy Atelier"
    },
    "lang": "it",
    "locale": "it_IT",
    "name": "Italiano",
    "nav": {
      "privacy": "Privacy",
      "webDemo": "Demo Web",
      "download": "Scarica",
      "documentation": "Documentazione",
      "home": "Pagina iniziale",
      "language": "Lingua",
      "main": "Navigazione principale",
      "skip": "Vai al contenuto",
      "github": "{appName} su GitHub"
    },
    "home": {
      "title": "{appName}",
      "description": "{appName} è un'app multipiattaforma per schizzi, illustrazioni e fotografie, con un potente motore di pittura accelerato GPU.",
      "workspaces": "Spazio di lavoro",
      "slides": {
        "sketch": "Un disegno a inchiostro di un treno sotto un grande albero nell'area di lavoro Sketch, dove il disegno riempie lo schermo e alcuni strumenti si trovano ai bordi.",
        "paint": "Un dipinto a olio di una casa al mare al tramonto nello spazio di lavoro Paint, con pennelli, colori e strati accanto alla tela.",
        "photo": "Una fotografia di un piccolo terrario nell'area di lavoro Photo, con il soggetto salvato come livello di selezione sopra la foto."
      },
      "meta": "{appName} è un'app multipiattaforma per schizzi, illustrazioni e fotografie, con un potente motore di pittura accelerato GPU."
    },
    "download": {
      "title": "Scarica",
      "intro": "{appName} è in fase beta. Potrebbe esserci qualche imperfezione. {feedback}.",
      "feedback": "Condividi la tua opinione su GitHub",
      "status": "Prossimamente",
      "platforms": [
        "iPadOS",
        "Android",
        "Linux",
        "Windows",
        "macOS"
      ],
      "otherPlatforms": "Altre piattaforme",
      "joinBeta": "Partecipa alla beta",
      "downloadFor": "Scarica {version} · {platform}",
      "openWebApp": "Apri l'app Web",
      "meta": "Installa {appName} come app Web per l'utilizzo offline. I download nativi arriveranno presto.",
      "pwa": pwaContent["it"],
      "variants": {
        "apk": "APK",
        "flatpak": "Flatpak",
        "x64": "x64",
        "arm64": "ARM64",
        "appleSilicon": "Apple silicon"
      },
      "copy": "Copia",
      "copied": "Copiato",
      "pastVersions": "Versioni precedenti",
      "allReleases": "Versioni su GitHub",
      "notesLanguage": "Le note di rilascio sono in inglese.",
      "metaReleased": "Scarica {appName} o installalo come app Web per l'utilizzo offline."
    },
    "versions": {
      "title": "Versioni precedenti",
      "intro": "Se un aggiornamento ti dà problemi, puoi tornare a una versione precedente.",
      "empty": "Non è ancora stata pubblicata nessuna versione.",
      "version": "Versione {version}",
      "released": "Pubblicata il {date}",
      "latest": "Più recente",
      "upcoming": "In arrivo",
      "files": "File",
      "github": "Tutti i file su GitHub",
      "meta": "Tutte le versioni pubblicate di {appName}, con note di rilascio e link per il download."
    },
    "ipadBeta": {
      "title": "Beta per iPad",
      "intro": "Prova le nuove versioni di {appName} su iPad prima che arrivino sull'App Store.",
      "steps": [
        "Installa l'app TestFlight di Apple dall'App Store.",
        "Sul tuo iPad, apri l'{invitation}.",
        "Accetta l'invito e installa {appName}."
      ],
      "links": {
        "invitation": "invito alla beta di {appName}"
      },
      "meta": "Come installare la beta di {appName} su iPad con TestFlight."
    },
    "androidBeta": {
      "title": "Beta per tablet Android",
      "intro": "Prova le nuove versioni di {appName} sul tuo tablet Android prima dell'uscita.",
      "note": "Accedi con l'account Google che usi sul tablet.",
      "steps": [
        "Unisciti al {group}.",
        "Apri la {test} e accetta l'invito.",
        "Installa {appName} da Google Play sul tablet."
      ],
      "links": {
        "group": "gruppo della beta di {appName}",
        "test": "pagina della beta su Google Play"
      },
      "meta": "Come installare la beta di {appName} sul tuo tablet Android da Google Play."
    },
    "documentation": {
      "title": "Documentazione",
      "meta": "Documentazione {appName}: aree di lavoro, pennelli, colore, livelli, filtri, selezioni, fotoritocco e tutorial su illustrazione e foto."
    },
    "privacy": {
      "title": "Informativa sulla privacy",
      "effectiveDate": "Data di entrata in vigore",
      "meta": "In che modo {appName} gestisce i dati delle app, l'hosting, la diagnostica e le richieste di supporto."
    },
    "notFound": {
      "title": "Pagina non trovata",
      "text": "La pagina richiesta non esiste.",
      "action": "Pagina iniziale"
    }
  }
};
