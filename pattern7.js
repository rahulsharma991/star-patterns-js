((value) => {
  let str = "";
  for (let i = value; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      str += i;
    }
    str += "\n";
  }
  console.log(str);
})(5);

// pattern
// 55555
// 4444
// 333
// 22
// 1
