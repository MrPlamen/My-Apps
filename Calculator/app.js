function Calculator() {

    let buttons = document.querySelectorAll('button');
    const screen = document.getElementById('calc-screen');
    let memory = '';
    let tempMemory = '';
    let trigger = false;
    let lastOperation = [];
    let result;

    for (let btn of buttons) {
        btn.addEventListener("click", function () {
            if (trigger) {
                screen.textContent = '';
                trigger = false;
            }

            if (btn.textContent === 'C') {
                screen.textContent = '';
                memory = '';
            } else if (btn.classList.contains('btn-equals')) {
                getResult(lastOperation, tempMemory, memory, result, screen);
                console.log(result);
                screen.textContent = result;
                tempMemory = '';
            } else {
                tempMemory = memory;
                lastOperation.push(btn.textContent);
                screen.textContent += btn.textContent;
            }
            if (btn.classList.contains('hero')) {
                trigger = true;
            }
            memory += (btn.textContent);

            console.log(result);
            console.log(lastOperation);
        });
    }

    function getResult(lastOperation, tempMemory, memory, result, screen) {
        let currentInput = screen.textContent;
        screen.textContent = '';

        switch (lastOperation.pop()) {
            case '+':
                result = 666;
                break;
            default:
                break;
        }
        return result;
    }
}


Calculator();
