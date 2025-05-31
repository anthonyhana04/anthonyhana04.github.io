// src/utils/assets.js

//    glob‐import everything under src/assets/ that we care about.
const allAssets = import.meta.globEager('../assets/**/*.{jpg,pdf}');

/*
  allAssets will be an object whose keys look like:
    "../assets/images/profile-photo-copy.jpg"
    "../assets/images/university-hall.jpg"
    "../assets/resume.pdf"
  and whose values are modules with a `default` export = final URL
    e.g. { default: "/assets/profile-photo-copy.abc123.jpg" } 
         { default: "/assets/resume.456def.pdf" }
*/

const assets = {};
Object.entries(allAssets).forEach(([filePath, module]) => {
  // extract the “filename.ext” (everything after the final "/")
  const filename = filePath.split('/').pop(); // e.g. "resume.pdf" or "foo.jpg"

  // const nameWithoutExt = filename.replace(/\.\w+$/, ''); // "resume"
  // assets[nameWithoutExt] = module.default;

  // keep the extension in the key:
  assets[filename] = module.default;
});

export default assets;
