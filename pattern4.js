((value) => {
  let str = "";
  for (let i = 1; i <= value; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
})(5);

// pattern
// 1
// 12
// 123
// 1234
// 12345
