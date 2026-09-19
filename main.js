// Assignment 2
let path = require("node:path");
const { fileURLToPathBuffer } = require("node:url");

// Part 1
// - 1
console.log("Q 1");
{
  function logsCurrentFile(filepath) {
    let obj = {
      file: filepath,
      dir: path.dirname(filepath),
    };
    console.log(obj);
  }
  logsCurrentFile("/home/user/project/index.js");
  console.log(
    "=======================================================================",
  );
}

// - 2
console.log("Q 2");
{
  function fileName(filepath) {
    let fname = path.basename(filepath);
    console.log(fname);
  }
  fileName("/user/files/report.pdf");
  console.log(
    "=======================================================================",
  );
}

// -3
console.log("Q 3");
{
  let build_path = ({ dir, name, ext }) => {
    console.log(path.join(dir, name + ext));
  };
  build_path({ dir: "/folder", name: "app", ext: ".js" });
}
console.log(
  "=======================================================================",
);

// - 4
console.log("Q 4");
{
  function file_extension(filepath) {
    console.log(path.extname(filepath));
  }
  file_extension("/docs/readme.md");
}
console.log(
  "=======================================================================",
);

// - 5
console.log("Q 5");
{
  function parse_path(filepath) {
    let obj = {
      Name: path.basename(filepath, path.extname(filepath)),
      Ext: path.extname(filepath),
    };
    console.log(obj);
  }
  parse_path("/home/app/main.js");
}
console.log(
  "=======================================================================",
);

// -6
console.log("Q 6");
{
  function isAbsolute(filepath) {
    console.log(path.isAbsolute(filepath));
  }
  isAbsolute("/home/user/file.txt");
}
console.log(
  "=======================================================================",
);

// - 7
console.log("Q 7");
{
  function Joins(...string) {
    console.log(path.join(...string));
  }
  Joins("src", "components", "App.js");
}
console.log(
  "=======================================================================",
);

// - 8
console.log("Q 8");
{
  function resolvePath(filepath) {
    console.log(path.resolve(filepath));
  }
  resolvePath("./index.js");
}
console.log(
  "=======================================================================",
);

// - 9
console.log("Q 9");
{
  function join_two_paths(filepath1, filepath2) {
    console.log(path.join(filepath1, filepath2));
  }
  join_two_paths("/folder1", "folder2/file.txt");
}
console.log(
  "=======================================================================",
);

const fs = require("node:fs");

// Q10
{
  console.log("Q 10");
  
  function deleteFile(filepath) {
    fs.rm(filepath, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("The file " + path.basename(filepath) + " is deleted");
      }
  
      console.log(
        "=======================================================================",
      );
  
    });
  }
  deleteFile("/path/to/file.txt");
}

