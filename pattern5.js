((value) => {
  let str = "";
  for (let i = value; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
})(5);

// pattern
// *****
// ****
// ***
// **
// *
