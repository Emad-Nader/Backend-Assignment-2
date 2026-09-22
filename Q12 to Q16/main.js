// - 12
const fs = require("node:fs");
const eventEmitter = require("node:events");
console.log("Q 12");
{
  const Emitter = new eventEmitter();

  Emitter.on("Start", () => {
    console.log("Welcome event triggered!");
    console.log(
      "=======================================================================",
    );
  });
  Emitter.emit("Start");
}

// - 13
console.log("Q 13");
{
  const login = new eventEmitter();
  login.on("login", (name) => {
    console.log("User logged in :", name);
    console.log(
         "=======================================================================",
       );
  });
  login.emit("login","Ahmed");

}

// - 14
console.log("Q 14");
{
  function readFile(filepath) {
    console.log(fs.readFileSync(filepath, "utf-8"));
  }
  readFile("./notes.txt");
}
 console.log(
   "=======================================================================",
);

// - 15
console.log("Q 15");
{
  function writeAsync(filepath,next) {
    fs.writeFile(filepath, "Async save", "utf-8", (err) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log("The file written successfully")
        console.log(
          "=======================================================================",
        );
      }
      next();
    });
  }

}

// - 16
{
  function dirExists(filepath) {
    console.log("Q 16");
    console.log(fs.existsSync(filepath));
 console.log(
   "=======================================================================",
 );

  }

  writeAsync("./async.txt",()=>{
    dirExists('./notes.txt')
// using callback for output shape .
  });
}

