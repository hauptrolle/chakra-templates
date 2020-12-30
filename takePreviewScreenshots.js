const path = require("path");
const puppeteer = require("puppeteer");
const directoryTree = require("directory-tree");

const TEMPLATE_DIR = "src/pages/templates";
const PREVIEW_PATH = "http://localhost:3000/templates";
const OUTPUT_PATH = "./public/preview";

(async () => {
  const componentsDir = path.join(process.cwd(), TEMPLATE_DIR);
  const tree = directoryTree(componentsDir);

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 800 });

  for (const category of tree.children) {
    for (const subCategory of category.children) {
      // for (const template of subCategory.children) {
      const previewCat = subCategory.children[0];
      const path = `${PREVIEW_PATH}/${category.name}/${subCategory.name}/${
        previewCat.name.split(".")[0]
      }`;
      await page.goto(path);
      const element = await page.$("#__next");
      await element.screenshot({
        path: `${OUTPUT_PATH}/${category.name}-${subCategory.name}.png`,
      });
      // }
    }
  }

  await browser.close();
})();
