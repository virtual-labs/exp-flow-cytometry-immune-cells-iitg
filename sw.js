importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"595bbb6555ab09be774dc9ba38ffe3e9","url":"contributors.html"},{"revision":"dfd017778f30e5a8ee379baed4e2b455","url":"feedback.html"},{"revision":"e527c9edcdd0d654e10fc9d2553f5248","url":"images/10.png"},{"revision":"21766327c7c350857b6d1e9cd16575ba","url":"images/3.png"},{"revision":"553c33e4702b5fb430e8b6ac413f0d3a","url":"images/4.png"},{"revision":"2d20d59809ee31c3bb996cbfa57d5e4e","url":"images/5.png"},{"revision":"415c9e28f80dedb7f0cbc886695ef1f9","url":"images/7.png"},{"revision":"26a80d05b5fc7f62a8f0837d68f29df6","url":"images/8.png"},{"revision":"860b304cdfe63559051969cb89338acf","url":"images/9.png"},{"revision":"9c9d41938476141a274f20f034938919","url":"images/answer1.png"},{"revision":"d1ed37f3511d89e67d0f48ce130a0f5c","url":"images/answer2.png"},{"revision":"4049ec5acecc6d96e9f6bddfffb0a54e","url":"images/img1.png"},{"revision":"0f11666c9d1fa9e61f92666d31ef8a4e","url":"images/img12.png"},{"revision":"aca4496e7113a8e22565e372cb2054af","url":"images/img13.png"},{"revision":"cf58ac67498987b315367e0702079bc9","url":"images/img14.png"},{"revision":"88b881b66082f05a8c39ea65abc8e596","url":"images/img2.png"},{"revision":"ff5e85b043bf9002966cba44551e892f","url":"index.html"},{"revision":"cb6f9b89a3013b1decc13faf02efd503","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"56326d4edff12d5c2bfd4311768ccb2b","url":"posttest.html"},{"revision":"a47501d7388a2a7535ad2806555e404a","url":"posttest.json"},{"revision":"55007313a8f690f9aca36ebcc887e50d","url":"pretest.html"},{"revision":"5815124f3546d84c4626aed12424960c","url":"pretest.json"},{"revision":"a5a7e290c7b19cc0fbd459bfdb68c2d5","url":"procedure.html"},{"revision":"7ad696d9e28b1cf67ffbae844f629645","url":"references.html"},{"revision":"9552a0d4268d52037dd4454866a8a693","url":"simulation.html"},{"revision":"ed9ed7d4411cf1dfcef3eebc93960ccf","url":"simulation/css/flow_cyto.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3f28243968aa9dc69c6a86f0ae7f5691","url":"simulation/images/button_centrifuge_tubes.png"},{"revision":"7f0e524451a55362d9e91c80955379fd","url":"simulation/images/button_histopaque.png"},{"revision":"df8639157edad39d9203238e5b3ce921","url":"simulation/images/button_PBS.png"},{"revision":"bb6a4a4ddd0cfbc97b5f8c636e9dfb27","url":"simulation/images/button_pipette.png"},{"revision":"1e8d7d01fcb0e4cf2d2014822091611e","url":"simulation/index.html"},{"revision":"98430972da8e1cf57ebfbe8cc2a50256","url":"simulation/js/flow_cyto.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"9660f1b991f3b89182afc11d0fa08b5d","url":"simulation/js/tooltip.js"},{"revision":"e10c543a03fb483ec30211d39c312baf","url":"simulation/json/Step_1.json"},{"revision":"a4bf08a759d1e55d5abdb2eb9ef900f5","url":"simulation/json/Step_2.json"},{"revision":"c3870c91e0af234b57a35da5e3013758","url":"simulation/json/Step_3.json"},{"revision":"d0a70ce9bf98518c840cdc183ae91ed9","url":"simulation/json/Step_4.json"},{"revision":"2e542aaae22c2e84b52c2eb03f8e5765","url":"simulation/json/Step_5.json"},{"revision":"cc2ee6a685c743d1c8d1614f8c643cb9","url":"simulation/json/Step_6.json"},{"revision":"4e1b6f053985c8c1ad4bf85f29b90874","url":"simulation/json/Step_7.json"},{"revision":"437ea4289ddea2977697976b7111bd9e","url":"simulation/json/Step_8.json"},{"revision":"c3b5d8e144da7beeeee2ffa052cdc996","url":"simulation/json/Step_9.json"},{"revision":"4698717d2f9608b507b2b2ed192b799a","url":"theory.html"},{"revision":"bbf4c13d5429b15da44dd13940fe84b6","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );