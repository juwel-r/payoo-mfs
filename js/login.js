document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault()
    if(document.getElementById('phone').value === '01701' && getInputFieldValueById('pin') === 1234){
        window.location.href = '/home.html'
  }
  else{
    alert('Wrong Information!')
  }
  });
