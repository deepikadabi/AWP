function ex(){
    alert("External Succeed");
}


let counter = 1;

function increment(){
    let elecount = document.querySelector("#counterid");
    counter = counter + 1;
    elecount.innerHTML = counter;
}

function decrement() {
    let counterEle = document.querySelector("#counterid");
  
    counter = counter - 1;
  
    counterEle.innerHTML = counter;
  }