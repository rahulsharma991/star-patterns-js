(function (value) {
  let star = ""; //to print stars in rows and cols
  //outer loop
  for (let i = 0; i < value; i++) {
    //inner loop
    for (let j = 0; j < value; j++) {
      star += "*"; //incremeting the value and assigning to star
    }
    star += "\n"; // outer loop start from the new line
  }
  console.log(star);
})(5);
