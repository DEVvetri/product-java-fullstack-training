var word = document.getElementById("feild");
var result = document.getElementById("result");
const li = document.createElement("li");
var arr=new Array();

function checking() {
  var ispoli = false;
  for (let i = 0; i < word.value.length; i++) {
    let first = word.value.charAt(i);
    let last = word.value.charAt(word.value.length - 1 - i);
    if (first === last) {
      ispoli = true;
    } else {
      ispoli = false;
      break;
    }
  }
  if (ispoli) {
    li.textContent = word.value + " yes polindrom";
    result.appendChild(li);
  } else {
    const li = document.createElement("li");
    li.textContent = word.value + " no polindrom";
    result.appendChild(li);
    console.log("no");
  }
}
function clear() {
  let iltag = document.querySelector("ol");
  let node = iltag.lastElementChild();
  while (node) {
    iltag.removeChild(node);
    console.log(node)
    node = iltag.lastElementChild();
    
  }
  var arr=[]
  arr.map()
  
  
}