/*let s1="civic"
let splitname=s1.split('')
let reversename=splitname.reverse()
let join=reversename.join('')
if(s1==join)
{
    console.log("palindrome")
}
else
{
    console.log("not a palindrome")
}*/

let str="madam"
let splitName=str.split('')
let txt=""
for(let i=str.length-1;i>=0;i--){
    txt= txt + str[i];
}
if(txt==str){
    console.log("palindrome")
}
else
{
    console.log("not a palindrome")
}