window.addEventListener('load', () => {
    let input = document.getElementById('new-task-input');
    let form = document.getElementById('new-task-form');
    let taskList = document.getElementById('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let input_value = input.value;
        if (!input_value) {
            window.alert("Please fill out the task");
            return;
        }
        console.log(input_value);
        let element = document.createElement('div');
        element.classList.add('task');
        // console.log(element);

        let elInput = document.createElement('input');
        elInput.className = 'text';
        elInput.type = 'text';
        // elInput.innerText='My shiny Task';
        elInput.setAttribute('value', `${input_value}`);
        elInput.readOnly = true;


        let elContent = document.createElement('div');
        elContent.className = 'content';

        elContent.appendChild(elInput);
        element.appendChild(elContent);

        let actions = document.createElement('div');
        actions.className = 'actions';

        let editBut = document.createElement('button');
        editBut.className = 'edit';
        editBut.innerHTML = "Edit";
        let delBut = document.createElement('button');
        delBut.className = 'delete';
        delBut.innerHTML = "Delete";

        actions.appendChild(editBut);
        actions.appendChild(delBut);
        element.appendChild(actions);

        // let abc=document.getElementById('tasks');
        taskList.appendChild(element);




        input.value = "";
        editBut.addEventListener('click', () => {

            if (editBut.innerText.toLocaleLowerCase() == "edit") {
                elInput.readOnly = false;
                elInput.focus();
                editBut.innerText = "Save";
            }
            else{
                elInput.readOnly = true;
                editBut.innerText = "Edit";

            }
        })
        delBut.addEventListener('click', () => {
            taskList.removeChild(element);

        })

    })
})

console.log('this is javscript');


