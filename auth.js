const PASSWORD = "himitsu123";  // ← 好きなパスワードに変えてOK

function login() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    sessionStorage.setItem("auth", "true");
    location.href = "https://sites.google.com/g.miyazaki-c.ed.jp/kyom/%E3%83%9B%E3%83%BC%E3%83%A0/kaikyoma";
  } else {
    document.getElementById("error").textContent = "パスワードが違います";
  }
}
