let str1=["computer"]
let str2=['!','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let sum=0;
for(let i=0;i<str1.length;i++)
{
    for(let j=0;j<str2.length;j++)
    {
        console.log(str1[i]);
        if(str1[i]==str2[j])
        {
            sum=sum+j;
        }
    }
    
}