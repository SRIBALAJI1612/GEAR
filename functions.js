//banana arrow function
let number=[10,20,30].map((elem)=>elem*2)
console.log(number)
//another function method
let n1=[10,20,30,40]
let newNum=n1.map(function(elem,index,arr)
{
    return Math.sqrt(elem);
})
