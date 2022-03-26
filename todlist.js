
var input=document.querySelector('.todo_in');
var MainTodoContainer = document.getElementById('tdlist');
var addingButton= document.querySelector('.add-item');
var deleteAllBtn=document.querySelector('.deleteBtn');
var completedButton = document.querySelector('.completed');
var removeButton = document.querySelector('.trash');



addingButton.addEventListener('click',function(e){
    e.preventDefault();
    if(input.value.trim()){
        var ulTag=document.createElement('ul');
        ulTag.classList.add('tdo-lst-container');
        var tdoLst=document.createElement('div');
        tdoLst.classList.add('tdo-lst');
        var liTag=document.createElement('li');
        liTag.innerText=input.value;
        liTag.classList.add('tdo-item');
        var buttonDiv=document.createElement('div');
        buttonDiv.classList.add('button');
        var completeButton=document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML='<i class="fas fa-check"> </i>';

        var editBtn=document.createElement('button');
        editBtn.innerHTML='<i class="fas fa-edit"> </i>';
        editBtn.classList.add('editBtn');
        editBtn.onclick = function(){
            editWorking(liTag);
        }
        var trashBtn=document.createElement('button');
        trashBtn.classList.add('trash');
        trashBtn.innerHTML='<i class="fas fa-trash"> </i>';
        
        ulTag.appendChild(tdoLst);
        tdoLst.appendChild(liTag);
        tdoLst.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashBtn);
        MainTodoContainer.appendChild(ulTag);
    
        
        input.value='';tdoLst.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    }else if(input.value === ''){
        alert('please fill the input field')
    }
    
});
function editWorking(e){
    var editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.tdo-lst-container');
    for(var i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}
    


