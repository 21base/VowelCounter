const text = document.querySelector("textarea"),
btnCount = document.querySelector("button"),
countedVow = document.querySelector("p")

text.focus()

btnCount.onclick = () => {
    if (text.value != '') {
        let words = text.value.split('')
        let numOfVowels = 0
        words.filter(vowels => {
            if (vowels.toLowerCase() == 'a') {
                numOfVowels = numOfVowels + vowels.length
            } else {
                if (vowels.toLowerCase() == 'e') {
                    numOfVowels = numOfVowels + vowels.length
                } else {
                    if (vowels.toLowerCase() == 'i') {
                        numOfVowels = numOfVowels + vowels.length
                    } else {
                        if (vowels.toLowerCase() == 'o') {
                            numOfVowels = numOfVowels + vowels.length
                        } else {
                            if (vowels.toLowerCase() == 'u') {
                                numOfVowels = numOfVowels + vowels.length
                            }
                        }
                    }
                }
            }
        })
        if (numOfVowels != 0) {
            countedVow.innerHTML = `Vowels counted is ${numOfVowels}` 
        } else {
            countedVow.innerHTML = "No vowels"
        }
        
    }
}

// Copyright 2022 21base 



