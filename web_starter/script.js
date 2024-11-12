// This waits until the page is loaded to run code
window.onload = function () {

    // This is a comment in JavaScript

    // This prints a message in the JavaScript console
    console.log("Put javascript here")

    // This looks for a checkbox with the id flexCheckDefault
    const myCheckbox = document.querySelector('#flexCheckDefault')

    myCheckbox.addEventListener('change', event => {
        console.log('Checkbox was changed!')

        // Find an element with the id mushroom message
        // set its text!
        // We could have also used document.querySelector('#mushroom-message')
        let mushroomText = document.getElementById('mushroom-message');

        if (myCheckbox.checked) {
            mushroomText.innerHTML = 'I agree!'
        } else {
            mushroomText.innerHTML = 'No way! Mushrooms rule!'
        }

    })
}
