let observer = new ResizeObserver((entries, observer) => console.log(entries));
observer.observe(document.body);

// [
//   {
//     borderBoxSize: [
//       {
//         inlineSize: 323,
//         blockSize: 51
//       }
//     ],
//     contentBoxSize: [
//       {
//         inlineSize: 323,
//         blockSize: 51
//       }
//     ],
//     devicePixelContentBoxSize: [
//       {
//         inlineSize: 323,
//         blockSize: 51
//       }
//     ],
//     contentRect: {
//       top: 0,
//       right: 323,
//       bottom: 51,
//       left: 0,
//       height: 51,
//       width: 323,
//       x: 0,
//       y: 0
//     },
//     target: body
//   }
// ]
