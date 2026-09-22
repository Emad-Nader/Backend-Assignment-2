// - 17
const os = require("node:os");
{
  console.log("Q 17");

  function getOSInfo() {
    return {
      Platform: os.platform(),
      Arch: os.arch(),
    };
  }

  console.log(getOSInfo());
}
console.log(
  "=======================================================================",
);

// - 18
const fs = require("node:fs");
{
  console.log("Q 18");

  const readStream = fs.createReadStream("./big.txt");

  readStream.on("data", (chunk) => {
    console.log(chunk.toString());
    console.log(
      "=======================================================================",
    );
  });
}
