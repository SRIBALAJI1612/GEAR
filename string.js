let str1=["hello"];
let str2=["hello"];



for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
       
        if(str1[i]!==str2[j]){
         console.log("not match")
        }
        else{
         console.log("match")
        }
    }
}

