// THESE ARE VARIABLES WHICH OUTLINE THE VARIOUS KINDS OF DATA TYPES:
// number
let number = 2;
// string
let string = 'this is an example of a string';
// null - absence of value;
let nonValue = null;
// boolean - true/false
let boolean = true;
// array
let array = ['blah', 3, true, null, {name: 'marco'}]
// object
let object = {
    name: 'jeff',
    age: 18,
    gender: 'platypus',
    occupation: 'hitman',
    weapons: ['ar15', 'mac10', '9mm']
}

// THIS IS A FOR LOOP
for(index in object.weapons) {
    // THIS IS A CONSOLE LOG *devtools*
    console.log('jeffs weapon: ', object.weapons[index])

    // THIS IS AN IF STATEMENT
    if(object.weapons[index] === 'mac10') {
        console.log('shots fired')
    }
}

// THIS IS A FUNCTION
function togglePhoto () {
    let togglePhotoBtn = document.querySelector('#PhotoToggler');
    let garyImg = document.querySelector('#Gary');
    let albertImg = document.querySelector('#Albert');
    
    // THIS IS AN IF-ELSE STATEMENT
    if(garyImg.classList.contains('display-none')) {
        // 1. hide image of albert
        albertImg.classList.add('display-none');
        // 2. show image of gary
        garyImg.classList.remove('display-none');
        // 3. change text of toggle photo button 
        togglePhotoBtn.innerText = "Show me Albert!";
    } else { // do the OPPOSITE!
        garyImg.classList.add('display-none');
        albertImg.classList.remove('display-none');
        togglePhotoBtn.innerText = "Show me Gary!";
    }   
}
function openDialog ()  {
    alert(
        "oh no you clicked the red button!!"
    )
}
// THIS IS A CONSOLE LOGGER
console.log('output: ', document.getElementById('Button'))

// // THIS IS A DEBUGGER TOOL *devtools*
// debugger