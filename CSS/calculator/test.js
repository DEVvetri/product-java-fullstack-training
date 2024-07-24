var word="20+23%"
var index=0;
for (let i = 0; i < word.length; i++) {
    if (word.charAt(i)==="%") {
     index=i;   
    }  
}

