let counterEl = document.getElementById("Counter");
let msgEl = document.getElementById("msg");
let counter = 0;

function onDecCounter(){
     counter = counter - 1;
    counterEl.textContent = counter;

    if(counter<0){
        counterEl.style.color = "red";
    }
    else if(counter===0){
        counterEl.style.color = "black";
    }
    else{
        counterEl.style.color = "green";
    }
   
    msgEl.textContent = "You Are Decrementing the value..!";
}


function onIncCounter(){
      counter = counter + 1;
     counterEl.textContent = counter;

    
    if(counter<0){
        counterEl.style.color = "red";
    }
    else if(counter===0){
        counterEl.style.color = "black";
    }
    else{
        counterEl.style.color = "green";
    }
   
    msgEl.textContent = "You Are Incrementing the value..!";
}

function resetCounter(){
    counter = 0;
    counterEl.textContent = counter;
    counterEl.style.color = "black";

     msgEl.textContent = "You Reset the value..!";
}