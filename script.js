function calculateLove() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;

  if (!name1 || !name2) {
    document.getElementById("result").innerText = "Please enter both names!";
    return;
  }

  if (
    (name1 === "Stanislav" && name2 === "Lesia") ||
    (name1 === "Lesia" && name2 === "Stanislav") ||
    (name1 === "Stas" && name2 === "Lesia") ||
    (name1 === "Lesia" && name2 === "Stas")
  ) {
    var resultText = name1 + " + " + name2 + " = " + 100 + "% Love";
    document.getElementById("result").innerText = resultText;
  } else {
    var lovePercentage = Math.floor(Math.random() * 100) + 1;

    var resultText = name1 + " + " + name2 + " = " + lovePercentage + "% Love";
    document.getElementById("result").innerText = resultText;
  }
}
