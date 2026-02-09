const PASSWORD = "himitsu123";  // ← 好きなパスワードに変えてOK

function login() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    sessionStorage.setItem("auth", "true");
    location.href = "https://sites.google.com/d/1nzQdI27HrVgrf4BI8b2yt4wnoKGwL0-a/p/1TfH-epYU0gTkYQRbqLjIXEG2buSmcvNZ/edit";
  } else {
    document.getElementById("error").textContent = "パスワードが違います";
  }
}
