const heading = document.getElementById('heading');
const description = document.getElementById('description');
const submitButton = document.getElementById('submit');
const severity = document.getElementsByName('severity');// list of radio buttons
const form = document.getElementById('add-task');
const tasks = document.getElementById('tasks');

tasks.addEventListener('click', (e) => {
    if(e.target.type === 'button') {
        console.log(e.target);
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const task = document.createElement('div');
    task.classList.add('card');

    const severityArray = Array.from(severity);

    const selectedSeverity = severityArray.find(x => x.checked == true)

    task.innerHTML = `<div class="card-header ${selectedSeverity.value} text-white">
                        ${heading.value}
                        <div class="float-right">
                            <input type="button" value="complete" class="btn btn-sm btn-dark">
                        </div>
                        </div>
                        <div class="card-body">
                            <div>${description.value}</div>
                        </div>`;
    tasks.appendChild(task);
});