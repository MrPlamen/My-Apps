function Calculator() {

    let buttons = document.querySelectorAll('button');
    const screen = document.getElementById('calc-screen');
    let memory = '';
    let tempMemory = '';
    let trigger = false;
    let tempTrigger = false;
    let negative = false;
    let lastOperation = [];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    let result = 0;

    for (let btn of buttons) {
        btn.addEventListener("click", function () {
            if (trigger) {
                screen.textContent = '';
                trigger = false;
            }
            if (btn.classList.contains('hero')) {
                trigger = true;
                tempTrigger = true;
                lastOperation.push(btn.textContent);
            }

            console.log(memory, tempMemory);

            if (btn.textContent === 'C') {
                screen.textContent = '';
                memory = '';
                tempMemory = '';
            } else if (btn.classList.contains('btn-equals')) {
                result = getResult(lastOperation, tempMemory, memory, result, screen);
                screen.textContent = result;
                console.log(lastOperation);
                tempMemory = '';
                memory = result;
                trigger = false;
                tempTrigger = false;
            } else {
                if (numbers.includes(btn.textContent) && tempTrigger) {
                    tempMemory += (btn.textContent.toString());
                }
                if (numbers.includes(btn.textContent) && !tempTrigger) {
                    memory += (btn.textContent.toString());
                }
                screen.textContent += btn.textContent;
            }
        });
    }

    console.log(memory);
    console.log(tempMemory);

    function getResult(lastOperation, tempMemory, memory, result, screen) {
        lastOperation.pop();
        screen.textContent = '';
        numberOne = Number(memory);
        numberTwo = Number(tempMemory);

        switch (lastOperation.pop()) {
            case '+':
                result = numberOne + numberTwo;
                break;
            case '-':
                result = numberOne - numberTwo;
                break;
            case 'X':
                result = numberOne * numberTwo;
                break;
            case '÷':
                result = numberOne / numberTwo;
                break;
            default:
                break;
        }

        return result;
    }
}


Calculator();
