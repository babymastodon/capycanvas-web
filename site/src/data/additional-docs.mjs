// Static translations; no translation service is used at build time or in the browser.
export const additionalDocsUI = {
  "es": {
    "intro": "{appName} es una aplicación gratuita de código abierto para dibujar, pintar y editar fotografías. Está inspirado en el zen de los capibaras.",
    "overview": "Descripción general",
    "contents": "Contenido de la documentación",
    "onPage": "En esta página",
    "groups": {
      "start": "Primeros pasos",
      "files": "Archivos",
      "drawing": "Herramientas de dibujo",
      "brushes": "Ajustes de pincel",
      "color": "Color",
      "layers": "Capas",
      "filters": "Filtros",
      "selections": "Selecciones",
      "transform": "Transformación e imagen",
      "retouch": "Retoque",
      "colorManagement": "Gestión del color",
      "customize": "Personalización",
      "input": "Entrada",
      "illustration": "Tutorial de ilustración",
      "photo": "Tutorial de edición de fotos"
    },
    "startTitle": "Primeros pasos",
    "figureSoon": "Imagen pendiente",
    "related": "Véase también",
    "previous": "Anterior",
    "next": "Siguiente",
    "platform": "Plataforma",
    "allPlatforms": "Todas las plataformas",
    "platformTitle": "Consejos para tu dispositivo",
    "platformIntro": "Elija su dispositivo para ver algunos consejos al respecto.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} usa Windows Ink para el lápiz. En Windows, Botones del lápiz muestra un solo botón lateral: Botón lateral inferior.",
      "mac": "Si el lápiz marca en el lugar equivocado, comprueba en los ajustes de tu tableta a qué pantalla está asignada. Usa Command donde estas guías digan Ctrl, y Option donde digan Alt.",
      "linux": "La aplicación para Linux necesita una sesión de Wayland y una tarjeta gráfica compatible con Vulkan. Si la presión no funciona o el cursor aparece en el lugar equivocado, revisa los ajustes de tableta de tu escritorio.",
      "ipad": "La mayoría de los modelos de Apple Pencil admiten presión e inclinación, pero el Apple Pencil (USB-C) no admite presión. Los dedos y la palma de la mano nunca dibujan.",
      "android": "Usa un lápiz que admita presión. Un lápiz óptico con punta de goma cuenta como un dedo, y los dedos nunca dibujan."
    },
    "imageOpen": "Abrir captura de pantalla en tamaño completo",
    "sketchDemo": "Demostración de cómo colocar herramientas flotantes, centrarse en el lienzo, elegir un pincel verde y ajustar su suavidad.",
    "paintDemo": "Demostración de cómo mezclar el cielo con Mezclador pictórico y Mezclador de cristal, y de cómo buscar y añadir Posterizar, Trama cruzada y Vidrio en el panel Filtros.",
    "photoDemo": "Demostración de cómo borrar un logotipo con el Tampón de clonar, recortar el terrario sobre un degradado verde salvia, añadir Grano de película, Viñeta, Virado dividido y Claridad, y suavizar una sombra con Desenfoque gaussiano enmascarado.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Mi primera incursión en el mundo del arte digital, como la de muchas otras personas, fue con Procreate hace más de una década. Cuando apareció el primer Apple Pencil, parecía magia. Aunque el hardware era lento para los estándares actuales, estaba tan bien hecho que daba una auténtica sensación de dibujar con un lápiz sobre papel.\n\nEra la primera vez que una aplicación de dibujo estaba totalmente optimizada para un dispositivo móvil, con seguimiento predictivo del lápiz y motores de pinceles y renderizado impulsados por la GPU. Después añadieron una interfaz limpia y minimalista, que acabó convirtiéndose en el estándar de la industria para las aplicaciones de dibujo modernas.\n\nEl espacio de trabajo Sketch es un homenaje a nuestras raíces. El lugar donde todos empezamos.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Un dibujo a tinta de un tren debajo de un gran árbol en el espacio de trabajo Sketch, donde el dibujo llena la pantalla y algunas herramientas se ubican en los bordes."
          },
          "links": [
            {
              "title": "Herramientas de pincel",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Lápiz",
              "slug": "input/pen"
            },
            {
              "title": "Modo Zen",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Cuando empiezas a trabajar en serio en cómics o manga, las herramientas sencillas ya no bastan. El relleno con lazo se convierte en tu mejor amigo y aprendes a convivir con el mal necesario de las máscaras.\n\nHay muchas herramientas para los procesos de ilustración profesional; CSP y MediBang suelen ser las primeras que se aprenden. Y son programas estupendos, fáciles de usar e intuitivos. Basta con seguir el proceso y normalmente el resultado sale bien.\n\nAunque son auténticos caballos de batalla, son lentos, hechos para una época en la que todo el renderizado y la composición se hacían en la CPU en lugar de la GPU. Por eso nunca pudieron igualar los potentes y realistas motores de pinceles de aplicaciones modernas como Fresco y Rebelle.\n\nEl espacio de trabajo Paint lleva la simulación de materiales físicos a la ilustración digital.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Una pintura al óleo de una casa junto al mar al atardecer en el espacio de trabajo Paint, con pinceles, colores y capas al lado del lienzo."
          },
          "links": [
            {
              "title": "Tutorial de ilustración",
              "slug": "illustration"
            },
            {
              "title": "Herramientas de relleno",
              "slug": "drawing/fill"
            },
            {
              "title": "Máscaras",
              "slug": "layers/masks"
            },
            {
              "title": "Mezcla, difusión y cerdas",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Los dispositivos móviles son cada día más capaces. Parece que las pantallas OLED están por todas partes y mi viejo teléfono guarda sus imágenes en formato P3 HDR de forma predeterminada. SRGB es cosa del pasado.\n\nHasta la fecha, la única aplicación de pintura que admite correctamente HDR de amplia gama de colores es Krita. El HDR es complicado y cuesta hacerlo bien. Cuando publicas imágenes HDR y de amplia gama en internet, necesitas controlar el mapeo de ganancia para que también se vean bien en dispositivos SDR. Por supuesto, ningún editor de fotos está completo sin todas las funciones básicas: pruebas de color, cadenas de efectos y todo lo demás.\n\nEl espacio de trabajo Photo permite crear imágenes impresionantes para una nueva generación de pantallas de amplia gama de colores.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Una fotografía de un pequeño terrario en el espacio de trabajo Photo, con el motivo guardado como capa de selección sobre la foto."
          },
          "links": [
            {
              "title": "Tutorial de edición de fotos",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Cómo se aplican los filtros",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Prueba de color",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "pt-BR": {
    "intro": "{appName} é um aplicativo gratuito e de código aberto para desenho, pintura e edição de fotos. É inspirado no zen das capivaras.",
    "overview": "Visão geral",
    "contents": "Conteúdo da documentação",
    "onPage": "Nesta página",
    "groups": {
      "start": "Primeiros passos",
      "files": "Arquivos",
      "drawing": "Ferramentas de desenho",
      "brushes": "Configurações do pincel",
      "color": "Cor",
      "layers": "Camadas",
      "filters": "Filtros",
      "selections": "Seleções",
      "transform": "Transformação e imagem",
      "retouch": "Retoque",
      "colorManagement": "Gerenciamento de cores",
      "customize": "Personalização",
      "input": "Entrada",
      "illustration": "Tutorial de ilustração",
      "photo": "Tutorial de edição de fotos"
    },
    "startTitle": "Primeiros passos",
    "figureSoon": "Imagem pendente",
    "related": "Veja também",
    "previous": "Anterior",
    "next": "Próximo",
    "platform": "Plataforma",
    "allPlatforms": "Todas as plataformas",
    "platformTitle": "Dicas para o seu dispositivo",
    "platformIntro": "Escolha seu dispositivo para ver algumas dicas sobre ele.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "O {appName} usa o Windows Ink para a caneta. No Windows, Botões da caneta mostra apenas um botão lateral: Botão lateral inferior.",
      "mac": "Se a caneta tocar no lugar errado, verifique nas configurações do tablet para qual tela ele está mapeado. Use Command onde estes guias indicarem Ctrl, e Option onde indicarem Alt.",
      "linux": "O aplicativo para Linux precisa de uma sessão Wayland e de uma placa de vídeo compatível com Vulkan. Se a pressão não funcionar ou o cursor parar no lugar errado, verifique as configurações de tablet do seu desktop.",
      "ipad": "A maioria dos modelos de Apple Pencil suporta pressão e inclinação, mas o Apple Pencil (USB-C) não suporta pressão. Dedos e palmas nunca desenham.",
      "android": "Use uma caneta que suporte pressão. Uma caneta com ponta de borracha conta como um dedo, e dedos nunca desenham."
    },
    "imageOpen": "Abra a captura de tela em tamanho real",
    "sketchDemo": "Demonstração de como posicionar ferramentas flutuantes, focar na tela, escolher um pincel verde e ajustar sua suavidade.",
    "paintDemo": "Demonstração de como misturar o céu com Misturador pictórico e Misturador cristalino e de como encontrar e adicionar Posterizar, Hachura cruzada e Vidro no painel Filtros.",
    "photoDemo": "Demonstração de como apagar um logotipo com o Carimbo de clonagem, recortar o terrário sobre um degradê verde-sálvia, adicionar Grão de filme, Vinheta, Tonalização dividida e Claridade e suavizar uma sombra com Desfoque gaussiano mascarado.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Minha primeira incursão no mundo da arte digital, como a de muita gente, foi com o Procreate há mais de uma década. Quando o primeiro Apple Pencil chegou, parecia mágica. Embora o hardware fosse lento pelos padrões de hoje, era tão bem feito que dava uma sensação real de desenhar com uma caneta sobre o papel.\n\nFoi a primeira vez que um aplicativo de desenho foi totalmente otimizado para um dispositivo móvel, com rastreamento preditivo da caneta e motores de pincéis e renderização movidos pela GPU. Depois colocaram uma interface limpa e minimalista por cima, que acabou se tornando o padrão da indústria para os aplicativos de desenho modernos.\n\nO espaço de trabalho Sketch é uma homenagem às nossas raízes. O lugar onde todo mundo começa.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Um desenho a tinta de um trem sob uma grande árvore na área de trabalho Sketch, onde o desenho preenche a tela e algumas ferramentas ficam nas bordas."
          },
          "links": [
            {
              "title": "Ferramentas de pincel",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Caneta",
              "slug": "input/pen"
            },
            {
              "title": "Modo Zen",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Quando você começa a trabalhar a sério com quadrinhos ou mangá, as ferramentas simples já não dão conta. O preenchimento com laço vira seu melhor amigo, e você aprende a conviver com o mal necessário das máscaras.\n\nExistem muitas ferramentas para fluxos de ilustração profissional; CSP e MediBang costumam ser as primeiras que as pessoas aprendem. E são ótimos programas, fáceis de usar e intuitivos. Basta seguir o processo, e o resultado geralmente fica bom.\n\nEmbora sejam verdadeiros cavalos de batalha, são lentos, feitos para uma época em que toda a renderização e composição aconteciam na CPU em vez da GPU. Por isso nunca conseguiram se igualar aos motores de pincéis potentes e realistas de aplicativos modernos como Fresco e Rebelle.\n\nO espaço de trabalho Paint traz a simulação de materiais físicos para a ilustração digital.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Pintura a óleo de uma casa à beira-mar ao pôr do sol na área de trabalho Paint, com pincéis, cores e camadas ao lado da tela."
          },
          "links": [
            {
              "title": "Tutorial de ilustração",
              "slug": "illustration"
            },
            {
              "title": "Ferramentas de preenchimento",
              "slug": "drawing/fill"
            },
            {
              "title": "Máscaras",
              "slug": "layers/masks"
            },
            {
              "title": "Mistura, espalhamento e cerdas",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Os dispositivos móveis ficam mais capazes a cada dia. Parece que telas OLED estão por toda parte, e meu celular antigo salva suas imagens em P3 HDR por padrão. SRGB é coisa do passado.\n\nAté hoje, o único aplicativo de pintura que suporta corretamente HDR com ampla gama de cores é o Krita. HDR é complicado e difícil de fazer direito. Quando você publica imagens HDR e de ampla gama na internet, precisa controlar o mapeamento de ganho para que elas também fiquem boas em dispositivos SDR. Claro que nenhum editor de fotos está completo sem todas as funções básicas: prova de cores, cadeias de efeitos e todo o resto.\n\nO espaço de trabalho Photo permite criar imagens impressionantes para uma nova geração de telas de ampla gama de cores.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Uma fotografia de um pequeno terrário na área de trabalho Photo, com o tema salvo como camada de seleção acima da foto."
          },
          "links": [
            {
              "title": "Tutorial de edição de fotos",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Como os filtros se aplicam",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Prova",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "id": {
    "intro": "{appName} adalah aplikasi sumber terbuka gratis untuk membuat sketsa, melukis, dan mengedit foto. Ini terinspirasi oleh zen kapibara.",
    "overview": "Ikhtisar",
    "contents": "Isi dokumentasi",
    "onPage": "Di halaman ini",
    "groups": {
      "start": "Memulai",
      "files": "Berkas",
      "drawing": "Alat gambar",
      "brushes": "Pengaturan kuas",
      "color": "Warna",
      "layers": "Lapisan",
      "filters": "Filter",
      "selections": "Seleksi",
      "transform": "Transformasi dan gambar",
      "retouch": "Retus",
      "colorManagement": "Manajemen warna",
      "customize": "Penyesuaian",
      "input": "Masukan",
      "illustration": "Tutorial ilustrasi",
      "photo": "Tutorial pengeditan foto"
    },
    "startTitle": "Memulai",
    "figureSoon": "Gambar tertunda",
    "related": "Lihat juga",
    "previous": "Sebelumnya",
    "next": "Selanjutnya",
    "platform": "Platform",
    "allPlatforms": "Semua platform",
    "platformTitle": "Kiat untuk perangkat Anda",
    "platformIntro": "Pilih perangkat Anda untuk melihat beberapa tipsnya.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} menggunakan Windows Ink untuk pena. Di Windows, Tombol pena hanya mencantumkan satu tombol samping, yaitu Tombol samping bawah.",
      "mac": "Jika pena mengenai tempat yang salah, periksa di pengaturan tablet Anda layar mana yang dipetakan ke tablet. Gunakan Command di mana pun panduan ini menyebut Ctrl, dan Option di mana pun menyebut Alt.",
      "linux": "Aplikasi Linux memerlukan sesi Wayland dan kartu grafis yang mendukung Vulkan. Jika tekanan tidak berfungsi atau kursor berada di tempat yang salah, periksa pengaturan tablet di desktop Anda.",
      "ipad": "Sebagian besar model Apple Pencil mendukung tekanan dan kemiringan, tetapi Apple Pencil (USB-C) tidak mendukung tekanan. Jari dan telapak tangan tidak pernah menggambar.",
      "android": "Gunakan pena yang mendukung tekanan. Stylus berujung karet dianggap sebagai jari, dan jari tidak pernah menggambar."
    },
    "imageOpen": "Buka tangkapan layar ukuran penuh",
    "sketchDemo": "Demonstrasi menata alat mengambang, berfokus pada kanvas, memilih kuas hijau, dan menyesuaikan kelembutannya.",
    "paintDemo": "Demonstrasi membaurkan langit dengan Pembaur Lukis dan Pembaur Kristal, lalu mencari dan menambahkan Posterisasi, Arsir Silang, dan Kaca di panel Filter.",
    "photoDemo": "Demonstrasi menghapus logo dengan Stempel Klon, memotong terarium ke atas gradasi hijau sage, menambahkan Butiran Film, Vinyet, Nada Terpisah, dan Kejernihan, lalu melembutkan bayangan dengan Kabur Gaussian bermasker.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Seperti banyak orang lain, saya pertama kali memasuki dunia seni digital lewat Procreate lebih dari satu dekade lalu. Saat Apple Pencil pertama kali hadir, rasanya seperti sihir. Meski perangkat kerasnya lambat menurut standar sekarang, semuanya dibuat begitu baik sehingga benar-benar terasa seperti menggambar dengan pena di atas kertas.\n\nUntuk pertama kalinya, aplikasi menggambar dioptimalkan sepenuhnya untuk perangkat seluler, dengan pelacakan gerakan pena secara prediktif serta mesin kuas dan rendering bertenaga GPU. Lalu mereka menambahkan antarmuka yang bersih dan minimalis, yang kemudian menjadi standar industri bagi aplikasi menggambar modern.\n\nRuang kerja Sketch adalah penghormatan untuk akar kami. Tempat semua orang memulai.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Gambar tinta kereta api di bawah pohon besar di ruang kerja Sketch, tempat gambar memenuhi layar dan beberapa alat berada di tepinya."
          },
          "links": [
            {
              "title": "Alat kuas",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Pena",
              "slug": "input/pen"
            },
            {
              "title": "Mode Zen",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Saat mulai serius mengerjakan komik atau manga, alat sederhana tidak lagi cukup. Isian laso menjadi sahabat terbaik, dan Anda belajar menerima masker sebagai sesuatu yang merepotkan tetapi diperlukan.\n\nAda banyak alat untuk alur kerja ilustrasi profesional; CSP dan MediBang sering menjadi yang pertama dipelajari. Keduanya perangkat lunak yang bagus, mudah dipakai, dan intuitif. Cukup ikuti prosesnya, dan hasilnya biasanya baik.\n\nMeski benar-benar andal untuk bekerja, keduanya lambat, dibuat pada masa ketika semua rendering dan pengomposisian dilakukan di CPU, bukan GPU. Karena itu, keduanya tidak pernah mampu menyamai mesin kuas yang kuat dan realistis dalam aplikasi modern seperti Fresco dan Rebelle.\n\nRuang kerja Paint menghadirkan simulasi bahan lukis fisik ke dalam ilustrasi digital.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Lukisan cat minyak sebuah rumah di tepi laut saat matahari terbenam di ruang kerja Paint, dengan kuas, warna, dan lapisan di samping kanvas."
          },
          "links": [
            {
              "title": "Tutorial ilustrasi",
              "slug": "illustration"
            },
            {
              "title": "Alat isi",
              "slug": "drawing/fill"
            },
            {
              "title": "Mask",
              "slug": "layers/masks"
            },
            {
              "title": "Pencampuran, rembesan, dan bulu kuas",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Perangkat seluler makin mampu melakukan banyak hal setiap hari. Layar OLED tampaknya ada di mana-mana, dan ponsel lama saya menyimpan gambar dalam format P3 HDR secara bawaan. SRGB sudah menjadi masa lalu.\n\nHingga kini, satu-satunya aplikasi melukis yang mendukung HDR bergamut luas dengan benar adalah Krita. HDR rumit dan sulit ditangani dengan baik. Saat menerbitkan gambar HDR dan bergamut luas di internet, Anda perlu mengendalikan pemetaan gain agar gambar tetap terlihat bagus di perangkat SDR. Tentu saja, editor foto belum lengkap tanpa semua fungsi dasar: proofing, rantai efek, dan segala sisanya.\n\nRuang kerja Photo memungkinkan visual yang memukau untuk generasi baru layar bergamut luas.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Foto terarium kecil di ruang kerja Photo, dengan subjek tersimpan sebagai lapisan seleksi di atas foto."
          },
          "links": [
            {
              "title": "Tutorial pengeditan foto",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Cara filter diterapkan",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Simulasi Cetak",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "fr": {
    "intro": "{appName} est une application gratuite et open source pour le dessin, la peinture et la retouche photo. Il s'inspire du zen des capybaras.",
    "overview": "Aperçu",
    "contents": "Contenu de la documentation",
    "onPage": "Sur cette page",
    "groups": {
      "start": "Premiers pas",
      "files": "Fichiers",
      "drawing": "Outils de dessin",
      "brushes": "Réglages du pinceau",
      "color": "Couleur",
      "layers": "Calques",
      "filters": "Filtres",
      "selections": "Sélections",
      "transform": "Transformation et image",
      "retouch": "Retouche",
      "colorManagement": "Gestion des couleurs",
      "customize": "Personnalisation",
      "input": "Saisie",
      "illustration": "Tutoriel d’illustration",
      "photo": "Tutoriel de retouche photo"
    },
    "startTitle": "Premiers pas",
    "figureSoon": "Image en attente",
    "related": "Voir aussi",
    "previous": "Précédent",
    "next": "Suivant",
    "platform": "Plateforme",
    "allPlatforms": "Toutes les plateformes",
    "platformTitle": "Conseils pour votre appareil",
    "platformIntro": "Choisissez votre appareil pour voir quelques conseils à ce sujet.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} utilise Windows Ink pour le stylet. Sous Windows, « Boutons du stylet » n'affiche qu'un bouton latéral : « Bouton latéral inférieur ».",
      "mac": "Si le stylet touche au mauvais endroit, vérifiez dans les paramètres de votre tablette à quel écran elle est associée. Utilisez Commande partout où ces guides indiquent Ctrl, et Option partout où ils indiquent Alt.",
      "linux": "L'application Linux nécessite une session Wayland et une carte graphique compatible avec Vulkan. Si la pression ne fonctionne pas ou si le curseur se pose au mauvais endroit, vérifiez les paramètres de tablette de votre environnement de bureau.",
      "ipad": "La plupart des modèles d'Apple Pencil prennent en charge la pression et l'inclinaison, mais l'Apple Pencil (USB-C) ne prend pas en charge la pression. Les doigts et la paume ne dessinent jamais.",
      "android": "Utilisez un stylet sensible à la pression. Un stylet à pointe en caoutchouc compte comme un doigt, et les doigts ne dessinent jamais."
    },
    "imageOpen": "Ouvrir la capture d'écran en taille réelle",
    "sketchDemo": "Démonstration du placement des outils flottants, du mode de concentration sur la toile, du choix d’un pinceau vert et du réglage de sa douceur.",
    "paintDemo": "Démonstration du mélange du ciel avec le Mélangeur pictural et le Mélangeur cristallin, puis de la recherche et de l’ajout de Postérisation, Hachures croisées et Verre dans le panneau Filtres.",
    "photoDemo": "Démonstration de l’effacement d’un logo au Tampon de duplication, du détourage du terrarium sur un dégradé vert sauge, de l’ajout de Grain de film, Vignettage, Virage partiel et Clarté, puis de l’adoucissement d’une ombre portée avec un Flou gaussien masqué.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Comme beaucoup d’autres, j’ai fait mes premiers pas dans l’art numérique avec Procreate, il y a plus de dix ans. À la sortie du premier Apple Pencil, c’était magique. Même si le matériel était lent selon les critères d’aujourd’hui, l’ensemble était si bien conçu qu’on avait vraiment l’impression de dessiner au stylo sur du papier.\n\nPour la première fois, une application de dessin était entièrement optimisée pour un appareil mobile, avec un suivi prédictif du stylet et des moteurs de pinceaux et de rendu fonctionnant sur le GPU. Ils y ont ensuite ajouté une interface épurée et minimaliste, qui est devenue la norme du secteur pour les applications de dessin modernes.\n\nL’espace de travail Sketch rend hommage à nos racines. C’est là que tout le monde commence.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Un dessin à l'encre d'un train sous un grand arbre dans l'espace de travail Sketch, où le dessin remplit l'écran et quelques outils se trouvent sur les bords."
          },
          "links": [
            {
              "title": "Outils de pinceau",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Stylet",
              "slug": "input/pen"
            },
            {
              "title": "Mode Zen",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Quand on se met sérieusement à la bande dessinée ou au manga, les outils simples ne suffisent plus. Le remplissage au lasso devient votre meilleur ami, et vous apprenez à vivre avec les masques, ce mal nécessaire.\n\nIl existe de nombreux outils pour les méthodes de travail de l’illustration professionnelle ; CSP et MediBang sont souvent les premiers qu’on apprend à utiliser. Ce sont d’excellents logiciels, faciles à utiliser et intuitifs. Il suffit de suivre le processus, et le résultat est généralement satisfaisant.\n\nMême s’ils sont de véritables bêtes de somme, ils sont lents, conçus à une époque où le rendu et la composition se faisaient entièrement sur le CPU plutôt que sur le GPU. Ils n’ont donc jamais pu égaler les moteurs de pinceaux puissants et réalistes d’applications modernes comme Fresco et Rebelle.\n\nL’espace de travail Paint apporte la simulation des matériaux traditionnels à l’illustration numérique.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Une peinture à l'huile d'une maison au bord de la mer au coucher du soleil dans l'espace de travail Paint, avec des pinceaux, des couleurs et des calques à côté de la toile."
          },
          "links": [
            {
              "title": "Tutoriel d’illustration",
              "slug": "illustration"
            },
            {
              "title": "Outils de remplissage",
              "slug": "drawing/fill"
            },
            {
              "title": "Masques",
              "slug": "layers/masks"
            },
            {
              "title": "Mélange, diffusion et soies",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Les appareils mobiles sont chaque jour plus capables. Les écrans OLED semblent être partout, et mon vieux téléphone enregistre ses images au format P3 HDR par défaut. Le SRGB appartient au passé.\n\nÀ ce jour, la seule application de peinture qui prend correctement en charge le HDR à large gamut est Krita. Le HDR est complexe et difficile à maîtriser. Quand vous publiez des images HDR et à large gamut en ligne, vous devez contrôler le mappage de gain pour qu’elles restent agréables à regarder sur les appareils SDR. Bien sûr, aucun éditeur photo n’est complet sans toutes les fonctions de base : épreuvage, chaînes d’effets et tout le reste.\n\nL’espace de travail Photo permet de créer des images saisissantes pour une nouvelle génération d’écrans à large gamut.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Une photographie d'un petit terrarium dans l'espace de travail Photo, avec le sujet enregistré comme calque de sélection au-dessus de la photo."
          },
          "links": [
            {
              "title": "Tutoriel de retouche photo",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Application des filtres",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Épreuvage",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "de": {
    "intro": "{appName} ist eine kostenlose Open-Source-App zum Skizzieren, Malen und Bearbeiten von Fotos. Es ist vom Zen der Wasserschweine inspiriert.",
    "overview": "Übersicht",
    "contents": "Dokumentationsinhalte",
    "onPage": "Auf dieser Seite",
    "groups": {
      "start": "Erste Schritte",
      "files": "Dateien",
      "drawing": "Zeichenwerkzeuge",
      "brushes": "Pinseleinstellungen",
      "color": "Farbe",
      "layers": "Ebenen",
      "filters": "Filter",
      "selections": "Auswahlen",
      "transform": "Transformieren und Bild",
      "retouch": "Retuschieren",
      "colorManagement": "Farbmanagement",
      "customize": "Anpassen",
      "input": "Eingabe",
      "illustration": "Illustrations-Tutorial",
      "photo": "Tutorial zur Fotobearbeitung"
    },
    "startTitle": "Erste Schritte",
    "figureSoon": "Bild ausstehend",
    "related": "Siehe auch",
    "previous": "Zurück",
    "next": "Als nächstes",
    "platform": "Plattform",
    "allPlatforms": "Alle Plattformen",
    "platformTitle": "Tipps für Ihr Gerät",
    "platformIntro": "Wählen Sie Ihr Gerät aus, um einige Tipps dazu zu sehen.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} verwendet Windows Ink für den Stift. Unter Windows zeigt „Stifttasten“ nur eine Seitentaste an: „Untere Seitentaste“.",
      "mac": "Wenn der Stift an der falschen Stelle landet, überprüfen Sie in den Einstellungen, welchem Bildschirm Ihr Tablet zugeordnet ist. Verwenden Sie Command, wo in diesen Anleitungen Strg steht, und Option, wo Alt steht.",
      "linux": "Die Linux-App benötigt eine Wayland-Sitzung und eine Grafikkarte mit Vulkan-Unterstützung. Wenn Druck nicht funktioniert oder der Cursor an der falschen Stelle landet, überprüfen Sie die Tablet-Einstellungen Ihres Desktops.",
      "ipad": "Die meisten Apple Pencil-Modelle unterstützen Druck und Neigung, Apple Pencil (USB-C) unterstützt jedoch keinen Druck. Finger und Handballen zeichnen nie.",
      "android": "Verwenden Sie einen Stift, der Druck unterstützt. Ein Eingabestift mit Gummispitze gilt als Finger, und Finger zeichnen nie."
    },
    "imageOpen": "Öffnen Sie den Screenshot in voller Größe",
    "sketchDemo": "Vorführung: schwebende Werkzeuge anordnen, auf die Leinwand konzentrieren, einen grünen Pinsel wählen und seine Weichheit einstellen.",
    "paintDemo": "Vorführung: den Himmel mit „Malerischer Mischpinsel“ und „Kristall-Mischpinsel“ vermischen, dann „Tontrennung“, „Kreuzschraffur“ und „Glas“ im Bedienfeld „Filter“ suchen und hinzufügen.",
    "photoDemo": "Vorführung: ein Logo mit dem „Klonstempel“ entfernen, das Terrarium vor einem salbeigrünen Verlauf freistellen, „Filmkorn“, „Vignette“, „Teiltonung“ und „Klarheit“ hinzufügen und einen Schlagschatten mit maskiertem „Gaußscher Weichzeichner“ weicher machen.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Mein erster Ausflug in die Welt der digitalen Kunst war, wie bei vielen anderen, vor über zehn Jahren mit Procreate. Als der erste Apple Pencil erschien, war es magisch. Auch wenn die Hardware nach heutigen Maßstäben langsam war, war alles so gut umgesetzt, dass es sich wirklich wie Zeichnen mit einem Stift auf Papier anfühlte.\n\nZum ersten Mal war eine Zeichen-App vollständig für ein mobiles Gerät optimiert, mit vorausschauender Stiftverfolgung und GPU-betriebenen Pinsel- und Rendering-Engines. Darüber legten sie dann eine klare, minimalistische Oberfläche, die später zum Branchenstandard für moderne Zeichen-Apps wurde.\n\nDer Arbeitsbereich Sketch ist eine Hommage an unsere Wurzeln. Der Ort, an dem alle anfangen.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Eine Tuschezeichnung eines Zuges unter einem großen Baum im Sketch-Arbeitsbereich, wobei die Zeichnung den Bildschirm ausfüllt und an den Rändern einige Werkzeuge sitzen."
          },
          "links": [
            {
              "title": "Pinselwerkzeuge",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Stift",
              "slug": "input/pen"
            },
            {
              "title": "Zen-Modus",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Sobald man ernsthaft an Comics oder Manga arbeitet, reichen einfache Werkzeuge nicht mehr aus. Die Lasso-Füllung wird zum besten Freund, und man lernt, mit dem notwendigen Übel der Masken zu leben.\n\nEs gibt viele Werkzeuge für professionelle Illustrationsabläufe; CSP und MediBang sind oft die ersten, die man kennenlernt. Und sie sind großartige, leicht bedienbare und intuitive Programme. Man muss nur dem Ablauf folgen, dann wird das Ergebnis meistens gut.\n\nObwohl sie echte Arbeitstiere sind, sind sie langsam und für eine Zeit gebaut, in der Rendering und Compositing vollständig auf der CPU statt auf der GPU liefen. Deshalb konnten sie nie mit den leistungsfähigen, realistischen Pinsel-Engines moderner Apps wie Fresco und Rebelle mithalten.\n\nDer Arbeitsbereich Paint bringt die Simulation echter Malmaterialien in die digitale Illustration.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Ein Ölgemälde eines Hauses am Meer bei Sonnenuntergang im Paint-Arbeitsbereich, mit Pinseln, Farben und Ebenen neben der Leinwand."
          },
          "links": [
            {
              "title": "Illustrations-Tutorial",
              "slug": "illustration"
            },
            {
              "title": "Füllwerkzeuge",
              "slug": "drawing/fill"
            },
            {
              "title": "Masken",
              "slug": "layers/masks"
            },
            {
              "title": "Mischen, Farbausbreitung und Borsten",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Mobile Geräte werden jeden Tag leistungsfähiger. OLED-Bildschirme scheinen überall zu sein, und mein altes Handy speichert seine Bilder standardmäßig im P3-HDR-Format. SRGB gehört der Vergangenheit an.\n\nBis heute ist Krita die einzige Mal-App, die HDR mit großem Farbumfang richtig unterstützt. HDR ist kompliziert und schwer richtig umzusetzen. Wenn man HDR-Bilder und Bilder mit großem Farbumfang online veröffentlicht, muss man das Gain-Mapping steuern können, damit sie auch auf SDR-Geräten gut aussehen. Natürlich ist kein Fotoeditor ohne sämtliche Grundfunktionen vollständig: Softproof, Effektketten und alles, was dazugehört.\n\nDer Arbeitsbereich Photo ermöglicht beeindruckende Bilder für eine neue Generation von Bildschirmen mit großem Farbumfang.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Ein Foto eines kleinen Terrariums im Photo-Arbeitsbereich, mit dem Motiv als Auswahlebene über dem Foto gespeichert."
          },
          "links": [
            {
              "title": "Tutorial zur Fotobearbeitung",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Wie Filter wirken",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Softproof",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "ru": {
    "intro": "{appName} — бесплатное приложение с открытым исходным кодом для создания эскизов, рисования и редактирования фотографий. Он вдохновлен дзеном капибар.",
    "overview": "Обзор",
    "contents": "Содержание документации",
    "onPage": "На этой странице",
    "groups": {
      "start": "Начало работы",
      "files": "Файлы",
      "drawing": "Инструменты рисования",
      "brushes": "Настройки кисти",
      "color": "Цвет",
      "layers": "Слои",
      "filters": "Фильтры",
      "selections": "Выделения",
      "transform": "Трансформация и изображение",
      "retouch": "Ретушь",
      "colorManagement": "Управление цветом",
      "customize": "Настройка интерфейса",
      "input": "Ввод",
      "illustration": "Урок по иллюстрации",
      "photo": "Урок по обработке фотографий"
    },
    "startTitle": "Начало работы",
    "figureSoon": "Изображение ожидает рассмотрения",
    "related": "См. также",
    "previous": "Предыдущий",
    "next": "Далее",
    "platform": "Платформа",
    "allPlatforms": "Все платформы",
    "platformTitle": "Советы для вашего устройства",
    "platformIntro": "Выберите свое устройство, чтобы просмотреть несколько советов по его использованию.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} использует Windows Ink для пера. В Windows в разделе «Кнопки пера» указана только одна боковая кнопка: «Нижняя боковая кнопка».",
      "mac": "Если перо попадает не туда, проверьте в настройках планшета, к какому экрану он привязан. Используйте Command везде, где в руководствах написано Ctrl, и Option везде, где написано Alt.",
      "linux": "Приложению для Linux нужны сеанс Wayland и видеокарта с поддержкой Vulkan. Если нажим не работает или курсор оказывается не в том месте, проверьте настройки планшета в своей среде рабочего стола.",
      "ipad": "Большинство моделей Apple Pencil поддерживают нажим и наклон, но Apple Pencil (USB-C) не поддерживает нажим. Пальцы и ладонь никогда не рисуют.",
      "android": "Используйте перо с поддержкой нажима. Стилус с резиновым наконечником считается пальцем, а пальцы никогда не рисуют."
    },
    "imageOpen": "Открыть полноразмерный скриншот",
    "sketchDemo": "Демонстрация размещения плавающих инструментов, перехода к работе без отвлекающих элементов, выбора зелёной кисти и настройки её мягкости.",
    "paintDemo": "Демонстрация смешивания неба инструментами «Живописное смешивание» и «Кристаллическое смешивание», затем поиска и добавления фильтров «Постеризация», «Перекрёстная штриховка» и «Стекло» на панели «Фильтры».",
    "photoDemo": "Демонстрация: удаление логотипа «Штампом», вырезание террариума на шалфейно-зелёный градиент, добавление фильтров «Плёночное зерно», «Виньетка», «Раздельное тонирование» и «Чёткость» и смягчение тени замаскированным «Размытием по Гауссу».",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Моё первое знакомство с миром цифрового искусства, как и у многих других, началось с Procreate больше десяти лет назад. Когда появился первый Apple Pencil, это было похоже на магию. Хотя по нынешним меркам устройство было медленным, всё было сделано настолько хорошо, что рисование действительно ощущалось как работа ручкой по бумаге.\n\nВпервые приложение для рисования было полностью оптимизировано для мобильного устройства: с предсказанием движения пера и движками кистей и рендеринга на GPU. Затем к этому добавили чистый, минималистичный интерфейс, который стал отраслевым стандартом для современных приложений для рисования.\n\nРабочее пространство Sketch — дань нашим истокам. Место, с которого начинают все.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Чернильный рисунок поезда под большим деревом в рабочем пространстве Sketch, где рисунок заполняет экран, а по краям расположено несколько инструментов."
          },
          "links": [
            {
              "title": "Кистевые инструменты",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Перо",
              "slug": "input/pen"
            },
            {
              "title": "Режим дзен",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Когда начинаешь всерьёз работать над комиксами или мангой, простых инструментов уже не хватает. Заливка лассо становится лучшим другом, и приходится учиться жить с необходимым злом — масками.\n\nДля профессиональной иллюстрации есть множество инструментов; часто первыми осваивают CSP и MediBang. Это отличные, простые в использовании и понятные программы. Достаточно следовать процессу, и результат обычно получается хорошим.\n\nХотя это настоящие рабочие лошадки, они медленные и созданы для эпохи, когда весь рендеринг и композитинг выполнялись на CPU, а не на GPU. Поэтому они так и не смогли сравниться с мощными, реалистичными движками кистей в современных приложениях вроде Fresco и Rebelle.\n\nРабочее пространство Paint привносит симуляцию настоящих художественных материалов в цифровую иллюстрацию.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Картина маслом дома у моря на закате в рабочем пространстве Paint, с кистями, цветами и слоями рядом с холстом."
          },
          "links": [
            {
              "title": "Урок по иллюстрации",
              "slug": "illustration"
            },
            {
              "title": "Инструменты заливки",
              "slug": "drawing/fill"
            },
            {
              "title": "Маски",
              "slug": "layers/masks"
            },
            {
              "title": "Смешивание, растекание и щетина",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Мобильные устройства с каждым днём умеют всё больше. Кажется, OLED-экраны уже повсюду, а мой старый телефон по умолчанию сохраняет изображения в формате P3 HDR. SRGB остался в прошлом.\n\nНа сегодняшний день единственное приложение для рисования с полноценной поддержкой широкого цветового охвата и HDR — Krita. HDR сложен, и реализовать его правильно непросто. Когда публикуешь HDR-изображения и изображения с широким цветовым охватом в интернете, нужно управлять картой усиления, чтобы они хорошо выглядели и на SDR-устройствах. Конечно, ни один фоторедактор не будет полноценным без всех базовых возможностей: цветопробы, цепочек эффектов и всего остального.\n\nРабочее пространство Photo позволяет создавать впечатляющие изображения для нового поколения экранов с широким цветовым охватом.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Фотография небольшого террариума в рабочей области Photo; объект сохранён как слой выделения над фотографией."
          },
          "links": [
            {
              "title": "Урок по обработке фотографий",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Как применяются фильтры",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Цветопроба",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "th": {
    "intro": "{appName} เป็นแอปโอเพ่นซอร์สฟรีสำหรับการสเก็ตช์ภาพ ลงสี และแก้ไขภาพ ได้รับแรงบันดาลใจจากเซนของคาปิบารา",
    "overview": "ภาพรวม",
    "contents": "เนื้อหาเอกสาร",
    "onPage": "บนหน้านี้",
    "groups": {
      "start": "เริ่มต้นใช้งาน",
      "files": "ไฟล์",
      "drawing": "เครื่องมือวาดภาพ",
      "brushes": "การตั้งค่าพู่กัน",
      "color": "สี",
      "layers": "เลเยอร์",
      "filters": "ฟิลเตอร์",
      "selections": "พื้นที่เลือก",
      "transform": "การแปลงรูปและภาพ",
      "retouch": "การรีทัช",
      "colorManagement": "การจัดการสี",
      "customize": "การปรับแต่ง",
      "input": "การป้อนข้อมูล",
      "illustration": "บทช่วยสอนการวาดภาพประกอบ",
      "photo": "บทช่วยสอนการแต่งภาพถ่าย"
    },
    "startTitle": "เริ่มต้นใช้งาน",
    "figureSoon": "กำลังรอดำเนินการรูปภาพ",
    "related": "ดูเพิ่มเติม",
    "previous": "ก่อนหน้า",
    "next": "ถัดไป",
    "platform": "แพลตฟอร์ม",
    "allPlatforms": "ทุกแพลตฟอร์ม",
    "platformTitle": "เคล็ดลับสำหรับอุปกรณ์ของคุณ",
    "platformIntro": "เลือกอุปกรณ์ของคุณเพื่อดูเคล็ดลับบางประการ",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} ใช้ Windows Ink สำหรับปากกา บน Windows ปุ่มปากกาจะแสดงปุ่มด้านข้างเพียงปุ่มเดียว คือปุ่มด้านข้างล่าง",
      "mac": "หากปากกาลงผิดตำแหน่ง ให้ตรวจสอบในการตั้งค่าแท็บเล็ตว่าแท็บเล็ตจับคู่กับหน้าจอใด ใช้ Command ทุกที่ที่คู่มือนี้ระบุว่า Ctrl และใช้ Option ทุกที่ที่ระบุว่า Alt",
      "linux": "แอป Linux ต้องใช้เซสชัน Wayland และการ์ดจอที่รองรับ Vulkan หากแรงกดไม่ทำงานหรือเคอร์เซอร์ไปผิดตำแหน่ง ให้ตรวจสอบการตั้งค่าแท็บเล็ตของเดสก์ท็อป",
      "ipad": "รุ่น Apple Pencil ส่วนใหญ่รองรับแรงกดและการเอียง แต่ Apple Pencil (USB-C) ไม่รองรับแรงกด นิ้วและฝ่ามือจะไม่วาดเส้น",
      "android": "ใช้ปากกาที่รองรับแรงกด สไตลัสปลายยางจะนับเป็นนิ้ว และนิ้วจะไม่วาดเส้น"
    },
    "imageOpen": "เปิดภาพหน้าจอขนาดเต็ม",
    "sketchDemo": "สาธิตการจัดวางเครื่องมือลอย การมุ่งความสนใจที่ผืนผ้าใบ การเลือกพู่กันสีเขียว และการปรับความนุ่มของพู่กัน",
    "paintDemo": "สาธิตการเกลี่ยสีท้องฟ้าด้วยเกลี่ยสีแบบภาพวาดและเกลี่ยสีผลึก จากนั้นค้นหาและเพิ่มลดระดับสี เส้นแรเงาไขว้ และกระจกในแผงฟิลเตอร์",
    "photoDemo": "สาธิตการลบโลโก้ด้วยตราประทับสำเนา ตัดตู้กระจกวางบนไล่สีเขียวเสจ เพิ่มเกรนฟิล์ม ขอบมืด แยกโทน และความชัดเจน แล้วทำให้เงานุ่มลงด้วยเบลอเกาส์เซียนที่มีมาสก์",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "ฉันเริ่มก้าวเข้าสู่โลกศิลปะดิจิทัลครั้งแรกด้วย Procreate เมื่อกว่าสิบปีก่อน เช่นเดียวกับอีกหลายคน ตอนที่ Apple Pencil รุ่นแรกออกมา มันเหมือนเวทมนตร์เลย แม้ฮาร์ดแวร์จะช้าเมื่อเทียบกับมาตรฐานปัจจุบัน แต่ทุกอย่างทำมาได้ดีจนให้ความรู้สึกเหมือนใช้ปากกาวาดบนกระดาษจริง ๆ\n\nนี่เป็นครั้งแรกที่แอปวาดภาพได้รับการปรับให้เหมาะกับอุปกรณ์พกพาอย่างเต็มที่ โดยใช้การติดตามปากกาแบบคาดการณ์ล่วงหน้าและเอนจินแปรงกับการเรนเดอร์ที่ทำงานบน GPU จากนั้นก็เพิ่มหน้าตาที่สะอาดและเรียบง่าย ซึ่งต่อมากลายเป็นมาตรฐานของอุตสาหกรรมสำหรับแอปวาดภาพสมัยใหม่\n\nพื้นที่ทำงาน Sketch คือการคารวะต่อจุดเริ่มต้นของเรา เป็นที่ที่ทุกคนเริ่มต้นวาดภาพ",
          "image": {
            "shot": "showcase/sketch",
            "alt": "ภาพวาดหมึกของรถไฟใต้ต้นไม้ใหญ่ในพื้นที่ทำงาน Sketch โดยที่ภาพวาดนั้นเต็มหน้าจอและมีเครื่องมือสองสามชิ้นอยู่ที่ขอบ"
          },
          "links": [
            {
              "title": "เครื่องมือพู่กัน",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "ปากกา",
              "slug": "input/pen"
            },
            {
              "title": "โหมดเซน",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "พอเริ่มทำงานการ์ตูนหรือมังงะอย่างจริงจัง เครื่องมือง่าย ๆ ก็ไม่พอแล้ว การเติมสีด้วยบ่วงกลายเป็นเพื่อนที่ดีที่สุด และคุณก็ต้องเรียนรู้ที่จะอยู่กับมาสก์ แม้จะยุ่งยากแต่ก็จำเป็น\n\nมีเครื่องมือมากมายสำหรับกระบวนการสร้างภาพประกอบระดับมืออาชีพ โดย CSP และ MediBang มักเป็นโปรแกรมแรก ๆ ที่ผู้คนเรียนรู้ ทั้งคู่เป็นซอฟต์แวร์ที่ดี ใช้งานง่าย และเข้าใจได้ไม่ยาก เพียงทำตามขั้นตอน ผลงานก็มักจะออกมาดี\n\nแม้จะเป็นเครื่องมือทำงานที่ไว้ใจได้ แต่ก็ทำงานช้า เพราะสร้างขึ้นในยุคที่การเรนเดอร์และการรวมภาพทั้งหมดทำบน CPU แทน GPU จึงไม่เคยเทียบได้กับเอนจินแปรงที่ทรงพลังและสมจริงในแอปสมัยใหม่อย่าง Fresco และ Rebelle\n\nพื้นที่ทำงาน Paint นำการจำลองวัสดุวาดภาพจริงมาสู่ภาพประกอบดิจิทัล",
          "image": {
            "shot": "showcase/paint",
            "alt": "ภาพวาดสีน้ำมันของบ้านริมทะเลยามพระอาทิตย์ตกดินในพื้นที่ทำงาน Paint พร้อมด้วยพู่กัน สี และเลเยอร์ข้างผ้าใบ"
          },
          "links": [
            {
              "title": "บทช่วยสอนการวาดภาพประกอบ",
              "slug": "illustration"
            },
            {
              "title": "เครื่องมือเติมสี",
              "slug": "drawing/fill"
            },
            {
              "title": "มาสก์",
              "slug": "layers/masks"
            },
            {
              "title": "การผสม สีซึม และขนพู่กัน",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "อุปกรณ์พกพามีความสามารถมากขึ้นทุกวัน ดูเหมือนหน้าจอ OLED จะอยู่ทุกที่ และโทรศัพท์เครื่องเก่าของฉันก็บันทึกภาพเป็น P3 HDR ตามค่าเริ่มต้น SRGB กลายเป็นเรื่องในอดีตไปแล้ว\n\nจนถึงตอนนี้ แอปวาดภาพเพียงตัวเดียวที่รองรับ HDR และขอบเขตสีกว้างได้อย่างเหมาะสมคือ Krita HDR มีความซับซ้อนและทำให้ถูกต้องได้ยาก เมื่อเผยแพร่ภาพ HDR และภาพขอบเขตสีกว้างทางออนไลน์ คุณต้องควบคุมการแมปเกนเพื่อให้ภาพยังดูดีบนอุปกรณ์ SDR แน่นอนว่าโปรแกรมแต่งภาพจะยังไม่ครบถ้วนหากขาดฟังก์ชันพื้นฐานทั้งหมด ไม่ว่าจะเป็นการปรู๊ฟสี ชุดเอฟเฟกต์ที่ต่อกัน และทุกอย่างที่ควรมี\n\nพื้นที่ทำงาน Photo ช่วยสร้างภาพที่น่าตื่นตาสำหรับหน้าจอขอบเขตสีกว้างรุ่นใหม่",
          "image": {
            "shot": "showcase/photo",
            "alt": "รูปถ่ายของตู้กระจกขนาดเล็กในพื้นที่ทำงาน Photo โดยบันทึกวัตถุหลักเป็นเลเยอร์พื้นที่เลือกไว้เหนือภาพถ่าย"
          },
          "links": [
            {
              "title": "บทช่วยสอนการแต่งภาพถ่าย",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "การทำงานของฟิลเตอร์",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "ปรู๊ฟสี",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "vi": {
    "intro": "{appName} là một ứng dụng mã nguồn mở miễn phí để phác thảo, vẽ tranh và chỉnh sửa ảnh. Nó được lấy cảm hứng từ zen của capybaras.",
    "overview": "Tổng quan",
    "contents": "Nội dung tài liệu",
    "onPage": "Trên trang này",
    "groups": {
      "start": "Bắt đầu",
      "files": "Tệp",
      "drawing": "Công cụ vẽ",
      "brushes": "Thiết lập cọ",
      "color": "Màu",
      "layers": "Lớp",
      "filters": "Bộ lọc",
      "selections": "Vùng chọn",
      "transform": "Biến đổi và ảnh",
      "retouch": "Chỉnh sửa ảnh",
      "colorManagement": "Quản lý màu",
      "customize": "Tùy chỉnh",
      "input": "Nhập liệu",
      "illustration": "Hướng dẫn vẽ minh họa",
      "photo": "Hướng dẫn chỉnh sửa ảnh"
    },
    "startTitle": "Bắt đầu",
    "figureSoon": "Hình ảnh đang chờ xử lý",
    "related": "Xem thêm",
    "previous": "trước đó",
    "next": "Tiếp theo",
    "platform": "Nền tảng",
    "allPlatforms": "Tất cả nền tảng",
    "platformTitle": "Lời khuyên cho thiết bị của bạn",
    "platformIntro": "Chọn thiết bị của bạn để xem một số mẹo dành cho thiết bị đó.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} dùng Windows Ink cho bút. Trên Windows, Nút bút chỉ có một nút bên: Nút bên dưới.",
      "mac": "Nếu bút chạm sai vị trí, hãy kiểm tra trong cài đặt của bảng vẽ xem bảng vẽ được ánh xạ tới màn hình nào. Dùng Command ở mọi chỗ hướng dẫn ghi Ctrl, và Option ở mọi chỗ ghi Alt.",
      "linux": "Ứng dụng Linux cần phiên Wayland và card đồ họa hỗ trợ Vulkan. Nếu lực nhấn không hoạt động hoặc con trỏ đặt sai vị trí, hãy kiểm tra cài đặt bảng vẽ của môi trường desktop.",
      "ipad": "Hầu hết các mẫu Apple Pencil đều hỗ trợ lực nhấn và độ nghiêng, nhưng Apple Pencil (USB-C) không hỗ trợ lực nhấn. Ngón tay và lòng bàn tay không bao giờ vẽ.",
      "android": "Hãy dùng bút hỗ trợ lực nhấn. Bút cảm ứng đầu cao su được tính là ngón tay, và ngón tay không bao giờ vẽ."
    },
    "imageOpen": "Mở ảnh chụp màn hình kích thước đầy đủ",
    "sketchDemo": "Minh họa cách sắp xếp công cụ nổi, tập trung vào khung vẽ, chọn cọ xanh lá và điều chỉnh độ mềm của cọ.",
    "paintDemo": "Minh họa cách hòa màu bầu trời bằng Hòa màu kiểu tranh và Hòa màu tinh thể, rồi tìm và thêm Giảm mức màu, Gạch chéo và Kính trong bảng Bộ lọc.",
    "photoDemo": "Minh họa cách xóa logo bằng Dấu sao chép, tách hồ cạn đặt lên dải chuyển màu xanh xô thơm, thêm Hạt phim, Tối góc, Tách sắc độ và Độ rõ nét, rồi làm mềm bóng đổ bằng Làm mờ Gaussian có mặt nạ.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Cũng như nhiều người khác, tôi lần đầu bước vào thế giới nghệ thuật số với Procreate hơn một thập kỷ trước. Khi Apple Pencil đầu tiên ra mắt, cảm giác thật kỳ diệu. Dù phần cứng chậm so với tiêu chuẩn ngày nay, mọi thứ được làm tốt đến mức cho cảm giác thực sự như dùng bút vẽ trên giấy.\n\nĐây là lần đầu một ứng dụng vẽ được tối ưu hoàn toàn cho thiết bị di động, với tính năng dự đoán chuyển động của bút cùng bộ máy cọ và kết xuất chạy trên GPU. Sau đó, họ thêm một giao diện gọn gàng, tối giản, và nó đã trở thành tiêu chuẩn của ngành cho các ứng dụng vẽ hiện đại.\n\nKhông gian làm việc Sketch là lời tri ân nguồn cội của chúng tôi. Nơi mọi người bắt đầu.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Bản vẽ bằng mực về một chiếc xe lửa bên dưới một cái cây lớn trong không gian làm việc Sketch, nơi bản vẽ lấp đầy màn hình và một vài công cụ nằm ở các cạnh."
          },
          "links": [
            {
              "title": "Công cụ cọ",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Bút",
              "slug": "input/pen"
            },
            {
              "title": "Chế độ Zen",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Khi bắt đầu làm truyện tranh hay manga một cách nghiêm túc, những công cụ đơn giản không còn đủ nữa. Tô bằng Lasso trở thành người bạn thân nhất, và bạn học cách sống chung với mặt nạ, thứ phiền phức nhưng cần thiết.\n\nCó nhiều công cụ dành cho quy trình minh họa chuyên nghiệp; CSP và MediBang thường là những phần mềm mọi người học đầu tiên. Chúng là những phần mềm tốt, dễ dùng và trực quan. Chỉ cần làm theo quy trình, kết quả thường sẽ ổn.\n\nDù là những công cụ làm việc đáng tin cậy, chúng chạy chậm, được tạo ra trong thời kỳ mọi thao tác kết xuất và tổng hợp đều diễn ra trên CPU thay vì GPU. Vì thế, chúng chưa bao giờ sánh được với bộ máy cọ mạnh mẽ, chân thực trong các ứng dụng hiện đại như Fresco và Rebelle.\n\nKhông gian làm việc Paint mang mô phỏng chất liệu vẽ thật vào minh họa số.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Bức tranh sơn dầu về một ngôi nhà bên bờ biển lúc hoàng hôn trong không gian làm việc Paint, với bút vẽ, màu sắc và các lớp bên cạnh khung vẽ."
          },
          "links": [
            {
              "title": "Hướng dẫn vẽ minh họa",
              "slug": "illustration"
            },
            {
              "title": "Công cụ tô màu",
              "slug": "drawing/fill"
            },
            {
              "title": "Mặt nạ",
              "slug": "layers/masks"
            },
            {
              "title": "Trộn màu, loang và lông cọ",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Thiết bị di động ngày càng làm được nhiều việc hơn. Dường như màn hình OLED đã có mặt ở khắp nơi, và chiếc điện thoại cũ của tôi mặc định lưu ảnh ở định dạng P3 HDR. SRGB đã là chuyện của quá khứ.\n\nĐến nay, ứng dụng vẽ duy nhất hỗ trợ tốt HDR với gam màu rộng là Krita. HDR phức tạp và khó làm cho đúng. Khi đăng ảnh HDR và ảnh gam màu rộng lên mạng, bạn cần kiểm soát ánh xạ độ khuếch đại để ảnh vẫn đẹp trên thiết bị SDR. Tất nhiên, không trình chỉnh sửa ảnh nào hoàn chỉnh nếu thiếu toàn bộ chức năng cơ bản: xem thử màu in, chuỗi hiệu ứng và tất cả những thứ cần có.\n\nKhông gian làm việc Photo cho phép tạo hình ảnh ấn tượng cho thế hệ màn hình gam màu rộng mới.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Ảnh chụp một hồ cạn nhỏ trong không gian làm việc Photo, với chủ thể được lưu thành lớp vùng chọn phía trên ảnh."
          },
          "links": [
            {
              "title": "Hướng dẫn chỉnh sửa ảnh",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Phạm vi tác động của bộ lọc",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Mô phỏng màu",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "tr": {
    "intro": "{appName}, çizim, boyama ve fotoğraf düzenlemeye yönelik ücretsiz, açık kaynaklı bir uygulamadır. Kapibaraların zeninden ilham alıyor.",
    "overview": "Genel bakış",
    "contents": "Dokümantasyon içeriği",
    "onPage": "Bu sayfada",
    "groups": {
      "start": "Başlarken",
      "files": "Dosyalar",
      "drawing": "Çizim araçları",
      "brushes": "Fırça ayarları",
      "color": "Renk",
      "layers": "Katmanlar",
      "filters": "Filtreler",
      "selections": "Seçimler",
      "transform": "Dönüştürme ve görüntü",
      "retouch": "Rötuş",
      "colorManagement": "Renk yönetimi",
      "customize": "Özelleştirme",
      "input": "Giriş",
      "illustration": "İllüstrasyon eğitimi",
      "photo": "Fotoğraf düzenleme eğitimi"
    },
    "startTitle": "Başlarken",
    "figureSoon": "Resim bekleniyor",
    "related": "Ayrıca bakınız",
    "previous": "Önceki",
    "next": "Sonraki",
    "platform": "platformu",
    "allPlatforms": "Tüm platformlar",
    "platformTitle": "Cihazınız için ipuçları",
    "platformIntro": "Birkaç ipucu görmek için cihazınızı seçin.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}, kalem için Windows Ink kullanır. Windows'ta Kalem düğmeleri yalnızca bir yan düğme listeler: Alt yan düğme.",
      "mac": "Kalem yanlış yere denk geliyorsa tabletinizin ayarlarından hangi ekrana eşlendiğini kontrol edin. Bu kılavuzlarda Ctrl yazan her yerde Command, Alt yazan her yerde Option kullanın.",
      "linux": "Linux uygulaması bir Wayland oturumu ve Vulkan destekleyen bir ekran kartı gerektirir. Basınç çalışmıyorsa veya imleç yanlış yere geliyorsa masaüstünüzün tablet ayarlarını kontrol edin.",
      "ipad": "Çoğu Apple Pencil modeli basınç ve eğimi destekler ancak Apple Pencil (USB-C) basıncı desteklemez. Parmaklar ve avuç içi hiçbir zaman çizim yapmaz.",
      "android": "Basıncı destekleyen bir kalem kullanın. Kauçuk uçlu bir kalem parmak sayılır ve parmaklar hiçbir zaman çizim yapmaz."
    },
    "imageOpen": "Tam boyutlu ekran görüntüsünü aç",
    "sketchDemo": "Yüzen araçları yerleştirme, tuvale odaklanma, yeşil bir fırça seçme ve yumuşaklığını ayarlama gösterimi.",
    "paintDemo": "Gökyüzünü Ressamca karıştırıcı ve Kristal karıştırıcı ile karıştırma, ardından Filtreler panelinde Posterleştirme, Çapraz tarama ve Cam filtrelerini bulup ekleme gösterimi.",
    "photoDemo": "Klonlama damgası ile logoyu silme, teraryumu adaçayı yeşili bir degradenin üzerine kesip yerleştirme, Film grenleri, Vinyet, Bölünmüş tonlama ve Netlik ekleme ve maskeli Gauss bulanıklığı ile gölgeyi yumuşatma gösterimi.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Pek çok kişi gibi benim de dijital sanat dünyasına ilk adımım, on yılı aşkın süre önce Procreate ile oldu. İlk Apple Pencil çıktığında sihir gibiydi. Donanım bugünün ölçütlerine göre yavaş olsa da o kadar iyi yapılmıştı ki gerçekten kâğıt üzerinde kalemle çiziyormuş hissi veriyordu.\n\nBir çizim uygulaması ilk kez mobil bir cihaz için tamamen optimize edilmişti; kalem hareketini tahmin ederek izliyor, fırça ve işleme motorlarını GPU üzerinde çalıştırıyordu. Ardından bunun üzerine temiz ve minimalist bir arayüz eklediler. Bu da zamanla modern çizim uygulamalarının sektör standardı oldu.\n\nSketch çalışma alanı, köklerimize bir saygı duruşudur. Herkesin başladığı yer.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Sketch çalışma alanındaki büyük bir ağacın altındaki bir trenin mürekkepli çizimi; burada çizim ekranı dolduruyor ve kenarlarda birkaç araç bulunuyor."
          },
          "links": [
            {
              "title": "Fırça araçları",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Kalem",
              "slug": "input/pen"
            },
            {
              "title": "Zen modu",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Ciddi biçimde çizgi roman veya manga çalışmaya başladığınızda basit araçlar artık yetmez. Kement dolgusu en iyi dostunuz olur, maskelerin gerekli bir kötülük olduğunu kabullenmeyi öğrenirsiniz.\n\nProfesyonel illüstrasyon iş akışları için pek çok araç var; CSP ve MediBang genellikle insanların ilk öğrendikleri oluyor. İkisi de harika, kullanımı kolay ve sezgisel yazılımlar. Süreci takip etmeniz yeterli, sonuç genellikle iyi olur.\n\nGerçek birer iş gücü olsalar da yavaşlar; tüm görüntü işleme ve birleştirmenin GPU yerine CPU üzerinde yapıldığı bir dönem için tasarlanmışlar. Bu yüzden Fresco ve Rebelle gibi modern uygulamaların güçlü, gerçekçi fırça motorlarına hiçbir zaman yetişemediler.\n\nPaint çalışma alanı, fiziksel resim malzemelerinin simülasyonunu dijital illüstrasyona taşır.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Paint çalışma alanında, tuvalin yanında fırçalar, renkler ve katmanlar bulunan, gün batımında deniz kenarındaki bir evin yağlıboya tablosu."
          },
          "links": [
            {
              "title": "İllüstrasyon eğitimi",
              "slug": "illustration"
            },
            {
              "title": "Dolgu araçları",
              "slug": "drawing/fill"
            },
            {
              "title": "Maskeler",
              "slug": "layers/masks"
            },
            {
              "title": "Karıştırma, yayılma ve kıllar",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Mobil cihazlar her gün daha fazla şey yapabiliyor. OLED ekranlar her yerde gibi görünüyor ve eski telefonum bile görüntülerini varsayılan olarak P3 HDR biçiminde kaydediyor. SRGB geçmişte kaldı.\n\nBugüne kadar geniş renk gamutlu HDR'ı düzgün destekleyen tek boyama uygulaması Krita. HDR karmaşık ve doğru uygulanması zor. HDR ve geniş gamutlu görüntüleri internette yayımlarken SDR cihazlarda da iyi görünmeleri için kazanç eşlemesini kontrol etmeniz gerekiyor. Elbette renk provası, efekt zincirleri ve diğer tüm temel işlevler olmadan hiçbir fotoğraf düzenleyici tamamlanmış sayılmaz.\n\nPhoto çalışma alanı, yeni nesil geniş gamutlu ekranlar için çarpıcı görseller oluşturmayı mümkün kılar.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Photo çalışma alanında küçük bir teraryumun fotoğrafı; konu, fotoğrafın üstünde seçim katmanı olarak kaydedilmiş."
          },
          "links": [
            {
              "title": "Fotoğraf düzenleme eğitimi",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Filtrelerin uygulanması",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Renk provası",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "it": {
    "intro": "{appName} è un'app open source gratuita per disegnare, dipingere e modificare foto. Si ispira allo zen dei capibara.",
    "overview": "Panoramica",
    "contents": "Contenuti della documentazione",
    "onPage": "In questa pagina",
    "groups": {
      "start": "Iniziare",
      "files": "File",
      "drawing": "Strumenti di disegno",
      "brushes": "Impostazioni del pennello",
      "color": "Colore",
      "layers": "Livelli",
      "filters": "Filtri",
      "selections": "Selezioni",
      "transform": "Trasformazione e immagine",
      "retouch": "Ritocco",
      "colorManagement": "Gestione del colore",
      "customize": "Personalizzazione",
      "input": "Input",
      "illustration": "Tutorial di illustrazione",
      "photo": "Tutorial di fotoritocco"
    },
    "startTitle": "Iniziare",
    "figureSoon": "Immagine in attesa",
    "related": "Vedi anche",
    "previous": "Precedente",
    "next": "Avanti",
    "platform": "Piattaforma",
    "allPlatforms": "Tutte le piattaforme",
    "platformTitle": "Suggerimenti per il tuo dispositivo",
    "platformIntro": "Scegli il tuo dispositivo per visualizzare alcuni suggerimenti al riguardo.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} usa Windows Ink per la penna. Su Windows, Pulsanti della penna elenca un solo pulsante laterale: Pulsante laterale inferiore.",
      "mac": "Se la penna arriva nel punto sbagliato, controlla nelle impostazioni del tablet a quale schermo è associato. Usa Command dove queste guide indicano Ctrl, e Option dove indicano Alt.",
      "linux": "L'app per Linux richiede una sessione Wayland e una scheda grafica che supporti Vulkan. Se la pressione non funziona o il cursore finisce nel punto sbagliato, controlla le impostazioni del tablet del tuo desktop.",
      "ipad": "La maggior parte dei modelli di Apple Pencil supporta pressione e inclinazione, ma Apple Pencil (USB-C) non supporta la pressione. Dita e palmo non disegnano mai.",
      "android": "Usa una penna che supporti la pressione. Uno stilo con punta in gomma conta come un dito, e le dita non disegnano mai."
    },
    "imageOpen": "Apri lo screenshot a dimensione intera",
    "sketchDemo": "Dimostrazione di come disporre gli strumenti mobili, concentrarsi sulla tela, scegliere un pennello verde e regolarne la morbidezza.",
    "paintDemo": "Dimostrazione di come sfumare il cielo con Sfumino pittorico e Sfumino cristallino, poi cercare e aggiungere Posterizza, Tratteggio incrociato e Vetro dal pannello Filtri.",
    "photoDemo": "Dimostrazione di come cancellare un logo con il Timbro clone, scontornare il terrario su una sfumatura verde salvia, aggiungere Grana della pellicola, Vignettatura, Viraggio diviso e Chiarezza e ammorbidire un'ombra con una Sfocatura gaussiana mascherata.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "Come molti altri, ho mosso i primi passi nel mondo dell’arte digitale con Procreate, più di dieci anni fa. Quando uscì il primo Apple Pencil, sembrava magia. Anche se l’hardware era lento rispetto agli standard di oggi, era realizzato così bene da dare davvero la sensazione di disegnare con una penna sulla carta.\n\nEra la prima volta che un’app di disegno veniva ottimizzata completamente per un dispositivo mobile, con tracciamento predittivo della penna e motori di pennelli e rendering basati sulla GPU. Poi ci hanno aggiunto un’interfaccia pulita e minimalista, che è diventata lo standard del settore per le app di disegno moderne.\n\nL’area di lavoro Sketch è un omaggio alle nostre radici. Il luogo da cui tutti iniziano.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Un disegno a inchiostro di un treno sotto un grande albero nell'area di lavoro Sketch, dove il disegno riempie lo schermo e alcuni strumenti si trovano ai bordi."
          },
          "links": [
            {
              "title": "Strumenti pennello",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Penna",
              "slug": "input/pen"
            },
            {
              "title": "Modalità Zen",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Quando inizi a lavorare seriamente a fumetti o manga, gli strumenti semplici non bastano più. Il riempimento con lazo diventa il tuo migliore amico e impari a convivere con quel male necessario che sono le maschere.\n\nCi sono molti strumenti per i flussi di illustrazione professionale; CSP e MediBang sono spesso i primi che si imparano a usare. Sono ottimi programmi, facili da usare e intuitivi. Basta seguire il processo e il risultato di solito viene bene.\n\nPur essendo veri cavalli da lavoro, sono lenti, progettati per un’epoca in cui rendering e composizione venivano eseguiti interamente sulla CPU anziché sulla GPU. Per questo non sono mai riusciti a eguagliare i motori di pennelli potenti e realistici di app moderne come Fresco e Rebelle.\n\nL’area di lavoro Paint porta la simulazione dei materiali fisici nell’illustrazione digitale.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Un dipinto a olio di una casa al mare al tramonto nello spazio di lavoro Paint, con pennelli, colori e strati accanto alla tela."
          },
          "links": [
            {
              "title": "Tutorial di illustrazione",
              "slug": "illustration"
            },
            {
              "title": "Strumenti di riempimento",
              "slug": "drawing/fill"
            },
            {
              "title": "Maschere",
              "slug": "layers/masks"
            },
            {
              "title": "Mescolanza, diffusione e setole",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "I dispositivi mobili sono ogni giorno più capaci. Sembra che gli schermi OLED siano ovunque e il mio vecchio telefono salva le immagini in formato P3 HDR per impostazione predefinita. SRGB appartiene al passato.\n\nA oggi, l’unica app di pittura che supporta correttamente l’HDR ad ampia gamma cromatica è Krita. L’HDR è complicato e difficile da realizzare bene. Quando pubblichi online immagini HDR e ad ampia gamma cromatica, devi controllare la mappatura del guadagno perché siano belle anche sui dispositivi SDR. Naturalmente, nessun editor fotografico è completo senza tutte le funzioni di base: prove colore, catene di effetti e tutto il resto.\n\nL’area di lavoro Photo permette di creare immagini sorprendenti per una nuova generazione di schermi ad ampia gamma cromatica.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Una fotografia di un piccolo terrario nell'area di lavoro Photo, con il soggetto salvato come livello di selezione sopra la foto."
          },
          "links": [
            {
              "title": "Tutorial di fotoritocco",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "Come si applicano i filtri",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Prova colore",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  }
};
