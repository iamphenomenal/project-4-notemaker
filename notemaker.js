let input=document.querySelector(".notes-container");
let btn=document.querySelector(".btnc");

btn.addEventListener("click",()=>{
let inputbox=document.createElement("p");
let img=document.createElement("img");
img.src="delete.png"
inputbox.className="input-box";

inputbox.setAttribute("contenteditable","true");

input.appendChild(inputbox).appendChild(img);


});


input.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
    }
})