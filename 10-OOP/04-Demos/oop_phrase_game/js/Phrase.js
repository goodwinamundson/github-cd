class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */

    addPhraseToDisplay() {
        const phraseDisplayDiv = document.querySelector('#phrase ul');
        this.phrase.split('').forEach(element => {
            if (element !== ' ') {
                const li = document.createElement('li');
                li.classList.add('hide', 'letter', element);
                li.textContent = element;
                phraseDisplayDiv.appendChild(li);
            } else {
                const li = document.createElement('li');
                li.classList.add('hide', 'space');
                li.textContent = element;
                phraseDisplayDiv.appendChild(li);
            }
        });
    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    checkLetter(letter) {
        const phraseLI = document.querySelectorAll('.letter');
        let phraseString = '';
        for (let i = 0; i < phraseLI.length; i++) {
            if (phraseLI[i].textContent !== ' ') {
                phraseString += phraseLI[i].textContent;
            }

        };
        return phraseString.includes(letter);
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */

    showMatchedLetter(letter) {
        const phraseLI = document.querySelectorAll('.letter');
        if (this.checkLetter(letter) === true) {
            for (let i = 0; i < phraseLI.length; i++) {
                if (phraseLI[i].textContent === letter) {
                    phraseLI[i].classList.remove('hide');
                    phraseLI[i].classList.add('show');
                }
            }
        }
    }
}