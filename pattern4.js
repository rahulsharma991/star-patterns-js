((value) => {
  let str = "";
  for (let i = 1; i <= value; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
      str += j;
    }
    // console.log(i);
    str += "\n";
  }
  console.log(str);
})(5);
