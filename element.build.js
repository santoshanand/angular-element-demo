
const fs = require('fs-extra');
const concat = require('concat');

const sourceDir = './dist/element-demo';
const outputDir = './build';
(async function build() {

  const runtime = [
    `${sourceDir}/runtime-es2015.js`,
    `${sourceDir}/runtime-es5.js`,

  ]
  const polyfills = [
    `${sourceDir}/polyfills-es2015.js`,
    `${sourceDir}/polyfills-es5.js`,

  ]
  const scripts = [
    `${sourceDir}/scripts.js`,
  ]
  const main = [
    `${sourceDir}/main-es2015.js`,
    `${sourceDir}/main-es5.js`
  ]


  const content =
    `
  <!doctype html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <title>Element Demo</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <demo-page title="Hello title"></demo-page>
    <list-page></list-page>

    <script src="runtime.js"></script>
    <script src="polyfills.js"></script>
    <script src="scripts.js"></script>
    <script src="main.js"></script>
  </body>


  </html>
  `
  const index = `${outputDir}/index.jsp`;
  await fs.remove(outputDir);
  await fs.ensureDir(outputDir)
  await concat(runtime, 'elements/runtime.js')
  await concat(polyfills, 'elements/polyfills.js')
  await concat(scripts, 'elements/scripts.js')
  await concat(main, 'elements/main.js')
  await fs.copy(`${sourceDir}/styles.css`, `${outputDir}/styles.css`)
  await fs.copy(`${sourceDir}/index.html`, `${outputDir}/index.html`)

  await fs.outputFile(index, content)
  console.info('Angular Elements created successfully!')

})()