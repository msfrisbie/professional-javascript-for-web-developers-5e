console.time("My Timer");
for (let i = 0; i < 1000000; i++) {
  if (i % 100000 === 0) {
    console.timeLog("My Timer", `Finished ${i} items`);
  }
}
console.timeEnd("My Timer");

// My Timer: 0.009033203125 ms Finished 0 items
// My Timer: 1.578125 ms Finished 100000 items
// My Timer: 2.38623046875 ms Finished 200000 items
// My Timer: 3.76513671875 ms Finished 300000 items
// My Timer: 4.132080078125 ms Finished 400000 items
// My Timer: 4.256103515625 ms Finished 500000 items
// My Timer: 4.405029296875 ms Finished 600000 items
// My Timer: 4.574951171875 ms Finished 700000 items
// My Timer: 4.801025390625 ms Finished 800000 items
// My Timer: 5.062255859375 ms Finished 900000 items
// My Timer: 5.320068359375 ms
