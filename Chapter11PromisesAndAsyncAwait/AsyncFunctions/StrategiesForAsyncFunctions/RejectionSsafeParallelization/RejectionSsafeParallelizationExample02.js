async function getApiPages(pageCount) {
  const data = [];
  const pageUrls = Array.from(Array(pageCount).keys())
    .map(i => `https://foo.com/api?page=${i}`);

  // Fire off the requests in parallel and combine the
  // fetch promises into an array
  const pagePromises = pageUrls.map(async (url) => {
    const response = await fetch(url);
    return response.json();
  });

  // Implicitly adds silent rejection handlers to all promises
  Promise.allSettled(pagePromises);

  // Record data at its proper page index
  for await (const [i, pageData] of pagePromises.entries()) {
    data[i] = pageData;
  }

  return data.flat();
}
