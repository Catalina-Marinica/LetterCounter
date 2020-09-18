const textInputNode = document.getElementById("js-text")


textInputNode.addEventListener("keyup", function (event) {
    const textInput = textInputNode.value
    const letterCount = document.querySelector(".letterCount")
    let count = 0

    textInputSplit = textInput.split(" ")
    textInputSplit.forEach(word => {
        count += word.length
    });

    letterCount.innerText = count

})
