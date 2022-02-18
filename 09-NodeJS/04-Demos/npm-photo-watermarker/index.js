/** To Run:
 *    node --max-old-space-size=2048 index.js <input-folder-name>
 * */

const fs = require("fs");
var Jimp = require("jimp");

run(process.argv[2]);

function stamper(inputFolder, photoPath) {

  const outputFolder = "./output-images";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);

    console.log("Folder Created Successfully: ", outputFolder);
  }

  let imgLogo = "./logos/logo.png";

  let imgRaw = inputFolder + photoPath;

  let imgExported = `./output-images/wm_${photoPath}`;


  Jimp.read(imgRaw)

    .then((tpl) => {

      Jimp.read(imgLogo)
        .then((logoTpl) => {

        const tplW = tpl.bitmap.width; //  width of the image
        const tplH = tpl.bitmap.height; // height of the image

        const logoTplW = logoTpl.bitmap.width; //  width of the logo
        const logoTplH = logoTpl.bitmap.height; // height of the logo

          logoTpl.opacity(0.15);

          return tpl.composite(logoTpl, (tplW - logoTplW)/2, (tplH - logoTplH)/2);


        })

        .then((exportImg) => {
            exportImg.quality(100).write(imgExported);
  
            console.log("New image " + photoPath + " : " + imgExported);
          })

        .catch((err) => {
          console.error("\n XXX Hit Error with ", imgLogo, "\n", err);
        });
    })
    .catch((error) => {
      console.error("\n XXX Hit Error with ", photoPath, "\n", error);
    });

} //end stamper function

function run(inputFolder) {

  inputFolder = "./" + inputFolder+ "/";

  if (!fs.existsSync(inputFolder)) {

    fs.mkdirSync(inputFolder);
    console.log("Folder Created Successfully: ", inputFolder);

  }


  let fileList;

  fs.readdir(inputFolder, (error, files) => {
    if (error) {
      return Error("XXX Failed to read directory: ", inputFolder);
    }

    fileList = files;

    console.log(
      "Number of Imgs in Folder " + inputFolder + " : ",
      files.length,
      "\n"
    );

    fileList.forEach( (photo, index, array) => {

      stamper(inputFolder, photo);

    });
  });
} //end run() def
