//console.log('page loaded');

console.log(document);
/*
document.getElementById('save').onclick = function () {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	//paragraphs[1].innerHTML = 'Hello World!';
	paragraphs[1].innerHTML = document.querySelector('#userForm input[type="password"]');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
    
};
*/


//Update password on keypress
document.querySelector('#userForm input[type="password"]').onkeypress = function() {
	console.log('updating Password');
	var paragraphs = document.querySelectorAll('#summary p');
        paragraphs[1].innerHTML = document.querySelectorAll('#userForm input[type="password"]').value;
};
// end of update password

//Print Name field (Header) on keypress
document.querySelector('#userForm input[type="text"]').onkeypress = function() {
	console.log('updating Name');
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
};
// end of update Name

//Print Email field on keypress
document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};
//end of update name

/*
function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}
*/
