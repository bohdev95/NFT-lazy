// // instead of response.json() and other methods
// const reader = response.body.getReader();

// // infinite loop while the body is downloading
// while (true) {
//   // done is true for the last chunk
//   // value is Uint8Array of the chunk bytes
//   const { done, value } = await reader.read();

//   if (done) {
//     break;
//   }

//   console.log(`Received ${value.length} bytes`);
// }

let loaded = false;

const title = document.getElementById("percentageCounter");

const fillPercents = () => {};

window.addEventListener("load", fillPercents);
