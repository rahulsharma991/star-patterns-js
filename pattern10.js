((value) => {
  let str = "";
  for (let i = 1; i <= value; i++) {
    for (let j = 1; j <= 2 * value - 1; j++) {
      if (j >= value - (i - 1) && j <= value + (i - 1)) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
})(6);

//pattern
//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
