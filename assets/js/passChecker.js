function checkPassword() {
  let valor1 = document.getElementById("primer-valor").value;
  let valor2 = document.getElementById("segundo-valor").value;
  let valor3 = document.getElementById("tercer-valor").value;

  if (valor1 == 9 && valor2 == 1 && valor3 == 1) {
    document.querySelector("p.resultado-password").innerHTML =
      "Password1 correcto";
  } else if (valor1 == 7 && valor2 == 1 && valor3 == 4) {
    document.querySelector("p.resultado-password").innerHTML =
      "Password2 correcto";
  } else {
    document.querySelector("p.resultado-password").innerHTML =
      "Password Incorrecto";
  }
}
