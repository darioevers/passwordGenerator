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

function generator() {
  document.getElementById("password_field").value = passGenerator();
}
