((value) => {
  let str = "";
  for (let i = value; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
})(5);

// pattern
// 12345
// 1234
// 123
// 12
// 1
