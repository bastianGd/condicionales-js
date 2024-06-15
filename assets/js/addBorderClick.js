document.getElementById("simpson-img").addEventListener("click", function () {
  if (document.getElementById("simpson-img").style.border == "") {
    document.getElementById("simpson-img").style.border = "solid 2px red";
  } else {
    document.getElementById("simpson-img").style.border = "";
  }
});
