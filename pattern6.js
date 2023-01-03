((value) => {
  let str = "";
  for (let i = value; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
})(5);

// pattern
// 54321
// 4321
// 321
// 21
// 1
