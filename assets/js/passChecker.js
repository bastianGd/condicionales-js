function checkPassword() {
  let valor1 = document.getElementById("primer-valor").value;
  let valor2 = document.getElementById("segundo-valor").value;
  let valor3 = document.getElementById("tercer-valor").value;
  const password = valor1 + valor2 + valor3;
  if (password === "911") {
    resultado.textContent = "Password1 correcto";
  } else if (password === "714") {
    resultado.textContent = "Password2 correcto";
  } else {
    resultado.textContent = "Password Incorrecto";
  }
}

function checkPassword() {
  const valor1 = document.getElementById("primer-valor").value;
  const valor2 = document.getElementById("segundo-valor").value;
  const valor3 = document.getElementById("tercer-valor").value;
  const resultado = document.querySelector("p.resultado-password");
}
