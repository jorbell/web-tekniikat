
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var headerTitle = document.createElement('h1');
document.body.appendChild(headerTitle);


//Creating table element
var table = document.createElement('table');
//Creating table head element
var thead = document.createElement('thead');
thead.innerHTML="<tr>"+
                    "<th>Name</th>"+
                    "<th>Puplished</th>"+
                    "<th>ISBN</th>"+
                "</tr>";
table.appendChild(thead);
//Table head created

//Creating table body element
var tbody = document.createElement('tbody');
for (var i = 0; i < books.length; i++) {
    var item = document.createElement('tr');
    item.setAttribute("id", i);
    item.innerHTML =    '<td>'+books[i].title+"</td>"+
                        "<td>"+books[i].year+"</td>"+
                        "<td>"+books[i].isbn+"</td>";
    //Onclick event for table row
    item.onclick = function(){
        headerTitle.innerHTML=books[this.id].title;
    }
    tbody.appendChild(item);
}
table.appendChild(tbody);
//Table body created

document.body.appendChild(table);
//Table element created



/*
var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);
}
*/
