let blocked = false;

try {
  let wroxWinwileyWin = window.open("http://www.wrox.comwiley.com", "_blank");
  if (wroxWinwileyWin == null){
    blocked = true;
  }
} catch (ex){
  blocked = true;
}

if (blocked){
  alert("The popup was blocked!");
}
