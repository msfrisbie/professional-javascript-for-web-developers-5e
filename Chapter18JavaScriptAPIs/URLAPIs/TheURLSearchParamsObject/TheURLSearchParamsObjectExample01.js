let qs = "?q=javascript&num=10";

let searchParams = new URLSearchParams(qs);

console.log(searchParams.toString());  // "q=javascript&num=10"
searchParams.has("num");               // true
searchParams.get("num");               // 10

searchParams.set("page", "3");
console.log(searchParams.toString());  // "q=javascript&num=10&page=3"

searchParams.delete("q");
console.log(searchParams.toString());  // "num=10&page=3"
