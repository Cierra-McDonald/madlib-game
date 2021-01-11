// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const firstVerb = document.getElementById("verb1");
    console.log(firstVerb)
const secondVerb = document.getElementById("verb2");
    console.log(secondVerb);
const thirdVerb = document.getElementById("verb3");
    console.log(thirdVerb);
const fourthVerb = document.getElementById("verb4");
    console.log(fourthVerb);

const firstNoun = document.getElementById("noun1");
    console.log(firstNoun);

const ourButton = document.getElementById("theButton");
    console.log(ourButton);

const userInput_verb1 = document.getElementById("userVerb1");
    console.log(userInput_verb1);



    ourButton.addEventListener('click' , () => {
        ourButton.textContent ="hellooo"
        firstVerb.textContent = (userInput_verb1.value)

    })