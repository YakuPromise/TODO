const inputbox = document.getElementById("box");
const listcontainer= document.getElementById("list");
function addtask(){
    if(inputbox.value ===''){
        alert("Dont fool me, Add the damn task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    savedata();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();