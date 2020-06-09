const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")
replaceAllButton.addEventListener("click", function () {
    let findValue = findInput.value
    let replaceValue = replaceInput.value
    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex ++) {
        let rowElementArray = getCellElements(rowElements[rowIndex])
        for (let cellIndex = 0; cellIndex < rowElementArray.length; cellIndex ++) {
            let cellElements = rowElementArray[cellIndex]
            if (cellElements.innerText.includes(findValue)) {
                let replaceCell = cellElements.innerHTML.replace(findValue, replaceValue)
                cellElements.innerHTML = replaceCell
            }
        }
    }
})
 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}