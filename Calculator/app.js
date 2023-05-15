function Calculator() {

    let buttons = document.querySelectorAll('button');
    const screen = document.getElementById('calc-screen');
    let memory = '';
    let tempMemory = '';
    let trigger = false;
    let tempTrigger = false;
    let lastOperation = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
            }

            console.log(memory, tempMemory);

            if (btn.textContent === 'C') {
                screen.textContent = '';
                memory = '';
                tempMemory = '';
            } else if (btn.classList.contains('btn-equals')) {
                result = getResult(lastOperation, tempMemory, memory, result, screen);
                screen.textContent = result;
                tempMemory = '';
                memory = result;
            } else {
                if (numbers.includes(Number(btn.textContent)) && tempTrigger) {
                    tempMemory += (btn.textContent.toString());
                } else if (numbers.includes(Number(btn.textContent)) && !tempTrigger) {
                    memory += (btn.textContent.toString());
                } else {
                    lastOperation.push(btn.textContent);
                }
                screen.textContent += btn.textContent;
            }
        });
    }

    console.log(memory);
    console.log(tempMemory);

    function getResult(lastOperation, tempMemory, memory, result, screen) {
        // lastOperation.pop();
        screen.textContent = '';

        // for (let i=lastOperation.length-1; i<=0; i--) {
        //     if (!numbers.includes(lastOperation[i])) {
        //         lastOperation = lastOperation[i];
        //         break;
        //     }
        // }

        // switch (lastOperation) {
        //     case '+':
        //         return 666;
        //     default:
        //         break;
        // }

        result = Number(memory) + Number(tempMemory);
        return result;
    }
}


Calculator();
