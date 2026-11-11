import { brandTranslations } from './branding.mjs';
// Every locale is rendered to real HTML. Keep the shape identical across translations.
import { pwaContent } from './pwa-content.mjs';
import { additionalContent } from './additional-content.mjs';
export const languages = {
  en: 'English', ja: '日本語', zh: '简体中文', 'zh-Hant': '繁體中文', ko: '한국어',
  es: 'Español', 'pt-BR': 'Português (Brasil)', id: 'Bahasa Indonesia',
  fr: 'Français', de: 'Deutsch', ru: 'Русский', th: 'ไทย',
  vi: 'Tiếng Việt', tr: 'Türkçe', it: 'Italiano',
};
export const content = brandTranslations({
  en: {
    footer: { madeBy: 'Made by Capy Atelier' },
    lang: 'en', locale: 'en_US', name: 'English',
    nav: { privacy: 'Privacy', webDemo: 'Web Demo', download: 'Download', documentation: 'Documentation', home: 'Home', language: 'Language', main: 'Main navigation', skip: 'Skip to content', github: '{appName} on GitHub' },
    home: {
      title: '{appName}',
      description: '{appName} is a cross-platform app for sketching, illustration, and photography, with a powerful GPU-accelerated painting engine.',
      workspaces: 'Workspace',
      slides: {
        sketch: 'An ink drawing of a train beneath a large tree in the Sketch workspace, where the drawing fills the screen and a few tools sit at the edges.',
        paint: 'An oil painting of a house by the sea at sunset in the Paint workspace, with brushes, colors and layers beside the canvas.',
        photo: 'A photograph of a small terrarium in the Photo workspace, with the subject saved as a selection layer above the photo.'
      },
      meta: '{appName} is a cross-platform app for sketching, illustration, and photography, with a powerful GPU-accelerated painting engine.'
    },
    download: {
      title: 'Download', intro: '{appName} is in beta. Expect some rough edges, and {feedback}.', feedback: 'share your feedback on GitHub',
      status: 'Coming soon', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], otherPlatforms: 'Other platforms', joinBeta: 'Join the beta', downloadFor: 'Download {version} · {platform}', openWebApp: 'Open the web app',
      pwa: pwaContent.en,
      variants: { apk: 'APK', flatpak: 'Flatpak', x64: 'x64', arm64: 'ARM64', appleSilicon: 'Apple silicon' },
      copy: 'Copy', copied: 'Copied', flatpakMoved: 'Installed before November 2026? Run this once to keep getting updates:',
      pastVersions: 'Past versions', allReleases: 'Releases on GitHub',
      notesLanguage: 'Release notes are in English.',
      metaReleased: 'Download {appName}, or install it as a web app for offline use.',
      meta: 'Install {appName} as a web app for offline use. Native downloads are coming soon.'
    },
    versions: {
      title: 'Past versions', intro: 'If an update gives you trouble, you can go back to an earlier version.',
      empty: 'No versions have been released yet.',
      version: 'Version {version}', released: 'Released {date}', latest: 'Latest', upcoming: 'Upcoming', files: 'Files', github: 'All files on GitHub',
      meta: 'Every released version of {appName}, with release notes and download links.'
    },
    ipadBeta: {
      title: 'iPad beta',
      intro: 'Try new versions of {appName} on your iPad before they reach the App Store.',
      steps: ["Install Apple's TestFlight app from the App Store.", 'On your iPad, open the {invitation}.', 'Tap Accept, then Install.'],
      links: { invitation: '{appName} beta invitation' },
      meta: 'How to install the {appName} beta on your iPad with TestFlight.'
    },
    androidBeta: {
      title: 'Android tablet beta',
      intro: 'Try new versions of {appName} on your Android tablet before they are released.',
      note: 'Sign in with the Google account you use on your tablet.',
      steps: ['Join the {group}.', 'Open the {test} and accept the invitation.', 'Install {appName} from Google Play on your tablet.'],
      links: { group: '{appName} beta group', test: 'beta page on Google Play' },
      meta: 'How to install the {appName} beta on your Android tablet from Google Play.'
    },
    documentation: {
      title: 'Documentation',
      meta: '{appName} documentation: workspaces, brushes, color, layers, filters, selections, photo editing, and illustration and photo tutorials.'
    },
    privacy: { title: 'Privacy Policy', effectiveDate: 'Effective date', meta: 'How {appName} handles app data, hosting, diagnostics, and support requests.' },
    notFound: { title: 'Page not found', text: 'The requested page does not exist.', action: 'Home' }
  },
  ja: {
    footer: { madeBy: '制作：Capy Atelier' },
    lang: 'ja', locale: 'ja_JP', name: '日本語',
    nav: { privacy: 'プライバシー', webDemo: 'ウェブデモ', download: 'ダウンロード', documentation: 'ドキュメント', home: 'ホーム', language: '言語', main: 'メインナビゲーション', skip: '本文へ移動', github: 'GitHub の {appName}' },
    home: {
      title: '{appName}',
      description: '{appName} は、強力な GPU 加速ペイントエンジンを備えた、スケッチ、イラスト、写真のためのクロスプラットフォームアプリです。',
      workspaces: 'ワークスペース',
      slides: {
        sketch: 'Sketchワークスペースで表示した、大きな木の下の電車を描いたペン画。絵が画面いっぱいに広がり、道具は画面の端にまとまっています。',
        paint: 'Paintワークスペースで表示した、夕暮れの海辺の家を描いた油彩。キャンバスの横にブラシ、色、レイヤーが並んでいます。',
        photo: 'Photoワークスペースで表示した、小さなテラリウムの写真。被写体が選択範囲レイヤーとして写真の上に保存されています。'
      },
      meta: '{appName} は、強力な GPU 加速ペイントエンジンを備えた、スケッチ、イラスト、写真のためのクロスプラットフォームアプリです。'
    },
    download: {
      title: 'ダウンロード', intro: '{appName} は現在ベータ版です。不具合があるかもしれません。{feedback}。', feedback: 'GitHub でご意見をお寄せください',
      status: '公開予定', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], otherPlatforms: 'その他のプラットフォーム', joinBeta: 'ベータに参加', downloadFor: '{version} をダウンロード · {platform}', openWebApp: 'ウェブアプリを開く',
      pwa: pwaContent.ja,
      variants: { apk: 'APK', flatpak: 'Flatpak', x64: 'x64', arm64: 'ARM64', appleSilicon: 'Appleシリコン' },
      copy: 'コピー', copied: 'コピーしました', flatpakMoved: '2026年11月より前にインストールした場合は、更新を受け取り続けるために次のコマンドを一度実行してください：',
      pastVersions: '過去のバージョン', allReleases: 'GitHub のリリース',
      notesLanguage: 'リリースノートは英語です。',
      metaReleased: '{appName} をダウンロードするか、ウェブアプリとしてインストールしてオフラインで使えます。',
      meta: '{appName} のウェブ版をインストールしてオフラインで使えます。ネイティブ版は公開準備中です。'
    },
    versions: {
      title: '過去のバージョン', intro: 'アップデートで問題が起きたときは、以前のバージョンに戻せます。',
      empty: '公開済みのバージョンはまだありません。',
      version: 'バージョン {version}', released: '{date} 公開', latest: '最新', upcoming: '近日公開', files: 'ファイル', github: 'GitHub のすべてのファイル',
      meta: 'これまでに公開した {appName} のすべてのバージョンと、リリースノート、ダウンロードリンク。'
    },
    ipadBeta: {
      title: 'iPad ベータ版',
      intro: 'App Store で公開される前の新しい {appName} を iPad で試せます。',
      steps: ['App Store から Apple の TestFlight アプリをインストールします。', 'iPad で{invitation}を開きます。', '招待を承諾して、{appName} をインストールします。'],
      links: { invitation: '{appName} ベータ版への招待リンク' },
      meta: 'TestFlight を使って iPad に {appName} のベータ版をインストールする方法。'
    },
    androidBeta: {
      title: 'Android タブレット ベータ版',
      intro: '一般公開される前の新しい {appName} を Android タブレットで試せます。',
      note: 'タブレットで使っている Google アカウントでログインしてください。',
      steps: ['{group}に参加します。', '{test}を開き、招待を承諾します。', 'タブレットの Google Play から {appName} をインストールします。'],
      links: { group: '{appName} ベータ版グループ', test: 'Google Play のベータ版ページ' },
      meta: 'Google Play から Android タブレットに {appName} のベータ版をインストールする方法。'
    },
    documentation: {
      title: 'ドキュメント',
      meta: '{appName} のドキュメント。ワークスペース、ブラシ、色、レイヤー、フィルター、選択範囲、写真編集、イラスト制作と写真のチュートリアル。'
    },
    privacy: { title: 'プライバシーポリシー', effectiveDate: '施行日', meta: '{appName} のアプリデータ、ホスティング、診断情報、お問い合わせの取り扱い。' },
    notFound: { title: 'ページが見つかりません', text: '指定されたページは存在しません。', action: 'ホーム' }
  },
  zh: {
    footer: { madeBy: '由 Capy Atelier 制作' },
    lang: 'zh-Hans', locale: 'zh_CN', name: '简体中文',
    nav: { privacy: '隐私', webDemo: '网页演示', download: '下载', documentation: '文档', home: '首页', language: '语言', main: '主导航', skip: '跳转到正文', github: 'GitHub 上的 {appName}' },
    home: {
      title: '{appName}',
      description: '{appName} 是一款跨平台应用，配备强大的 GPU 加速绘画引擎，适用于速写、插画和摄影。',
      workspaces: '工作区',
      slides: {
        sketch: 'Sketch工作区中的一幅钢笔画：大树下的一节电车。画面铺满整个屏幕，少量工具位于屏幕边缘。',
        paint: 'Paint工作区中的一幅油画：日落时分海边的房子，画布旁边是笔刷、颜色和图层。',
        photo: 'Photo工作区中的一张小型生态缸照片，主体已作为选区图层保存在照片上方。'
      },
      meta: '{appName} 是一款跨平台应用，配备强大的 GPU 加速绘画引擎，适用于速写、插画和摄影。'
    },
    download: {
      title: '下载', intro: '{appName} 目前处于测试阶段，可能会有一些小问题，欢迎{feedback}。', feedback: '在 GitHub 上反馈意见',
      status: '即将推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], otherPlatforms: '其他平台', joinBeta: '加入测试', downloadFor: '下载 {version} · {platform}', openWebApp: '打开网页应用',
      pwa: pwaContent.zh,
      variants: { apk: 'APK', flatpak: 'Flatpak', x64: 'x64', arm64: 'ARM64', appleSilicon: 'Apple 芯片' },
      copy: '复制', copied: '已复制', flatpakMoved: '在 2026 年 11 月之前安装的？请运行一次以下命令以继续接收更新：',
      pastVersions: '历史版本', allReleases: 'GitHub 上的发布页面',
      notesLanguage: '发布说明为英文。',
      metaReleased: '下载 {appName}，或将其安装为网页应用以便离线使用。',
      meta: '安装 {appName} 网页应用，即可离线使用。原生版本即将推出。'
    },
    versions: {
      title: '历史版本', intro: '如果更新后遇到问题，可以换回之前的版本。',
      empty: '目前还没有发布任何版本。',
      version: '版本 {version}', released: '发布于 {date}', latest: '最新', upcoming: '即将推出', files: '文件', github: 'GitHub 上的所有文件',
      meta: '{appName} 已发布的所有版本，附发布说明和下载链接。'
    },
    ipadBeta: {
      title: 'iPad 测试版',
      intro: '在新版本登陆 App Store 之前，先在 iPad 上试用 {appName}。',
      steps: ['从 App Store 安装 Apple 的 TestFlight 应用。', '在 iPad 上打开{invitation}。', '接受邀请，然后安装 {appName}。'],
      links: { invitation: '{appName} 测试版邀请链接' },
      meta: '如何通过 TestFlight 在 iPad 上安装 {appName} 测试版。'
    },
    androidBeta: {
      title: 'Android 平板测试版',
      intro: '在新版本正式发布之前，先在 Android 平板上试用 {appName}。',
      note: '请登录你在平板上使用的 Google 账号。',
      steps: ['加入{group}。', '打开{test}并接受邀请。', '在平板上从 Google Play 安装 {appName}。'],
      links: { group: '{appName} 测试版群组', test: 'Google Play 测试版页面' },
      meta: '如何从 Google Play 在 Android 平板上安装 {appName} 测试版。'
    },
    documentation: {
      title: '文档',
      meta: '{appName}文档：工作区、画笔、颜色、图层、滤镜、选区、照片编辑，以及插画与照片教程。'
    },
    privacy: { title: '隐私政策', effectiveDate: '生效日期', meta: '{appName} 如何处理应用数据、网站托管、诊断信息和支持请求。' },
    notFound: { title: '页面不存在', text: '找不到所请求的页面。', action: '首页' }
  },
  'zh-Hant': {
    footer: { madeBy: '由 Capy Atelier 製作' },
    lang: 'zh-Hant', locale: 'zh_TW', name: '繁體中文',
    nav: { privacy: '隱私權', webDemo: '網頁示範', download: '下載', documentation: '文件', home: '首頁', language: '語言', main: '主導航', skip: '跳至主要內容', github: 'GitHub 上的 {appName}' },
    home: {
      title: '{appName}',
      description: '{appName}是一款跨平台應用程式，配備強大的 GPU 加速繪畫引擎，適用於速寫、插畫和攝影。',
      workspaces: '工作區',
      slides: {
        sketch: 'Sketch工作區中的一幅鋼筆畫：大樹下的一節電車。畫面鋪滿整個螢幕，少量工具位於螢幕邊緣。',
        paint: 'Paint工作區中的一幅油畫：日落時分海邊的房子，畫布旁邊是筆刷、色彩和圖層。',
        photo: 'Photo工作區中的一張小型生態缸照片，主體已作為選取範圍圖層儲存在照片上方。'
      },
      meta: '{appName}是一款跨平台應用程式，配備強大的 GPU 加速繪畫引擎，適用於速寫、插畫和攝影。'
    },
    download: {
      title: '下載', intro: '{appName} 目前處於測試階段，可能會有一些小問題，歡迎{feedback}。', feedback: '在 GitHub 上回饋意見',
      status: '即將推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], otherPlatforms: '其他平台', joinBeta: '加入測試', downloadFor: '下載 {version} · {platform}', openWebApp: '開啟網頁應用程式',
      pwa: pwaContent['zh-Hant'],
      variants: { apk: 'APK', flatpak: 'Flatpak', x64: 'x64', arm64: 'ARM64', appleSilicon: 'Apple 晶片' },
      copy: '複製', copied: '已複製', flatpakMoved: '在 2026 年 11 月之前安裝的？請執行一次以下指令以繼續接收更新：',
      pastVersions: '歷史版本', allReleases: 'GitHub 上的釋出頁面',
      notesLanguage: '釋出說明為英文。',
      metaReleased: '下載 {appName}，或將其安裝為網頁應用程式以便離線使用。',
      meta: '安裝 {appName} 網頁應用程式，即可離線使用。原生版本即將推出。'
    },
    versions: {
      title: '歷史版本', intro: '如果更新後遇到問題，可以換回之前的版本。',
      empty: '目前還沒有釋出任何版本。',
      version: '版本 {version}', released: '釋出於 {date}', latest: '最新', upcoming: '即將推出', files: '檔案', github: 'GitHub 上的所有檔案',
      meta: '{appName} 已釋出的所有版本，附釋出說明和下載連結。'
    },
    ipadBeta: {
      title: 'iPad 測試版',
      intro: '在新版本登陸 App Store 之前，先在 iPad 上試用 {appName}。',
      steps: ['從 App Store 安裝 Apple 的 TestFlight 應用程式。', '在 iPad 上開啟{invitation}。', '接受邀請，然後安裝 {appName}。'],
      links: { invitation: '{appName} 測試版邀請連結' },
      meta: '如何透過 TestFlight 在 iPad 上安裝 {appName} 測試版。'
    },
    androidBeta: {
      title: 'Android 平板測試版',
      intro: '在新版本正式釋出之前，先在 Android 平板上試用 {appName}。',
      note: '請登入你在平板上使用的 Google 帳號。',
      steps: ['加入{group}。', '開啟{test}並接受邀請。', '在平板上從 Google Play 安裝 {appName}。'],
      links: { group: '{appName} 測試版群組', test: 'Google Play 測試版頁面' },
      meta: '如何從 Google Play 在 Android 平板上安裝 {appName} 測試版。'
    },
    documentation: {
      title: '文件',
      meta: '{appName}文件：工作區、筆刷、色彩、圖層、濾鏡、選取範圍、照片編輯，以及插畫與照片教學。'
    },
    privacy: { title: '隱私權政策', effectiveDate: '生效日期', meta: '{appName} 如何處理應用程式資料、網站託管、診斷資訊和支援請求。' },
    notFound: { title: '頁面不存在', text: '找不到所請求的頁面。', action: '首頁' }
  },
  ko: {
    footer: { madeBy: 'Capy Atelier 제작' },
    lang: 'ko', locale: 'ko_KR', name: '한국어',
    nav: { privacy: '개인정보', webDemo: '웹 데모', download: '다운로드', documentation: '문서', home: '홈', language: '언어', main: '주요 탐색', skip: '본문으로 건너뛰기', github: 'GitHub의 {appName}' },
    home: {
      title: '{appName}',
      description: '{appName}는 강력한 GPU 가속 페인팅 엔진을 갖춘, 스케치와 일러스트, 사진을 위한 크로스 플랫폼 앱입니다.',
      workspaces: '작업 공간',
      slides: {
        sketch: 'Sketch 작업 공간에 표시한, 큰 나무 아래의 전차를 그린 펜화. 그림이 화면을 가득 채우고 몇 가지 도구만 가장자리에 있습니다.',
        paint: 'Paint 작업 공간에 표시한, 해 질 녘 바닷가의 집을 그린 유화. 캔버스 옆에 브러시, 색상, 레이어가 있습니다.',
        photo: 'Photo 작업 공간에 표시한 작은 테라리움 사진. 피사체가 사진 위에 선택 영역 레이어로 저장되어 있습니다.'
      },
      meta: '{appName}는 강력한 GPU 가속 페인팅 엔진을 갖춘, 스케치와 일러스트, 사진을 위한 크로스 플랫폼 앱입니다.'
    },
    download: {
      title: '다운로드', intro: '{appName}는 현재 베타 단계입니다. 다소 불안정할 수 있습니다. {feedback}.', feedback: 'GitHub에서 의견을 보내 주세요',
      status: '출시 예정', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], otherPlatforms: '다른 플랫폼', joinBeta: '베타 참여', downloadFor: '{version} 다운로드 · {platform}', openWebApp: '웹 앱 열기',
      pwa: pwaContent.ko,
      variants: { apk: 'APK', flatpak: 'Flatpak', x64: 'x64', arm64: 'ARM64', appleSilicon: 'Apple 실리콘' },
      copy: '복사', copied: '복사됨', flatpakMoved: '2026년 11월 이전에 설치했다면 계속 업데이트를 받을 수 있도록 다음 명령을 한 번 실행하세요:',
      pastVersions: '이전 버전', allReleases: 'GitHub 릴리스',
      notesLanguage: '릴리스 노트는 영어로 제공됩니다.',
      metaReleased: '{appName}를 다운로드하거나 웹 앱으로 설치해 오프라인으로 사용하세요.',
      meta: '{appName} 웹 앱을 설치해 오프라인으로 사용하세요. 네이티브 버전은 출시 예정입니다.'
    },
    versions: {
      title: '이전 버전', intro: '업데이트 후 문제가 생기면 이전 버전으로 되돌릴 수 있습니다.',
      empty: '아직 출시된 버전이 없습니다.',
      version: '버전 {version}', released: '{date} 출시', latest: '최신', upcoming: '출시 예정', files: '파일', github: 'GitHub의 모든 파일',
      meta: '지금까지 출시된 {appName}의 모든 버전과 릴리스 노트, 다운로드 링크.'
    },
    ipadBeta: {
      title: 'iPad 베타',
      intro: 'App Store에 출시되기 전에 새 버전의 {appName}를 iPad에서 사용해 보세요.',
      steps: ['App Store에서 Apple의 TestFlight 앱을 설치합니다.', 'iPad에서 {invitation}를 엽니다.', '초대를 수락하고 {appName}를 설치합니다.'],
      links: { invitation: '{appName} 베타 초대 링크' },
      meta: 'TestFlight로 iPad에 {appName} 베타를 설치하는 방법.'
    },
    androidBeta: {
      title: 'Android 태블릿 베타',
      intro: '정식 출시 전에 새 버전의 {appName}를 Android 태블릿에서 사용해 보세요.',
      note: '태블릿에서 사용하는 Google 계정으로 로그인하세요.',
      steps: ['{group}에 가입합니다.', '{test}를 열고 초대를 수락합니다.', '태블릿의 Google Play에서 {appName}를 설치합니다.'],
      links: { group: '{appName} 베타 그룹', test: 'Google Play 베타 페이지' },
      meta: 'Google Play에서 Android 태블릿에 {appName} 베타를 설치하는 방법.'
    },
    documentation: {
      title: '문서',
      meta: '{appName} 문서: 작업 영역, 브러시, 색상, 레이어, 필터, 선택 영역, 사진 편집, 일러스트와 사진 튜토리얼.'
    },
    privacy: { title: '개인정보 처리방침', effectiveDate: '시행일', meta: '{appName}의 앱 데이터, 호스팅, 진단 정보 및 문의 처리 방침.' },
    notFound: { title: '페이지를 찾을 수 없습니다', text: '요청한 페이지가 존재하지 않습니다.', action: '홈' }
  },
  ...additionalContent
});
