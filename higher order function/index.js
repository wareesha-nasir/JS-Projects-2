/*function as a parameter
function heloo(a){
    a()
    };
    heloo(function (){console.log('hey')})
    //function in return
    function c(){
        return function b(){console.log('helo kitty')}
    }
    c()()
    function Userlogin(user){
        let b=[];
        for(i=0;i<100000;i++){
            b.push(i);}
            return console.log("acess granted" + user)
        }
    Userlogin('adam');
    Userlogin('john');
    //HIGHER ORDER FUNCTION*/
    function authenticate(person){
        let b=[];
        for(i=0;i<500000;i++){
            b.push(i);}
            return grantaccess(person.name)
        }
        function sing(person) {
            console.log('la la la my name is ' + person.name) 
          }
        const grantaccess=(n)=>
       console.log("access granted to "+ n) 

        
    function personlogin(fn,person){
        if(person.level==="admin"){
            return fn(person)
        }else if(person.level==="user"){
            return fn(person)
        }
        
    }
    personlogin(authenticate,{level:"admin",name:"adam"})
    personlogin(authenticate,{level:"user",name:"tim"})
    personlogin(sing,{level:"user",name:"tim"})
//CALCULATOR WITH HIGER ORDER FUNCTION with different syntax

function divide(a,b){
    console.log("result is "+ a/b)
}
function multiply(a,b){
    console.log("result is=" + a*b)
}



    function calculator(num1,num2,op,fn ){
        if(op==="+"){
             //add(num1,num2)
            return function add(a,b){
                let c=a+b;
                console.log("result is "+ c)
            }
        }else if(op==="-"){
           return  function sub(a,b){
                let d=a-b
                console.log("result is "+ d)
            }
              }
              else if(op==="*"){
                  return fn(num1,num2)
                }
                else if(op==="/"){
                    return fn(num1,num2)
                  }
    }
    calculator(4,5,"+")(4,5,"+")
    calculator(7,5,"-")(7,5,"-")
    calculator(9,3,"/",divide)