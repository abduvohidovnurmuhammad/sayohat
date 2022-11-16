  let user = prompt("ismingizni kiriting")
  let money = +prompt("mablagingizni kiriting")
  let usd = 11000.34
  let euro = 12354.03
  let pilot = 500
  let hotel = 250
  let muzey = 120

  if(money >= (((pilot+hotel)*usd)+(muzey*euro))) {
    console.log( user + " " + "Siz ketishingiz mumkin");
  } else {
    console.log( user + " " + "Sabir qilish kerak");
  }
