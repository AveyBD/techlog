if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(f.map((e=>o[e]||r(e)))).then((e=>(d(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.713b418b.css",revision:"6db53ba98ea49ae2f73a45d56a252d55"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.8a9d842b.js",revision:"6dcd9d580680fb17603d0493048eb104"},{url:"assets/js/34.e6b8426a.js",revision:"3a470ea05169b1ed0d730c212ff7b928"},{url:"assets/js/35.7cf0e74f.js",revision:"0f04d12e76e4376528b3bbbc2fe242c5"},{url:"assets/js/36.faa18fa6.js",revision:"669d7d34bebc6ec5674da64b16215b3e"},{url:"assets/js/37.2abc9bbd.js",revision:"1f411205cbb785305cde1eb04a2c4b53"},{url:"assets/js/38.cc479dce.js",revision:"4bc3cab5cdf975e307940d9bde1b6fdd"},{url:"assets/js/app.f933210e.js",revision:"a3c972fefb6a1fd4b14cc06225e94927"},{url:"assets/js/layout-Blog.20ae424e.js",revision:"be8e48e28b1c2ffc5e62b0f346c7b4da"},{url:"assets/js/layout-Layout.985ed51b.js",revision:"f5a8aebb7a8c44e7c52e23f5ab7fa3dd"},{url:"assets/js/layout-NotFound.3be86d64.js",revision:"12735bc8b8100ffde45ee2ee2d9918e8"},{url:"assets/js/layout-Slide.b61bc944.js",revision:"53ae875cbda54b867f6d4b198f8fe17a"},{url:"assets/js/page-BlogHome.b06e00d3.js",revision:"01454c345001388618b101e1b6e966f7"},{url:"assets/js/page-Componentdisabled.a1981db3.js",revision:"2c46bfe5008615fcff488fddf08d465c"},{url:"assets/js/page-CustomLayout.90b94678.js",revision:"535a2e7613435b219e144eeedcf7a65e"},{url:"assets/js/page-Encryptionarticle.5773af9c.js",revision:"71c664d6833359e8071ff45ca980f80f"},{url:"assets/js/page-Guides.5eca2538.js",revision:"894f0d29d3057b8c200c7f37d7bfc0bc"},{url:"assets/js/page-IntroPage.a46500da.js",revision:"6e365e25b6dea76abeac7de4258fca4c"},{url:"assets/js/page-MarkdownEnhance.3a1394d1.js",revision:"8cfe79fac55ff57ecf619470216ad1b7"},{url:"assets/js/page-Markdown增强.5cacfc47.js",revision:"2168f66c58c7a7f369d82368bae8c4da"},{url:"assets/js/page-pageconfig.5a6da440.js",revision:"55f4b342bfdcec260b44904fc185924d"},{url:"assets/js/page-Projecthome.b2199ec9.js",revision:"7aa70fb12a9bf23591414bcf88c39b29"},{url:"assets/js/page-Slidepage.2c7d91c3.js",revision:"19955bd30795aed8362b874db2c5157d"},{url:"assets/js/page-主要功能与配置演示.856b2181.js",revision:"4bcdf0aef0b272ccac82d259be913b3e"},{url:"assets/js/page-博客主页.fdb4d9ce.js",revision:"d0fbda8edf1b355574a0c473b924db68"},{url:"assets/js/page-密码加密的文章.27ed3750.js",revision:"7b6d236c8d6e47be42fd90653b2989fb"},{url:"assets/js/page-幻灯片页.97f5ea90.js",revision:"8b71297155ecc8f9add95f992d298814"},{url:"assets/js/page-组件禁用.9f21c6b9.js",revision:"14d736c16d4b7e2eaa1cff29f8dd1474"},{url:"assets/js/page-自定义布局.ea4b66ff.js",revision:"32fe25899a7a70d0c987f0e2be998c66"},{url:"assets/js/page-页面配置.ccdfcd9c.js",revision:"0b4cb21abbc12d9e1adce38dea199e07"},{url:"assets/js/page-项目主页.4750838f.js",revision:"e36164355ef08b84f67c53dcd0890785"},{url:"assets/js/vendors~flowchart.fdd633ff.js",revision:"4d09c9b5b112dc9a915618f5a692e100"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.295635d6.js",revision:"dc1e11bbdb74dc5637f8847e74390d74"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.e1dedc04.js",revision:"a026808589b5fab056c03c9704f82d97"},{url:"assets/js/vendors~layout-Layout.7e5d51d0.js",revision:"4116eda75d0ccbb8f531512ed33eb438"},{url:"assets/js/vendors~mermaid.7f6005cc.js",revision:"3bfe114d8fb4a9147fe41f55a87c67e8"},{url:"assets/js/vendors~photo-swipe.6ccc8c57.js",revision:"0b770e78ddb4d31c011cf837a3556d09"},{url:"assets/js/vendors~reveal.2050afd7.js",revision:"4cbc7344fda69480c3b797056809cdc0"},{url:"assets/js/vendors~waline.fe577476.js",revision:"4b82bb5f390fe482ea3e7cdc39e71e2a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"abe0d97bf25c7e98f3724f86bc474932"},{url:"article/index.html",revision:"767f32306c350559c420145bb72780f5"},{url:"category/Guide/index.html",revision:"001d966fe344e9a65f21f567295280fa"},{url:"category/index.html",revision:"3eb6de28936303c8bd56b95b6312960b"},{url:"category/使用指南/index.html",revision:"35084b73dd1953aaed49cc4f1e41f56d"},{url:"encrypt/index.html",revision:"3c12e8c55da95b6df9b7dc187e7fcff1"},{url:"guide/disable/index.html",revision:"8b59b9303db43bee8182c1b500898c4b"},{url:"guide/encrypt/index.html",revision:"82c3e694dc28594c3154bf8a7cb1d0d3"},{url:"guide/index.html",revision:"f6e33425637d1f87061757b6b3e45e0c"},{url:"guide/markdown/index.html",revision:"9b51f045d128ad25bd039e8079d738e9"},{url:"guide/page/index.html",revision:"fb91ef8219b2576f06df40026582811d"},{url:"home/index.html",revision:"12031c837e02dcdfe52579c43d770941"},{url:"index.html",revision:"35341345cb27b4705a0450de9a4b14d2"},{url:"intro/index.html",revision:"18a9d82dc600462941fa0526a0b294a2"},{url:"layout/index.html",revision:"f8cde635803eec4d553db9f0d039e4cf"},{url:"slide/index.html",revision:"3e6b5036df40c8bbdc5968bb4af5c334"},{url:"slides/index.html",revision:"d45ee50ee4929d0c04ad164e38a64748"},{url:"star/index.html",revision:"c06bf03d9d34cf7d05c1f421d8f51493"},{url:"tag/encryption/index.html",revision:"51f664a4d1574b16e1311e300eed33cc"},{url:"tag/Guide/index.html",revision:"62badee3d0cfc0ca45f6323bfce2f408"},{url:"tag/index.html",revision:"48837c55aa43c0911524682b0e462583"},{url:"tag/markdown/index.html",revision:"ecefbff5434213cf5039388923eede25"},{url:"tag/Page config/index.html",revision:"180ad6851de01b59556836bf28ce7d04"},{url:"tag/使用指南/index.html",revision:"41ae161f513e9464cd48a60c707c2aca"},{url:"tag/文章加密/index.html",revision:"640d67471c1a48c533254cccc7a22d76"},{url:"tag/页面配置/index.html",revision:"7689c0a96cf249414de037c79c8c7ea8"},{url:"timeline/index.html",revision:"977093a10a2ac121ebabb973a71109a4"},{url:"zh/guide/disable/index.html",revision:"73cf18845472d1ce6798ba36cdbc1682"},{url:"zh/guide/encrypt/index.html",revision:"8fd947cd30314ffbb1bf898c8945d269"},{url:"zh/guide/index.html",revision:"983d6929bb12f1a909fb858693e5167d"},{url:"zh/guide/markdown/index.html",revision:"d9c0ab322313b987569bbd17eb97f7a5"},{url:"zh/guide/page/index.html",revision:"81f36d7bd3306513bf13e7a969e84237"},{url:"zh/home/index.html",revision:"7447e4d560dc76ef8db457b900692b71"},{url:"zh/index.html",revision:"6bf0b144a35edef42f4efea99b4f84db"},{url:"zh/layout/index.html",revision:"1d6987957d6e9ce1baf7aa1628d81c28"},{url:"zh/slides/index.html",revision:"8dcbdd0430d2fb211f1ff923340fffa4"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
