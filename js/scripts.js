// "listens" for when the window is scrolled on. When a scroll happens, "scrollFunction" is executed
$(window).scroll(scrollFunction);

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if ( $(window).scrollTop() > 20 ) {
    $("#go-top-button").show();
  } else {
    $("#go-top-button").hide();
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $(window).scrollTop(0);
}

var form = document.querySelector('form');

form.onsubmit = function(e) {
  e.preventDefault();

alert("Successfully Subscribed!");
return true;
}


// JS for Contact Us page 
function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "15px";

  }

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter valid email address";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
