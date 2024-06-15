function buyStickers() {
  //Captura valores de los inputs
  let sticker1 = document.getElementById("sticker-1").value;
  let sticker2 = document.getElementById("sticker-2").value;
  let sticker3 = document.getElementById("sticker-3").value;

  let total = Number(sticker1) + Number(sticker2) + Number(sticker3);

  const mostarTotal = document.querySelector("p.p-total");

  if (total == 0 || undefined) {
    mostarTotal.innerHTML = "No puedes llevar 0";
  } else if (total >= 1 && total <= 10) {
    mostarTotal.innerHTML = `En total llevas: ${total} sticker(s)`;
  } else {
    mostarTotal.innerHTML = "Llevas demasiados stickers";
  }
}
