/*reverse string
function reverse_word(b){
var c=b.split("")
var e=c.reverse();
var t=e.join("");
return t;
};
var d=reverse_word("wareesha");
document.write(d)
console.log(d)
//maximum number
function max(a,b){
   if(a>b){
     return a;
   }
   else{
     return b;
   }
};

var c=max(30,100);
document.write(c)

//vowel check
function vowel_check(b){
   if(b=="a"||b=="A"||b=="e"||b=="E"||b=="i"||b=="I"||b=="o"||b=="O"||b=="u"||b=="U"){
     return true;
   }
   else{
     return false;
   }
};	

var c=vowel_check("u");
document. Write(c)*/

//sum of num of array
function sum(s){
  
   var b=0;
   for(var i=0; i<s.length;i++){
     b+=s[i];
     var t=b;
   }
  
return t;
}

var total=sum([1,2,3,4]);
console.log(total);
var p=document.getElementById("pass")
var n=document.getElementById("name")
var e=document.getElementById("email");

function valid(){
  if(p.value==""){
    alert("please fill password field");
    p.focus();
    return false;
  }
  else if(e.value==""){
    alert("please fill emil field");
    e.focus();
    return false;
  }
  else if(n.value==""){
    alert("please fill name field");
    n.focus();
    return false;
  }
  else{
    alert("thanks");
  }
}
/*function sum(input){           
  if (toString.call(input) !== "[object Array]")
     return false;
       
             var total =  0;
             for(var i=0;i<input.length;i++)
               {                  
                 if(isNaN(input[i])){
                 continue;
                  }
                   total += Number(input[i]);
                }
              return total;
             }
 console.log(sum([1,2,3]));*/
 function multiply(m){
var t=1;
for(var i=0;i<m.length;i++){
  t*=m[i];
}
return t
 }
var total=multiply([10,2,2,4]);
console.log(total);
