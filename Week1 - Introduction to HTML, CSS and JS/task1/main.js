function btnAddItemOnAction() {
    const body = document.body;
    const input = body.querySelector('input');

    if(input.value.trim() === '') {
        return;
    }
    
    const ul = body.querySelector('ul');

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(input.value + ' '));

    const button = document.createElement('button');
    button.className = 'delBtn';
    button.innerText = 'Delete';
    button.onclick = (ev) => ev.target.closest('li').remove()

    li.appendChild(button);
    ul.appendChild(li);

    input.value = '';
}
