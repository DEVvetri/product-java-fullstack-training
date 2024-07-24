var n=27;
var isprime=false;
for (let i = 2; i < n; i++) {
  if (n%2!=0) {
    isprime=true;
  }else{
    isprime=false;
    break
  }
    
}

if (isprime) {
    console.log("prime");;
} else {
    console.log("not prime");;
}