if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let c={};const r=e=>a(e,f),b={module:{uri:f},exports:c,require:r};s[f]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"林初笔墨"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.9deb6bd3.js",revision:"d00935452f0893377be7fb7c32e2fa1f"},{url:"assets/404.html.6e76c254.js",revision:"9b1a139810f13c0dcf99bb06c910f02a"},{url:"assets/404.html.798f89b2.js",revision:"5f7f361c71b17a2a8544d8f8c34ab038"},{url:"assets/app.72bff905.js",revision:"77edaf61fe7ad7021c0c9d3c1e2b9567"},{url:"assets/auto.esm.36809f22.js",revision:"294802a69d755accfd33709c2a05fa41"},{url:"assets/basic.html.02ff6fc5.js",revision:"71650b227e7ddd389f9d7fcca83d2b91"},{url:"assets/basic.html.769a41a9.js",revision:"4165f708afb48fa2c1e80017ed8e5aac"},{url:"assets/basic.html.c17165cc.js",revision:"f8264e3d29c2bd866a3264fe877863bb"},{url:"assets/basic.html.d6dd80ef.js",revision:"d4260aed458fd576cd1250d72a28e5e5"},{url:"assets/Blog.7be495bb.js",revision:"92764465f89a067cb54ec7b7fcaf7557"},{url:"assets/class.html.6f1d630e.js",revision:"6f9cb3d7351ef1f4a6f5f46d3810888b"},{url:"assets/class.html.7d31373d.js",revision:"cbcc551a8ab490b63aa5e86dcf75ba1a"},{url:"assets/css-basics-selector.html.22878f52.js",revision:"26340b1642fd06493ae984e69b3b4981"},{url:"assets/css-basics-selector.html.51a23b55.js",revision:"92bad580c0dd0ea5fc44a011a4bd2958"},{url:"assets/css-definitive-guide.html.2a030232.js",revision:"3d6fdc10c68a9a1f11abdcbe6cd8ec3d"},{url:"assets/css-definitive-guide.html.77e12cbb.js",revision:"cf3f0bed807108b33a29a61843b31658"},{url:"assets/css-text-font-list-properties.html.3638cc9f.js",revision:"2929a00efd11cc0b6e2b2463d06e18fd"},{url:"assets/css-text-font-list-properties.html.b4279cd3.js",revision:"2b37a2b873e55d41565e847492b7a651"},{url:"assets/css.html.7284b1af.js",revision:"b98f9b250321d45945570710f2ba864a"},{url:"assets/css.html.83591d8d.js",revision:"f79200a7f08d40f616231696ced74fd6"},{url:"assets/data-type.html.374ce740.js",revision:"ffd217e4ea251ec99196917ecdc1ff90"},{url:"assets/data-type.html.5f28176d.js",revision:"108237903ed85215d5e8c3a6ee4d0c77"},{url:"assets/decorator.html.c9e33c2f.js",revision:"7d1f99a3c831819dc89fd21fd343f0e7"},{url:"assets/decorator.html.d58301a2.js",revision:"0222c0154f5299b77f38964f1e5a1e72"},{url:"assets/disable.html.66cd725a.js",revision:"46d1eafa5b8d0473f19c3e0813a4426a"},{url:"assets/disable.html.9f4930c4.js",revision:"c9948f6f62fcd3ca398640a991f1290a"},{url:"assets/editor.html.5bfa7040.js",revision:"ca7c91d5e5b79e6ab84cd51bff034cd8"},{url:"assets/editor.html.d108b093.js",revision:"cf46b978a422d75fc3c3cae89c5b5b46"},{url:"assets/encrypt.html.1cfcb2b4.js",revision:"778b62e6bad61374e463db9c935700c7"},{url:"assets/encrypt.html.aa02c8bc.js",revision:"b88bd48da91bfcabefd5b418e832831e"},{url:"assets/extension.html.a0213b9e.js",revision:"7d37a0af9a93af403a276a9b446cc899"},{url:"assets/extension.html.d800b3d5.js",revision:"afbc8db351926c270d2b588082b8eafb"},{url:"assets/fn.html.b597e601.js",revision:"ce13db3e02e927d3eb3546d96cce0ba2"},{url:"assets/fn.html.e1a6a77c.js",revision:"57bf288f0db66772419c60adfbeab624"},{url:"assets/genericity.html.ad7b1a2b.js",revision:"9232c544bd5d09ea395855d283dac7a3"},{url:"assets/genericity.html.ebfac724.js",revision:"16704d2074c0c32b99914a3546c88c45"},{url:"assets/giscus.es.63137db5.js",revision:"4e00632894e0113cb12fa9036e17921d"},{url:"assets/html-core.html.3ed5dbb2.js",revision:"f4ce90136f1b90ce8f3023a29b233163"},{url:"assets/html-core.html.a3d84d1e.js",revision:"832b33628da5ce3e064ea52dae001c6d"},{url:"assets/html-html5-course.html.77e635b4.js",revision:"c046fc23c95a9bc3363e6fe5de10ecfd"},{url:"assets/html-html5-course.html.808607e1.js",revision:"760452008f11557a9bf9ece25691047c"},{url:"assets/html.html.373fd641.js",revision:"1043d2ecb4f8bb028c3fc723ec2c1d98"},{url:"assets/html.html.f0b4e1c9.js",revision:"0280afbff647ed4a29ec2a2ee2ca1a6b"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.d8a59108.js",revision:"7ebfcaf52eea794c0fa7bd8001508489"},{url:"assets/index.html.023d850f.js",revision:"5b9cd20e233a27435b52f62b46c72f11"},{url:"assets/index.html.035c1f50.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.037229f0.js",revision:"0f2e7d79ffef48bbec047cd50e73e950"},{url:"assets/index.html.05d440db.js",revision:"d4e37b9c40e35042159fc0a6be3cd3f7"},{url:"assets/index.html.0ba65c5b.js",revision:"df0269e18a08bf454fc4658a7a5b1790"},{url:"assets/index.html.0f7b5813.js",revision:"fabd9d7a82a7ddde2064b96d71220806"},{url:"assets/index.html.0f818f6c.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.10475395.js",revision:"5354bc0397c7bc626c982e8c76e65083"},{url:"assets/index.html.109ffe21.js",revision:"a080042e82e6a9bbc74b0a685a840dc2"},{url:"assets/index.html.119bb855.js",revision:"a080042e82e6a9bbc74b0a685a840dc2"},{url:"assets/index.html.120a2e2c.js",revision:"45f175dbf827de175e65e1bd76f51fd4"},{url:"assets/index.html.143b5c5b.js",revision:"0f2e7d79ffef48bbec047cd50e73e950"},{url:"assets/index.html.18418122.js",revision:"cfbcae40073caf4298ee22034a8d62fd"},{url:"assets/index.html.18cb417d.js",revision:"338d0d8c8382dabf8054bb48996191b8"},{url:"assets/index.html.199bf3bb.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.227d26ea.js",revision:"4e9eee74e23426c376c55e81fa9b1e66"},{url:"assets/index.html.22f517e4.js",revision:"203e2fc56ba975d169a9c9bca7b8f10b"},{url:"assets/index.html.22fbe6b1.js",revision:"6e0a9b18ff9634bf8edd10f73c543ce2"},{url:"assets/index.html.230eff4d.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.2801e45f.js",revision:"961b702502cacf4c2c65e8d8282aae92"},{url:"assets/index.html.2ab64f0e.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.2c252e4f.js",revision:"01a2a8d8c16f9a367859dc4e6364a7d8"},{url:"assets/index.html.30126431.js",revision:"4b0680a7769f9115b9b2a47fdbcd44fe"},{url:"assets/index.html.326bf208.js",revision:"5bc1642149668ceb80cdebc898152aa9"},{url:"assets/index.html.32d8e49d.js",revision:"5354bc0397c7bc626c982e8c76e65083"},{url:"assets/index.html.3741fb03.js",revision:"9618a84aecd5d949d99adfe9d2b4119c"},{url:"assets/index.html.3c40ff24.js",revision:"b8215a6a4a4b8ba3b8b30f56df81dc4b"},{url:"assets/index.html.3c778fb1.js",revision:"e6a99132aa4c1e7b0c705058277bad11"},{url:"assets/index.html.3d86df7b.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.3e75ad71.js",revision:"0c6eaa88b96e9cc8c96b634539fe5e87"},{url:"assets/index.html.3fcd7588.js",revision:"d1b4a6bffc4f1ea64a075a3722320ec6"},{url:"assets/index.html.4343a375.js",revision:"be498ed52277c211210343c14a72f092"},{url:"assets/index.html.43f97371.js",revision:"d46e94ee525f9faeb3619e1b8c7ea3d2"},{url:"assets/index.html.5024b439.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.5225ca15.js",revision:"2194ae3240e805c766e64ad61539a095"},{url:"assets/index.html.535703a8.js",revision:"072505c441742cdf20b17885013d03af"},{url:"assets/index.html.54c23d59.js",revision:"8803c7e973bd7c9ae59cbdd111f37a62"},{url:"assets/index.html.55c786d5.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.5689cdc5.js",revision:"81dcc218174187d88f31ac184583cb84"},{url:"assets/index.html.572f5e42.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.577df278.js",revision:"1b2eb0cdd547d1d5381bca08bf147003"},{url:"assets/index.html.57ecbe5d.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.59f2f8c6.js",revision:"9face343a3ea1f362957811387e5921b"},{url:"assets/index.html.5dc08b44.js",revision:"6a143172b255a3487b85e06e0ceabdb7"},{url:"assets/index.html.67a14a45.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.682fb30a.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.69444b51.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.6eb24c9f.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.6ef798cc.js",revision:"2512292cd19d48c188496cee33854c41"},{url:"assets/index.html.750cf37e.js",revision:"a080042e82e6a9bbc74b0a685a840dc2"},{url:"assets/index.html.7523b8ca.js",revision:"6fe0853b3ae32a1fbd683ff5966e8936"},{url:"assets/index.html.7d4dc456.js",revision:"441abc88e466008db2dafe80afd114ef"},{url:"assets/index.html.7f2f1d37.js",revision:"7f627b673b994ce5a563d40b3397e587"},{url:"assets/index.html.7faff75d.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.80f0b04b.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.832cbcf0.js",revision:"64ed1228a6dde1f3f0e2a837bee6ef83"},{url:"assets/index.html.886a1789.js",revision:"c6791ffd63b305e49631eeef366f5c34"},{url:"assets/index.html.88df7f11.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.8d72fa65.js",revision:"d984605ab8acc82af033863d3459437e"},{url:"assets/index.html.8df48de3.js",revision:"17dcf8dc8b4023e817d22e0cbe2d11da"},{url:"assets/index.html.8f6eb3e4.js",revision:"ee21c710822bebe17154e4edb2fe54b1"},{url:"assets/index.html.9247abf7.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.92766682.js",revision:"7611d48140d6911e46a105a50cafff18"},{url:"assets/index.html.94ff7388.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.96f2ee02.js",revision:"0c38dc62788afd80173d285633e27f2d"},{url:"assets/index.html.97331b28.js",revision:"0419273e5bcee3d1f891a6bf816f87d0"},{url:"assets/index.html.9ce4843c.js",revision:"2b698bc0b72fe4aa0efb7ce2c8b94ac6"},{url:"assets/index.html.9dd320e5.js",revision:"24574aa9774083bd5fca900a437c7aec"},{url:"assets/index.html.9e759e5b.js",revision:"cbce8636bc759ab04fb96e364da7a485"},{url:"assets/index.html.a0f574aa.js",revision:"08a031dcdc03b8fa81705ba7cb7581aa"},{url:"assets/index.html.a1ce129a.js",revision:"cfbcae40073caf4298ee22034a8d62fd"},{url:"assets/index.html.a1f94a60.js",revision:"4e874f23a76437d087bc5710fe694381"},{url:"assets/index.html.a2c0c5a6.js",revision:"011cd70daa418d2cb5370c4a2851bdb9"},{url:"assets/index.html.a43f6033.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.a4cc5519.js",revision:"3f3ee292ea9e3637b9758a0cb106aaaa"},{url:"assets/index.html.a9c24886.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.ab479a38.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.ab964d32.js",revision:"e980cf17bd4b87a88be5358e4e5f18a5"},{url:"assets/index.html.abc6abbf.js",revision:"d99e3eb8471696a9b3398d2607b41d76"},{url:"assets/index.html.addb2f7f.js",revision:"161759cde8b4c3e5514e0328c8cdf489"},{url:"assets/index.html.ae0cf6d0.js",revision:"9309297e71caa7de454e7e442aa326a7"},{url:"assets/index.html.b01a2a2b.js",revision:"8e8a66238b64dd1a1807a96cb5b5db25"},{url:"assets/index.html.b2dabf8d.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.ba006471.js",revision:"d1ed51fa6aae7c03c6bf0e3cbb397fbc"},{url:"assets/index.html.bd38aa69.js",revision:"0c38dc62788afd80173d285633e27f2d"},{url:"assets/index.html.bdaae2ef.js",revision:"80ce7cedd5306ea7d4b42d890b3d61f3"},{url:"assets/index.html.bebedb69.js",revision:"9da1ed00de499161b0135463c779ffc1"},{url:"assets/index.html.bf78610e.js",revision:"d462d0c8aaa66b86ea9e19c7ca501774"},{url:"assets/index.html.c37413d4.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.c5681346.js",revision:"072a1a695e8d654961332516fa4fba3f"},{url:"assets/index.html.c8c93fa0.js",revision:"c6b87d57328a151b6d9e842a7e8a447a"},{url:"assets/index.html.cdb3d782.js",revision:"3b7c5d5f0536f9f41b86901da50a07ab"},{url:"assets/index.html.cf216081.js",revision:"102438e285bf5e0bb83ab02488c24888"},{url:"assets/index.html.d0fd9fa3.js",revision:"448bfade0166b3727fe47532705d2c9d"},{url:"assets/index.html.d1897227.js",revision:"993b9fbc20518c760073a59c7bf37dac"},{url:"assets/index.html.d3efe002.js",revision:"a1ec76e009a66cb943b07240da97ab93"},{url:"assets/index.html.d4210d82.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.d51046d4.js",revision:"91f3c04bef4bf2e389fe678520b3876f"},{url:"assets/index.html.d99058e4.js",revision:"eccd7951163bb16062f65508c29688f1"},{url:"assets/index.html.e0db6564.js",revision:"faad2616d61b3e43a05b6234b8f95779"},{url:"assets/index.html.e3f56c8c.js",revision:"20be355b10e78a3b957067aafdd1cfa5"},{url:"assets/index.html.e722b209.js",revision:"ab5eebbbbab3c623f1b7e891051aff6c"},{url:"assets/index.html.ec896501.js",revision:"dc84624744f284162fa74bd89277f310"},{url:"assets/index.html.ed619914.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.ef2e22f6.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.ef73e379.js",revision:"34e597f40098dbdd7d2462874e00b96d"},{url:"assets/index.html.f4619aa5.js",revision:"938d8c9740dceeb8c575f94e6c86b284"},{url:"assets/index.html.fb6d04ca.js",revision:"b3d16e59dbef0a1c810d2657a067ae4e"},{url:"assets/index.html.fd3a6675.js",revision:"cdc654dfb558a5b1d2a336974f477d61"},{url:"assets/index.html.fea20270.js",revision:"c7cf3f118206e9974e62de4305541776"},{url:"assets/installandcompiler.html.309e5268.js",revision:"6775876466eb34df11a36c9df63d0f3a"},{url:"assets/installandcompiler.html.350876e9.js",revision:"0a54e2ca2e3baf9e8fb6fb8141b1b99d"},{url:"assets/interface.html.18fc478c.js",revision:"33032ba4550b553a46daff99060eba95"},{url:"assets/interface.html.751dfa9b.js",revision:"4e36b4aa0f227ed31c5e0e135eaaf1fc"},{url:"assets/Internet.html.55471119.js",revision:"755239b7f93eda0766f0fe2fe92ba8cb"},{url:"assets/Internet.html.7beafb72.js",revision:"e3e5dfe9e7160592ab531c2a1dc4aa13"},{url:"assets/js-definitive-guide.html.ba038c0e.js",revision:"b4ae49b73ed6eab1f08b9b6b487383ab"},{url:"assets/js-definitive-guide.html.f5317be4.js",revision:"40b60549d045dd94da6ea6c57935a8f2"},{url:"assets/js-dom-programming-art.html.ca78cef6.js",revision:"d0a7baf55de47815a5c93235e79ea569"},{url:"assets/js-dom-programming-art.html.e0bc116c.js",revision:"913b2169da9332d91c4bcbc77b2cc746"},{url:"assets/js-object-oriented.html.745bcb85.js",revision:"e16b7992a8ba7858512175157d34bc9a"},{url:"assets/js-object-oriented.html.b3e5a250.js",revision:"3cf19f9c9c0cf068dc99188499315cda"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/Layout.501734be.js",revision:"57f63bf583c3315994c44ff08e268e9c"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/little-red-book(v4).html.502e1cd8.js",revision:"ee4a38cfbdb463f76293997fb0468ec2"},{url:"assets/little-red-book(v4).html.6b4dcd64.js",revision:"589c81d498ae325c5ff46fecdfeb7ea5"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/markdown.html.d318ebf8.js",revision:"ba1b89eec89b1f5518a8d23d6c950668"},{url:"assets/markdown.html.f2985436.js",revision:"13b1c556cfebc2674793db6e87d9fdf5"},{url:"assets/mermaid.esm.min.ee1e0284.js",revision:"e8923a87eedaf6fda284837ba00e9a94"},{url:"assets/nature.html.4305db13.js",revision:"aff3a3c6fd2ca9fa9a7892f81517fa77"},{url:"assets/nature.html.e8100660.js",revision:"eeb1c34bbaef85def11a79486ca50e91"},{url:"assets/object.html.81f6b150.js",revision:"5ade7c55a6f8738acfe6c4890cba2b21"},{url:"assets/object.html.8d4bc6ec.js",revision:"84809dccebf1a3b427484c9e28a776a4"},{url:"assets/page.html.406387cb.js",revision:"ba1491d54a2d556e427854d9b7a05e18"},{url:"assets/page.html.fed9d050.js",revision:"fad8a458ed2806c0f9876d5534a97ea6"},{url:"assets/people.html.475e8b85.js",revision:"584c8add88a6e0ec0f0c74cd26874529"},{url:"assets/people.html.578874ac.js",revision:"945b9c16cb8888bb2251fe267d4ebf95"},{url:"assets/photoswipe.esm.092fbc15.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/place.html.18cc6332.js",revision:"1162df3a239c0e1331c7df09f76bca22"},{url:"assets/place.html.38fe4976.js",revision:"75188026b94f902a1d1fd63f1abb483d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"835fe5d11b24b0dc2193b11c893d234c"},{url:"assets/SkipLink.ebcbabcb.js",revision:"c6fd3125144d5a332b92e77f95854624"},{url:"assets/Slide.44917f99.js",revision:"cefa14af60dbdab2c97078d73955ced6"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.03130b23.css",revision:"6a5cb426c5f057559fe2156affc593b2"},{url:"assets/symbol.html.5e256783.js",revision:"008cd224068075d1bfc149e1f29586e2"},{url:"assets/symbol.html.c61781e2.js",revision:"c4baaf7f1bd8db44724c2e4fdab8281f"},{url:"img/logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"img/wunsun.svg",revision:"ba7955115840be39b10d2e565728916c"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"46783920603e5a702a9cd0131af561ba"},{url:"404.html",revision:"5bf9000cebd1863e8eb296422eb6276b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
