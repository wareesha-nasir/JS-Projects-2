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
    function authenticate(verify){
        let b=[];
        for(i=0;i<verify;i++){
            b.push(i);}
            return true;
        }
        const grantaccess=(n)=>
       console.log("access granted to "+ n) 

        
    function personlogin(fn,person){
        if(person.level==="admin"){
            fn(500000)
        }else if(person.level==="user"){
            fn(100000)
        }
        return grantaccess(person.name)
    }
    personlogin(authenticate,{level:"admin",name:"adam"})
    personlogin(authenticate,{level:"user",name:"tim"})