'use strict'



let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];


function add() {

    if (inp.value == "") {
        alert('Spaces cannot be added!')
    }
    else {
        todo.push(inp.value);
        inp.value = '';
        let data = '';

        for (let item of todo) {
    
            data += `<li class="list-group-item"> ${item} </li>`
            
        }
    
    
        list.innerHTML = data;
    }



   



}

btn.addEventListener('click', add);


