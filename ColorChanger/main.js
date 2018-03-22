//Variables//
//This grabs the id of the first modal and sets it equal to modal
var modal = document.getElementById("modal");
//This grabs the button with the id "change"
//This allows us to call a function with a click later
        var changeBtn = document.getElementById("change");
//This grabs the preview
        var preview = document.getElementById("preview");

//Functions//

//Function to set Preview Boxes//

//This sets the Preview Box color in the modal to the currently selected color
function Preview() {
    //This gets the currently selected color's value and sets it equal to color
    color = document.querySelector('input[name="colors"]:checked').value;
    //Log what color
    console.log("The color is " + color);
    //Change preview color
    preview.style.background = color;
}

//Function to change Color//

//Change the color
function changeColor() {
    //Log what the color was changed to 
    console.log("The color is: " + color);
    //Change the background color
    document.body.style.background = color;
}

//Function to open modal//

//Open color changeing modal
changeBtn.onclick = function() {
    modal.style.display = "grid";
}


function Close () {
    modal.style.display = "none";
    
    preview.style.background = "#1a1a1a";
    
    document.querySelector('input[name="colors"]:checked').checked = false;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.background = "#1a1a1a";
        
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
}