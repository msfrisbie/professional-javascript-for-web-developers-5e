function compare(value1, value2) {
  if (value1 < value2) {
    return 1;
  } else if (value1> value2) {
    return -1;
  } else {
    return 0;
  }
}

let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values);  // 15,10,5,1,0
