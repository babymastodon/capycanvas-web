import { brandTranslations } from './branding.mjs';
import { additionalDocsUI } from './additional-docs.mjs';
export const docsUI = brandTranslations({
  "en": {
    "intro": "{appName} is a free, open-source app for sketching, painting and photo editing. It is inspired by the zen of capybaras.",
    "overview": "Overview",
    "contents": "Documentation contents",
    "onPage": "On this page",
    "groups": {
      "start": "Getting started",
      "files": "Files",
      "drawing": "Drawing tools",
      "brushes": "Brush settings",
      "color": "Color",
      "layers": "Layers",
      "filters": "Filters",
      "selections": "Selections",
      "transform": "Transform and image",
      "retouch": "Retouching",
      "colorManagement": "Color management",
      "customize": "Customizing",
      "input": "Input",
      "illustration": "Illustration tutorial",
      "photo": "Photo editing tutorial"
    },
    "startTitle": "Getting started",
    "figureSoon": "Image pending",
    "related": "See also",
    "previous": "Previous",
    "next": "Next",
    "platform": "Platform",
    "allPlatforms": "All platforms",
    "platformTitle": "Tips for your device",
    "platformIntro": "Choose your device to see a few tips for it.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} uses Windows Ink for the pen. On Windows, Pen buttons lists one side button, the Lower side button.",
      "mac": "If the pen lands in the wrong place, check which screen your tablet is mapped to in its settings. Use Command wherever these guides say Ctrl, and Option wherever they say Alt.",
      "linux": "The Linux app needs a Wayland session and a graphics card that supports Vulkan. If pressure doesn't work or the cursor lands in the wrong place, check your desktop's tablet settings.",
      "ipad": "Most Apple Pencil models support pressure and tilt, but Apple Pencil (USB-C) doesn't support pressure. Fingers and palms never draw.",
      "android": "Use a pen that supports pressure. A rubber-tipped stylus counts as a finger, and fingers never draw."
    },
    "imageOpen": "Open full-size screenshot",
    "sketchDemo": "Demonstration of arranging floating tools, focusing on the canvas, choosing a green brush and adjusting its softness.",
    "paintDemo": "Demonstration of blending the sky with Painterly Blender and Crystal Blender, then finding and adding Posterize, Crosshatch and Glass in the Filters panel.",
    "photoDemo": "Demonstration of hiding a logo with the Clone Stamp, cutting out the terrarium onto a sage gradient, adding Film Grain, Vignette, Split Tone and Clarity, and softening a cast shadow with masked Gaussian Blur.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "My first foray into the digital art world (like many others) was with Procreate over a decade ago. Back when the apple pencil first came out, it was magic. Even though the hardware was slow by today's standards, it was so well done that it gave a real pen-to-paper feeling.\n\nThis was the first time a drawing app was fully optimized for a mobile device, using predictive pen tracking and GPU powered brush+rendering engines. Then they dropped a clean and minimalist UI on top of it, which then became the industry standard for all modern drawing apps.\n\nThe Sketch workspace is a tribute to our roots. The place where everyone starts out.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "An ink drawing of a train beneath a large tree in Sketch, with the drawing filling the screen and tools at the edges."
          },
          "links": [
            {
              "title": "Brush tools",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Pen",
              "slug": "input/pen"
            },
            {
              "title": "Zen mode",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Once you get into proper comic/manga work, the simple tools don't cut it anymore. Lasso fill is your best friend, and you learn to live with the necessary evil of masks.\n\nThere are many tools out there for professional illustration workflows, CSP and medibang are often what people learn first. And they are great, easy-to-use and inuitive software. All you have to do is follow the process and it usually turns out OK.\n\nWhile they are true workhorses, they are slow, built for an era where all rendering and compositing was done on the CPU instead of the GPU. So they never were able to match the powerful, realistic paintbrush engines in modern apps like Fresco and Rebelle.\n\nThe Paint workspace brings simulated physical media to digital illustration.",
          "image": {
            "shot": "showcase/paint",
            "alt": "An oil painting of a house by the sea at sunset in Paint, with brushes, colors and layers beside the canvas."
          },
          "links": [
            {
              "title": "Illustration tutorial",
              "slug": "illustration"
            },
            {
              "title": "Fill tools",
              "slug": "drawing/fill"
            },
            {
              "title": "Masks",
              "slug": "layers/masks"
            },
            {
              "title": "Mixing, bleed and bristles",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Mobile devices are becoming more capable every day. It seems like OLED screens are everywhere, and my old phone saves its images in P3 HDR format by default. SRGB is a thing of the past.\n\nTo this date, the only painting app that properly supports wide gamut HDR is Krita. HDR is a complicated beast and is hard to get right. When you publish HDR and wide-gamut images online, you need to control the gain mapping so that it still looks good on SDR devices. Of course no photo editor is complete without the all of the basics (proofing, effect chains, the whole enchilada)\n\nThe Photo workspace enables stunning visuals for a new generation of wide-gamut screens.",
          "image": {
            "shot": "showcase/photo",
            "alt": "A terrarium photograph in Photo, with the subject saved as a selection layer above the photo."
          },
          "links": [
            {
              "title": "Photo editing tutorial",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "How filters apply",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Proof",
              "slug": "color-management/proof"
            }
          ]
        }
      },
      "tools": {
        "title": "Tools",
        "columns": [
          "Area",
          "Tools and operations"
        ],
        "rows": [
          {
            "areas": [
              {
                "title": "Brushes",
                "slug": "drawing/brush-tools"
              }
            ],
            "text": "Pencil, charcoal, chalk, pastel, crayon, ink, watercolor, oil and airbrush; pressure and tilt, Paper texture, smoothing and color mixing."
          },
          {
            "areas": [
              {
                "title": "Layers",
                "slug": "layers/types"
              }
            ],
            "text": "Paint, Vector, Object and Paper layers; groups, clipping, masks, blend modes, editable fills and saved selections."
          },
          {
            "areas": [
              {
                "title": "Selections",
                "slug": "selections/tools"
              }
            ],
            "text": "Rectangle, ellipse, lasso, polygon, contiguous color and tonal range; Quick Mask, feathering and saved selections."
          },
          {
            "areas": [
              {
                "title": "Effects",
                "slug": "filters/how-filters-apply"
              }
            ],
            "text": "Linked non-destructive effect chains, adjustment layers and effect masks; Curves, Levels, color grading, blur, sharpening, halftone and painterly effects."
          },
          {
            "areas": [
              {
                "title": "Retouching",
                "slug": "retouch/clone-heal"
              }
            ],
            "text": "Clone Stamp, Healing and Spot Healing, dodge and burn, blenders and Liquify."
          },
          {
            "areas": [
              {
                "title": "Color",
                "slug": "color-management/color-spaces"
              }
            ],
            "text": "sRGB, Display P3, Adobe RGB and ProPhoto RGB; ICC profiles, 8/16-bit SDR, 16/32-bit float HDR, print proofing and gamut warnings."
          },
          {
            "areas": [
              {
                "title": "Drawing",
                "slug": "drawing/fill"
              },
              {
                "title": "transforms",
                "slug": "transform/move-transform"
              }
            ],
            "text": "Reference-layer fills, Enclose and Fill, gradients, shapes and vector paths, rulers, crop, resize, perspective and mesh warp."
          },
          {
            "areas": [
              {
                "title": "Workspace",
                "slug": "customize/workspaces"
              }
            ],
            "text": "Docked or floating panels, tab groups, configurable toolbars and shortcuts, saved layouts and Zen mode."
          }
        ]
      }
    }
  },
  "ja": {
    "intro": "{appName}は、スケッチ、ペイント、写真編集のための、無料でオープンソースのアプリです。カピバラの禅のような穏やかさに着想を得ています。",
    "overview": "目次",
    "contents": "ドキュメントの目次",
    "onPage": "このページの内容",
    "groups": {
      "start": "基本操作",
      "files": "ファイル",
      "drawing": "描画ツール",
      "brushes": "ブラシ設定",
      "color": "色",
      "layers": "レイヤー",
      "filters": "フィルター",
      "selections": "選択範囲",
      "transform": "変形と画像",
      "retouch": "レタッチ",
      "colorManagement": "カラーマネジメント",
      "customize": "カスタマイズ",
      "input": "入力",
      "illustration": "イラストのチュートリアル",
      "photo": "写真編集のチュートリアル"
    },
    "startTitle": "使い始めるには",
    "figureSoon": "画像未掲載",
    "related": "関連項目",
    "previous": "前へ",
    "next": "次へ",
    "platform": "プラットフォーム",
    "allPlatforms": "すべて",
    "platformTitle": "デバイス別のヒント",
    "platformIntro": "お使いのデバイスを選ぶと、そのデバイス向けのヒントが表示されます。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}はペンにWindows Inkを使います。Windowsでは、「ペンボタン」に表示されるサイドボタンは「下のサイドボタン」の1つだけです。",
      "mac": "ペンの位置がずれる場合は、タブレットの設定で割り当てている画面を確認してください。このガイドでCtrlと書かれている箇所ではCommandを、Altと書かれている箇所ではOptionを使ってください。",
      "linux": "Linux版のアプリには、Waylandセッションと、Vulkanに対応したグラフィックカードが必要です。筆圧が効かない、またはカーソルの位置がずれる場合は、デスクトップのタブレット設定を確認してください。",
      "ipad": "ほとんどのApple Pencilは筆圧と傾きに対応していますが、Apple Pencil（USB-C）は筆圧に対応していません。指や手のひらでは描画されません。",
      "android": "筆圧に対応したペンを使ってください。先端がゴムのスタイラスは指として扱われ、指では描画されません。"
    },
    "imageOpen": "スクリーンショットを原寸で開く",
    "sketchDemo": "フローティングツールを配置し、キャンバスに集中できる表示に切り替え、緑色のブラシを選んで柔らかさを調整するデモ。",
    "paintDemo": "絵画風混色と結晶混色で空を混色し、フィルターパネルで階調化、クロスハッチ、ガラスを探して追加するデモ。",
    "photoDemo": "コピースタンプでロゴを消し、テラリウムを切り抜いてセージ色のグラデーションに重ね、フィルム粒子、周辺光量補正、明暗の色分け、明瞭度を加え、マスクしたガウスぼかしで落ち影をやわらげるデモ。",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "私が初めてデジタルアートの世界に足を踏み入れたのは、多くの人と同じく、十年以上前のProcreateでした。Apple Pencilが初めて登場した頃は、魔法のようでした。今の基準ではハードウェアは遅かったものの、よく作り込まれていて、本当に紙にペンで描いているような感覚がありました。\n\n描画アプリがモバイル端末向けに徹底的に最適化されたのは、これが初めてでした。ペンの動きを予測して追跡し、ブラシと描画のエンジンをGPUで動かしていました。その上にすっきりとした最小限のUIが加わり、その後、現代の描画アプリ全体の業界標準になりました。\n\nSketchワークスペースは、私たちの原点へのオマージュです。誰もが描き始める場所です。",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Sketchワークスペースで表示した、大きな木の下の電車を描いたペン画。絵が画面いっぱいに広がり、道具は画面の端にまとまっています。"
          },
          "links": [
            {
              "title": "ブラシツール",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "ペン",
              "slug": "input/pen"
            },
            {
              "title": "集中モード",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "本格的に漫画を描くようになると、シンプルな道具だけでは足りなくなります。投げ縄塗りつぶしが頼れる相棒になり、必要悪であるマスクとも付き合っていくことになります。\n\nプロのイラスト制作に向けた道具は数多くあり、最初に覚えるのはCSPやMediBangという人が多いでしょう。どちらも優れた、使いやすく直感的なソフトです。手順に沿って進めれば、たいていうまく仕上がります。\n\n頼れる働き者ではありますが、動作は遅く、描画と合成をすべてGPUではなくCPUで行っていた時代に作られています。そのため、FrescoやRebelleといった現代のアプリの、強力でリアルなブラシエンジンには追いつけませんでした。\n\nPaintワークスペースは、実際の画材のシミュレーションをデジタルイラストにもたらします。",
          "image": {
            "shot": "showcase/paint",
            "alt": "Paintワークスペースで表示した、夕暮れの海辺の家を描いた油彩。キャンバスの横にブラシ、色、レイヤーが並んでいます。"
          },
          "links": [
            {
              "title": "イラストのチュートリアル",
              "slug": "illustration"
            },
            {
              "title": "塗りつぶしツール",
              "slug": "drawing/fill"
            },
            {
              "title": "マスク",
              "slug": "layers/masks"
            },
            {
              "title": "混色、にじみ、筆毛",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "モバイル端末は日々進化しています。どこを見てもOLED画面があるようで、私の古いスマートフォンでさえ、標準で画像をP3 HDR形式で保存します。SRGBはもう過去のものです。\n\n今のところ、広色域HDRにきちんと対応している描画アプリはKritaだけです。HDRは複雑で、正しく扱うのは難しいものです。HDRや広色域の画像をオンラインで公開するときは、SDR端末でも見栄えがよくなるよう、ゲインマッピングを調整する必要があります。もちろん、プルーフやエフェクトチェーンなど、基本機能をひととおり備えてこそ写真編集ソフトです。\n\nPhotoワークスペースは、新世代の広色域画面で目を見張るような表現を可能にします。",
          "image": {
            "shot": "showcase/photo",
            "alt": "Photoワークスペースで表示した、小さなテラリウムの写真。被写体が選択範囲レイヤーとして写真の上に保存されています。"
          },
          "links": [
            {
              "title": "写真編集のチュートリアル",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "フィルターの適用のしくみ",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "校正表示",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "zh": {
    "intro": "{appName}是一款免费、开源的速写、绘画与照片编辑应用。它的灵感来自水豚的禅意。",
    "overview": "概览",
    "contents": "文档目录",
    "onPage": "本页内容",
    "groups": {
      "start": "开始使用",
      "files": "文件",
      "drawing": "绘画工具",
      "brushes": "画笔设置",
      "color": "颜色",
      "layers": "图层",
      "filters": "滤镜",
      "selections": "选区",
      "transform": "变换和图像",
      "retouch": "修饰",
      "colorManagement": "色彩管理",
      "customize": "自定义",
      "input": "输入",
      "illustration": "插画教程",
      "photo": "照片编辑教程"
    },
    "startTitle": "开始使用",
    "figureSoon": "图片待补充",
    "related": "另请参阅",
    "previous": "上一篇",
    "next": "下一篇",
    "platform": "平台",
    "allPlatforms": "所有平台",
    "platformTitle": "设备小贴士",
    "platformIntro": "选择你的设备，查看适用于它的几条提示。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}使用Windows Ink处理笔输入。在Windows上，“笔按钮”中只列出一个侧按钮，即“下侧按钮”。",
      "mac": "如果笔的落点不对，请在数位板设置中检查它映射到了哪个屏幕。本指南中写作Ctrl的地方请使用Command，写作Alt的地方请使用Option。",
      "linux": "Linux版应用需要Wayland会话和支持Vulkan的显卡。如果压感不起作用或光标位置不对，请检查桌面环境中的数位板设置。",
      "ipad": "大多数Apple Pencil都支持压感和倾斜，但Apple Pencil（USB-C）不支持压感。手指和手掌不会画出笔画。",
      "android": "请使用支持压感的笔。橡胶头触控笔会被当作手指，而手指不会画出笔画。"
    },
    "imageOpen": "打开原尺寸截图",
    "sketchDemo": "演示如何摆放浮动工具、专注画布、选择绿色画笔并调整其柔软度。",
    "paintDemo": "演示如何用绘画混色和晶体混色融合天空，再在滤镜面板中查找并添加色调分离、交叉排线和玻璃。",
    "photoDemo": "演示如何用仿制图章去掉标志，把生态缸抠出放到鼠尾草绿渐变上，添加胶片颗粒、暗角、分离色调和清晰度，再用加了蒙版的高斯模糊柔化投影。",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "和许多人一样，我第一次踏入数字艺术的世界，是十多年前开始使用Procreate的时候。Apple Pencil刚推出时，简直像魔法一样。虽然按今天的标准来看，当时的硬件很慢，但它做得非常出色，真的让人有了用笔在纸上画画的感觉。\n\n这是绘画应用第一次针对移动设备进行全面优化：预测笔的运动轨迹，并用GPU驱动画笔和渲染引擎。之后，他们又加上了干净、极简的界面，后来成为现代绘画应用的行业标准。\n\nSketch工作区是对我们初心的致敬。这里是每个人开始画画的地方。",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Sketch工作区中的一幅钢笔画：大树下的一节电车。画面铺满整个屏幕，少量工具位于屏幕边缘。"
          },
          "links": [
            {
              "title": "画笔工具",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "笔",
              "slug": "input/pen"
            },
            {
              "title": "专注模式",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "当你开始认真创作漫画时，简单的工具就不够用了。套索填充成了你最好的伙伴，而蒙版虽然麻烦，却也是你必须学会接受的必要工具。\n\n专业插画工作流程有许多工具可选，CSP和MediBang往往是大家最先学会的。它们都很出色，易用又直观。只要按流程操作，通常就能得到不错的结果。\n\n它们虽然是可靠的主力工具，但速度较慢，诞生于所有渲染和合成都由CPU而非GPU完成的时代。因此，它们始终无法媲美Fresco和Rebelle等现代应用中强大而逼真的画笔引擎。\n\nPaint工作区将实体画材的模拟带入数字插画。",
          "image": {
            "shot": "showcase/paint",
            "alt": "Paint工作区中的一幅油画：日落时分海边的房子，画布旁边是笔刷、颜色和图层。"
          },
          "links": [
            {
              "title": "插画教程",
              "slug": "illustration"
            },
            {
              "title": "填充工具",
              "slug": "drawing/fill"
            },
            {
              "title": "蒙版",
              "slug": "layers/masks"
            },
            {
              "title": "混色、洇色和鬃毛",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "移动设备的能力每天都在提升。OLED屏幕似乎随处可见，就连我的旧手机也默认将照片保存为P3 HDR格式。SRGB已经是过去的事了。\n\n到目前为止，唯一真正支持广色域HDR的绘画应用是Krita。HDR很复杂，要做好并不容易。在网上发布HDR和广色域图像时，你需要控制增益映射，让图像在SDR设备上也好看。当然，照片编辑器也少不了全部基本功能：软打样、效果链等等，一样都不能少。\n\nPhoto工作区为新一代广色域屏幕带来令人惊艳的视觉效果。",
          "image": {
            "shot": "showcase/photo",
            "alt": "Photo工作区中的一张小型生态缸照片，主体已作为选区图层保存在照片上方。"
          },
          "links": [
            {
              "title": "照片编辑教程",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "滤镜的作用方式",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "校样",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "zh-Hant": {
    "intro": "{appName}是一款免費、開源的速寫、繪畫與照片編輯應用程式。它的靈感來自水豚的禪意。",
    "overview": "概覽",
    "contents": "文件目錄",
    "onPage": "本頁內容",
    "groups": {
      "start": "開始使用",
      "files": "檔案",
      "drawing": "繪畫工具",
      "brushes": "筆刷設定",
      "color": "色彩",
      "layers": "圖層",
      "filters": "濾鏡",
      "selections": "選取範圍",
      "transform": "變形和影像",
      "retouch": "修飾",
      "colorManagement": "色彩管理",
      "customize": "自訂",
      "input": "輸入",
      "illustration": "插畫教學",
      "photo": "照片編輯教學"
    },
    "startTitle": "開始使用",
    "figureSoon": "圖片待補充",
    "related": "另請參閱",
    "previous": "上一篇",
    "next": "下一篇",
    "platform": "平台",
    "allPlatforms": "所有平台",
    "platformTitle": "裝置使用提示",
    "platformIntro": "選擇你的裝置，檢視適用於它的幾條提示。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}使用Windows Ink處理筆輸入。在Windows上，「繪圖筆按鈕」中只列出一個側按鈕，即「下側按鈕」。",
      "mac": "如果筆的落點不對，請在數位板設定中檢查它對映到了哪個螢幕。本指南中寫作Ctrl的地方請使用Command，寫作Alt的地方請使用Option。",
      "linux": "Linux 版應用程式需要Wayland 工作階段和支援Vulkan的顯示卡。如果筆壓不起作用或游標位置不對，請檢查桌面環境中的數位板設定。",
      "ipad": "大多數Apple Pencil都支援筆壓和傾斜，但Apple Pencil（USB-C）不支援筆壓。手指和手掌不會畫出筆畫。",
      "android": "請使用支援筆壓的筆。橡膠頭觸控筆會被當作手指，而手指不會畫出筆畫。"
    },
    "imageOpen": "開啟原始大小截圖",
    "sketchDemo": "示範如何擺放浮動工具、專注畫布、選擇綠色筆刷並調整其柔軟度。",
    "paintDemo": "示範如何用繪畫混色和晶體混色融合天空，再在濾鏡面板中尋找並加入色調分離、交叉排線和玻璃。",
    "photoDemo": "示範如何用仿製印章去除標誌，把生態缸去背放到鼠尾草綠漸層上，加入底片顆粒、暗角、分離色調和清晰度，再用加上遮色片的高斯模糊柔化投影。",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "和許多人一樣，我第一次踏入數位藝術的世界，是十多年前開始使用Procreate的時候。Apple Pencil剛推出時，簡直像魔法一樣。雖然以今天的標準來看，當時的硬體很慢，但它做得非常出色，真的讓人有了用筆在紙上畫畫的感覺。\n\n這是繪畫應用程式第一次針對行動裝置進行全面最佳化：預測筆的運動軌跡，並用GPU驅動筆刷與算圖引擎。之後，他們又加上了乾淨、極簡的介面，後來成為現代繪畫應用程式的業界標準。\n\nSketch工作區是對我們初心的致敬。這裡是每個人開始畫畫的地方。",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Sketch工作區中的一幅鋼筆畫：大樹下的一節電車。畫面鋪滿整個螢幕，少量工具位於螢幕邊緣。"
          },
          "links": [
            {
              "title": "筆刷工具",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "筆",
              "slug": "input/pen"
            },
            {
              "title": "專注模式",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "當你開始認真創作漫畫時，簡單的工具就不夠用了。套索填色成了你最好的夥伴，而遮色片雖然麻煩，卻也是你必須學會接受的必要工具。\n\n專業插畫工作流程有許多工具可選，CSP和MediBang往往是大家最先學會的。它們都很出色，易用又直覺。只要按流程操作，通常就能得到不錯的結果。\n\n它們雖然是可靠的主力工具，但速度較慢，誕生於所有算圖和合成都由CPU而非GPU完成的時代。因此，它們始終無法媲美Fresco和Rebelle等現代應用程式中強大而逼真的筆刷引擎。\n\nPaint工作區將實體畫材的模擬帶入數位插畫。",
          "image": {
            "shot": "showcase/paint",
            "alt": "Paint工作區中的一幅油畫：日落時分海邊的房子，畫布旁邊是筆刷、色彩和圖層。"
          },
          "links": [
            {
              "title": "插畫教學",
              "slug": "illustration"
            },
            {
              "title": "填色工具",
              "slug": "drawing/fill"
            },
            {
              "title": "遮罩",
              "slug": "layers/masks"
            },
            {
              "title": "混色、暈染和鬃毛",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "行動裝置的能力每天都在提升。OLED螢幕似乎隨處可見，就連我的舊手機也預設將照片儲存為P3 HDR格式。SRGB已經是過去的事了。\n\n到目前為止，唯一真正支援廣色域HDR的繪畫應用程式是Krita。HDR很複雜，要做好並不容易。在網路上發布HDR和廣色域影像時，你需要控制增益映射，讓影像在SDR裝置上也好看。當然，照片編輯器也少不了全部基本功能：軟打樣、效果鏈等等，一樣都不能少。\n\nPhoto工作區為新一代廣色域螢幕帶來令人驚豔的視覺效果。",
          "image": {
            "shot": "showcase/photo",
            "alt": "Photo工作區中的一張小型生態缸照片，主體已作為選取範圍圖層儲存在照片上方。"
          },
          "links": [
            {
              "title": "照片編輯教學",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "濾鏡的作用方式",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "校樣",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  "ko": {
    "intro": "{appName}는 스케치, 페인팅, 사진 편집을 위한 무료 오픈 소스 앱입니다. 카피바라의 선(禪) 같은 평온함에서 영감을 받았습니다.",
    "overview": "개요",
    "contents": "문서 목차",
    "onPage": "이 페이지의 내용",
    "groups": {
      "start": "시작하기",
      "files": "파일",
      "drawing": "그리기 도구",
      "brushes": "브러시 설정",
      "color": "색상",
      "layers": "레이어",
      "filters": "필터",
      "selections": "선택 영역",
      "transform": "변형과 이미지",
      "retouch": "보정",
      "colorManagement": "색상 관리",
      "customize": "사용자 지정",
      "input": "입력",
      "illustration": "일러스트 튜토리얼",
      "photo": "사진 편집 튜토리얼"
    },
    "startTitle": "시작하기",
    "figureSoon": "이미지 준비 중",
    "related": "관련 항목",
    "previous": "이전",
    "next": "다음",
    "platform": "플랫폼",
    "allPlatforms": "모든 플랫폼",
    "platformTitle": "기기별 도움말",
    "platformIntro": "사용 중인 기기를 선택하면 그 기기에 맞는 도움말을 볼 수 있습니다.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}는 펜 입력에 Windows Ink를 사용합니다. Windows의 펜 버튼에는 측면 버튼으로 아래쪽 측면 버튼 하나만 표시됩니다.",
      "mac": "펜이 엉뚱한 위치에 찍히면 태블릿 설정에서 어느 화면에 연결되어 있는지 확인하세요. 이 가이드에서 Ctrl로 표시된 곳은 Command를, Alt로 표시된 곳은 Option을 사용하세요.",
      "linux": "Linux 앱에는 Wayland 세션과 Vulkan을 지원하는 그래픽 카드가 필요합니다. 필압이 작동하지 않거나 커서 위치가 어긋나면 데스크톱의 태블릿 설정을 확인하세요.",
      "ipad": "대부분의 Apple Pencil은 필압과 기울기를 지원하지만, Apple Pencil(USB-C)은 필압을 지원하지 않습니다. 손가락과 손바닥으로는 그려지지 않습니다.",
      "android": "필압을 지원하는 펜을 사용하세요. 끝이 고무로 된 스타일러스는 손가락으로 인식되며, 손가락으로는 그려지지 않습니다."
    },
    "imageOpen": "원본 크기 스크린샷 열기",
    "sketchDemo": "떠 있는 도구를 배치하고, 캔버스에 집중하고, 녹색 브러시를 선택하고 부드러움을 조절하는 시연.",
    "paintDemo": "회화풍 혼색과 결정 혼색으로 하늘을 섞은 뒤, 필터 패널에서 포스터화, 교차선, 유리를 찾아 추가하는 시연.",
    "photoDemo": "복제 도장으로 로고를 지우고, 테라리움을 오려 세이지색 그라디언트 위에 놓고, 필름 입자, 비네팅, 분할 톤, 선명도를 더한 뒤 마스크한 가우시안 흐림으로 그림자를 부드럽게 하는 시연.",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "많은 사람들처럼 저도 십여 년 전 Procreate로 디지털 아트의 세계에 처음 발을 들였습니다. Apple Pencil이 처음 나왔을 때는 마법 같았습니다. 지금 기준으로 보면 하드웨어는 느렸지만, 워낙 잘 만들어져서 정말 종이에 펜으로 그리는 듯한 느낌이 들었습니다.\n\n드로잉 앱이 모바일 기기에 완전히 최적화된 것은 처음이었습니다. 펜 움직임을 예측해 추적하고, 브러시와 렌더링 엔진을 GPU로 구동했습니다. 그 위에 깔끔하고 간결한 UI를 더했고, 이후 현대 드로잉 앱 전반의 업계 표준이 되었습니다.\n\nSketch 작업 영역은 우리의 뿌리에 바치는 헌사입니다. 누구나 처음 시작하는 곳입니다.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "Sketch 작업 공간에 표시한, 큰 나무 아래의 전차를 그린 펜화. 그림이 화면을 가득 채우고 몇 가지 도구만 가장자리에 있습니다."
          },
          "links": [
            {
              "title": "브러시 도구",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "펜",
              "slug": "input/pen"
            },
            {
              "title": "집중 모드",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "본격적으로 만화를 그리기 시작하면 단순한 도구만으로는 부족해집니다. 올가미 채우기가 가장 든든한 친구가 되고, 필요악인 마스크와 함께 작업하는 법도 배우게 됩니다.\n\n전문 일러스트 작업을 위한 도구는 많고, CSP와 MediBang을 먼저 배우는 사람이 많습니다. 둘 다 훌륭하고 사용하기 쉬우며 직관적인 소프트웨어입니다. 작업 절차를 따르면 대체로 괜찮은 결과가 나옵니다.\n\n믿음직한 주력 도구이기는 하지만, 속도가 느리고 모든 렌더링과 합성을 GPU 대신 CPU로 처리하던 시대에 만들어졌습니다. 그래서 Fresco와 Rebelle 같은 현대 앱의 강력하고 사실적인 브러시 엔진을 따라잡지 못했습니다.\n\nPaint 작업 영역은 실제 화구의 시뮬레이션을 디지털 일러스트에 가져옵니다.",
          "image": {
            "shot": "showcase/paint",
            "alt": "Paint 작업 공간에 표시한, 해 질 녘 바닷가의 집을 그린 유화. 캔버스 옆에 브러시, 색상, 레이어가 있습니다."
          },
          "links": [
            {
              "title": "일러스트 튜토리얼",
              "slug": "illustration"
            },
            {
              "title": "채우기 도구",
              "slug": "drawing/fill"
            },
            {
              "title": "마스크",
              "slug": "layers/masks"
            },
            {
              "title": "혼색, 번짐, 붓털",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "모바일 기기는 날마다 더 많은 일을 해냅니다. OLED 화면은 어디에나 있는 것 같고, 제 오래된 휴대폰도 기본적으로 사진을 P3 HDR 형식으로 저장합니다. SRGB는 이제 과거의 일입니다.\n\n지금까지 넓은 색 영역 HDR을 제대로 지원하는 페인팅 앱은 Krita뿐입니다. HDR은 복잡하고 제대로 구현하기 어렵습니다. HDR과 넓은 색 영역 이미지를 온라인에 공개할 때는 SDR 기기에서도 보기 좋도록 게인 매핑을 조절해야 합니다. 물론 교정, 효과 체인 등 기본 기능을 모두 갖춰야 사진 편집기라고 할 수 있습니다.\n\nPhoto 작업 영역은 새로운 세대의 넓은 색 영역 화면에서 눈길을 사로잡는 시각 표현을 가능하게 합니다.",
          "image": {
            "shot": "showcase/photo",
            "alt": "Photo 작업 공간에 표시한 작은 테라리움 사진. 피사체가 사진 위에 선택 영역 레이어로 저장되어 있습니다."
          },
          "links": [
            {
              "title": "사진 편집 튜토리얼",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "필터 적용 방식",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "교정",
              "slug": "color-management/proof"
            }
          ]
        }
      }
    }
  },
  ...additionalDocsUI
});
