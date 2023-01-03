((value) => {
  let star = "";
  for (let i = 1; i <= value; i++) {
    for (let j = 1; j <= i; j++) {
      star += i;
    }
    star += "\n";
  }
  console.log(star);
})(5);
