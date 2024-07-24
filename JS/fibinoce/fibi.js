var n=10;

let f1=0;
let f2=1;
var arr=[0,1];
for (let i = 0; i <n-2; i++) {
    let result=f1+f2;
    f1=f2;
    f2=result;
    arr.push(result);
    
}
console.log(arr);
