function diffChecker() {
    const originalText = document.getElementById('original-text');
    const comparedText = document.getElementById('compared-text');
    const submitBtn = document.getElementById('submit-btn');



    function compareTexts(event) {
        let textOne = originalText.textContent;
        let textTwo = comparedText.textContent;
        let loopLength = textTwo.length;
        let textMemory ='';

        if (textOne.length > textTwo.length) {
            loopLength = textOne.length;
        }

        for (let i = 0; i < loopLength; i++) {
            let charOne = textOne[i];
            let charTwo = textTwo[i];
            let charOneNext = textOne[i+1];
            let charTwoNext = textTwo[i+1];
            let charOnePrev = textOne[i-1];
            let charTwoPrev = textTwo[i-1];
           
            if (charOne === charTwo) {
                textMemory += charTwo;
            } else {
                if ((charOnePrev && charTwoPrev) && (charOnePrev === charTwoPrev)) {
                    textMemory += '<span class="diff">';                     
                }
                textMemory += charTwo;              
                if ((charOneNext && charTwoNext) && (charOneNext === charTwoNext)) {
                    textMemory += '</span>'
                }
            }
        }
        comparedText.value = textMemory;
        comparedText.innerHTML = textMemory;
    }
}

diffChecker();
