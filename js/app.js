window.onload = function () {

    const bill = document.querySelector("#bill-input");
    const billPlacehoder = document.querySelector("#bill-input").placeholder;
    const numberOfPeople = document.querySelector("#number-of-people-input");
    const numberOfPeoplePlaceholder = document.querySelector("#number-of-people-input").placeholder;
    const tipAmount = document.querySelector("#tip-amount");
    const total = document.querySelector("#total");
    const reset = document.querySelector("#reset");
    const fivePercent = document.querySelector(".grid1");
    const tenPercent = document.querySelector(".grid2");
    const fifteenPercent = document.querySelector(".grid3");
    const twentyFivePercent = document.querySelector(".grid4");
    const fiftyPercent = document.querySelector(".grid5");
    const customPercent = document.querySelector(".grid6");
    const customPercentCalc = document.querySelector("#custom-tip");

    // Funkcja odbywająca się wraz z wciśnieciem klawisza w polu "Liczba osób"
    numberOfPeople.addEventListener("keydown", function () {

        let x = parseInt(numberOfPeople.value);
        let error = document.querySelector("#error");

        // Jeżeli wpisana wartość równa jest 0 to zwracany jest błąd
        if (x == 0) {
            numberOfPeople.style.outlineColor = "red";
            error.style.display = "inline";
            tipAmount.innerHTML = "0.00 PLN";
            total.innerHTML = "0.00 PLN";
        } else {
            numberOfPeople.style.outlineColor = "#204ac8";
            error.style.display = "none";
        }
    })

    // Funkcja, która odbywa się podczas kliknięcia w przycisk reset
    reset.addEventListener("click", function () {
        bill.value = " ";
        numberOfPeople.value = " ";
        customPercentCalc.value = " ";
        tipAmount.innerHTML = "0.00 PLN";
            total.innerHTML = "0.00 PLN";
        reset.style.backgroundColor = "#204ac8";

        fivePercent.style.backgroundColor = "#204ac8";
        tenPercent.style.backgroundColor = "#204ac8";
        fifteenPercent.style.backgroundColor = "#204ac8";
        twentyFivePercent.style.backgroundColor = "#204ac8";
        fiftyPercent.style.backgroundColor = "#204ac8";
        customPercent.style.backgroundColor = "#204ac8";


        fivePercent.style.color = "hsl(0, 0%, 100%)";
        tenPercent.style.color = "hsl(0, 0%, 100%)";
        fifteenPercent.style.color = "hsl(0, 0%, 100%)";
        twentyFivePercent.style.color = "hsl(0, 0%, 100%)";
        fiftyPercent.style.color = "hsl(0, 0%, 100%)";

    })

    // Funkcja odbywająca się wraz z wciśnieciem klawisza w polu "Rachunek", jeżeli wpiszemy wartość to kolor tła przycisku reset zmienia się
    bill.addEventListener("keydown", function () {
        if (bill.value !== billPlacehoder || numberOfPeople.value !== numberOfPeoplePlaceholder) {
            reset.style.backgroundColor = "#4169e1";
        } else if (bill.value == billPlacehoder || numberOfPeople.value == billPlacehoder) {
            reset.style.backgroundColor = "#204ac8";
        }
    })

    numberOfPeople.addEventListener("keydown", function () {
        if (bill.value !== billPlacehoder || numberOfPeople.value !== numberOfPeoplePlaceholder) {
            reset.style.backgroundColor = "#4169e1";
        } else if (bill.value == billPlacehoder || numberOfPeople.value == billPlacehoder) {
            reset.style.backgroundColor = "#204ac8";
        }
    })


    //Obliczamy całkowity koszt "Razem"
    bill.addEventListener("keyup", function () {
        numberOfPeople.addEventListener("keyup", function () {

            fivePercent.addEventListener("click", function () {
                let calculate = (parseFloat(bill.value) * 1.05) / numberOfPeople.value;
                total.innerHTML = calculate.toFixed(2) + " PLN";

                fivePercent.style.backgroundColor = "#dce3fd";
                tenPercent.style.backgroundColor = "#204ac8";
                fifteenPercent.style.backgroundColor = "#204ac8";
                twentyFivePercent.style.backgroundColor = "#204ac8";
                fiftyPercent.style.backgroundColor = "#204ac8";
                customPercent.style.backgroundColor = "#204ac8";


                fivePercent.style.color = "hsl(183, 100%, 15%)";
                tenPercent.style.color = "hsl(0, 0%, 100%)";
                fifteenPercent.style.color = "hsl(0, 0%, 100%)";
                twentyFivePercent.style.color = "hsl(0, 0%, 100%)";
                fiftyPercent.style.color = "hsl(0, 0%, 100%)";

            })

            tenPercent.addEventListener("click", function () {
                let calculate = (parseFloat(bill.value) * 1.1) / numberOfPeople.value;
                total.innerHTML = calculate.toFixed(2) + " PLN";
                fivePercent.style.backgroundColor = "#204ac8";
                tenPercent.style.backgroundColor = "#dce3fd";
                fifteenPercent.style.backgroundColor = "#204ac8";
                twentyFivePercent.style.backgroundColor = "#204ac8";
                fiftyPercent.style.backgroundColor = "#204ac8";
                customPercent.style.backgroundColor = "#204ac8";

                fivePercent.style.color = "hsl(0, 0%, 100%)";
                tenPercent.style.color = "hsl(183, 100%, 15%)";
                fifteenPercent.style.color = "hsl(0, 0%, 100%)";
                twentyFivePercent.style.color = "hsl(0, 0%, 100%)";
                fiftyPercent.style.color = "hsl(0, 0%, 100%)";

            })

            fifteenPercent.addEventListener("click", function () {
                let calculate = (parseFloat(bill.value) * 1.15) / numberOfPeople.value;
                total.innerHTML = calculate.toFixed(2) + " PLN";
                fivePercent.style.backgroundColor = "#204ac8";
                tenPercent.style.backgroundColor = "#204ac8";
                fifteenPercent.style.backgroundColor = "#dce3fd";
                twentyFivePercent.style.backgroundColor = "#204ac8";
                fiftyPercent.style.backgroundColor = "#204ac8";
                customPercent.style.backgroundColor = "#204ac8";

                fivePercent.style.color = "hsl(0, 0%, 100%)";
                tenPercent.style.color = "hsl(0, 0%, 100%)";
                fifteenPercent.style.color = "hsl(183, 100%, 15%)";
                twentyFivePercent.style.color = "hsl(0, 0%, 100%)";
                fiftyPercent.style.color = "hsl(0, 0%, 100%)";

            })

            twentyFivePercent.addEventListener("click", function () {
                let calculate = (parseFloat(bill.value) * 1.25) / numberOfPeople.value;
                total.innerHTML = calculate.toFixed(2) + " PLN";
                fivePercent.style.backgroundColor = "#204ac8";
                tenPercent.style.backgroundColor = "#204ac8";
                fifteenPercent.style.backgroundColor = "#204ac8";
                twentyFivePercent.style.backgroundColor = "#dce3fd";
                fiftyPercent.style.backgroundColor = "#204ac8";
                customPercent.style.backgroundColor = "#204ac8";

                fivePercent.style.color = "hsl(0, 0%, 100%)";
                tenPercent.style.color = "hsl(0, 0%, 100%)";
                fifteenPercent.style.color = "hsl(0, 0%, 100%)";
                twentyFivePercent.style.color = "hsl(183, 100%, 15%)";
                fiftyPercent.style.color = "hsl(0, 0%, 100%)";

            })

            fiftyPercent.addEventListener("click", function () {
                let calculate = (parseFloat(bill.value) * 1.50) / numberOfPeople.value;
                total.innerHTML = calculate.toFixed(2) + " PLN";
                fivePercent.style.backgroundColor = "#204ac8";
                tenPercent.style.backgroundColor = "#204ac8";
                fifteenPercent.style.backgroundColor = "#204ac8";
                twentyFivePercent.style.backgroundColor = "#204ac8";
                fiftyPercent.style.backgroundColor = "#dce3fd";
                customPercent.style.backgroundColor = "#204ac8";

                fivePercent.style.color = "hsl(0, 0%, 100%)";
                tenPercent.style.color = "hsl(0, 0%, 100%)";
                fifteenPercent.style.color = "hsl(0, 0%, 100%)";
                twentyFivePercent.style.color = "hsl(0, 0%, 100%)";
                fiftyPercent.style.color = "hsl(183, 100%, 15%)";

            })

            customPercentCalc.addEventListener("click", function () {

                fivePercent.style.backgroundColor = "#204ac8";
                tenPercent.style.backgroundColor = "#204ac8";
                fifteenPercent.style.backgroundColor = "#204ac8";
                twentyFivePercent.style.backgroundColor = "#204ac8";
                fiftyPercent.style.backgroundColor = "#204ac8";
                customPercent.style.backgroundColor = "#dce3fd";

                fivePercent.style.color = "hsl(0, 0%, 100%)";
                tenPercent.style.color = "hsl(0, 0%, 100%)";
                fifteenPercent.style.color = "hsl(0, 0%, 100%)";
                twentyFivePercent.style.color = "hsl(0, 0%, 100%)";
                fiftyPercent.style.color = "hsl(0, 0%, 100%)";
                customPercent.style.color = "hsl(183, 100%, 15%)";

                customPercentCalc.addEventListener("keyup", function () {
                    let customValue = parseFloat((customPercentCalc.value * 0.01) + 1.0);
                    let calculate = (parseFloat(bill.value) * customValue) / numberOfPeople.value;
                    total.innerHTML = calculate.toFixed(2) + " PLN";
                })


            })

        })
    })


    //Obliczanie kwoty napiwku
    bill.addEventListener("keyup", function () {

        fivePercent.addEventListener("click", function () {
            let calculate = ((parseFloat(bill.value) * 1.05) - bill.value) / numberOfPeople.value;
            tipAmount.innerHTML = calculate.toFixed(2) + " PLN";
        })

        tenPercent.addEventListener("click", function () {
            let calculate = ((parseFloat(bill.value) * 1.1) - bill.value) / numberOfPeople.value;
            tipAmount.innerHTML = calculate.toFixed(2) + " PLN";
        })

        fifteenPercent.addEventListener("click", function () {
            let calculate = ((parseFloat(bill.value) * 1.15) - bill.value) / numberOfPeople.value;
            tipAmount.innerHTML = calculate.toFixed(2) + " PLN";
        })

        twentyFivePercent.addEventListener("click", function () {
            let calculate = ((parseFloat(bill.value) * 1.25) - bill.value) / numberOfPeople.value;
            tipAmount.innerHTML = calculate.toFixed(2) + " PLN";
        })

        fiftyPercent.addEventListener("click", function () {
            let calculate = ((parseFloat(bill.value) * 1.50) - bill.value) / numberOfPeople.value;
            tipAmount.innerHTML = calculate.toFixed(2) + " PLN";
        })

        customPercentCalc.addEventListener("click", function () {
            customPercentCalc.addEventListener("keyup", function () {
                let customValue = parseFloat((customPercentCalc.value * 0.01) + 1.0);
                let calculate = ((parseFloat(bill.value) * customValue) - bill.value) / numberOfPeople.value;
                tipAmount.innerHTML = calculate.toFixed(2) + " PLN";
            })

        })

    })

}