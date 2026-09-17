let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let li = document.createElement("li");
    let del = document.createElement("button");
    if(input.value.trim()==="")return;
    del.innerText="delete";
    del.classList.add("delete");
    li.innerText=input.value;
    ul.appendChild(li);
    li.appendChild(del);
    input.value="";
});

ul.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})