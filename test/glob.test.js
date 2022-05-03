const { promisify } = require("node:util");
const glob = require("glob");

const search = promisify(glob);

console.log("Searching for files...");

search(__dirname + "commands/**/*.js").then((files) => {
  if (!files.length) {
    console.log("No files found");
  } else {
    console.log(`Found ${files.length} files`);
    console.log(files);
  }
});
