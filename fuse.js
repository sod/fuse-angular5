const ngc = require('@angular/compiler-cli/src/main');
const {FuseBox} = require('fuse-box');

ngc.main(['--watch']);

const fuse = FuseBox.init({
    sourceMaps: true,
    homeDir : "dist/out-tsc/src",
    output : "src/dist/$name.js"
});

fuse.dev({
    root: 'src',
    open: true,
});

fuse.bundle("bundle/main")
    .instructions(`> main.aot.js`)
    .watch("dist/out-tsc/**");

fuse.run();
