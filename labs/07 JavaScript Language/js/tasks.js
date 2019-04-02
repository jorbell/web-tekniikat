// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';
    asdf

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    //var output = document.getElementById('output');
    
    // For the output:
    //var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        updatePage();
        
        // Update the page:
        //message = '<h2>To-Do</h2><ol>';
        //for (var i = 0, count = tasks.length; i < count; i++) {
        //      message += '<li>' + tasks[i] + '</li>';
        //}
        //message += '</ol>';
        //output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

//Function update page
function updatePage() {
    var output = document.getElementById('output');
    var message = '';
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
    
}

//Function remove dublicates
function removeDublicates() {
    var tmpArr = [];
    var tmp = undefined;
    for (var i = 0; i < tasks.length; i++) {
        tmpArr[i] = tasks[i];
    }

    var len = tasks.length;
    for (i = 0; i < len; i++) {
        tmp = tmpArr[0];
        tmpArr.splice(0, 1);

        if (!(tmpArr.indexOf(tmp) === -1)) {
            tasks.splice(tasks.indexOf(tmp), 1);
        }
    }
    updatePage();
    
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;
