arr.sort((a, b) => {
  if (a.foo === "") return 1;
  if (b.foo === "") return -1;
  return a.foo.localeCompare(b.foo);
});
[{foo:"a"},{foo:"b"},{foo:""}]
