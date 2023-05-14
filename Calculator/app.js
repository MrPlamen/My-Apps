function Calculator() {

    let buttons = document.querySelectorAll('button');
    const screen = document.getElementById('calc-screen');
    let memory = '';
    let tempMemory = '';
    let trigger = false;
    let lastInput = [];
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
                getResult(lastInput, tempMemory, memory, result, screen);
                console.log(result);
                screen.textContent = result;
                tempMemory = '';
            } else {
                tempMemory = memory;
                lastInput.push(btn.textContent);
                screen.textContent += btn.textContent;
            }
            if (btn.classList.contains('hero')) {
                trigger = true;
            }
            memory += (btn.textContent);

            console.log(result);
            console.log(lastInput);
        });
    }

    function getResult(lastInput, tempMemory, memory, result, screen) {
        lastInput.pop();
        const numbers = [1,2,3,4,5,6,7,8,9,0];
        let lastOperation = '';
        screen.textContent = '';

        for (let i=lastInput.length-1; i<=0; i--) {
            if (!numbers.contains(lastInput[i])) {
                lastOperation = lastInput[i];
                break;
            }
        }

        switch (lastOperation) {
            case '+':
                return 666;
            default:
                break;
        }
    }
}


Calculator();
