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
var edtbtn=document.createElement("button");
var ed=document.createTextNode("edit");
edtbtn.setAttribute("onclick","editItem(this)")
edtbtn.appendChild(ed);
    li.appendChild(delbtn);
    li.appendChild(edtbtn);
    l.appendChild(li);
    todo.value="";
}
function deleteItem(e){
e.parentNode.remove()="";
}
function deletetodo(){
    l.innerHTML="";
}
function editItem(g){
    var i=prompt("enter new value",g.parentNode.firstChild.nodeValue)
    g.parentNode.firstChild.nodeValue=i;
}