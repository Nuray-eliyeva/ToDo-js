/* <li class="todos"><p>Todo</p> <div><i class="fa fa-check-circle-o"></i> 
<i class="fa fa-trash"></i>
</div></li>*/
const addTaskBtn=document.querySelector(".add-btn")
const todoInput=document.querySelector(".todoInput")
const todoContainer=document.querySelector(".todo-container")

/*complate*/
const toogleComplate=(e)=>{
    e.currentTarget.parentElement.classList.toggle("complated")
}

/*remove*/
const removeItem=(e)=>{
    todoContainer.removeChild(e.currentTarget.parentElement)
}
const renderTodoItem=(todoText)=>{

/*todos yaratmaq*/
 const todoItemElement=document.createElement('li')
 todoItemElement.classList.add('todos')
 const textElement=document.createElement('p')
 textElement.classList.add("todo-txt")
 textElement.innerText=todoText
 todoItemElement.appendChild(textElement)
  
/*complate butonu yaratmaq*/
 const complateButn=document.createElement('button')
 complateButn.classList.add("btn")
 complateButn.innerText="Complate"
 complateButn.addEventListener("click",toogleComplate)
 todoItemElement.appendChild(complateButn)

/*delete butonu yaratmaq*/
 const deleteButn=document.createElement('button')
 deleteButn.classList.add("btn")
 deleteButn.innerText="Delete"
 deleteButn.addEventListener("click",removeItem)
 todoItemElement.appendChild(deleteButn)

 todoContainer.appendChild(todoItemElement)

 /*--inputun icini bosaltmaq*/
 todoInput.value=""
 todoInput.focus()
}

const  addTask=()=>{
/*inputun valuesini yoxlamaq*/
    if(todoInput.value===""){
        alert("input boşdur.")
    }
    else{
   renderTodoItem(todoInput.value)
    }
}
addTaskBtn.addEventListener("click",addTask)

