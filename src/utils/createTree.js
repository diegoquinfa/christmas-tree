/**
 * Generates a visual representation of a tree using a specified decoration and returns it as a string.
 *
 * @param {number} height - The maximum height of the tree.
 * @param {string} [decoration="*"] - The character(s) used to decorate the tree. If multiple characters are provided, they will repeat cyclically.
 * @returns {string} A string representing the tree, formatted with the specified decoration.
 */
const createTree = (high, decoration = "*") => {
  const chars = decoration.split("");
  let tree = "";

  for (let h = 1; h <= high; h++) {
    for (let i = 0; i < high - h; i++) {
      tree += " ";
    }

    let count = 0;

    for (let i = 0; i < h; i++) {
      tree += chars[count++] + " ";
      if (count == chars.length) count = 0;
    }

    tree += "\n";
  }

  for (let i = 0; i < high - 1; i++) {
    tree += " ";
  }

  tree += "|\n";

  return tree;
};

export { createTree };
