var todo=document.getElementById("todo");
var l=document.getElementById("list");

function addtodo(){
    //console.log(todo.value);
    //console.log(li);
    var a=todo.value;
     var li=document.createElement("li"); //create hmtl tag with create element
    var text=document.createTextNode(a);  //add text in tag using textnode
    li.appendChild(text);  //append child method add child in parent add text to li tag in js add value to tag 

    var delbtn=document.createElement("button")
    var dt=document.createTextNode("delete");
    delbtn.setAttribute("onclick","deleteItem(this)") // to get complete element use "this" this pass whole button 
    //with all attributes.
     
    delbtn.appendChild(dt);

    li.appendChild(delbtn);
    l.appendChild(li);
    todo.value="";
}
function deleteItem(e){
e.parentNode.remove()="";
}