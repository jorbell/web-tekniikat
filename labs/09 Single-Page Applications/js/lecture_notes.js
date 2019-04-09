var notes = [];

/*
 * displays the 'add' screen if this has been bookmarked by user
 */

//Function that triggers updateView() function after hash changed
window.onhashchange = function(){
    console.log("hash changed");
    updateView();

}

if (window.location.hash == '#add' || notes.length === 0) {
        document.getElementById('addPage').style.display = 'block';
} else {
        document.getElementById('addPage').style.display = 'none';
}
if (window.location.hash == '#edit') {
        document.getElementById('editPage').style.display = 'block';
} else {
        document.getElementById('editPage').style.display = 'none';
}

//Update view function
function updateView() {
    if (window.location.hash == ''){
        console.log("asdf");
        return;
    }
    if (window.location.hash == '#add') {
            document.getElementById('addPage').style.display = 'block';
    } else {
            document.getElementById('addPage').style.display = 'none';
    }
    if (window.location.hash == '#edit') {
            document.getElementById('editPage').style.display = 'block';
    } else {
            document.getElementById('editPage').style.display = 'none';
    }
}

document.querySelector('#addPage button').onclick = function() {
    console.log('add note');
    //Getting the values of input and textarea
    var title = document.querySelector('#addPage input').value;
    var note = document.querySelector('#addPage textarea').value;
    //Pushing the values to list
    notes.push({title: title, note: note});

    console.log(notes[notes.length - 1]);


    //Reseting the values to empty;
    document.querySelector('#addPage input').value = "";
    document.querySelector('#addPage textarea').value = "";
    loadList();
        
};

/*
 * handles navigation between the add and edit 'screens'
 */ 
document.querySelector('nav > ul > li:nth-child(1)').onclick = function() {
	console.log('first link clicked');
};

document.querySelector('nav > ul > li:nth-child(2)').onclick = function() {
	console.log('second link clicked');
};

document.querySelector('#editPage input').onchange = function() {
    updateNote();
    loadList();
}
document.querySelector('#editPage textarea').onchange = function(){
    updateNote();
    loadList();
}

function updateNote() {
	console.log('update note');
	var title = document.querySelector('#editPage input').value;
	var note = document.querySelector('#editPage textarea').value;
	var id = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log(id);
	var updated = {title: title, note: note};
	console.log(updated);
	notes[id] = {title: title, note: note};
}

function display(element) {
	console.log('display');
	console.log(element.parentNode.parentNode.id);
	var details = document.getElementById('details');
	var id = element.parentNode.parentNode.id;
	document.querySelector('#editPage input').value = notes[id].title;
	document.querySelector('#editPage textarea').value = notes[id].note;
	document.querySelector('#editPage p').innerHTML = id;
}

function rem(element) {
	console.log('remove');
	var id = element.parentNode.parentNode.id;
	console.log(id);
	notes.splice(id, 1);
	loadList();
	var editId = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log('id: '+id);
	console.log('editId: '+editId);
	if (id == editId) {
		console.log('deleted document being edited!');
		document.querySelector('#editPage input').value = '';
		document.querySelector('#editPage textarea').value = '';
	}
}

function loadList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i=0; i<notes.length; i++) {
		var row = document.createElement('tr');
		row.id = i;
		row.innerHTML = '<td><a onclick="display(this)" href="#">'+notes[i].title+'</a></td><td><a onclick="rem(this)" class="delete" href="#">delete</a></td>';
		table.appendChild(row);
	}
}
