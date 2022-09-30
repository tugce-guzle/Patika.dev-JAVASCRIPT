let btnDOM = document.querySelector("#addlist") 
let btn2DOM = document.querySelector('#clearlist')
let listDOM = document.querySelector("#todolist")
let inputDOM = document.querySelector("#todoinput") 
let ullength = document.getElementsByTagName("li");
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}

btnDOM.addEventListener('click', function() {
    if (inputDOM.value == "")  
        { 
        $(".error").toast("show"); 
        } 
    else {
        $(".success").toast("show");
        let newliDOM = document.createElement('li'); 
        newliDOM.classList.add('list-group-item');
        listDOM.appendChild(newliDOM); 
        newliDOM.innerHTML = inputDOM.value; 
        inputDOM.value = "";
        newliDOM.onclick = check;
            
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton; 
        newliDOM.append(closeButton);
        listDOM.append(newliDOM);
        inputDOM.value = (""); 
        }
    
})  
function check(){
    this.classList.toggle("checked"); 
  }
  
function removeButton(){
    this.parentElement.remove();  
}

btn2DOM.addEventListener('click', function(){
    inputDOM.value="";
})



