let inputElement = document.querySelector("#input");

let result = document.querySelector("result");

inputElement.addEventListener("keydown",
    function(event) {
        if (event.key == "enter") {
            result.innerText = "You typed:" + inputElement.value;
            inputElement.value = "";
        }
    }
)