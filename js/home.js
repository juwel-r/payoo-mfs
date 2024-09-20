
//Add Money Action
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let balance = getTexttFieldValueById("balance");
    const addBalance = getInputFieldValueById("add-money-amount");
    const pin = getInputFieldValueById("add-money-pin");

    if (!isNaN(addBalance) && pin === 123 && addBalance > 0) {
      const newBalance = balance + addBalance;
      document.getElementById("balance").innerText = newBalance;
      document.getElementById("add-money-amount").value = "";
      document.getElementById("add-money-pin").value = "";
      //History
      const div = document.createElement('div')
      div.classList.add('rounded-md', 'bg-base-100', 'mb-2', 'p-2')
      div.innerHTML =`
                <h1 class="text-md font-semibold">Cash In</h1>
                <p class="text-stone-600">Amount ${addBalance} Taka, New Balance ${newBalance}</p>`
      document.getElementById('history-sec').appendChild(div)
    } else {
      alert("Please enter right Information!");
    }
  });

//Cash Out Action
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let balance = getTexttFieldValueById("balance");
    const cashOutBalance = getInputFieldValueById("cashout-amount");
    const pin = getInputFieldValueById("cashout-pin");
    if (!isNaN(cashOutBalance) && pin === 123 && cashOutBalance <= balance) {
      const newBalance = balance - cashOutBalance;
      document.getElementById("balance").innerText = newBalance;
      document.getElementById("cashout-amount").value = "";
      document.getElementById("cashout-pin").value = "";

      //History
      const div = document.createElement('div')
      div.classList.add('rounded-md', 'bg-gray-100', 'mb-2', 'p-2')
      div.innerHTML =`
                <h1 class="text-md font-semibold">Cash Out</h1>
                <p class="text-stone-600">Amount ${cashOutBalance} Taka, New Balance ${newBalance}</p>`
      document.getElementById('history-sec').appendChild(div)
    } else {
      alert("Please enter right Information!");
    }
  });
