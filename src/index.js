// PASSWORD GENERATION
const passGenerator = () => {
  let password = "";
  var length = 10;
  var charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,@#!?$";

  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
};

//  GENERATOR OUTPUT FUCTION
function generator() {
  document.getElementById("password_field").value = passGenerator();
}

window.onload = generator();

// COPY TO CLIPBOARD
function copyClip() {
  var copyText = document.getElementById("password_field");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
