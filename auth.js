const PASSWORD = "himitsu123";  // ← 好きなパスワードに変えてOK

function login() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    sessionStorage.setItem("auth", "true");
    location.href = "secret.html";
  } else {
    document.getElementById("error").textContent = "パスワードが違います";
  }
}
