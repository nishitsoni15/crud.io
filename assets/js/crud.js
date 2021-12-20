const data = [];  //database

function add() {
    let name = document.getElementById('input-1').value

    if (name == "" || name == null) {
        document.getElementById('div-1').innerHTML = 'please enter name';
    } else {
        document.getElementById('div-1').innerHTML = '';
        let user = {
            name: name,     
        }
        data.push(user);
        let tableData = '';
        for (let i = 0; i < data.length; i++) {
            tableData += `<tr><td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td><button onclick="onEdit(${i});">Edit</button>
            <button onclick="onDelete(${i});">Delete</button></td>
            </tr>`
        }
        document.getElementById('taBody').innerHTML = tableData
    }
    document.getElementById('input-1').value = ""
}

function onEdit(index) {
    document.getElementById('input-1').value = data[index].name
    data.splice(index,1)
    let editData = '';
    for (let i = 0; i < data.length; i++) {
        editData += `<tr><td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td><button onclick="onEdit(${i});">Edit</button>
        <button onclick="onDelete(${i});">Delete</button></td>
        </tr>`
    }
    document.getElementById('taBody').innerHTML = tableData
    
}

function onDelete(index) {
    data.splice(index,1)
    let tableData = '';
    for (let i = 0; i < data.length; i++) {
        tableData += `<tr><td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td><button onclick="onEdit(${i});">Edit</button>
        <button onclick="onDelete(${i});">Delete</button></td>
        </tr>`
    }
    document.getElementById('taBody').innerHTML = tableData
}