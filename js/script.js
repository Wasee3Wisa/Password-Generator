/*============== Make password============================*/
const Letters = 
"0123456789~!@#$%^&*()_+=|abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSRTUVWXYZ";
let passwordValue = '';
//btn Generator password
let btnGenerator = document.getElementById('btn_generator');
//Password_show
let passwordShow = document.getElementById('passwordShow');
btnGenerator.onclick = () => {
  //to empty old password
  passwordValue = '';
  //make password
  for (let i = 1; i <= 16; i++) {
    passwordValue += Letters[Math.floor(Math.random() * Letters.length)];
  }
  passwordShow.textContent = passwordValue;
}
/*==================== Copy to clipboard ======================*/
let clipboard = document.getElementById('clipboard');
clipboard.onclick = () => {
  if (passwordValue !== '') {
    navigator.clipboard.writeText(passwordValue);
    alert('Copied to clipboard');
  }
}