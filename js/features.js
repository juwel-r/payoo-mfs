//Section Hide/Unhide

function unhide(id) {
  document.getElementById("add-money-sec").classList.add("hidden");
  document.getElementById("cashout-sec").classList.add("hidden");
  document.getElementById("history-sec").classList.add("hidden");
  return document.getElementById(id).classList.remove("hidden");
}

document.getElementById("history-btn").addEventListener("click", function () {
  unhide("history-sec");
});

document
  .getElementById("add-money-btn1")
  .addEventListener("click", function () {
    unhide("add-money-sec");
  });

document.getElementById("cashout-btn1").addEventListener("click", function () {
  unhide("cashout-sec");
});
