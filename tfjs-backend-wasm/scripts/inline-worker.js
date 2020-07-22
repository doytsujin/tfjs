const fs = require('fs');

const workerContents = fs.readFileSync('./wasm-out/tfjs-backend-wasm-threaded-simd.worker.js', "utf8");

const fileContents = `export const wasmWorkerContents = '${workerContents.trim()}';`;

fs.writeFileSync('./wasm-out/tfjs-backend-wasm-threaded-simd.worker.ts', fileContents);