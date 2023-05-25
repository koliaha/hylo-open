document.addEventListener("DOMContentLoaded", function () {
  var cells = document.getElementsByClassName("cell");
  var targetCellNumber = getRandomCellNumber();
  var targetCell = cells[targetCellNumber - 1];
  let gues = false
  var targetNumber = targetCell.getElementsByClassName("number")[0];

  targetCell.classList.add("target");
  targetNumber.style.display = "block";

  function getRandomCellNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  function checkCell(cellNumber) {
    var cell = cells[cellNumber - 1];
    var number = cell.getElementsByClassName("number")[0];
    cell.classList.add("clicked");
    number.style.display = "block";

    if (cellNumber === targetCellNumber) {
      cell.classList.add("guested");
      gues = true
      setTimeout(() => {
        nextPage();
      }, 1700);
    }
  }
  function nextPage() {
    setTimeout(() => {
      document.getElementById("first").classList.add("toleft");
      setTimeout(() => {
        document.getElementById("second").classList.add("tocenter");
      }, 400);
    }, 1500);
  
  
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      var cellNumber = parseInt(this.dataset.cell);
      if(!gues) checkCell(cellNumber);
    });
  }
});
