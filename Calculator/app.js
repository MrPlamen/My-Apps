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
                if (numbers.includes(Number(btn.textContent)) && tempTrigger) {
                    tempMemory += (btn.textContent.toString());
                } 
                if (numbers.includes(Number(btn.textContent)) && !tempTrigger) {
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

        switch (lastOperation.pop()) {
            case '+':
                result = Number(memory) + Number(tempMemory);
            case '-':
                result = Number(memory) - Number(tempMemory);
            default:
                break;
        }

        return result;
    }
}


Calculator();
