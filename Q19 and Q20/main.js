// - 19
const fs = require("node:fs");
{
  console.log("Q 19");

  const readStream = fs.createReadStream("./source.txt");
  const writeStream = fs.createWriteStream("./dest.txt");

  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File copied using streams");
    console.log(
      "=======================================================================",
    );
  });
}



// - 20
{
  const fs = require("node:fs");
  const zlib = require("node:zlib");
  const { pipeline } = require("node:stream");

  {
    
    const readStream = fs.createReadStream("./data.txt");
    const gzip = zlib.createGzip();
    const writeStream = fs.createWriteStream("./data.txt.gz");
    
    pipeline(readStream, gzip, writeStream, (err) => {
      if (err) {
        console.log("Q 20");
        console.log("Error:", err.message);
      } else {
        console.log("Q 20");
        console.log("File compressed successfully");
        console.log(
          "=======================================================================",
        );
      }
    });
  }
}