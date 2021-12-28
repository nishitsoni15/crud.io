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
    let tableData = '';
   
        tableData += `<tr><td>${i}</td>
        <td>${data[i].name}</td>
        <td><button onclick="onEdit(${i});">Edit</button>
        <button onclick="onDelete(${i});">Delete</button></td>
        </tr>`
    
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

// const val = document.getElementById('taBody');
const newArr = [1,2,3,4,5,6,7,8];
for(let i=0; i<= newArr.length; i++){
    newArr.push[`${i}`]
}
const numberOfItems = newArr.length
const numberPerPage = 5
const currentPage = 0
const numberOfPages = Math.ceil(numberOfItems/numberPerPage)

function buildPage(currPage) {
    const trimStart = (currPage-1)*numberPerPage
    const trimEnd = trimStart + numberPerPage
    console.log(newArr.slice(trimStart, trimEnd))
}

buildPage(1)

// function accomodatePage(clickedPage) {
//     if (clickedPage <= 1) { return clickedPage + 1}
//     if (clickedPage >= numberOfPages) { return clickedPage -1}
//     return clickedPage
// }

// function buildPagination(clickedPage) {
//     $('.paginator').empty()
//     const currPageNum = accomodatePage(clickedPage)
//     if (numberOfPages >= 3) {
//         for (let i=-1; i<2; i++) {
//             $('.paginator').append(`<button class="btn btn-primary" value="${currPageNum+i}">${currPageNum+i}</button>`)
//         }
//     } else {
//         for (let i=0; i<numberOfPages; i++) {
//             $('.paginator').append(`<button class="btn btn-primary" value="${i+1}">${i+1}</button>`)
//         }
//     }
// } 


// $(document).ready(function(){
//     buildPage(2)
//     buildPagination(currentPage)

//     $('.paginator').on('click', 'button', function() {
//         var clickedPage = parseInt($(this).val())
//         buildPagination(clickedPage)
//         console.log(`Page clicked on ${clickedPage}`)
//         buildPage(clickedPage)
//     });
// });