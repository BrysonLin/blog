if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let c={};const r=e=>a(e,f),b={module:{uri:f},exports:c,require:r};s[f]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"林初笔墨"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.c9b3116f.js",revision:"bf3072e0d373321bb26b2c2c32809762"},{url:"assets/404.html.23c0a370.js",revision:"197e156bb6dfac501d23db1182246ff0"},{url:"assets/404.html.6e76c254.js",revision:"9b1a139810f13c0dcf99bb06c910f02a"},{url:"assets/app.66ecc613.js",revision:"0053ef37245f9ecd8e3b2ca746629e35"},{url:"assets/auto.esm.36809f22.js",revision:"294802a69d755accfd33709c2a05fa41"},{url:"assets/basic.html.52cf2ddf.js",revision:"e3fec3bba70d0cdf1fdec9916c99b8bc"},{url:"assets/basic.html.769a41a9.js",revision:"4165f708afb48fa2c1e80017ed8e5aac"},{url:"assets/basic.html.bef86c82.js",revision:"988d27224281b5c4ab3d3cf55c63fcab"},{url:"assets/basic.html.d6dd80ef.js",revision:"d4260aed458fd576cd1250d72a28e5e5"},{url:"assets/Blog.bca09b01.js",revision:"9d0885b6ac052582ca0ff03af3dfb676"},{url:"assets/class.html.3554ccd1.js",revision:"3286afacc4b88b7a831073b536658722"},{url:"assets/class.html.6f1d630e.js",revision:"6f9cb3d7351ef1f4a6f5f46d3810888b"},{url:"assets/css-basics-selector.html.51a23b55.js",revision:"92bad580c0dd0ea5fc44a011a4bd2958"},{url:"assets/css-basics-selector.html.a3e93435.js",revision:"34c3dedefc72eedaecb979c4106eccc0"},{url:"assets/css-definitive-guide.html.77e12cbb.js",revision:"cf3f0bed807108b33a29a61843b31658"},{url:"assets/css-definitive-guide.html.ad038921.js",revision:"34e8294ad02477de5d765bcd1aef2d5c"},{url:"assets/css-text-font-list-properties.html.5e49cb8d.js",revision:"fca5da7b58c54063e689d19f9aa88f2e"},{url:"assets/css-text-font-list-properties.html.b4279cd3.js",revision:"2b37a2b873e55d41565e847492b7a651"},{url:"assets/css.html.1603d577.js",revision:"d4b06bc8921eafde765aa69118a0c627"},{url:"assets/css.html.83591d8d.js",revision:"f79200a7f08d40f616231696ced74fd6"},{url:"assets/data-type.html.374ce740.js",revision:"ffd217e4ea251ec99196917ecdc1ff90"},{url:"assets/data-type.html.f9107345.js",revision:"ed72c85f9707008407f33f71dbe0c1c4"},{url:"assets/decorator.html.66faee7b.js",revision:"45b0aaefb7860bad2acb4f2159ac3dac"},{url:"assets/decorator.html.d58301a2.js",revision:"0222c0154f5299b77f38964f1e5a1e72"},{url:"assets/disable.html.66cd725a.js",revision:"46d1eafa5b8d0473f19c3e0813a4426a"},{url:"assets/disable.html.972a167d.js",revision:"453c58aa1a1a5378518fe32616a8cd26"},{url:"assets/editor.html.5bfa7040.js",revision:"ca7c91d5e5b79e6ab84cd51bff034cd8"},{url:"assets/editor.html.aaa5b37f.js",revision:"00e0c0883f3ac58f139d1683fb8893e2"},{url:"assets/encrypt.html.1cfcb2b4.js",revision:"778b62e6bad61374e463db9c935700c7"},{url:"assets/encrypt.html.fb28bdab.js",revision:"c211787eeaf84af4ea87c2511bb4026f"},{url:"assets/extension.html.056a2713.js",revision:"56759941357f35f92ba2b6e32d82d146"},{url:"assets/extension.html.d800b3d5.js",revision:"afbc8db351926c270d2b588082b8eafb"},{url:"assets/fn.html.54612081.js",revision:"985da1756c72f13191f75c39cf075e79"},{url:"assets/fn.html.b597e601.js",revision:"ce13db3e02e927d3eb3546d96cce0ba2"},{url:"assets/genericity.html.0b65bb09.js",revision:"b06a2339c6a8a75e809229e698ca1394"},{url:"assets/genericity.html.ebfac724.js",revision:"16704d2074c0c32b99914a3546c88c45"},{url:"assets/giscus.es.63137db5.js",revision:"4e00632894e0113cb12fa9036e17921d"},{url:"assets/html-core.html.26565ee0.js",revision:"c238aca268a42fecd7d3c50f436f12aa"},{url:"assets/html-core.html.3ed5dbb2.js",revision:"f4ce90136f1b90ce8f3023a29b233163"},{url:"assets/html-html5-course.html.04c1ec88.js",revision:"d9be471c15fa29d8ae9759a9ca376644"},{url:"assets/html-html5-course.html.77e635b4.js",revision:"c046fc23c95a9bc3363e6fe5de10ecfd"},{url:"assets/html.html.6eca8322.js",revision:"3f60ad498510b75eb31fe2d7cd7eaaf7"},{url:"assets/html.html.f0b4e1c9.js",revision:"0280afbff647ed4a29ec2a2ee2ca1a6b"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.d8a59108.js",revision:"7ebfcaf52eea794c0fa7bd8001508489"},{url:"assets/index.html.023d850f.js",revision:"5b9cd20e233a27435b52f62b46c72f11"},{url:"assets/index.html.05d440db.js",revision:"d4e37b9c40e35042159fc0a6be3cd3f7"},{url:"assets/index.html.07183848.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.08ea10b6.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.0b79cb0a.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.0ba65c5b.js",revision:"df0269e18a08bf454fc4658a7a5b1790"},{url:"assets/index.html.0f7b5813.js",revision:"fabd9d7a82a7ddde2064b96d71220806"},{url:"assets/index.html.106b2bf3.js",revision:"6c803bb01011a91fbaf8fb873053844f"},{url:"assets/index.html.10f18cc1.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.120a2e2c.js",revision:"45f175dbf827de175e65e1bd76f51fd4"},{url:"assets/index.html.181c1d61.js",revision:"5c5d99e84becd7a0af2b628abc415d3d"},{url:"assets/index.html.18cb417d.js",revision:"338d0d8c8382dabf8054bb48996191b8"},{url:"assets/index.html.19d14239.js",revision:"25f01479b7e01f6483a695fe32b4eca1"},{url:"assets/index.html.1a06c692.js",revision:"297af48b314a41dd605340c45e0ca6bd"},{url:"assets/index.html.1bcb7258.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.1c882b51.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.1e560408.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.22f517e4.js",revision:"203e2fc56ba975d169a9c9bca7b8f10b"},{url:"assets/index.html.22fbe6b1.js",revision:"6e0a9b18ff9634bf8edd10f73c543ce2"},{url:"assets/index.html.2801e45f.js",revision:"961b702502cacf4c2c65e8d8282aae92"},{url:"assets/index.html.2c252e4f.js",revision:"01a2a8d8c16f9a367859dc4e6364a7d8"},{url:"assets/index.html.30126431.js",revision:"4b0680a7769f9115b9b2a47fdbcd44fe"},{url:"assets/index.html.313af9b1.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.326bf208.js",revision:"5bc1642149668ceb80cdebc898152aa9"},{url:"assets/index.html.3295c45f.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.3c778fb1.js",revision:"e6a99132aa4c1e7b0c705058277bad11"},{url:"assets/index.html.3cfe686d.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.3fcd7588.js",revision:"d1b4a6bffc4f1ea64a075a3722320ec6"},{url:"assets/index.html.3fffb87e.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.43f97371.js",revision:"d46e94ee525f9faeb3619e1b8c7ea3d2"},{url:"assets/index.html.49083609.js",revision:"f2185f3c1058d61d906385f9ad637523"},{url:"assets/index.html.4af75c41.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.4b0510c9.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.4cea56ac.js",revision:"a735cc2824f5e2cf68892bed6a236e86"},{url:"assets/index.html.4f432fdf.js",revision:"56da17552e068527e973df4e57aedc7c"},{url:"assets/index.html.5225ca15.js",revision:"2194ae3240e805c766e64ad61539a095"},{url:"assets/index.html.535703a8.js",revision:"072505c441742cdf20b17885013d03af"},{url:"assets/index.html.55ce4bc9.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.5689cdc5.js",revision:"81dcc218174187d88f31ac184583cb84"},{url:"assets/index.html.577df278.js",revision:"1b2eb0cdd547d1d5381bca08bf147003"},{url:"assets/index.html.578bb790.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.5807f6f0.js",revision:"f7eb887fbfa50fb09bf2fcfd4b714f69"},{url:"assets/index.html.589d69ba.js",revision:"2e1e0f5736f59f30ac0aab722018dd13"},{url:"assets/index.html.59f2f8c6.js",revision:"9face343a3ea1f362957811387e5921b"},{url:"assets/index.html.5dc08b44.js",revision:"6a143172b255a3487b85e06e0ceabdb7"},{url:"assets/index.html.5e665480.js",revision:"5c5d99e84becd7a0af2b628abc415d3d"},{url:"assets/index.html.6390e9c0.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.66d6c27a.js",revision:"5260b9607b46f459ecfab2a00ba41b47"},{url:"assets/index.html.6a11125a.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.6c479644.js",revision:"10bf2f6ba7be1154affe53926848ba7d"},{url:"assets/index.html.6ef798cc.js",revision:"2512292cd19d48c188496cee33854c41"},{url:"assets/index.html.7049067c.js",revision:"a735cc2824f5e2cf68892bed6a236e86"},{url:"assets/index.html.737d2892.js",revision:"6c803bb01011a91fbaf8fb873053844f"},{url:"assets/index.html.7523b8ca.js",revision:"6fe0853b3ae32a1fbd683ff5966e8936"},{url:"assets/index.html.7d4dc456.js",revision:"441abc88e466008db2dafe80afd114ef"},{url:"assets/index.html.886a1789.js",revision:"c6791ffd63b305e49631eeef366f5c34"},{url:"assets/index.html.89420883.js",revision:"fb1efde47e2e5d7ac24c58dc79b57787"},{url:"assets/index.html.8d72fa65.js",revision:"d984605ab8acc82af033863d3459437e"},{url:"assets/index.html.8df48de3.js",revision:"17dcf8dc8b4023e817d22e0cbe2d11da"},{url:"assets/index.html.8f6eb3e4.js",revision:"ee21c710822bebe17154e4edb2fe54b1"},{url:"assets/index.html.92766682.js",revision:"7611d48140d6911e46a105a50cafff18"},{url:"assets/index.html.97331b28.js",revision:"0419273e5bcee3d1f891a6bf816f87d0"},{url:"assets/index.html.9dd320e5.js",revision:"24574aa9774083bd5fca900a437c7aec"},{url:"assets/index.html.9e759e5b.js",revision:"cbce8636bc759ab04fb96e364da7a485"},{url:"assets/index.html.a1f94a60.js",revision:"4e874f23a76437d087bc5710fe694381"},{url:"assets/index.html.a2c0c5a6.js",revision:"011cd70daa418d2cb5370c4a2851bdb9"},{url:"assets/index.html.a45770ce.js",revision:"6c803bb01011a91fbaf8fb873053844f"},{url:"assets/index.html.a4cc5519.js",revision:"3f3ee292ea9e3637b9758a0cb106aaaa"},{url:"assets/index.html.a702265a.js",revision:"630d29b7a92531264b7c9a66e22f2eb1"},{url:"assets/index.html.aa30e7f9.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.ab964d32.js",revision:"e980cf17bd4b87a88be5358e4e5f18a5"},{url:"assets/index.html.abc6abbf.js",revision:"d99e3eb8471696a9b3398d2607b41d76"},{url:"assets/index.html.addb2f7f.js",revision:"161759cde8b4c3e5514e0328c8cdf489"},{url:"assets/index.html.ae0cf6d0.js",revision:"9309297e71caa7de454e7e442aa326a7"},{url:"assets/index.html.b1e28379.js",revision:"02e4baa93d621b5a07d4f7f481c599d0"},{url:"assets/index.html.b2709154.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.b93aa611.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.ba006471.js",revision:"d1ed51fa6aae7c03c6bf0e3cbb397fbc"},{url:"assets/index.html.ba4cc3a2.js",revision:"6f60b30d5112631a7cc0bebd1c9465d9"},{url:"assets/index.html.bb12d350.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.bebedb69.js",revision:"9da1ed00de499161b0135463c779ffc1"},{url:"assets/index.html.bf78610e.js",revision:"d462d0c8aaa66b86ea9e19c7ca501774"},{url:"assets/index.html.c5f71721.js",revision:"4c9a8ecf1f9f259841737683416eed7e"},{url:"assets/index.html.c604e2d6.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.c69aab80.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.c8c93fa0.js",revision:"c6b87d57328a151b6d9e842a7e8a447a"},{url:"assets/index.html.c947a82f.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.caad5e5e.js",revision:"daba95cb46885d9009f25880446fa708"},{url:"assets/index.html.cdb3d782.js",revision:"3b7c5d5f0536f9f41b86901da50a07ab"},{url:"assets/index.html.cdd04089.js",revision:"02e4baa93d621b5a07d4f7f481c599d0"},{url:"assets/index.html.cf216081.js",revision:"102438e285bf5e0bb83ab02488c24888"},{url:"assets/index.html.d0fd9fa3.js",revision:"448bfade0166b3727fe47532705d2c9d"},{url:"assets/index.html.d1897227.js",revision:"993b9fbc20518c760073a59c7bf37dac"},{url:"assets/index.html.d3efe002.js",revision:"a1ec76e009a66cb943b07240da97ab93"},{url:"assets/index.html.d4271f08.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.da502355.js",revision:"a14dfbcb52eefbc8d9e5a5f669823a3c"},{url:"assets/index.html.dc0e70af.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.e0bbeba8.js",revision:"a0da6779d130a199ec656e1dcddef206"},{url:"assets/index.html.e0db6564.js",revision:"faad2616d61b3e43a05b6234b8f95779"},{url:"assets/index.html.e37eec7c.js",revision:"5260b9607b46f459ecfab2a00ba41b47"},{url:"assets/index.html.e3f56c8c.js",revision:"20be355b10e78a3b957067aafdd1cfa5"},{url:"assets/index.html.e722b209.js",revision:"ab5eebbbbab3c623f1b7e891051aff6c"},{url:"assets/index.html.ec896501.js",revision:"dc84624744f284162fa74bd89277f310"},{url:"assets/index.html.ed008b92.js",revision:"13240e940b890ada67ef174b44d611b1"},{url:"assets/index.html.f4619aa5.js",revision:"938d8c9740dceeb8c575f94e6c86b284"},{url:"assets/index.html.f593ee57.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.f7970a31.js",revision:"224918cf1051e79205d9d2033cf1d468"},{url:"assets/index.html.fd3a6675.js",revision:"cdc654dfb558a5b1d2a336974f477d61"},{url:"assets/index.html.fd8352a9.js",revision:"552e0d9e5705ed4c23c9ac4137ae5d55"},{url:"assets/index.html.fea20270.js",revision:"c7cf3f118206e9974e62de4305541776"},{url:"assets/installandcompiler.html.1daeabbf.js",revision:"a20b3298ece73a27d72de9c332acc44f"},{url:"assets/installandcompiler.html.350876e9.js",revision:"0a54e2ca2e3baf9e8fb6fb8141b1b99d"},{url:"assets/interface.html.18fc478c.js",revision:"33032ba4550b553a46daff99060eba95"},{url:"assets/interface.html.c00c6bce.js",revision:"2dbc25931cb75ddc609e3e8b3fdf8250"},{url:"assets/Internet.html.7beafb72.js",revision:"e3e5dfe9e7160592ab531c2a1dc4aa13"},{url:"assets/Internet.html.82173199.js",revision:"350b72054524d7f3802187596fbe6035"},{url:"assets/js-definitive-guide.html.89085f5e.js",revision:"af637e1ec0532cbbef4109da785d3e7d"},{url:"assets/js-definitive-guide.html.f5317be4.js",revision:"40b60549d045dd94da6ea6c57935a8f2"},{url:"assets/js-dom-programming-art.html.296b1743.js",revision:"8abf98c9a728aebfb3f72e570a75db21"},{url:"assets/js-dom-programming-art.html.e0bc116c.js",revision:"913b2169da9332d91c4bcbc77b2cc746"},{url:"assets/js-object-oriented.html.16c8b8da.js",revision:"a5b6d543c6f3458a78cf8dc3c6c601c1"},{url:"assets/js-object-oriented.html.745bcb85.js",revision:"e16b7992a8ba7858512175157d34bc9a"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/Layout.4fd12848.js",revision:"fae9abc7cafd0b4517d56f890512f081"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/little-red-book(v4).html.502e1cd8.js",revision:"ee4a38cfbdb463f76293997fb0468ec2"},{url:"assets/little-red-book(v4).html.a92ea511.js",revision:"921dc6b9c3aa27f4e39f8adb73687767"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/markdown.html.f2985436.js",revision:"13b1c556cfebc2674793db6e87d9fdf5"},{url:"assets/markdown.html.f6c4152a.js",revision:"75e5b561098b12deb14eb417d8d09037"},{url:"assets/mermaid.esm.min.ee1e0284.js",revision:"e8923a87eedaf6fda284837ba00e9a94"},{url:"assets/nature.html.4305db13.js",revision:"aff3a3c6fd2ca9fa9a7892f81517fa77"},{url:"assets/nature.html.a4c08c05.js",revision:"8b06e0e873a9d608f57e561a89d32c26"},{url:"assets/object.html.8d4bc6ec.js",revision:"84809dccebf1a3b427484c9e28a776a4"},{url:"assets/object.html.fd3618f1.js",revision:"74857fcd5d4380041b7d6d4913e4e08c"},{url:"assets/page.html.0970f142.js",revision:"04c16c9ecf5b80e76befeb00fcc8dd60"},{url:"assets/page.html.406387cb.js",revision:"ba1491d54a2d556e427854d9b7a05e18"},{url:"assets/people.html.475e8b85.js",revision:"584c8add88a6e0ec0f0c74cd26874529"},{url:"assets/people.html.8abe8301.js",revision:"efc77c1de86aa0346be981ef0ccf9cd7"},{url:"assets/photoswipe.esm.092fbc15.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/place.html.38fe4976.js",revision:"75188026b94f902a1d1fd63f1abb483d"},{url:"assets/place.html.9bdceb9e.js",revision:"18f7abe73ef372e6eb981477098f81f5"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"835fe5d11b24b0dc2193b11c893d234c"},{url:"assets/SkipLink.fca9ce62.js",revision:"1ac962aae3ba95188d0a7ba326504955"},{url:"assets/Slide.ad0dcf05.js",revision:"e4857645a64d76bb1e139998da1ff3ac"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.03130b23.css",revision:"6a5cb426c5f057559fe2156affc593b2"},{url:"assets/symbol.html.5e256783.js",revision:"008cd224068075d1bfc149e1f29586e2"},{url:"assets/symbol.html.9ec4510e.js",revision:"ff5a7975343994b471e6978adc074995"},{url:"img/logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"img/wunsun.svg",revision:"ba7955115840be39b10d2e565728916c"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"2c0ae564a0045aa36570e2b1b3259c03"},{url:"404.html",revision:"b197686802cc309dd80fc7cb5d69c57c"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
