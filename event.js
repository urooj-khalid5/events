function Displayinfo(){
    let em=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let num=document.getElementById("number").value;
// Get form values
   let formdata="Email: "+ em +"<br>" +
   "Password: "+pass+"<br>"+
   "Number: "+num+"<br>";
    // Display the form data on the web page
document.getElementById("formdisplay").innerHTML=formdata;
}

function expanditem() {
     var expandedParagraph = "The full details are here: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquam et, doloremque velit a dolorum dolores ullam illum, consequatur, quisquam quas? Harum, numquam laboriosam fugit doloribus hic dolorem consequatur libero ullam repellendus temporibus corporis ipsa voluptas, magni ratione asperiores a! Sit nemo nobis voluptatem. Quos mollitia voluptatum delectus nostrum ut iure provident vel quae pariatur."
     document.getElementById("expand").innerHTML = expandedParagraph;
     }
