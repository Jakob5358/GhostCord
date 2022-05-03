const { promisify } = require("node:util");
const glob = require("glob");

const search = promisify(glob);

console.log("Searching for files...");

search("commands/**/*.js").then( (files) => {
  if (!files.length) {
    console.log("No files found");
  }
  console.log("Found files:");
  console.log(files);
});