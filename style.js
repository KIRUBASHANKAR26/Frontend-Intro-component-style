const form =document.getElementById('form');
const firstName =document.getElementById('first-name');
const lastName =document.getElementById('last-name');
const emailAddress =document.getElementById('email-address');
const password =document.getElementById('password');


// submit a form 
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the form reloading.
	checkInputs(); // check the input vaild or not.
    
});


function checkInputs() {
    // get value from input
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = emailAddress.value.trim();
    const passwordValue = password.value.trim();

    //It's check the input vaild or not.

    if (firstnameValue === '') {
        setErrorFor(firstName,'Firstname cannot be empty');
    }
    else{
        setSuccessFor(firstName);
    }
    if (lastnameValue === '') {
        setErrorFor(lastName,'Lastname cannot be empty');
    }
    else{
        setSuccessFor(lastName);
    }
    if(emailValue === '') {
		setErrorFor(emailAddress, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(emailAddress, 'Not a valid email');
	} else {
		setSuccessFor(emailAddress);
	}
    if (passwordValue === '') {
        setErrorFor(password,'Password cannot be empty');
    }
    else{
        setSuccessFor(password);
    }
}

//add and remove the class.

function setErrorFor(input,message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
}

//mail validation

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
