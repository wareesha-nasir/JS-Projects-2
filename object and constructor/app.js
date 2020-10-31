//CONSTRUCTOR IN JS
function Book(name, authorname,price){
    this.bname=name;
    this.author=authorname;
    this.bprice=price;

}
var book1=new Book("play","makey",2000);
console.log(book1.bname, book1.bprice);
var book2= new Book("Matilda","Roalh Dalh",5000);
console.log(book2.bname, book2.bprice)
 //object
var student={
     name:"sam",
     roll:30
 };
 console.log(student.name)