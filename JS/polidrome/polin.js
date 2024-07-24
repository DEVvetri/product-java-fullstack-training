var word="madam";
var arr=[];
var ispoli=false;
for (let i = 0; i < word.length; i++) {
   let first=word.charAt(i);
   let last=word.charAt((word.length-1)-i);
    if (first===last) {
        ispoli=true;
    } else {
        ispoli=false;
        break;
    }
}   

if (ispoli) {
    console.log("yes");
} else {
    
    console.log("no");
}