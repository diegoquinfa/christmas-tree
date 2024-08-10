import { createTree, input } from "./utils/index.js";

async function main() {
  let high, decoration;

  while (true) {
    high = parseInt(await input("High?: "), 10);

    if (isNaN(high) || high < 0) console.log("Introduzca un numero...\n");
    else break;
  }

  while (true) {
    decoration = (await input("Decoration?: ")).trim();

    if (decoration.trim() === "") console.log("Introduzca algo...\n");
    else break;
  }

  console.log("Christmas Tree: \n");
  console.log(createTree(high, decoration));
}

main();
