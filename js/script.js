const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Verifica se o usuário está vazio
  if (nameInput.value === "") {
    alert("Por favor, preencha o usuário");
    return;
  }

  // Verifica se a está preenchida
if (!validatePassword(passwordInput.value, 6)) {
  alert("A senha precisa de no mínimo 6 dígitos");
  return;
}

  // Se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();
});

 // função que valida a senha
 function validatePassword(passsword, minDigits) {
  if(passsword.length >= minDigits) {
    // Senha válida
    return true
  }

  // Senha inválida
  return false
 }