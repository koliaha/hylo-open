document.addEventListener("DOMContentLoaded", function () {
  var cells = document.getElementsByClassName("cell");
  var targetCellNumber = getRandomCellNumber();
  var targetCell = cells[targetCellNumber - 1];
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
      nextPage()
    }
  }
function nextPage(){
    document.getElementById('first').classList.add('inv')
    document.getElementById('second').classList.remove('inv')
}
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      var cellNumber = parseInt(this.dataset.cell);
      checkCell(cellNumber);
    });
  }
});
