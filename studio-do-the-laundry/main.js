let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

inputElement.addEventListener("keypress",
    function(event) {

        if (event.key == "type") {
            let name = inputElement.value;
            inputElement.value = "";
        }
        for (let i = 0; i < 4; i++) {
            let letter = name[i];
            let selectedCard = document.createElement("img");
            if (["a", "b", "c", "d", "e"].includes(letter)) {
                selectedCard.src = shapeCircle;
            }
            if (["e", "f", "g", "h", "i"].includes(letter)) {
                selectedCard.src = devilURL;
            }
            if (["h", "i", "j", "k", "l"].includes(letter)) {
                selectedCard.src = devilURL;
            }
            if (["m", "n", "o", "p", "q"].includes(letter)) {
                selectedCard.src = devilURL;
            }
            if (["r", "s", "t", "u", "v"].includes(letter)) {
                selectedCard.src = devilURL;
            }
            if (["w", "x", "y", "z"].includes(letter)) {
                selectedCard.src = devilURL;
            }
        }
    }
)