import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user for input via the command line and returns the response as a string.
 *
 * @param {string} query - The question or prompt text to display to the user.
 * @returns {Promise<string>} A promise that resolves to the user's input as a string.
 */
const input = async (query) => {
  rl.resume();
  const res = await rl.question(query);
  rl.pause();
  return res;
};

export { input };
