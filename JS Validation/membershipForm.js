// JavaScript Document
function setBackground(x){
	document.getElementById(x).style.backgroundColor ="lightgreen";
}
function isBlank(inputField){
    if (inputField.value=="") {
        return true;
    }
    return false;
}


//for checking phone number
function onlyNumberKey(evt) {
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 45 || ASCIICode > 57))
            return false;
        return true;
    }




window.addEventListener("load", function() {  
var form = document.getElementById('form');
	
	
var btn = document.getElementById("submitBtn");


	
	//do on submit
	form.addEventListener("submit", function(e) {
		
		
	//capitolize fName
	var str = document.getElementById('fName').value;
	if(str.charAt(0)!=str.charAt(0).toUpperCase){
	var str2 = str.charAt(0).toUpperCase() + str.slice(1);
	document.getElementById('fName').value = str2;
	}
	//capitolize lName
	var str3 = document.getElementById('lName').value;
	if(str3.charAt(0)!=str3.charAt(0).toUpperCase){
	var str4 = str3.charAt(0).toUpperCase() + str3.slice(1);
	document.getElementById('lName').value = str4;
	}
		
	//no empty field	
	var Inputs = document.querySelectorAll(".input");
    for (var i=0; i < Inputs.length; i++){
        if( isBlank(Inputs[i]) ){
            e.preventDefault();
			Inputs[i].classList.add("error");
        }
	}
		//check pass
	function checkPassword() {
    var password = document.getElementById('pass').value;
    var pass = document.getElementById('pass');

    if (password.length < 6) {
		e.preventDefault();
		pass.classList.add("error");
		alert("need longer password");
		}
	else if(password.length > 9){
		e.preventDefault();
		pass.classList.add("error");
		alert("need shorter password");
	}
	else if (password.search(/\d/) == -1) {
		e.preventDefault();
		pass.classList.add("error");
        alert("password needs numbers");
    } 
	else if (password.search(/[a-zA-Z]/) == -1) {
		e.preventDefault();
		pass.classList.add("error");
        alert("password needs letters");
}
}
		checkPassword();
//check email
	function checkEmail() {
	var email = document.getElementById('email');
	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if (!filter.test(email.value)) {
		e.preventDefault();
		email.classList.add("error");
		alert('Please provide a valid email address');
	}
}
		checkEmail();

			
		
	//change button to submitted
	btn.addEventListener("click", ()=>{
        btn.innerText= "Submitted";
});
		

		
});
	

	

	
	
//clear color on focus out
form.addEventListener('focusout', function(e){
  e.target.style.background = '';
});
	
});