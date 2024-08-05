document.addEventListener('DOMContentLoaded', () => {
    const originalNameValue = document.getElementById('name').textContent;
    const originalLastnameValue = document.getElementById('lastname').textContent;

    document.getElementById('update-button').addEventListener('click', () => {
        if(document.getElementById('new-name').value === '' || document.getElementById('new-lastname').value === ''){
            alert('Debes completar ambos campos');
            return;
        }
        let newName = document.getElementById('new-name').value;
        let newLastname = document.getElementById('new-lastname').value;
        document.getElementById('name').textContent = newName;
        document.getElementById('lastname').textContent = newLastname;
        document.getElementById('new-name').value = '';
        document.getElementById('new-lastname').value= '';
    });

    document.getElementById('reset-button').addEventListener('click', ()=> {
        document.getElementById('name').textContent = originalNameValue;
        document.getElementById('lastname').textContent = originalLastnameValue;    
        document.getElementById('new-name').value = '';
        document.getElementById('new-lastname').value= '';
    });
});