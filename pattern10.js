((value) => {
  let str = "";
  for (let i = 1; i <= value; i++) {
    // str += "\n";
    for (let j = 1; j <= 2 * value - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
})(9);
