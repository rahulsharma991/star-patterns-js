((value) => {
  let str = "";
  for (let i = 1; i <= value; i++) {
    for (let j = i; j <= value; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
})(5);

// pattern
// 12345
// 2345
// 345
// 45
// 5
