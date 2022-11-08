// Polka lover

function letsDance(danceStyle) {
  const letsDance = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (danceStyle === "polka") {
        resolve("Yes, polka is my thing!");
      } else {
        reject("No, you suck!");
      }
    }, 2000);
  });

  return letsDance;
}

letsDance("polka")
  .then((response) => console.log(response))
  .catch((diss) => console.log(diss));

//
//
//
//
//
//
// Webbprojektet

// function research() {
//   const research = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Researcha målgruppen"));
//     }, 4000);
//   });
//   return research;
// }

// function makeSketch() {
//   const makeSketch = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Skissa upp en design på papper"));
//     }, 2000);
//   });
//   return makeSketch;
// }

// function doSketch() {
//   const doSketch = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         console.log("Gör skissen till pixel perfect mockup I Figma / XD ")
//       );
//     }, 3000);
//   });
//   return doSketch;
// }

// function coding() {
//   const coding = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Koda"));
//     }, 3000);
//   });
//   return coding;
// }

// function stackOverFlow() {
//   const stackOverFlow = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Stackoverflow:a fel"));
//     }, 1000);
//   });
//   return stackOverFlow;
// }

// function testProduct() {
//   const testProduct = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Testa produkten"));
//     }, 2000);
//   });
//   return testProduct;
// }

// function cheerSucceedProject() {
//   const cheerSucceedProject = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Fira lyckat projekt"));
//     }, 1000);
//   });
//   return cheerSucceedProject;
// }

// Lägg i console.log i function body så funkar nedan kod!
// research()
//   .then(makeSketch)
//   .then(doSketch)
//   .then(coding)
//   .then(stackOverFlow)
//   .then(testProduct)
//   .then(cheerSucceedProject)
//   .catch("error");

//
//
//
// Async / Await
// ----------------------------
// Polka lover

// async function letsDance() {
//   const danceType = await letsDance;
//   console.log(danceType);
// }

// letsDance("waltz");
// letsDance("polka");

// Webbproject --------------------------------

// async function webbproject() {
//   await research();
//   await makeSketch();
//   await doSketch();
//   await coding();
//   await stackOverFlow();
//   await testProduct();
//   await cheerSucceedProject();
// }

// webbproject();

// async function webbproject() {
//   const researcha = await research();
//   console.log(researcha);
//   const skissa = await makeSketch();
//   console.log(skissa);
//   const gorSkiss = await doSketch();
//   console.log(gorSkiss);
//   const koda = await coding();
//   console.log(koda);
//   const stackOverFlowA = await stackOverFlow();
//   console.log(stackOverFlowA);
//   const testa = await testProduct();
//   console.log(testa);
//   const fira = await cheerSucceedProject();
//   console.log(fira);
// }

// webbproject();
