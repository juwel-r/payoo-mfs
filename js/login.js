document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault()
    if(getInputFieldValueById('phone') === '017' && getInputFieldValueById('pin') ==='1234'){
        window.location.href = '/home.html'
        console.log('vex')
  }
  else{
    alert('Wrong Information!')
  }
  });
