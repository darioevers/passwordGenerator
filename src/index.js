const passGenerator = () => {
  let password = "";
  var length = 30;
  var charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,@#!?$";

  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(`This is your randomly generated password: ${password}`);
};

passGenerator();
