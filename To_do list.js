const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTask(taskContent) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task');
    taskSpan.textContent = taskContent;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Event listener for adding a new task
addTaskBtn.addEventListener('click', function() {
    const taskContent = taskInput.value.trim();
    if (taskContent !== '') {
        createTask(taskContent);
    } else {
        alert('Please enter a task!');
    }
});

// Event listener for pressing Enter in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const taskContent = taskInput.value.trim();
        if (taskContent !== '') {
            createTask(taskContent);
        } else {
            alert('Please enter a task!');
        }
    }
});

// Event delegation for marking a task as completed
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.classList.toggle('completed');
    }
});
