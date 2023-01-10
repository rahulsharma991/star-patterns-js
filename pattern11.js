((value) => {
  let str = "";
  for (let i = value; i >= 1; i--) {
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
})(9);

//pattern
// *****************
//  ***************
//   *************
//    ***********
//     *********
//      *******
//       *****
//        ***
//         *
