const performanceResourceTimingEntry = performance.getEntriesByType('resource')[0];

console.log(performanceResourceTimingEntry);// PerformanceResourceTiming {
//   connectEnd: 138.11499997973442
//   connectStart: 138.11499997973442
//   decodedBodySize: 33808
//   domainLookupEnd: 138.11499997973442
//   domainLookupStart: 138.11499997973442
//   ...
// }

console.log(performanceResourceTimingEntry.responseEnd –
            performanceResourceTimingEntry.requestStart);
// 493.9600000507198
