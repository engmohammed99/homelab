const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1; // Limit the thread pool size to 1

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------------");

  setTimeout(() => console.log("Timeout 2 executed"), 0);
  setTimeout(() => console.log("Timeout 3 executed"), 3000);
  setImmediate(() => console.log("Immediate executed"));

  process.nextTick(() => console.log("Process.nextText"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });

  console.log("Hello from top level code ");
});
