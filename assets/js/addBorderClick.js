//add img as a const
const simpsonImg = document.getElementById("simpson-img");
//anonimous function onclick 
simpsonImg.addEventListener("click", () => {
  if (simpsonImg.style.border == "") {
    simpsonImg.style.border = "solid 2px red";
  } else {
    simpsonImg.style.border = "";
  }
});


