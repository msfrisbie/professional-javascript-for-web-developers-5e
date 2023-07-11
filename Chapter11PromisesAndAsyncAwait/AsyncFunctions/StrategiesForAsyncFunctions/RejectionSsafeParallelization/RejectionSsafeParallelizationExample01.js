async function getApiPages(pageCount) {
  const data = [];
  const pageUrls = Array.from(Array(pageCount).keys())
    .map(i => `https://foo.com/api?page=${i}`);

  for (const url of pageUrls) {
    const response = await fetch(url);
    const pageData = await response.json();
    data.push(data);
  }

  return data.flat();
}

